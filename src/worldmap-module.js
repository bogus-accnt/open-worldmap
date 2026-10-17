// SPDX-License-Identifier: MIT
// Copyright (c) 2026 open-worldmap contributors - https://github.com/bogus-accnt/open-worldmap
// WorldMapModule — embeddable "organize data by country" widget.
//
//   import { WorldMapModule } from "./src/worldmap-module.js";
//   new WorldMapModule({ el: "#map", colorBy: "population" });
//
import { CountryStore, memoryAdapter } from "./country-store.js";
import { COUNTRIES, REGIONS, listCountries, normalizeCode } from "./countries-db.js";
import { MapRenderer } from "./map-renderer.js";
import { CountryPanel } from "./panel.js";
import {
  createColorScale,
  formatNumber,
  SEQUENTIAL_BLUES,
  SEQUENTIAL_GREENS,
  SEQUENTIAL_WARMS,
  CATEGORICAL,
} from "./scales.js";
import { injectStyles } from "./styles.js";
import { WORLD_PATHS } from "../assets/world-paths.js";

const PALETTES = {
  blues: SEQUENTIAL_BLUES,
  greens: SEQUENTIAL_GREENS,
  warm: SEQUENTIAL_WARMS,
  categorical: CATEGORICAL,
};

const MAP_CODES = new Set(WORLD_PATHS.map((p) => p.code));

/** `colorBy` may be a function, a property name, or null. */
function normalizeColorBy(colorBy) {
  if (typeof colorBy === "function") return colorBy;
  if (typeof colorBy === "string" && colorBy) {
    return (record) =>
      record && typeof record === "object" && !Array.isArray(record) ? record[colorBy] : undefined;
  }
  return () => null;
}

export class WorldMapModule {
  /**
   * @param {object} options
   * @param {string|HTMLElement} options.el  Container (selector or element).
   * @param {CountryStore} [options.store]   Data store (default: in-memory).
   * @param {string|Function} [options.colorBy]  Property name or `(record, code) => value`.
   * @param {string|string[]} [options.colors]   Palette name or array of hex colors.
   * @param {"auto"|"quantile"|"linear"|"categorical"} [options.scaleMode]
   * @param {string} [options.title]         Toolbar title (default "World Data").
   * @param {string} [options.valueLabel]    Legend label for the colorBy value.
   * @param {boolean} [options.legend]       Show the legend (default true).
   * @param {boolean} [options.panel]        Show the record editor panel (default true).
   * @param {boolean} [options.search]       Show the country search box (default true).
   * @param {boolean} [options.regionFilter] Show the region filter (default true).
   * @param {boolean} [options.importExport] Show Import/Export buttons (default true).
   * @param {"light"|"dark"|null} [options.theme]
   * @param {(code: string|null) => void} [options.onSelect]
   */
  constructor(options = {}) {
    const {
      el,
      store = null,
      colorBy = null,
      colors = "blues",
      scaleMode = "auto",
      title = "World Data",
      valueLabel = "",
      legend = true,
      panel = true,
      search = true,
      regionFilter = true,
      importExport = true,
      theme = null,
      onSelect = null,
    } = options;

    this.root = resolveElement(el);
    if (!this.root) throw new Error("WorldMapModule: `el` did not resolve to an element.");

    this.options = { title, valueLabel, legend, panel, search, regionFilter, importExport, theme, scaleMode };
    this.store = store || new CountryStore({ storage: memoryAdapter() });
    this.colorBy = normalizeColorBy(colorBy);
    this.palette = Array.isArray(colors) ? colors : PALETTES[colors] || SEQUENTIAL_BLUES;
    this.scaleMode = scaleMode;
    this.onSelect = onSelect;
    this.selected = null;
    this.region = null;
    this._scale = null;
    this._values = new Map();
    this._unsub = null;

    this._build();
    this._unsub = this.store.subscribe(() => this._onStoreChange());
    this.refresh();
  }

  // --- DOM ---------------------------------------------------------------

  _build() {
    injectStyles(this.root.ownerDocument || document);

    this.root.classList.add("wm-root");
    if (this.options.theme === "dark") this.root.classList.add("wm-dark");
    else if (this.options.theme === "light") this.root.classList.remove("wm-dark");
    this.root.innerHTML = "";

    const o = this.options;
    const toolbar = document.createElement("div");
    toolbar.className = "wm-toolbar";
    toolbar.innerHTML = `
      <span class="wm-title"></span>
      <div class="wm-search">
        <input class="wm-input" type="search" placeholder="Search country…" aria-label="Search country" />
        <div class="wm-search-results"></div>
      </div>
      <select class="wm-select wm-region" aria-label="Filter by region"></select>
      <span class="wm-spacer"></span>
      <span class="wm-count"></span>
      <button class="wm-btn" data-action="export">Export</button>
      <button class="wm-btn" data-action="import">Import</button>
      <input class="wm-file" type="file" accept="application/json,.json" hidden />
    `;
    this.root.appendChild(toolbar);

    const body = document.createElement("div");
    body.className = "wm-body";
    this.root.appendChild(body);

    this.legendEl = document.createElement("div");
    this.legendEl.className = "wm-legend";
    this.root.appendChild(this.legendEl);

    // Toolbar bits
    this.titleEl = toolbar.querySelector(".wm-title");
    this.countEl = toolbar.querySelector(".wm-count");
    this.searchBox = toolbar.querySelector(".wm-search");
    this.searchInput = toolbar.querySelector(".wm-input");
    this.searchResults = toolbar.querySelector(".wm-search-results");
    this.regionSelect = toolbar.querySelector(".wm-region");
    this.fileInput = toolbar.querySelector(".wm-file");

    this.titleEl.textContent = o.title || "";
    this.titleEl.style.display = o.title ? "" : "none";

    if (!o.search) this.searchBox.style.display = "none";
    if (!o.regionFilter) this.regionSelect.style.display = "none";
    if (!o.importExport) {
      toolbar.querySelector('[data-action="export"]').style.display = "none";
      toolbar.querySelector('[data-action="import"]').style.display = "none";
    }
    if (!o.legend) this.legendEl.style.display = "none";

    // Region options
    this.regionSelect.innerHTML =
      `<option value="">All regions</option>` +
      REGIONS.map((r) => `<option value="${r}">${r}</option>`).join("");

    // Map
    this.mapWrap = document.createElement("div");
    this.mapWrap.className = "wm-map-wrap";
    this.tooltip = document.createElement("div");
    this.tooltip.className = "wm-tooltip";
    this.mapWrap.appendChild(this.tooltip);
    body.appendChild(this.mapWrap);

    this.renderer = new MapRenderer({
      onCountryClick: (code) => (code ? this.select(code) : this.clearSelection()),
      onCountryHover: (code, evt) => this._onHover(code, evt),
    });
    this.renderer.mount(this.mapWrap);

    // Panel
    this.panel = null;
    if (o.panel) {
      this.panel = new CountryPanel({
        store: this.store,
        onClose: () => this.clearSelection(),
      });
      this.panel.mount(body);
    }

    this._wireToolbar();
  }

  _wireToolbar() {
    const o = this.options;

    if (o.search) {
      this.searchInput.addEventListener("input", () => this._renderSearchResults());
      this.searchInput.addEventListener("focus", () => this._renderSearchResults());
      this.searchInput.addEventListener("keydown", (evt) => {
        const items = [...this.searchResults.querySelectorAll(".wm-search-item")];
        const idx = items.findIndex((el) => el.classList.contains("wm-active"));
        if (evt.key === "ArrowDown") {
          evt.preventDefault();
          this._activate(items, Math.min(items.length - 1, idx + 1));
        } else if (evt.key === "ArrowUp") {
          evt.preventDefault();
          this._activate(items, Math.max(0, idx - 1));
        } else if (evt.key === "Enter") {
          const target = items[idx >= 0 ? idx : 0];
          if (target) target.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        } else if (evt.key === "Escape") {
          this._closeSearch();
          this.searchInput.blur();
        }
      });
      this.searchInput.addEventListener("blur", () => setTimeout(() => this._closeSearch(), 150));
    }

    if (o.regionFilter) {
      this.regionSelect.addEventListener("change", () => {
        this.region = this.regionSelect.value || null;
        this._applyRegionDim();
        this._renderSearchResults();
      });
    }

    if (o.importExport) {
      this.root.querySelector('[data-action="export"]').addEventListener("click", () => this.exportToFile());
      this.root.querySelector('[data-action="import"]').addEventListener("click", () => this.fileInput.click());
      this.fileInput.addEventListener("change", async () => {
        const file = this.fileInput.files && this.fileInput.files[0];
        this.fileInput.value = "";
        if (!file) return;
        try {
          const json = JSON.parse(await file.text());
          this.importJSON(json);
        } catch (err) {
          console.error("[worldmap-module] Import failed:", err);
          alert(`Could not import “${file.name}”: ${err.message}`);
        }
      });
    }
  }

  _activate(items, index) {
    items.forEach((el, i) => el.classList.toggle("wm-active", i === index));
    if (items[index]) items[index].scrollIntoView({ block: "nearest" });
  }

  _renderSearchResults() {
    const text = this.searchInput.value.trim();
    const matches = listCountries({ text, region: this.region })
      .filter((c) => MAP_CODES.has(c.alpha2))
      .slice(0, 12);

    this.searchResults.innerHTML = matches
      .map(
        (c) =>
          `<div class="wm-search-item" data-code="${c.alpha2}"><span>${escapeHtml(c.name)}</span><span class="wm-code">${c.alpha2}</span></div>`
      )
      .join("");

    for (const item of this.searchResults.querySelectorAll(".wm-search-item")) {
      item.addEventListener("mousedown", (evt) => evt.preventDefault()); // keep input focus
      item.addEventListener("click", () => {
        this.select(item.dataset.code, { focus: true });
        this.searchInput.value = "";
        this._closeSearch();
      });
    }

    const open = matches.length > 0 && (document.activeElement === this.searchInput || text !== "");
    this.searchResults.classList.toggle("wm-open", open);
  }

  _closeSearch() {
    this.searchResults.classList.remove("wm-open");
  }

  // --- Hover / tooltip ---------------------------------------------------

  _onHover(code, evt) {
    if (!code || !this.renderer || !this.renderer.svg) {
      this._hideTooltip();
      return;
    }
    const meta = COUNTRIES[code];
    const record = this.store.get(code);
    const value = this.colorBy(record, code);

    let html = `<b>${escapeHtml(meta ? meta.name : code)}</b> <span class="wm-code">${code}</span>`;
    if (value != null && typeof value !== "object") {
      html += `<div class="wm-tooltip-value">${escapeHtml(formatValue(value))}</div>`;
    } else if (record !== undefined) {
      html += `<div class="wm-tooltip-value">${escapeHtml(previewValue(record))}</div>`;
    }
    this.tooltip.innerHTML = html;

    const rect = this.mapWrap.getBoundingClientRect();
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;
    this.tooltip.style.left = `${Math.round(x)}px`;
    this.tooltip.style.top = `${Math.round(y)}px`;
    this.tooltip.classList.add("wm-visible");
  }

  _hideTooltip() {
    if (this.tooltip) this.tooltip.classList.remove("wm-visible");
  }

  // --- State -------------------------------------------------------------

  _onStoreChange() {
    this.refresh();
    if (!this.selected) this.panel && this.panel.showEmpty();
  }

  _applyRegionDim() {
    if (!this.region) {
      this.renderer.setDimmed(null);
      return;
    }
    const codes = Object.values(COUNTRIES)
      .filter((c) => c.region === this.region && MAP_CODES.has(c.alpha2))
      .map((c) => c.alpha2);
    this.renderer.setDimmed(codes);
  }

  /** Recompute colors, legend and counters from the store. */
  refresh() {
    const values = [];
    this._values = new Map();
    for (const code of MAP_CODES) {
      const record = this.store.get(code);
      const value = record === undefined ? null : this.colorBy(record, code);
      this._values.set(code, value);
      if (value != null) values.push(value);
    }

    this._scale = createColorScale({
      values,
      mode: this.scaleMode === "auto" ? undefined : this.scaleMode,
      colors: this.palette,
    });

    this.renderer.setColors((code) => {
      const v = this._values.get(code);
      return v == null ? null : this._scale.color(v);
    });

    this._renderLegend();
    this.countEl.textContent = this.store.size === 1 ? "1 record" : `${this.store.size} records`;
    this._applyRegionDim();
    return this;
  }

  _renderLegend() {
    if (!this.options.legend) return;
    const legend = this._scale ? this._scale.legend : { type: "empty" };
    const label = this.options.valueLabel;
    const parts = [];

    if (label) parts.push(`<span class="wm-legend-title">${escapeHtml(label)}</span>`);

    if (legend.type === "gradient") {
      const bar = `linear-gradient(90deg, ${legend.stops.join(", ")})`;
      parts.push(
        `<span class="wm-legend-gradient">${escapeHtml(formatNumber(legend.min))}<span class="wm-legend-bar" style="background:${bar}"></span>${escapeHtml(formatNumber(legend.max))}</span>`
      );
    } else if (legend.type === "buckets") {
      parts.push(
        legend.items
          .map(
            (item) =>
              `<span class="wm-legend-item"><span class="wm-legend-swatch" style="background:${item.color}"></span>${escapeHtml(formatNumber(item.from))}–${escapeHtml(formatNumber(item.to))}</span>`
          )
          .join("")
      );
    } else if (legend.type === "categorical") {
      const shown = legend.items.slice(0, 8);
      parts.push(
        shown
          .map(
            (item) =>
              `<span class="wm-legend-item"><span class="wm-legend-swatch" style="background:${item.color}"></span>${escapeHtml(item.label)}</span>`
          )
          .join("")
      );
      if (legend.items.length > shown.length) {
        parts.push(`<span class="wm-legend-item">+${legend.items.length - shown.length} more</span>`);
      }
    } else {
      parts.push(`<span class="wm-legend-item">No values to display</span>`);
    }

    parts.push(`<span class="wm-legend-item"><span class="wm-legend-swatch" style="background:var(--wm-nodata-fill)"></span>No record</span>`);
    this.legendEl.innerHTML = parts.join("");
  }

  // --- Public API --------------------------------------------------------

  /** Select and (optionally) zoom to a country. */
  select(code, { focus = false } = {}) {
    const c = normalizeCode(code);
    if (!c) {
      this.clearSelection();
      return this;
    }
    this.selected = c;
    this.renderer.setSelected(c);
    if (focus) this.renderer.focusCode(c);
    if (this.panel) this.panel.open(c);
    if (this.onSelect) this.onSelect(c);
    this.root.dispatchEvent(new CustomEvent("wm:select", { detail: { code: c }, bubbles: true }));
    return this;
  }

  /** Deselect the current country. */
  clearSelection() {
    this.selected = null;
    if (this.renderer) this.renderer.setSelected(null);
    if (this.panel) this.panel.showEmpty();
    if (this.onSelect) this.onSelect(null);
    this.root.dispatchEvent(new CustomEvent("wm:select", { detail: { code: null }, bubbles: true }));
    return this;
  }

  getSelected() {
    return this.selected;
  }

  /** Change what drives the choropleth colors. */
  setColorBy(colorBy, { colors, scaleMode } = {}) {
    this.colorBy = normalizeColorBy(colorBy);
    if (colors) this.palette = Array.isArray(colors) ? colors : PALETTES[colors] || this.palette;
    if (scaleMode) this.scaleMode = scaleMode;
    return this.refresh();
  }

  /** Zoom/pan to a country. */
  focus(code) {
    const c = normalizeCode(code);
    if (c) this.renderer.focusCode(c);
    return this;
  }

  /** Reset the map to the full-world view. */
  fitAll() {
    this.renderer.fitAll();
    return this;
  }

  getStore() {
    return this.store;
  }

  /** All data as a portable JSON object. */
  exportJSON() {
    return this.store.exportJSON();
  }

  /** Load data (replaces the store unless `merge` is true). */
  importJSON(json, { merge = false } = {}) {
    this.store.importJSON(json, { merge });
    return this.refresh();
  }

  /** Trigger a browser download of the current data. */
  exportToFile(filename = "worldmap-data.json") {
    const blob = new Blob([JSON.stringify(this.exportJSON(), null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 0);
    return this;
  }

  destroy() {
    if (this._unsub) this._unsub();
    this._unsub = null;
    if (this.panel) this.panel.destroy();
    if (this.renderer) this.renderer.destroy();
    this.root.innerHTML = "";
    this.root.classList.remove("wm-root", "wm-dark");
  }
}

function resolveElement(el) {
  if (typeof el === "string") return document.querySelector(el);
  return el instanceof Element ? el : null;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function formatValue(v) {
  return typeof v === "number" ? formatNumber(v) : String(v);
}

function previewValue(record) {
  try {
    const s = JSON.stringify(record);
    return s.length > 60 ? `${s.slice(0, 57)}…` : s;
  } catch {
    return String(record);
  }
}
