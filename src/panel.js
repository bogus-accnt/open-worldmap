// SPDX-License-Identifier: MIT
// Copyright (c) 2026 open-worldmap contributors - https://github.com/bogus-accnt/open-worldmap
// CountryPanel — details + JSON record editor for the selected country.
import { COUNTRIES } from "./countries-db.js";

export class CountryPanel {
  /**
   * @param {object} options
   * @param {import("./country-store.js").CountryStore} options.store
   * @param {(code: string|null) => void} [options.onClose]
   */
  constructor({ store, onClose } = {}) {
    this.store = store;
    this.onClose = onClose || null;
    this.el = null;
    this.code = null;
    this._unsub = null;
  }

  mount(container) {
    this.el = document.createElement("aside");
    this.el.className = "wm-panel";
    container.appendChild(this.el);
    this._unsub = this.store.subscribe(() => this._syncFromStore());
    this.showEmpty();
    return this;
  }

  /** Show the "nothing selected" state. */
  showEmpty() {
    this.code = null;
    if (!this.el) return;
    this.el.innerHTML = `<div class="wm-panel-empty">Click a country on the map, or search for one, to view and edit its data.</div>`;
  }

  /** Show a country; `record` may be undefined (no record yet). */
  open(code) {
    this.code = code;
    this._render();
  }

  close() {
    this.showEmpty();
    if (this.onClose) this.onClose(null);
  }

  /** Re-render after an external store change, without clobbering active edits. */
  _syncFromStore() {
    if (!this.code) return;
    const current = this.store.get(this.code);
    const currentJson = current === undefined ? null : JSON.stringify(current);
    if (currentJson === this._renderedValue) return; // panel is already up to date
    const textarea = this.el?.querySelector(".wm-json");
    if (textarea && document.activeElement === textarea && this._isDirty()) return;
    this._render();
  }

  _isDirty() {
    const textarea = this.el?.querySelector(".wm-json");
    if (!textarea) return false;
    const current = this.store.get(this.code);
    if (current === undefined) return textarea.value.trim() !== "";
    try {
      return JSON.stringify(JSON.parse(textarea.value)) !== JSON.stringify(current);
    } catch {
      return true;
    }
  }

  _render() {
    const code = this.code;
    const meta = COUNTRIES[code] || { name: code, alpha2: code };
    const record = this.store.get(code);
    const hasRecord = record !== undefined;
    this._renderedValue = hasRecord ? JSON.stringify(record) : null;

    const tags = [
      meta.alpha2 && `<span class="wm-tag">${meta.alpha2}</span>`,
      meta.alpha3 && `<span class="wm-tag">${meta.alpha3}</span>`,
      meta.region && `<span class="wm-tag">${escapeHtml(meta.region)}</span>`,
    ]
      .filter(Boolean)
      .join("");

    this.el.innerHTML = `
      <div class="wm-panel-header">
        <div class="wm-panel-name">${escapeHtml(meta.name)}</div>
        <div class="wm-panel-meta">${tags}</div>
      </div>
      <div class="wm-panel-body">
        <div class="wm-field-label">Record (JSON)</div>
        <textarea class="wm-json" spellcheck="false"></textarea>
        <div class="wm-status"></div>
        ${
          hasRecord
            ? `<div class="wm-hint">Anything JSON-serializable works — an object, array, number or string.</div>`
            : `<div class="wm-hint wm-no-record">No record for this country yet — press Save to create one. Data must be keyed by ISO codes ("DE"), not country names.</div>`
        }
      </div>
      <div class="wm-panel-actions">
        <button class="wm-btn wm-primary" data-action="save">Save</button>
        <button class="wm-btn" data-action="revert">Revert</button>
        <span class="wm-spacer"></span>
        <button class="wm-btn wm-danger" data-action="delete" ${hasRecord ? "" : "disabled"}>Delete</button>
      </div>`;

    const textarea = this.el.querySelector(".wm-json");
    textarea.value = hasRecord ? JSON.stringify(record, null, 2) : "{\n  \n}";
    textarea.placeholder = '{\n  "value": 42\n}';

    const status = this.el.querySelector(".wm-status");
    const saveBtn = this.el.querySelector('[data-action="save"]');
    const deleteBtn = this.el.querySelector('[data-action="delete"]');

    const validate = () => {
      const ok = this._validate(textarea, status);
      saveBtn.disabled = !ok;
      return ok;
    };
    textarea.addEventListener("input", validate);
    validate();

    saveBtn.addEventListener("click", () => {
      if (!validate()) return;
      try {
        const parsed = JSON.parse(textarea.value);
        this._renderedValue = JSON.stringify(parsed); // keep the flash visible across the store event
        this.store.set(code, parsed);
        this._flash(status, "Saved", "wm-ok");
      } catch (err) {
        this._flash(status, `Invalid JSON: ${err.message}`, "wm-error");
      }
    });

    this.el.querySelector('[data-action="revert"]').addEventListener("click", () => {
      const current = this.store.get(code);
      textarea.value = current === undefined ? "{\n  \n}" : JSON.stringify(current, null, 2);
      validate();
      this._flash(status, "Reverted", "");
    });

    deleteBtn.addEventListener("click", () => {
      if (this.store.delete(code)) {
        this._render();
        this._flash(this.el.querySelector(".wm-status"), "Record deleted", "");
      }
    });
  }

  _validate(textarea, status) {
    const value = textarea.value.trim();
    if (value === "") {
      textarea.classList.remove("wm-invalid");
      status.textContent = "Empty — saving will be disabled.";
      status.className = "wm-status wm-error";
      return false;
    }
    try {
      JSON.parse(value);
      textarea.classList.remove("wm-invalid");
      status.textContent = "";
      status.className = "wm-status";
      return true;
    } catch (err) {
      textarea.classList.add("wm-invalid");
      status.textContent = err.message;
      status.className = "wm-status wm-error";
      return false;
    }
  }

  _flash(status, message, cls) {
    if (!status) return;
    status.textContent = message;
    status.className = `wm-status ${cls || ""}`.trim();
    clearTimeout(this._flashTimer);
    this._flashTimer = setTimeout(() => {
      if (status.isConnected && !status.classList.contains("wm-error")) {
        status.textContent = "";
        status.className = "wm-status";
      }
    }, 1600);
  }

  destroy() {
    clearTimeout(this._flashTimer);
    if (this._unsub) this._unsub();
    this._unsub = null;
    if (this.el && this.el.parentNode) this.el.parentNode.removeChild(this.el);
    this.el = null;
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}
