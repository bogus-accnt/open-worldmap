// SPDX-License-Identifier: MIT
// Copyright (c) 2026 open-worldmap contributors - https://github.com/bogus-accnt/open-worldmap
// Public entry point for the worldmap module.
//
//   import { WorldMapModule, CountryStore } from "./src/index.js";
//
// The distributed bundle (dist/worldmap.min.js) also exposes these on
// `window.WorldMap` when loaded with a plain <script> tag.
export { WorldMapModule } from "./worldmap-module.js";
export { CountryStore, localStorageAdapter, memoryAdapter } from "./country-store.js";
export { MapRenderer } from "./map-renderer.js";
export { CountryPanel } from "./panel.js";
export { injectStyles, CSS } from "./styles.js";
export {
  createColorScale,
  interpolatePalette,
  formatNumber,
  SEQUENTIAL_BLUES,
  SEQUENTIAL_GREENS,
  SEQUENTIAL_WARMS,
  CATEGORICAL,
} from "./scales.js";
export {
  COUNTRIES,
  REGIONS,
  normalizeCode,
  isValidCode,
  countryName,
  listCountries,
} from "./countries-db.js";
export { WORLD_PATHS, MAP_WIDTH, MAP_HEIGHT } from "../assets/world-paths.js";

import { WorldMapModule } from "./worldmap-module.js";
import { CountryStore, localStorageAdapter, memoryAdapter } from "./country-store.js";
import { createColorScale } from "./scales.js";

// Convenience global for classic <script> usage (and the IIFE bundle).
if (typeof window !== "undefined") {
  window.WorldMap = Object.assign(window.WorldMap || {}, {
    WorldMapModule,
    CountryStore,
    localStorageAdapter,
    memoryAdapter,
    createColorScale,
  });
}
