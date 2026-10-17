// SPDX-License-Identifier: MIT
// Copyright (c) 2026 open-worldmap contributors - https://github.com/bogus-accnt/open-worldmap
// Sample "radio stations by country" data for demo/radio.html.
//
// Shape — one record per country, each record an array of stations:
//
//   {
//     "DE": [
//       { id: "DE-01", name: "Radio Echo", topic: "music", working: true, lastChecked: "2026-03-14" },
//       ...
//     ],
//     "FR": [ ... ],
//     ...
//   }
//
// Every country that exists on the map gets a list — some empty — so the choropleth
// always has values to show and clicking any country displays a record.
import { WORLD_PATHS } from "../assets/world-paths.js";

export const TOPICS = ["music", "news", "talk", "sport", "culture"];
const NAMES = ["Radio", "Wave", "Voice", "Echo", "Pulse", "North", "Sun", "Blue"];

/** Deterministic PRNG (mulberry32) so the demo looks the same on every reload. */
function rng(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash(text) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

const pad = (n) => String(n).padStart(2, "0");

function stationsFor(code) {
  const rand = rng(hash(code));
  const count = Math.floor(rand() * 13); // 0–12 stations
  const list = [];
  for (let i = 0; i < count; i++) {
    list.push({
      id: `${code}-${pad(i + 1)}`,
      name: `${NAMES[Math.floor(rand() * NAMES.length)]} ${NAMES[Math.floor(rand() * NAMES.length)]}`,
      topic: TOPICS[Math.floor(rand() * TOPICS.length)],
      working: rand() > 0.25,
      lastChecked: `2026-${pad(1 + Math.floor(rand() * 9))}-${pad(1 + Math.floor(rand() * 28))}`,
    });
  }
  return list;
}

/** `{ "DE": [...], "FR": [...], … }` — a record for every country on the map. */
export const STATIONS = Object.fromEntries(WORLD_PATHS.map((p) => [p.code, stationsFor(p.code)]));
