// SPDX-License-Identifier: MIT
// Copyright (c) 2026 open-worldmap contributors - https://github.com/bogus-accnt/open-worldmap
// MapRenderer — SVG world map with zoom/pan, hover, selection and dimming.
import { WORLD_PATHS, MAP_WIDTH, MAP_HEIGHT } from "../assets/world-paths.js";

const SVG_NS = "http://www.w3.org/2000/svg";

export class MapRenderer {
  /**
   * @param {object} [options]
   * @param {(code: string, evt: MouseEvent) => void} [options.onCountryClick]
   * @param {(code: string|null, evt: MouseEvent) => void} [options.onCountryHover]
   */
  constructor({ onCountryClick, onCountryHover } = {}) {
    this.width = MAP_WIDTH;
    this.height = MAP_HEIGHT;
    this.onCountryClick = onCountryClick || null;
    this.onCountryHover = onCountryHover || null;

    this.svg = null;
    this.viewport = null;
    this.paths = new Map(); // alpha2 -> SVGPathElement

    // View transform: world -> screen via translate(tx,ty) scale(k)
    this.k = 1;
    this.tx = 0;
    this.ty = 0;
    this._anim = null;
    this._drag = null;
    this._suppressClick = false;
    this._listeners = [];
  }

  /** Build the SVG and attach it to `container`. */
  mount(container) {
    this.svg = document.createElementNS(SVG_NS, "svg");
    this.svg.setAttribute("class", "wm-map");
    this.svg.setAttribute("viewBox", `0 0 ${this.width} ${this.height}`);
    this.svg.setAttribute("role", "img");
    this.svg.setAttribute("aria-label", "World map");
    this.svg.style.touchAction = "none";

    this.viewport = document.createElementNS(SVG_NS, "g");
    this.viewport.setAttribute("class", "wm-viewport");

    const frag = document.createDocumentFragment();
    for (const { code, d } of WORLD_PATHS) {
      const path = document.createElementNS(SVG_NS, "path");
      path.setAttribute("class", "wm-country");
      path.setAttribute("d", d);
      path.setAttribute("data-code", code);
      path.setAttribute("fill-rule", "evenodd");
      frag.appendChild(path);
      this.paths.set(code, path);
    }
    this.viewport.appendChild(frag);
    this.svg.appendChild(this.viewport);
    container.appendChild(this.svg);

    this._bindEvents();
    this._applyTransform();
    return this;
  }

  _listen(target, type, fn, opts) {
    target.addEventListener(type, fn, opts);
    this._listeners.push(() => target.removeEventListener(type, fn, opts));
  }

  _bindEvents() {
    // Hover + click via delegation.
    this._listen(this.svg, "mousemove", (evt) => {
      const code = this._codeAt(evt);
      if (this.onCountryHover) this.onCountryHover(code, evt);
    });
    this._listen(this.svg, "mouseleave", () => {
      if (this.onCountryHover) this.onCountryHover(null, new MouseEvent("mouseleave"));
    });
    this._listen(this.svg, "click", (evt) => {
      if (this._suppressClick) return; // ignore click after pan
      const code = this._codeAt(evt);
      if (this.onCountryClick) this.onCountryClick(code, evt);
    });

    // Wheel zoom around cursor.
    this._listen(
      this.svg,
      "wheel",
      (evt) => {
        evt.preventDefault();
        const rect = this.svg.getBoundingClientRect();
        const sx = ((evt.clientX - rect.left) / rect.width) * this.width;
        const sy = ((evt.clientY - rect.top) / rect.height) * this.height;
        const unit = evt.deltaMode === 1 ? 16 : evt.deltaMode === 2 ? 100 : 1;
        const factor = Math.exp(-evt.deltaY * unit * 0.0015);
        this._zoomAt(sx, sy, this.k * factor);
      },
      { passive: false }
    );

    // Drag to pan (mouse + touch via pointer events).
    this._listen(this.svg, "pointerdown", (evt) => {
      if (evt.button !== undefined && evt.button !== 0) return;
      this._cancelAnim();
      this._drag = { id: evt.pointerId, x: evt.clientX, y: evt.clientY, moved: false };
      this.svg.setPointerCapture(evt.pointerId);
      this.svg.classList.add("wm-grabbing");
    });
    this._listen(this.svg, "pointermove", (evt) => {
      const d = this._drag;
      if (!d || d.id !== evt.pointerId) return;
      const rect = this.svg.getBoundingClientRect();
      const dx = ((evt.clientX - d.x) / rect.width) * this.width;
      const dy = ((evt.clientY - d.y) / rect.height) * this.height;
      if (Math.abs(evt.clientX - d.x) + Math.abs(evt.clientY - d.y) > 3) d.moved = true;
      d.x = evt.clientX;
      d.y = evt.clientY;
      this.tx += dx;
      this.ty += dy;
      this._clampPan();
      this._applyTransform();
    });
    const endDrag = (evt) => {
      const d = this._drag;
      if (!d || d.id !== evt.pointerId) return;
      this._suppressClick = d.moved; // swallow the click that follows a pan
      this._drag = null;
      this.svg.classList.remove("wm-grabbing");
      try { this.svg.releasePointerCapture(evt.pointerId); } catch { /* already released */ }
      setTimeout(() => { this._suppressClick = false; }, 0);
    };
    this._listen(this.svg, "pointerup", endDrag);
    this._listen(this.svg, "pointercancel", endDrag);
  }

  _codeAt(evt) {
    const el = evt.target && evt.target.closest ? evt.target.closest("path[data-code]") : null;
    return el ? el.getAttribute("data-code") : null;
  }

  // --- Transform ---------------------------------------------------------

  _applyTransform() {
    this.viewport.setAttribute("transform", `translate(${this.tx} ${this.ty}) scale(${this.k})`);
  }

  _clampPan() {
    const maxX = 0;
    const minX = this.width - this.width * this.k;
    const maxY = 0;
    const minY = this.height - this.height * this.k;
    this.tx = Math.min(maxX, Math.max(minX, this.tx));
    this.ty = Math.min(maxY, Math.max(minY, this.ty));
  }

  _zoomAt(sx, sy, k) {
    const next = Math.min(30, Math.max(1, k));
    const ratio = next / this.k;
    this.tx = sx - (sx - this.tx) * ratio;
    this.ty = sy - (sy - this.ty) * ratio;
    this.k = next;
    this._clampPan();
    this._applyTransform();
  }

  _cancelAnim() {
    if (this._anim) cancelAnimationFrame(this._anim);
    this._anim = null;
  }

  _animateTo(k, tx, ty, duration = 350) {
    this._cancelAnim();
    const k0 = this.k, x0 = this.tx, y0 = this.ty;
    const t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const step = (now) => {
      const t = Math.min(1, (now - t0) / duration);
      const e = ease(t);
      this.k = k0 + (k - k0) * e;
      this.tx = x0 + (tx - x0) * e;
      this.ty = y0 + (ty - y0) * e;
      this._applyTransform();
      if (t < 1) this._anim = requestAnimationFrame(step);
      else this._anim = null;
    };
    this._anim = requestAnimationFrame(step);
  }

  /** Animate the viewport to show a country's bounding box. */
  focusCode(code, { maxZoom = 12 } = {}) {
    const bbox = this.bboxOf(code);
    if (!bbox) return;
    const [x0, y0, x1, y1] = bbox;
    const pad = Math.max(8, Math.max(x1 - x0, y1 - y0) * 0.3);
    const w = x1 - x0 + pad * 2;
    const h = y1 - y0 + pad * 2;
    const k = Math.min(maxZoom, Math.min(this.width / w, this.height / h));
    const cx = (x0 + x1) / 2;
    const cy = (y0 + y1) / 2;
    this._animateTo(k, this.width / 2 - cx * k, this.height / 2 - cy * k);
  }

  /** Reset to the full-world view. */
  fitAll({ animate = true } = {}) {
    if (animate) this._animateTo(1, 0, 0);
    else {
      this.k = 1; this.tx = 0; this.ty = 0;
      this._applyTransform();
    }
  }

  /** Geographic bounding box [x0,y0,x1,y1] of a country in map units, or null. */
  bboxOf(code) {
    const entry = WORLD_PATHS.find((p) => p.code === code);
    return entry ? entry.bbox : null;
  }

  // --- Styling -----------------------------------------------------------

  /** Set fills: colorFn(alpha2) -> css color, or null/undefined for the "no data" style. */
  setColors(colorFn) {
    for (const [code, path] of this.paths) {
      const color = colorFn(code);
      if (color) {
        path.style.fill = color;
        path.classList.remove("wm-nodata");
      } else {
        path.style.fill = "";
        path.classList.add("wm-nodata");
      }
    }
  }

  /** Mark the selected country (or none). */
  setSelected(code) {
    for (const [c, path] of this.paths) {
      path.classList.toggle("wm-selected", code != null && c === code);
    }
  }

  /**
   * Dim every country not in `codes` (null/undefined clears the filter).
   * @param {Set<string>|string[]|null} codes
   */
  setDimmed(codes) {
    const set = codes == null ? null : codes instanceof Set ? codes : new Set(codes);
    for (const [c, path] of this.paths) {
      path.classList.toggle("wm-dimmed", !!set && !set.has(c));
    }
  }

  destroy() {
    this._cancelAnim();
    for (const un of this._listeners) un();
    this._listeners = [];
    if (this.svg && this.svg.parentNode) this.svg.parentNode.removeChild(this.svg);
    this.svg = null;
    this.viewport = null;
    this.paths.clear();
  }
}
