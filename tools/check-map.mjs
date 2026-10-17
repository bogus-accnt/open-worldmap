// Static + geometric sanity checks for assets/world-paths.js
//
//  * static: no subpath may contain a horizontal jump wider than a third of
//    the map (a symptom of antimeridian wrap-around smearing), and no
//    coordinate may fall outside the map box.
//  * geometric: even-odd point-in-polygon sampling verifies that
//      - known ocean points are not inside any country,
//      - no country's fill runs more than 200 degrees of longitude in one row
//        (real countries are at most ~180 wide, smears are ~360).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const src = fs.readFileSync(path.join(here, "..", "assets", "world-paths.js"), "utf8");

const W = Number(src.match(/MAP_WIDTH = (\d+)/)[1]);
const H = Number(src.match(/MAP_HEIGHT = (\d+)/)[1]);
const entries = [...src.matchAll(/\{ code: "([A-Z]{2})", d: "((?:[^"\\]|\\.)*)", bbox: \[([^\]]+)\] \}/g)].map(
  ([, code, d, bbox]) => ({ code, d, bbox: bbox.split(",").map(Number) }),
);

const problems = [];

const ringsOf = (d) =>
  d
    .split("Z")
    .filter((s) => s.trim())
    .map((sp) => [...sp.matchAll(/[ML](-?[\d.]+) (-?[\d.]+)/g)].map((m) => [Number(m[1]), Number(m[2])]));

let totalPoints = 0;
const geometry = new Map();
for (const { code, d, bbox } of entries) {
  const rings = ringsOf(d);
  geometry.set(code, rings);
  for (const ring of rings) {
    totalPoints += ring.length;
    for (let i = 1; i < ring.length; i++) {
      const jump = Math.abs(ring[i][0] - ring[i - 1][0]);
      if (jump > W / 3) problems.push(`${code}: horizontal jump of ${jump.toFixed(0)}px inside a subpath`);
    }
    for (const [x, y] of ring) {
      if (x < -0.5 || x > W + 0.5 || y < -0.5 || y > H + 0.5) problems.push(`${code}: coordinate out of bounds (${x}, ${y})`);
    }
  }
  if (bbox[0] < -0.5 || bbox[2] > W + 0.5 || bbox[1] < -0.5 || bbox[3] > H + 0.5) problems.push(`${code}: bbox out of range [${bbox}]`);
}

function contains(rings, x, y) {
  let inside = false;
  for (const ring of rings) {
    const n = ring.length;
    for (let i = 0, j = n - 1; i < n; j = i++) {
      const [xi, yi] = ring[i];
      const [xj, yj] = ring[j];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
    }
  }
  return inside;
}

const millerY = (deg) => 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * ((deg * Math.PI) / 180)));
const PPU = W / (2 * Math.PI);
const Y_TOP = millerY(84);
const toXY = (lon, lat) => [((lon + 180) / 360) * W, (Y_TOP - millerY(lat)) * PPU];

// Points that are unambiguously open ocean.
const OCEAN = [
  ["N Atlantic", -40, 45], ["C Atlantic", -30, 5], ["S Atlantic", -15, -35],
  ["N Pacific", -150, 30], ["C Pacific", -140, -10], ["S Pacific", 160, -40],
  ["Indian", 75, -25], ["S Ocean", 100, -50], ["Bering Sea", -175, 58],
  ["Gulf of Guinea", 0, 0], ["Arabian Sea", 62, 12], ["Coral Sea", 155, -18],
];
for (const [name, lon, lat] of OCEAN) {
  const [x, y] = toXY(lon, lat);
  for (const [code, rings] of geometry) {
    if (contains(rings, x, y)) problems.push(`${name} (${lon},${lat}) is inside ${code}`);
  }
}

// Per-country coverage and widest horizontal run (degrees of longitude).
const LON_STEP = 2;
const LAT_STEP = 2;
const rows = Math.ceil((84 + 58) / LAT_STEP);
const cols = Math.ceil(360 / LON_STEP);
const stats = [];
for (const [code, rings] of geometry) {
  let covered = 0;
  let maxRun = 0;
  for (let r = 0; r < rows; r++) {
    const y = (Y_TOP - millerY(84 - r * LAT_STEP)) * PPU;
    let run = 0;
    for (let c = 0; c < cols; c++) {
      const lon = -180 + c * LON_STEP + LON_STEP / 2;
      const x = ((lon + 180) / 360) * W;
      if (contains(rings, x, y)) {
        covered++;
        run += LON_STEP;
        if (run > maxRun) maxRun = run;
      } else {
        run = 0;
      }
    }
  }
  stats.push({ code, pct: (covered / (rows * cols)) * 100, maxRun });
  if (maxRun > 200) problems.push(`${code}: fill spans ${maxRun} degrees of longitude in one row (likely a smear)`);
}

stats.sort((a, b) => b.pct - a.pct);

console.log(`Map ${W}x${H}, countries ${entries.length}, points ${totalPoints}`);
console.log("Largest fills: " + stats.slice(0, 8).map((s) => `${s.code} ${s.pct.toFixed(1)}% (max run ${s.maxRun})`).join(", "));
if (problems.length === 0) {
  console.log("OK: no wrap-around smears, out-of-bounds coordinates, or ocean intrusions.");
} else {
  console.log(`PROBLEMS (${problems.length}):`);
  for (const p of problems.slice(0, 40)) console.log("  " + p);
  if (problems.length > 40) console.log(`  ...and ${problems.length - 40} more`);
  process.exitCode = 1;
}
