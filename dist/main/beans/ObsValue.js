"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ObsValue {
    constructor(_val) {
        this._val = _val;
        this.listeners = [];
    }
    get val() {
        return this._val;
    }
    set val(value) {
        if (this.val == value) {
            return;
        }
        const old = this.val;
        this._val = value;
        this.listeners.forEach(lis => lis(value, old));
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    removeListener(listener) {
        this.listeners = this.listeners.filter(it => listener === it);
    }
}
exports.default = ObsValue;
//# sourceMappingURL=ObsValue.js.map