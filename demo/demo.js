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
let current = "population";

function applyDataset(key) {
  current = key;
  const ds = DATASETS[key];
  store.importJSON({ records: ds.data });
  wm.options.valueLabel = ds.valueLabel;
  wm.setColorBy(ds.colorBy, { colors: ds.colors, scaleMode: ds.scaleMode });
  wm.fitAll();
  wm.clearSelection();
  $("#scale-mode").value = ds.scaleMode;
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

store.subscribe(() => renderTable());

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
// user saved in localStorage (use "Reset demo data" to restore the samples).
if (store.size === 0) {
  applyDataset("population");
} else {
  wm.options.valueLabel = "People";
  wm.setColorBy("population", { colors: "blues", scaleMode: "quantile" });
}
renderTable();
window.wm = wm; // handy for poking around in the console
