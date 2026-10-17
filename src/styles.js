// SPDX-License-Identifier: MIT
// Copyright (c) 2026 open-worldmap contributors - https://github.com/bogus-accnt/open-worldmap
// Stylesheet for the worldmap module. Injected once into the host document.
// All visuals are driven by the CSS variables below, so a host can re-theme
// the widget by overriding them (e.g. `#my-map .wm-root { --wm-accent: ... }`).
export const CSS = `
.wm-root {
  --wm-bg: #ffffff;
  --wm-fg: #1b1f24;
  --wm-muted: #6b7280;
  --wm-border: #e3e6ea;
  --wm-toolbar-bg: #fafbfc;
  --wm-panel-bg: #ffffff;
  --wm-input-bg: #ffffff;
  --wm-hover-bg: #eef2f6;
  --wm-accent: #2f6fd0;
  --wm-danger: #d1443f;
  --wm-map-bg: #f2f6fa;
  --wm-country: #e2e6eb;
  --wm-nodata-fill: #e2e6eb;
  --wm-country-stroke: #ffffff;
  --wm-selected-stroke: #16181c;
  --wm-tag-bg: #eef1f5;
  --wm-radius: 10px;
  --wm-shadow: 0 6px 24px rgba(15, 23, 42, .14);

  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 420px;
  background: var(--wm-bg);
  color: var(--wm-fg);
  border: 1px solid var(--wm-border);
  border-radius: var(--wm-radius);
  overflow: hidden;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.4;
}
.wm-root * { box-sizing: border-box; }

/* Dark preset — add class "wm-dark" to the container or use { theme: "dark" } */
.wm-root.wm-dark {
  --wm-bg: #14171c;
  --wm-fg: #e8eaed;
  --wm-muted: #9aa3ad;
  --wm-border: #2a2f37;
  --wm-toolbar-bg: #191d23;
  --wm-panel-bg: #171b21;
  --wm-input-bg: #10131a;
  --wm-hover-bg: #232a33;
  --wm-accent: #4f8fe6;
  --wm-map-bg: #0f141b;
  --wm-country: #2b323b;
  --wm-nodata-fill: #2b323b;
  --wm-country-stroke: #0f141b;
  --wm-selected-stroke: #ffffff;
  --wm-tag-bg: #232a33;
}

/* --- Toolbar ---------------------------------------------------------- */
.wm-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: var(--wm-toolbar-bg);
  border-bottom: 1px solid var(--wm-border);
  flex-wrap: wrap;
}
.wm-title { font-weight: 600; font-size: 15px; margin-right: 2px; }
.wm-spacer { flex: 1 1 auto; }
.wm-count { font-size: 12px; color: var(--wm-muted); white-space: nowrap; }

.wm-search { position: relative; flex: 0 1 230px; min-width: 150px; }
.wm-input, .wm-select {
  width: 100%;
  padding: 6px 9px;
  font: inherit;
  font-size: 13px;
  color: inherit;
  background: var(--wm-input-bg);
  border: 1px solid var(--wm-border);
  border-radius: 6px;
  outline: none;
}
.wm-input:focus, .wm-select:focus { border-color: var(--wm-accent); }
.wm-select { width: auto; cursor: pointer; }

.wm-search-results {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  z-index: 30;
  display: none;
  max-height: 240px;
  overflow: auto;
  background: var(--wm-panel-bg);
  border: 1px solid var(--wm-border);
  border-radius: 6px;
  box-shadow: var(--wm-shadow);
}
.wm-search-results.wm-open { display: block; }
.wm-search-item {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 6px 10px;
  font-size: 13px;
  cursor: pointer;
}
.wm-search-item:hover, .wm-search-item.wm-active { background: var(--wm-hover-bg); }
.wm-search-item .wm-code { color: var(--wm-muted); font-size: 11px; font-variant-numeric: tabular-nums; }

.wm-btn {
  padding: 6px 11px;
  font: inherit;
  font-size: 13px;
  color: inherit;
  background: var(--wm-input-bg);
  border: 1px solid var(--wm-border);
  border-radius: 6px;
  cursor: pointer;
  white-space: nowrap;
}
.wm-btn:hover { background: var(--wm-hover-bg); }
.wm-btn:disabled { opacity: .5; cursor: default; }
.wm-btn.wm-primary { background: var(--wm-accent); border-color: transparent; color: #fff; }
.wm-btn.wm-primary:hover { filter: brightness(1.08); }
.wm-btn.wm-danger { color: var(--wm-danger); }

/* --- Body / map ------------------------------------------------------- */
.wm-body { display: flex; flex: 1 1 auto; min-height: 0; }
.wm-map-wrap { position: relative; flex: 1 1 auto; min-width: 0; background: var(--wm-map-bg); overflow: hidden; }
.wm-map { display: block; width: 100%; height: 100%; cursor: grab; }
.wm-map.wm-grabbing { cursor: grabbing; }

.wm-country {
  fill: var(--wm-country);
  stroke: var(--wm-country-stroke);
  stroke-width: .6;
  vector-effect: non-scaling-stroke;
  cursor: pointer;
  transition: fill .25s ease;
}
.wm-country.wm-nodata { fill: var(--wm-nodata-fill); }
.wm-country:hover { filter: brightness(.9); }
.wm-root.wm-dark .wm-country:hover { filter: brightness(1.35); }
.wm-country.wm-selected {
  stroke: var(--wm-selected-stroke);
  stroke-width: 1.6;
}
.wm-country.wm-dimmed { opacity: .18; }

.wm-tooltip {
  position: absolute;
  z-index: 20;
  padding: 6px 9px;
  max-width: 260px;
  background: rgba(18, 20, 24, .93);
  color: #fff;
  font-size: 12px;
  line-height: 1.35;
  border-radius: 6px;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, calc(-100% - 14px));
  transition: opacity .12s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.wm-tooltip.wm-visible { opacity: 1; }
.wm-tooltip b { font-weight: 600; }
.wm-tooltip .wm-tooltip-value { color: #9fd0ff; }

/* --- Panel ------------------------------------------------------------ */
.wm-panel {
  display: flex;
  flex-direction: column;
  width: 320px;
  flex: 0 0 320px;
  border-left: 1px solid var(--wm-border);
  background: var(--wm-panel-bg);
  min-height: 0;
}
.wm-panel-empty { padding: 24px 18px; color: var(--wm-muted); font-size: 13px; text-align: center; }
.wm-panel-header { padding: 12px 14px; border-bottom: 1px solid var(--wm-border); }
.wm-panel-name { font-size: 16px; font-weight: 600; }
.wm-panel-meta { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px; }
.wm-tag {
  padding: 1px 7px;
  font-size: 11px;
  color: var(--wm-muted);
  background: var(--wm-tag-bg);
  border-radius: 4px;
  font-variant-numeric: tabular-nums;
}
.wm-panel-body { flex: 1 1 auto; display: flex; flex-direction: column; gap: 8px; padding: 12px 14px; overflow: auto; min-height: 0; }
.wm-field-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--wm-muted);
}
.wm-json {
  flex: 1 1 auto;
  min-height: 170px;
  padding: 8px 10px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 12px;
  line-height: 1.5;
  tab-size: 2;
  color: inherit;
  background: var(--wm-input-bg);
  border: 1px solid var(--wm-border);
  border-radius: 6px;
  resize: vertical;
  outline: none;
}
.wm-json:focus { border-color: var(--wm-accent); }
.wm-json.wm-invalid { border-color: var(--wm-danger); }
.wm-hint { font-size: 12px; color: var(--wm-muted); }
.wm-no-record {
  margin-top: 2px;
  padding: 8px 10px;
  border: 1px dashed var(--wm-border);
  border-radius: 8px;
  background: var(--wm-hover-bg);
  color: var(--wm-fg);
}
.wm-status { font-size: 12px; min-height: 16px; color: var(--wm-muted); }
.wm-status.wm-error { color: var(--wm-danger); }
.wm-status.wm-ok { color: #2e8b57; }
.wm-panel-actions { display: flex; gap: 8px; padding: 0 14px 14px; }

/* --- Legend ----------------------------------------------------------- */
.wm-legend {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
  min-height: 36px;
  padding: 8px 12px;
  font-size: 11px;
  color: var(--wm-muted);
  border-top: 1px solid var(--wm-border);
}
.wm-legend-title { font-weight: 600; color: var(--wm-fg); }
.wm-legend-gradient { display: flex; align-items: center; gap: 6px; }
.wm-legend-bar { width: 130px; height: 10px; border-radius: 3px; }
.wm-legend-item { display: inline-flex; align-items: center; gap: 5px; }
.wm-legend-swatch { width: 11px; height: 11px; border-radius: 3px; flex: 0 0 auto; }
.wm-legend-hidden { display: none; }

@media (max-width: 720px) {
  .wm-body { flex-direction: column; }
  .wm-panel { width: auto; flex: 0 0 auto; max-height: 46%; border-left: none; border-top: 1px solid var(--wm-border); }
  .wm-search { flex: 1 1 140px; }
}
`;

/** Inject the stylesheet once per document. Returns the <style> element. */
export function injectStyles(doc = document) {
  const existing = doc.getElementById("worldmap-module-css");
  if (existing) return existing;
  const style = doc.createElement("style");
  style.id = "worldmap-module-css";
  style.textContent = CSS;
  doc.head.appendChild(style);
  return style;
}
