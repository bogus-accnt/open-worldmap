// SPDX-License-Identifier: MIT
// Copyright (c) 2026 open-worldmap contributors - https://github.com/bogus-accnt/open-worldmap
// Demo wiring: dataset switching, theme toggle, records table, events.
import { WorldMapModule } from "../src/worldmap-module.js";
import { CountryStore, localStorageAdapter } from "../src/country-store.js";
import { COUNTRIES } from "../src/countries-db.js";
import { POPULATION, STATUS, REVENUE } from "./demo-data.js";

const DATASETS = {
  population: {
    label: "Population (2023)",
    valueLabel: "People",
    colorBy: "population",
    colors: "blues",
    scaleMode: "quantile",
    data: POPULATION,
  },
  status: {
    label: "Rollout status",
    valueLabel: "Status",
    colorBy: "status",
    colors: "categorical",
    scaleMode: "categorical",
    data: STATUS,
  },
  revenue: {
    label: "Revenue (USD)",
    valueLabel: "Revenue",
    colorBy: "revenue",
    colors: "warm",
    scaleMode: "linear",
    data: REVENUE,
  },
};

const store = new CountryStore({ storage: localStorageAdapter("worldmap-demo:data") });

const wm = new WorldMapModule({
  el: "#map",
  store,
  colorBy: "population",
  valueLabel: "People",
  colors: "blues",
  scaleMode: "quantile",
  title: "World Data Explorer",
});

const $ = (sel) => document.querySelector(sel);
const DATASET_KEY = "worldmap-demo:dataset";
let current = "population";

/** True if at least one stored record has the dataset's colorBy field. */
function datasetMatchesStore(key) {
  const field = DATASETS[key].colorBy;
  return store.entries().some(([, r]) => r && typeof r === "object" && !Array.isArray(r) && r[field] !== undefined);
}

/** Pick the dataset whose field is present in the stored records. */
function detectDataset() {
  return Object.keys(DATASETS).find(datasetMatchesStore) || null;
}

/** Apply colours/legend for a dataset WITHOUT touching the stored records. */
function styleDataset(key) {
  const ds = DATASETS[key];
  current = key;
  $("#dataset").value = key;
  $("#scale-mode").value = ds.scaleMode;
  wm.options.valueLabel = ds.valueLabel;
  wm.setColorBy(ds.colorBy, { colors: ds.colors, scaleMode: ds.scaleMode });
  try {
    localStorage.setItem(DATASET_KEY, key);
  } catch {
    /* storage unavailable — not fatal */
  }
  updateStats();
}

/** Load the sample data for a dataset (replaces every record). */
function applyDataset(key) {
  store.importJSON({ records: DATASETS[key].data });
  styleDataset(key);
  wm.fitAll();
  wm.clearSelection();
}

/** On-page diagnostic so a grey map is never a mystery. */
function updateStats() {
  const total = document.querySelectorAll(".wm-country").length;
  const colored = document.querySelectorAll(".wm-country:not(.wm-nodata)").length;
  const label = DATASETS[current]?.valueLabel || "—";
  const warn = colored === 0 && store.size > 0 ? " ⚠ nothing is colored" : "";
  $("#map-stats").textContent = `${store.size} records · ${colored}/${total} colored · by ${label}${warn}`;
}

// --- Controls -----------------------------------------------------------

$("#dataset").addEventListener("change", (e) => applyDataset(e.target.value));

$("#scale-mode").addEventListener("change", (e) => {
  const ds = DATASETS[current];
  wm.setColorBy(ds.colorBy, { colors: ds.colors, scaleMode: e.target.value });
});

$("#theme").addEventListener("change", (e) => {
  const dark = e.target.checked;
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  wm.root.classList.toggle("wm-dark", dark);
});

$("#reset").addEventListener("click", () => {
  applyDataset(current);
  flash("Demo data reloaded");
});

// --- Records table ------------------------------------------------------

function renderTable() {
  const rows = store.query();
  $("#record-count").textContent = `${rows.length} record${rows.length === 1 ? "" : "s"}`;
  $("#records tbody").innerHTML = rows
    .map(({ code, name, record }) => {
      const json = JSON.stringify(record);
      const preview = json.length > 70 ? `${json.slice(0, 67)}…` : json;
      return `<tr data-code="${code}">
        <td class="code">${code}</td>
        <td>${escapeHtml(COUNTRIES[code]?.name || code)}</td>
        <td class="json" title="${escapeHtml(json)}">${escapeHtml(preview)}</td>
        <td><button class="row-del" data-code="${code}" title="Delete record">✕</button></td>
      </tr>`;
    })
    .join("");
}

$("#records").addEventListener("click", (e) => {
  const del = e.target.closest(".row-del");
  if (del) {
    store.delete(del.dataset.code);
    flash(`Deleted ${del.dataset.code}`);
    return;
  }
  const row = e.target.closest("tr[data-code]");
  if (row) wm.select(row.dataset.code, { focus: true });
});

store.subscribe(() => {
  renderTable();
  updateStats();
});

// --- Selection readout --------------------------------------------------

wm.root.addEventListener("wm:select", (e) => {
  const code = e.detail.code;
  $("#selection").textContent = code
    ? `Selected: ${COUNTRIES[code]?.name || code} (${code})`
    : "Nothing selected";
});

// --- Misc ---------------------------------------------------------------

let flashTimer;
function flash(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("visible");
  clearTimeout(flashTimer);
  flashTimer = setTimeout(() => el.classList.remove("visible"), 1800);
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

// On first visit, seed the sample dataset. On later visits, keep whatever the
// user saved in localStorage (use "Reset demo data" to restore the samples) —
// but make sure the legend/colours match the records that are actually stored.
if (store.size === 0) {
  let key = "population";
  try {
    const saved = localStorage.getItem(DATASET_KEY);
    if (saved && DATASETS[saved]) key = saved;
  } catch {
    /* ignore */
  }
  applyDataset(key);
} else {
  let key = null;
  try {
    const saved = localStorage.getItem(DATASET_KEY);
    if (saved && DATASETS[saved] && datasetMatchesStore(saved)) key = saved;
  } catch {
    /* ignore */
  }
  styleDataset(key || detectDataset() || "population");
}
renderTable();
updateStats();
window.wm = wm; // handy for poking around in the console
