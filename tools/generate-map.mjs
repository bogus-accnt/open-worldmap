// SPDX-License-Identifier: MIT
// Copyright (c) 2026 open-worldmap contributors - https://github.com/bogus-accnt/open-worldmap
// Generates assets/world-paths.js from tools/countries-110m.json (world-atlas TopoJSON).
// Projects the world with a Miller cylindrical projection (Antarctica cropped) into
// compact SVG path data, one entry per country keyed by ISO alpha-2.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseCSV } from "./csv.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..");

const topo = JSON.parse(fs.readFileSync(path.join(here, "countries-110m.json"), "utf8"));
const rows = parseCSV(fs.readFileSync(path.join(here, "countries.csv"), "utf8"));

// ccn3 (numeric ISO 3166-1) -> alpha-2
const numToAlpha2 = {};
for (const r of rows) {
  if (r.cca2 && r.ccn3) numToAlpha2[r.ccn3.padStart(3, "0")] = r.cca2.toUpperCase();
}
// Natural Earth leftovers that carry no usable ISO code ("-99"):
// attach them to the state that administers them for data purposes.
const nameToAlpha2 = { Kosovo: "XK", "N. Cyprus": "CY", Somaliland: "SO" };

// --- TopoJSON decoding -------------------------------------------------
const { scale: [sx, sy], translate: [tx, ty] } = topo.transform;
const arcs = topo.arcs.map((arc) => {
  let x = 0, y = 0;
  return arc.map(([dx, dy]) => {
    x += dx; y += dy;
    return [x * sx + tx, y * sy + ty];
  });
});

function ringPoints(arcIdxs) {
  const pts = [];
  for (const idx of arcIdxs) {
    const arc = idx < 0 ? [...arcs[~idx]].reverse() : arcs[idx];
    for (const p of arc) {
      const last = pts[pts.length - 1];
      if (last && last[0] === p[0] && last[1] === p[1]) continue;
      pts.push(p);
    }
  }
  return pts;
}

// --- Antimeridian handling ---------------------------------------------
// Some rings cross the ±180° meridian (Fiji, Russia's Chukotka, …). Projecting
// such a ring directly draws a line across the entire map and smears the fill
// over unrelated countries. Instead: unwrap the longitudes into a continuous
// sequence, duplicate the ring shifted by ∓360° when it extends past an edge,
// and clip every copy back into [-180°, 180°].
function unwrapRing(ring) {
  const out = [[ring[0][0], ring[0][1]]];
  let offset = 0;
  for (let i = 1; i < ring.length; i++) {
    let lon = ring[i][0] + offset;
    const prev = out[out.length - 1][0];
    while (lon - prev > 180) { offset -= 360; lon -= 360; }
    while (lon - prev < -180) { offset += 360; lon += 360; }
    out.push([lon, ring[i][1]]);
  }
  return { ring: out, winding: offset };
}

const cutAt = (x) => (a, b) => {
  const t = (x - a[0]) / (b[0] - a[0]);
  return [x, a[1] + (b[1] - a[1]) * t];
};

// Sutherland–Hodgman clip of a closed ring against one vertical half-plane.
function clipHalfPlane(ring, inside, cut) {
  const out = [];
  const n = ring.length;
  for (let i = 0; i < n; i++) {
    const cur = ring[i];
    const prev = ring[(i + n - 1) % n];
    const curIn = inside(cur[0]);
    const prevIn = inside(prev[0]);
    if (curIn) {
      if (!prevIn) out.push(cut(prev, cur));
      out.push(cur);
    } else if (prevIn) {
      out.push(cut(prev, cur));
    }
  }
  return out;
}

function clipToLonRange(ring) {
  let r = clipHalfPlane(ring, (lon) => lon >= -180, cutAt(-180));
  if (r.length < 3) return [];
  r = clipHalfPlane(r, (lon) => lon <= 180, cutAt(180));
  return r.length >= 3 ? r : [];
}

/** All in-range ring pieces a raw (lon/lat) ring contributes to the map. */
function antimeridianRings(ring) {
  const { ring: unwrapped, winding } = unwrapRing(ring);
  if (Math.abs(winding) > 1) return []; // winds around the globe (Antarctica) — not tileable
  let minLon = Infinity, maxLon = -Infinity;
  for (const [lon] of unwrapped) {
    if (lon < minLon) minLon = lon;
    if (lon > maxLon) maxLon = lon;
  }
  const variants = [unwrapped];
  if (maxLon > 180) variants.push(unwrapped.map(([lon, lat]) => [lon - 360, lat]));
  if (minLon < -180) variants.push(unwrapped.map(([lon, lat]) => [lon + 360, lat]));
  const pieces = [];
  for (const variant of variants) {
    const clipped = clipToLonRange(variant);
    if (clipped.length >= 3) pieces.push(clipped);
  }
  return pieces;
}

// --- Projection: Miller cylindrical, cropped to [-58, 84] latitude -----
const W = 960;
const millerY = (latDeg) => {
  const lat = Math.max(-89.9, Math.min(89.9, latDeg));
  return 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * (lat * Math.PI) / 180));
};
const LAT_TOP = 84, LAT_BOT = -58;
const Y_TOP = millerY(LAT_TOP), Y_BOT = millerY(LAT_BOT);
const H = Math.round((Y_TOP - Y_BOT) * W / (2 * Math.PI));
const PPU = W / (2 * Math.PI); // pixels per projected radian

function project([lon, lat]) {
  const x = ((lon + 180) / 360) * W;
  const y = (Y_TOP - millerY(Math.max(LAT_BOT, Math.min(LAT_TOP, lat)))) * PPU;
  return [x, y];
}

// --- Build paths --------------------------------------------------------
const byCode = new Map();

for (const geom of topo.objects.countries.geometries) {
  if (geom.properties?.name === "Antarctica" || geom.id === "010") continue;
  let code = numToAlpha2[String(geom.id).padStart(3, "0")] || nameToAlpha2[geom.properties?.name];
  if (!code) continue;

  const polygons = geom.type === "Polygon" ? [geom.arcs] : geom.arcs;
  const parts = [];
  let best = null; // keep at least one ring per country
  for (const polygon of polygons) {
    for (const ringArcs of polygon) {
      const raw = ringPoints(ringArcs);
      if (raw.length < 4) continue;
      for (const ring of antimeridianRings(raw)) {
        const proj = [];
        for (const p of ring) {
          const q = project(p);
          const last = proj[proj.length - 1];
          if (last && Math.abs(last[0] - q[0]) < 0.6 && Math.abs(last[1] - q[1]) < 0.6) continue;
          proj.push([Math.round(q[0] * 10) / 10, Math.round(q[1] * 10) / 10]);
        }
        if (proj.length < 3) continue;
        let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
        for (const [x, y] of proj) {
          if (x < x0) x0 = x; if (x > x1) x1 = x;
          if (y < y0) y0 = y; if (y > (y1)) y1 = y;
        }
        const area = (x1 - x0) * (y1 - y0);
        const d = `M${proj.map(([x, y]) => `${x} ${y}`).join("L")}Z`;
        if (!best || area > best.area) best = { d, area, bbox: [x0, y0, x1, y1] };
        if (area >= 0.25) parts.push({ d, bbox: [x0, y0, x1, y1] });
      }
    }
  }
  if (!parts.length && best) parts.push(best);
  if (!parts.length) continue;

  const prev = byCode.get(code) || { parts: [] };
  prev.parts.push(...parts);
  byCode.set(code, prev);
}

const entries = [...byCode.entries()]
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([code, { parts }]) => {
    const x0 = Math.min(...parts.map((p) => p.bbox[0]));
    const y0 = Math.min(...parts.map((p) => p.bbox[1]));
    const x1 = Math.max(...parts.map((p) => p.bbox[2]));
    const y1 = Math.max(...parts.map((p) => p.bbox[3]));
    const r = (n) => Math.round(n * 10) / 10;
    return `  { code: ${JSON.stringify(code)}, d: ${JSON.stringify(parts.map((p) => p.d).join(""))}, bbox: [${r(x0)}, ${r(y0)}, ${r(x1)}, ${r(y1)}] }`;
  })
  .join(",\n");

const out = `// GENERATED by tools/generate-map.mjs — do not edit by hand.
// SPDX-License-Identifier: MIT
// Simplified world geometry (Natural Earth 110m via world-atlas), Miller projection.
export const MAP_WIDTH = ${W};
export const MAP_HEIGHT = ${H};
export const WORLD_PATHS = [
${entries}
];
`;

fs.writeFileSync(path.join(root, "assets", "world-paths.js"), out, "utf8");
console.log(`Wrote assets/world-paths.js: ${byCode.size} countries, ${W}x${H}, ${(out.length / 1024).toFixed(1)} KB.`);
