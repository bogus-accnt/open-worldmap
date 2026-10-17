# worldmap-module

An embeddable, dependency-free JavaScript widget that **organizes arbitrary data by country**
on an interactive world map. Countries are keyed by **ISO 3166-1 alpha-2 codes** and each one
can hold **any JSON value**, so the same widget works for populations, sales figures, rollout
statuses, notes, feature flags — anything.

- 🗺️ Interactive SVG world map — hover, click, zoom (wheel), pan (drag), zoom-to-country
- 🎨 Choropleth coloring with automatic **quantile / linear / categorical** scales + legend
- ✏️ Built-in side panel to view, edit and delete a country's record (JSON editor)
- 🔎 Country search and region filter
- 💾 Pluggable storage — `localStorage` adapter included, or bring your own
- 📦 **Import / Export** everything as JSON
- 🧩 Zero dependencies, no build step required (also ships a minified IIFE bundle)
- 🌗 Light/dark theming through CSS variables
- 🪶 ~175 KB minified bundle, works fully offline (map geometry is bundled)

## Quick start

```html
<div id="map" style="height: 600px"></div>

<script type="module">
  import { WorldMapModule, CountryStore, localStorageAdapter } from "./src/index.js";

  const store = new CountryStore({ storage: localStorageAdapter() });

  // Records are plain JSON, stored by ISO alpha-2 code.
  store.set("DE", { population: 83294633, status: "active" });
  store.set("FR", { population: 64756584, status: "active" });

  const map = new WorldMapModule({
    el: "#map",
    store,
    colorBy: "population",   // property name, or (record, code) => value
    colors: "blues",         // "blues" | "greens" | "warm" | "categorical" | [hex…]
    scaleMode: "quantile",   // "auto" | "quantile" | "linear" | "categorical"
    valueLabel: "People",
    title: "World Data Explorer",
  });
</script>
```

Serve the folder over HTTP (ES modules don't load from `file://`):

```bash
npm run serve      # python -m http.server 8123
# open http://127.0.0.1:8123/demo/
```

### Classic `<script>` (no modules)

```html
<script src="dist/worldmap.min.js"></script>
<script>
  const { WorldMapModule, CountryStore, memoryAdapter } = window.WorldMap;
  const store = new CountryStore({ storage: memoryAdapter() });
  new WorldMapModule({ el: "#map", store, colorBy: "revenue", valueLabel: "Revenue" });
</script>
```

Build the bundle with `npm run build` (uses `npx esbuild`; outputs `dist/worldmap.js` and
`dist/worldmap.min.js`). See `demo/dist.html` for a working example.

## Data model

A record is any JSON value attached to an alpha-2 code:

```js
store.set("US", { population: 339996563, states: 50 });   // object
store.set("DE", 83294633);                                // number
store.set("JP", "priority market");                       // string
store.set("BR", ["Sao Paulo", "Rio de Janeiro"]);         // array
```

`set()` also accepts an alpha-3 code (`store.set("DEU", …)`) and normalizes it.

### Import / export

```js
const dump = map.exportJSON();          // { version, exportedAt, records: { US: {...}, … } }
map.importJSON(dump);                   // replace all records
map.importJSON(other, { merge: true }); // merge instead of replace
map.exportToFile("my-data.json");       // download in the browser
```

Plain maps (`{ "US": {...} }`) are accepted too. Unknown codes are skipped with a
`console.warn` (see [key rules](#load-a-json-payload-for-all-countries)).
The toolbar's **Import**/**Export** buttons do the same thing.

## Loading data & reading it back

### Load a JSON payload for all countries

The usual case is one payload keyed by country code. Hand it to the store directly — either at
construction time or at any later moment:

```js
// { "DE": {...}, "FR": [...], "US": 42 } — any JSON per country
const dataByCountry = await (await fetch("/api/radio-stations.json")).json();

const store = new CountryStore({ initialData: dataByCountry });

const map = new WorldMapModule({
  el: "#map",
  store,
  colorBy: (record) => (Array.isArray(record) ? record.length : null), // arrays need a function
  valueLabel: "Radio stations",
  colors: "blues",
  scaleMode: "quantile",
});
```

Loading or replacing data later works the same way, through the store or the widget:

```js
map.importJSON(dataByCountry);           // replaces every record
map.importJSON(more, { merge: true });   // adds/overwrites only the listed countries
store.set("DE", [ /* … */ ]);            // one country at a time (alpha-3 works too)
store.clear();                           // drop everything
```

`importJSON()` accepts both the export format `{ "records": { "DE": … } }` and a bare
`{ "DE": … }` map. `initialData` takes a **bare map only** — handed an export envelope it loads
nothing (silently), so use `importJSON()` for envelopes.

**Countries are keyed by ISO 3166-1 alpha-2.** Alpha-3 and any case are accepted; every other
key is skipped and **logged with a `console.warn`** naming it (silence it with
`onUnknownKey: () => {}`) — a drop like that is the number one reason a click shows no data:

```js
new CountryStore({ initialData: { DE: 1, de: 2, "  de  ": 3, DEU: 4 } }); // → one record, "DE"

new CountryStore({ initialData: {
  Germany:  {},   // country name, not a code
  "276":    {},   // numeric code
  UK:       {},   // not an ISO code — the United Kingdom is GB
  EL:       {},   // not an ISO code — Greece is GR
} });             // → nothing loaded
```

`initialData` is applied **on top of** previously persisted records: it wins for the codes it
contains, while other saved countries stay. To always start from your own payload regardless of
what a `localStorageAdapter` holds, pass it to `importJSON()` (replaces everything) or use
`memoryAdapter`.

### Get the data back on a country click

A click does **not** hand you the record: you receive the country **code** and fetch the record
yourself. Two equivalent ways to be notified:

```js
// a) callback in the options
const map = new WorldMapModule({
  el: "#map",
  store,
  onSelect: (code) => render(code ? store.get(code) : null),   // null = clicked the ocean
});

// b) event on the widget root (or on the container — it bubbles)
map.root.addEventListener("wm:select", (e) => {
  render(e.detail.code ? store.get(e.detail.code) : null);
});
```

`store.get(code)` returns exactly the value you stored (object, array, string, number…) and
accepts an alpha-3 code. Handy neighbours:

```js
map.getSelected();                    // "DE" | null
store.has("DE");
store.entries();                      // [["DE", record], …]
store.query({ region: "Europe" });    // [{ code, name, region, record }, …]

import { COUNTRIES } from "./src/index.js";
COUNTRIES.DE;                         // { name, alpha3, numeric, region, subregion, … }
```

> **Click shows no data in the panel?** The click works — the record simply never reached the
> store, and the panel shows its empty template. Verify in this order:
> 1. `store.size` / `store.codes()` right after loading — empty means the payload was rejected
>    (see the key rules above); the console also warns about every skipped key.
> 2. Non-ISO keys that look right: `"Germany"`, `"276"`, `"UK"` (→ `GB`), `"EL"` (→ `GR`).
> 3. An export envelope `{ "records": { … } }` handed to `initialData` instead of `importJSON()`.
> 4. `panel: false` — then there is no right-hand panel at all (the map still highlights).

### Worked example — filter a table by the clicked country

Say each country holds a list of radio stations (`{ id, name, topic, working, lastChecked }`).
Clicking a country filters the table; your own controls combine with it, and clicking a row
selects the country back on the map:

```js
const state = { country: null, topic: "all", working: "all" };
const tbody = document.querySelector("#stations tbody");

function renderTable() {
  const pairs = state.country ? [[state.country, store.get(state.country)]] : store.entries();
  const rows = [];
  for (const [code, value] of pairs) {
    const list = Array.isArray(value) ? value : value ? [value] : [];
    for (const s of list) rows.push({ ...s, country: code });
  }

  tbody.innerHTML = rows
    .filter((s) => state.topic === "all" || s.topic === state.topic)
    .filter((s) => state.working === "all" || String(s.working) === state.working)
    .map((s) => `<tr data-country="${s.country}">
        <td>${s.country}</td><td>${s.name}</td><td>${s.topic}</td>
        <td>${s.working ? "on air" : "off air"}</td><td>${s.lastChecked}</td>
      </tr>`)
    .join("");
}

// map → table
map.root.addEventListener("wm:select", (e) => {
  state.country = e.detail.code;
  renderTable();
});

// table → map
tbody.addEventListener("click", (e) => {
  const row = e.target.closest("tr[data-country]");
  if (row) map.select(row.dataset.country, { focus: true });
});

// your own filters combine with the selected country
document.querySelector("#topic").addEventListener("change", (e) => {
  state.topic = e.target.value;
  renderTable();
});
document.querySelector("#working").addEventListener("change", (e) => {
  state.working = e.target.value;
  renderTable();
});

// re-render when the data changes anywhere (panel edits, import, your own code)
store.subscribe(renderTable);
renderTable();
```

Points worth knowing before you wire this up:

* Records are **one per country**. If your source is a flat list of rows, either store the array
  as the country's record (as above) or keep your own index and put only an aggregate
  (e.g. `{ stations: 12, working: 9 }`) in the store for the choropleth.
* A **string `colorBy` does not look inside arrays** — `Array.isArray` records resolve to
  `undefined` and the country stays grey. Use a function:
  `colorBy: (r) => (Array.isArray(r) ? r.length : null)`.
* Returning `null`/`undefined` from `colorBy` paints the country with the "no record" color.
* Selection is **single-country**: clicking another country replaces the previous one. For
  multi-select keep your own `Set` of codes and filter by it; the map highlight still shows
  only the last one.
* Dates in `YYYY-MM-DD` compare correctly as strings, so `s.lastChecked < "2026-09-01"` needs
  no date parser.
* The built-in panel (disable with `panel: false`) shows and edits the whole record as JSON,
  which is convenient for small records and unwieldy for long arrays — a custom table is
  usually nicer for those.

## `WorldMapModule` options

| Option | Default | Description |
| --- | --- | --- |
| `el` | — | Container: CSS selector or `HTMLElement` (required). |
| `store` | in-memory | A `CountryStore` instance. |
| `colorBy` | `null` | Property name or `(record, code) => value`. |
| `colors` | `"blues"` | Palette name (`blues`, `greens`, `warm`, `categorical`) or hex array. |
| `scaleMode` | `"auto"` | `auto`, `quantile`, `linear` or `categorical`. |
| `valueLabel` | `""` | Legend title for the colored value. |
| `title` | `"World Data"` | Toolbar title (`null` hides it). |
| `legend` | `true` | Show the legend. |
| `panel` | `true` | Show the record editor panel. |
| `search` | `true` | Show the country search box. |
| `regionFilter` | `true` | Show the region filter. |
| `importExport` | `true` | Show Import/Export buttons. |
| `theme` | `null` | `"light"`, `"dark"` or `null`. |
| `onSelect` | — | `(code) => void` when a country is selected or deselected (`null` = deselected). |

### Methods

```js
map.select("JP", { focus: true });  // select a country (optionally zoom to it)
map.clearSelection();
map.getSelected();                  // "JP" | null
map.setColorBy("revenue", { colors: "warm", scaleMode: "linear" });
map.focus("BR");                    // zoom to a country
map.fitAll();                       // reset the view
map.refresh();                      // recompute colors/legend
map.getStore();                     // the CountryStore
map.exportJSON(); map.importJSON(data); map.exportToFile();
map.destroy();                      // remove listeners + DOM
```

### Events

`wm:select` is fired on the container whenever the selection changes:

```js
document.querySelector("#map").addEventListener("wm:select", (e) => {
  console.log(e.detail.code); // "JP" or null
});
```

## `CountryStore`

```js
new CountryStore({ storage, initialData, onUnknownKey });

store.get("US")            // record or undefined
store.has("US")
store.set("US", record)    // create/replace (throws on unknown code)
store.update("US", patch)  // shallow merge
store.delete("US")
store.clear()
store.size
store.codes()              // ["DE", "FR", …] — every code that has a record
store.entries()            // [[code, record], …]
store.query({ text, region })  // [{ code, name, region, record }, …]
store.subscribe((event, store) => {})  // → unsubscribe
store.importJSON(json, { merge })
store.exportJSON()
```

### Storage adapters

* `localStorageAdapter(key?)` — persists in the browser (default key `worldmap-module:data`).
* `memoryAdapter(initial?)` — no persistence.
* **Your own**: any object with `read(): object | null` and `write(data): void`
  (e.g. hydrate from and post to your REST API).

## Helpers

```js
import {
  COUNTRIES, REGIONS, normalizeCode, isValidCode, countryName, listCountries,
  createColorScale, formatNumber,
} from "./src/index.js";

countryName("DEU");            // "Germany"
normalizeCode("deu");          // "DE"
listCountries({ region: "Asia", text: "ind" });
COUNTRIES.DE;                  // { alpha2, alpha3, numeric, name, region, subregion, independent }
```

These are **ES-module exports**. The classic `<script>` build exposes only `WorldMapModule`,
`CountryStore`, `localStorageAdapter`, `memoryAdapter` and `createColorScale` on
`window.WorldMap` — use the module build when you need the country helpers.

## Theming

Every visual is driven by CSS variables (see `src/styles.js`). Override them anywhere above
the widget:

```css
#map .wm-root {
  --wm-accent: #e8590c;
  --wm-country: #eef0f3;
  --wm-nodata-fill: #e9ecef;
  --wm-radius: 14px;
}
```

A ready-made dark theme is included: pass `theme: "dark"` or toggle the `wm-dark` class
(see the demo's theme switch).

## Regenerating bundled assets

`assets/world-paths.js` (map geometry) and `src/countries-db.js` (ISO metadata) are generated
from data in `tools/`:

```bash
npm run build:map   # node tools/generate-map.mjs   — TopoJSON → SVG paths (Miller projection)
npm run check:map   # node tools/check-map.mjs      — sanity-check the generated geometry
npm run build:db    # node tools/generate-db.mjs    — ISO 3166-1 metadata
```

* Map: Natural Earth 110m via `world-atlas`, projected with Miller cylindrical, Antarctica
  cropped at −58°, simplified and rounded to ±0.1 px (≈120 KB for 174 countries).
* Rings that cross the ±180° meridian (Russia's Chukotka, Fiji, …) are unwrapped, duplicated
  and clipped back into the map window, so their fill wraps to the correct edge instead of
  smearing a band across the Atlantic and the Americas.
* `npm run check:map` guards this: it fails on any horizontal jump wider than a third of the
  map, on out-of-bounds coordinates, on any country whose fill spans more than 200° of
  longitude in one row, and on known ocean points landing inside a country's fill.
* Non-ISO leftovers (`Kosovo` → `XK`, `N. Cyprus` → `CY`, `Somaliland` → `SO`) are mapped so
  the map has no uncovered polygons.

## Project layout

```
src/
  index.js             public entry (also sets window.WorldMap)
  worldmap-module.js   the widget: toolbar, map, panel, legend, search
  country-store.js     data layer + storage adapters
  countries-db.js      ISO 3166-1 metadata (generated)
  map-renderer.js      SVG map: zoom, pan, hover, selection, dimming
  panel.js             record viewer/editor
  scales.js            quantile/linear/categorical color scales
  styles.js            stylesheet (injected on first mount)
assets/
  world-paths.js       bundled map geometry (generated)
tools/                 asset generators + source data
demo/                  demo pages (index.html, dist.html)
dist/                  prebuilt bundles
```

## Notes & limitations

* Requires a DOM; targets modern evergreen browsers (ES2020).
* Micro-states and small islands are tiny at world zoom — use search to select them, or
  `focus(code)` to zoom in.
* The map uses a Miller projection with the far south cropped (Antarctica is not shown).
* `colorBy` values are read from the record only; the widget never mutates your data.

## Data & attribution

* Country outlines: [Natural Earth](https://www.naturalearthdata.com/) 1:110m (public domain),
  packaged as TopoJSON by [`world-atlas`](https://github.com/topojson/world-atlas) (ISC) and
  projected/simplified by `tools/generate-map.mjs`.
* ISO 3166-1 metadata in `src/countries-db.js`: derived from
  [`world-countries`](https://github.com/mledoze/countries) (ODbL-1.0) by
  `tools/generate-db.mjs`.

## License

MIT — see [LICENSE](LICENSE). Every source file carries an `SPDX-License-Identifier: MIT`
header. The bundled data keeps the license of its source (above).
