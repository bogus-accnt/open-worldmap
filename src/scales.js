// SPDX-License-Identifier: MIT
// Copyright (c) 2026 open-worldmap contributors - https://github.com/bogus-accnt/open-worldmap
// Color scales for the choropleth.

export const SEQUENTIAL_BLUES = ["#f7fbff", "#c6dbef", "#6baed6", "#2171b5", "#08306b"];
export const SEQUENTIAL_GREENS = ["#f7fcf5", "#c7e9c0", "#74c476", "#238b45", "#005a32"];
export const SEQUENTIAL_WARMS = ["#fff5eb", "#fdd0a2", "#fd8d3c", "#d94801", "#8c2d04"];

// ColorBrewer-inspired qualitative palette (distinct hues, colorblind-tolerant).
export const CATEGORICAL = [
  "#4e79a7", "#f28e2b", "#59a14f", "#e15759", "#b07aa1",
  "#76b7b2", "#edc949", "#ff9da7", "#9c755f", "#bab0ac",
];

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const v = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  return [parseInt(v.slice(0, 2), 16), parseInt(v.slice(2, 4), 16), parseInt(v.slice(4, 6), 16)];
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

/** Interpolate along a multi-stop hex palette. t in [0,1]. */
export function interpolatePalette(stops, t) {
  const t2 = Math.max(0, Math.min(1, t));
  const n = stops.length - 1;
  const seg = Math.min(Math.floor(t2 * n), n - 1);
  const local = t2 * n - seg;
  const a = hexToRgb(stops[seg]);
  const b = hexToRgb(stops[seg + 1]);
  const c = a.map((v, i) => Math.round(lerp(v, b[i], local)));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}

/** Compact number formatting for legends: 1200000 -> "1.2M". */
export function formatNumber(v) {
  if (v == null || Number.isNaN(v)) return String(v);
  if (typeof v !== "number") return String(v);
  const abs = Math.abs(v);
  if (abs >= 1e9) return (v / 1e9).toFixed(abs >= 1e10 ? 0 : 1).replace(/\.0$/, "") + "B";
  if (abs >= 1e6) return (v / 1e6).toFixed(abs >= 1e7 ? 0 : 1).replace(/\.0$/, "") + "M";
  if (abs >= 1e3) return (v / 1e3).toFixed(abs >= 1e4 ? 0 : 1).replace(/\.0$/, "") + "k";
  if (Number.isInteger(v)) return String(v);
  return v.toFixed(2).replace(/\.?0+$/, "");
}

/**
 * Build a color scale from extracted values.
 *
 * @param {object} options
 * @param {Array<*>} options.values  Values extracted via `colorBy` (may contain null/undefined).
 * @param {string} [options.mode]    "quantile" | "linear" | "categorical" (auto-detected if omitted).
 * @param {string[]} [options.colors] Palette for numeric scales.
 * @param {string} [options.noData]  Fill for missing values.
 * @returns {{ color: (v: *) => string|null, legend: object }}
 */
export function createColorScale({ values, mode, colors = SEQUENTIAL_BLUES, noData = null } = {}) {
  const present = values.filter((v) => v != null);
  const allNumbers = present.length > 0 && present.every((v) => typeof v === "number" && !Number.isNaN(v));
  const resolved = mode || (allNumbers ? "quantile" : "categorical");

  if (resolved === "categorical") {
    const uniques = [...new Set(present.map(String))].sort();
    const map = new Map(uniques.map((u, i) => [u, CATEGORICAL[i % CATEGORICAL.length]]));
    return {
      color: (v) => (v == null ? noData : map.get(String(v)) || noData),
      legend: { type: "categorical", items: uniques.map((u) => ({ label: u, color: map.get(u) })) },
    };
  }

  const nums = present.filter((v) => typeof v === "number" && !Number.isNaN(v)).sort((a, b) => a - b);
  if (!nums.length) return { color: () => noData, legend: { type: "empty" } };
  const min = nums[0];
  const max = nums[nums.length - 1];

  if (resolved === "linear" || min === max) {
    const span = max - min || 1;
    return {
      color: (v) =>
        typeof v === "number" && !Number.isNaN(v) ? interpolatePalette(colors, (v - min) / span) : noData,
      legend: { type: "gradient", stops: colors, min, max },
    };
  }

  // Quantile: one bucket per palette color.
  const nBuckets = colors.length;
  const thresholds = [];
  for (let i = 1; i < nBuckets; i++) {
    thresholds.push(nums[Math.floor((i / nBuckets) * nums.length)]);
  }
  const bucketOf = (v) => {
    let i = 0;
    while (i < thresholds.length && v >= thresholds[i]) i++;
    return i;
  };
  const edges = [min, ...thresholds, max];
  return {
    color: (v) =>
      typeof v === "number" && !Number.isNaN(v)
        ? colors[Math.min(bucketOf(v), colors.length - 1)]
        : noData,
    legend: {
      type: "buckets",
      items: colors.map((color, i) => ({ color, from: edges[i], to: edges[i + 1] })),
    },
  };
}
