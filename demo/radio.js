// SPDX-License-Identifier: MIT
// Copyright (c) 2026 open-worldmap contributors - https://github.com/bogus-accnt/open-worldmap
// demo/radio.html wiring: choropleth by station counts + table filtered by clicked country.
import { WorldMapModule, CountryStore, memoryAdapter } from "../src/index.js";
import { COUNTRIES } from "../src/countries-db.js";
import { STATIONS, TOPICS } from "./radio-data.js";

const list = (record) => (Array.isArray(record) ? record : []);

/** Metrics offered in the "Colour by" select. */
const METRICS = {
  count: {
    valueLabel: "Stations",
    colors: "blues",
    scaleMode: "quantile",
    colorBy: (record) => list(record).length,
  },
  working: {
    valueLabel: "Working stations",
    colors: "greens",
    scaleMode: "quantile",
    colorBy: (record) => list(record).filter((s) => s.working).length,
  },
  broken: {
    valueLabel: "Not working",
    colors: "warm",
    scaleMode: "quantile",
    colorBy: (record) => list(record).filter((s) => !s.working).length,
  },
  share: {
    valueLabel: "Working share (%)",
    colors: "blues",
    scaleMode: "linear",
    // null (no stations at all) stays "no record"-coloured; 0% is a real value.
    colorBy: (record) => {
      const all = list(record);
      if (all.length === 0) return null;
      return Math.round((all.filter((s) => s.working).length / all.length) * 100);
    },
  },
};

const $ = (sel) => document.querySelector(sel);
const state = { country: null, topic: "all", status: "all", metric: "count" };

// Data for every country on the map, so the choropleth is never empty and any
// click shows a record. In-memory: reload always starts from the same data.
const store = new CountryStore({ storage: memoryAdapter(), initialData: STATIONS });

const map = new WorldMapModule({
  el: "#map",
  store,
  colorBy: METRICS.count.colorBy,
  colors: METRICS.count.colors,
  scaleMode: METRICS.count.scaleMode,
  valueLabel: METRICS.count.valueLabel,
  title: "Radio stations",
});

// --- Map / legend --------------------------------------------------------

function applyMetric(key) {
  const m = METRICS[key];
  state.metric = key;
  map.options.valueLabel = m.valueLabel;
  map.setColorBy(m.colorBy, { colors: m.colors, scaleMode: m.scaleMode });
  updateStats();
}

$("#metric").addEventListener("change", (e) => applyMetric(e.target.value));

// --- Table ---------------------------------------------------------------

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function visibleRows() {
  const pairs = state.country ? [[state.country, store.get(state.country)]] : store.entries();
  const rows = [];
  for (const [code, record] of pairs) {
    for (const s of list(record)) rows.push({ ...s, country: code });
  }
  return rows
    .filter((s) => state.topic === "all" || s.topic === state.topic)
    .filter((s) => state.status === "all" || String(s.working) === state.status)
    .sort((a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name));
}

function renderTable() {
  const all = state.country ? list(store.get(state.country)).length : store.size;
  const rows = visibleRows();
  $("#row-count").textContent = state.country
    ? `${rows.length} of ${all} stations in ${COUNTRIES[state.country]?.name || state.country} (${state.country})`
    : `${rows.length} stations across ${store.size} countries`;
  $("#stations-table tbody").innerHTML = rows
    .map(
      (s) => `<tr data-country="${s.country}" class="${s.country === state.country ? "is-selected" : ""}">
        <td class="code">${s.country}</td>
        <td class="code">${escapeHtml(s.id)}</td>
        <td>${escapeHtml(s.name)}</td>
        <td>${escapeHtml(s.topic)}</td>
        <td><span class="pill ${s.working ? "ok" : "bad"}">${s.working ? "working" : "down"}</span></td>
        <td>${escapeHtml(s.lastChecked)}</td>
      </tr>`
    )
    .join("");
}

$("#stations-table").addEventListener("click", (e) => {
  const row = e.target.closest("tr[data-country]");
  if (row) map.select(row.dataset.country, { focus: true });
});

$("#topic").addEventListener("change", (e) => {
  state.topic = e.target.value;
  renderTable();
});
$("#status").addEventListener("change", (e) => {
  state.status = e.target.value;
  renderTable();
});

// --- Selection -----------------------------------------------------------

map.root.addEventListener("wm:select", (e) => {
  state.country = e.detail.code;
  $("#selection").textContent = e.detail.code
    ? `Selected: ${COUNTRIES[e.detail.code]?.name || e.detail.code} (${e.detail.code})`
    : "Nothing selected";
  renderTable();
});

$("#clear").addEventListener("click", () => map.clearSelection());

// --- Misc ----------------------------------------------------------------

function updateStats() {
  const total = document.querySelectorAll(".wm-country").length;
  const colored = document.querySelectorAll(".wm-country:not(.wm-nodata)").length;
  const warn = colored === 0 && store.size > 0 ? " ⚠ nothing is colored" : "";
  $("#stats").textContent =
    `${colored}/${total} coloured · by ${METRICS[state.metric].valueLabel}${warn}`;
}

$("#theme").addEventListener("change", (e) => {
  const dark = e.target.checked;
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  map.root.classList.toggle("wm-dark", dark);
});

$("#topic").innerHTML += TOPICS.map((t) => `<option value="${t}">${t}</option>`).join("");

store.subscribe(() => {
  renderTable();
  updateStats();
});

$("#snippet").textContent = [
  'import { WorldMapModule, CountryStore, memoryAdapter } from "../src/index.js";',
  'import { STATIONS } from "./radio-data.js";',
  "",
  "const store = new CountryStore({ storage: memoryAdapter(), initialData: STATIONS });",
  "",
  "const map = new WorldMapModule({",
  '  el: "#map",',
  "  store,",
  "  colorBy: (records) => records.length,   // number of records per country",
  '  colors: "blues",',
  '  scaleMode: "quantile",',
  '  valueLabel: "Stations",',
  "});",
  "",
  "// clicking a country gives you the code — read the record yourself:",
  'map.root.addEventListener("wm:select", (e) => {',
  "  const stations = store.get(e.detail.code);   // the array stored for that country",
  "  renderTable(stations);",
  "});",
].join("\n");

renderTable();
updateStats();
window.wm = map; // handy for poking around in the console
