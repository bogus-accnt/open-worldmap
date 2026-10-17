// SPDX-License-Identifier: MIT
// Copyright (c) 2026 open-worldmap contributors - https://github.com/bogus-accnt/open-worldmap
// CountryStore — the data layer of the worldmap module.
// Arbitrary JSON records keyed by ISO 3166-1 alpha-2 codes, with change
// events, JSON import/export and pluggable persistence adapters.
import { normalizeCode, COUNTRIES } from "./countries-db.js";

export class CountryStore {
  /**
   * @param {object} [options]
   * @param {{read: () => object|null, write: (data: object) => void}} [options.storage]
   *   Persistence adapter. Data on disk always wins over `initialData`.
   * @param {object} [options.initialData]  Seed records: { "US": {...}, ... }
   */
  constructor({ storage = null, initialData = null } = {}) {
    this._data = {};
    this._listeners = new Set();
    this._storage = storage || null;

    const persisted = this._storage ? this._storage.read() : null;
    if (persisted && typeof persisted === "object") {
      this._data = { ...persisted };
    }
    if (initialData) {
      for (const [code, record] of Object.entries(initialData)) {
        const c = normalizeCode(code);
        if (c) this._data[c] = record;
      }
    }
  }

  /** Number of records. */
  get size() {
    return Object.keys(this._data).length;
  }

  /** All codes that have a record, sorted. */
  codes() {
    return Object.keys(this._data).sort();
  }

  /** The record for a country, or undefined. */
  get(code) {
    const c = normalizeCode(code);
    return c ? this._data[c] : undefined;
  }

  /** True if the country has a record. */
  has(code) {
    return this.get(code) !== undefined;
  }

  /**
   * Create or replace the record for a country.
   * @param {string} code  ISO alpha-2 or alpha-3.
   * @param {*} record     Any JSON-serializable value (object, array, string, number…).
   */
  set(code, record) {
    const c = normalizeCode(code);
    if (!c) throw new Error(`Unknown country code: ${JSON.stringify(code)}`);
    this._data[c] = record;
    this._persist();
    this._emit({ type: "set", code: c });
    return this;
  }

  /** Shallow-merge `patch` into an existing (or empty) record. */
  update(code, patch) {
    const c = normalizeCode(code);
    if (!c) throw new Error(`Unknown country code: ${JSON.stringify(code)}`);
    const prev = this._data[c];
    const next =
      prev && typeof prev === "object" && !Array.isArray(prev)
        ? { ...prev, ...(patch && typeof patch === "object" ? patch : { value: patch }) }
        : patch;
    return this.set(c, next);
  }

  /** Delete a record. Returns true if something was deleted. */
  delete(code) {
    const c = normalizeCode(code);
    if (!c || !(c in this._data)) return false;
    delete this._data[c];
    this._persist();
    this._emit({ type: "delete", code: c });
    return true;
  }

  /** Delete every record. */
  clear() {
    this._data = {};
    this._persist();
    this._emit({ type: "clear" });
    return this;
  }

  /** [[code, record], ...] sorted by code. */
  entries() {
    return this.codes().map((c) => [c, this._data[c]]);
  }

  /**
   * Find records.
   * @param {object} [filter]
   * @param {string} [filter.text]    Matches code, country name or the record's JSON.
   * @param {string} [filter.region]  ISO region name, e.g. "Europe".
   * @returns {Array<{code: string, name: string, region: string|null, record: *}>}
   */
  query({ text, region } = {}) {
    const q = text ? String(text).trim().toLowerCase() : "";
    return this.entries()
      .map(([code, record]) => {
        const meta = COUNTRIES[code] || {};
        return { code, name: meta.name || code, region: meta.region || null, record };
      })
      .filter(
        (r) =>
          (!region || r.region === region) &&
          (!q ||
            r.code.toLowerCase().includes(q) ||
            r.name.toLowerCase().includes(q) ||
            JSON.stringify(r.record).toLowerCase().includes(q))
      );
  }

  /**
   * Replace (or merge into) the store from parsed JSON.
   * Accepts either the module's own export format `{ records: { US: {...} } }`
   * or a bare `{ "US": {...} }` map.
   */
  importJSON(json, { merge = false } = {}) {
    const source =
      json && typeof json === "object" && json.records && typeof json.records === "object"
        ? json.records
        : json;
    if (!source || typeof source !== "object" || Array.isArray(source)) {
      throw new Error("Import expects an object mapping country codes to records.");
    }
    if (!merge) this._data = {};
    let imported = 0;
    for (const [code, record] of Object.entries(source)) {
      const c = normalizeCode(code);
      if (!c) continue; // silently skip unknown codes
      this._data[c] = record;
      imported++;
    }
    this._persist();
    this._emit({ type: "import", imported });
    return imported;
  }

  /** Export the whole store: { version, exportedAt, records }. */
  exportJSON() {
    return {
      version: 1,
      exportedAt: new Date().toISOString(),
      records: { ...this._data },
    };
  }

  /** Subscribe to changes. Returns an unsubscribe function. */
  subscribe(fn) {
    this._listeners.add(fn);
    return () => this._listeners.delete(fn);
  }

  _persist() {
    if (this._storage) this._storage.write({ ...this._data });
  }

  _emit(event) {
    for (const fn of [...this._listeners]) fn(event, this);
  }
}

/** Persistence adapter backed by window.localStorage. */
export function localStorageAdapter(key = "worldmap-module:data") {
  return {
    read() {
      try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
      } catch {
        return null;
      }
    },
    write(data) {
      try {
        localStorage.setItem(key, JSON.stringify(data));
      } catch (e) {
        console.warn("[worldmap-module] Could not persist data:", e);
      }
    },
  };
}

/** In-memory adapter (no persistence). Useful for testing or read-only maps. */
export function memoryAdapter(initial = null) {
  let data = initial;
  return {
    read: () => data,
    write: (d) => { data = d; },
  };
}
