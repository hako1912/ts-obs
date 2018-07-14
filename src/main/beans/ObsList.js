"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ObsValue_1 = __importDefault(require("@/beans/ObsValue"));
const ListFilterBinding_1 = __importDefault(require("@/beans/binding/ListFilterBinding"));
class ObsList {
    constructor(_val = []) {
        this._val = _val;
        this.onElementChangeObj = this.onElementChange.bind(this);
        this.arrayListeners = [];
        this.elementListeners = [];
        this._val.forEach(obs => {
            obs.addListener(this.onElementChangeObj);
        });
    }
    get val() {
        return this._val;
    }
    set val(value) {
        this._val = value;
    }
    addElementListener(listener) {
        this.elementListeners.push(listener);
    }
    addArrayListener(listener) {
        this.arrayListeners.push(listener);
    }
    removeArrayListener(listener) {
        this.arrayListeners = this.arrayListeners.filter(it => listener !== it);
    }
    removeElementListener(listener) {
        this.elementListeners = this.elementListeners.filter(it => listener !== it);
    }
    push(...values) {
        if (values.length === 0) {
            return [];
        }
        const appends = values.map(it => new ObsValue_1.default(it));
        this._val.push(...appends);
        this.arrayListeners.forEach(lis => lis(values, []));
        appends.forEach(it => it.addListener(this.onElementChangeObj));
        return appends;
    }
    remove(...values) {
        const obsValues = values.map(it => new ObsValue_1.default(it));
        obsValues.forEach(it => it.removeListener(this.onElementChangeObj));
        const removes = [];
        this._val = this._val.filter(it => {
            if (values.indexOf(it.val) === -1) {
                return true;
            }
            removes.push(it.val);
            return false;
        });
        if (0 < removes.length) {
            this.arrayListeners.forEach(lis => lis([], removes));
        }
    }
    removeIf(predicate) {
        const removes = this.values().filter(it => predicate(it));
        this.remove(...removes);
    }
    clear() {
        if (this._val.length === 0) {
            return;
        }
        const oldVal = this.values();
        this._val = [];
        this.arrayListeners.forEach(lis => lis([], oldVal));
    }
    isEmpty() {
        return this._val.length === 0;
    }
    isNotEmpty() {
        return !this.isEmpty();
    }
    map(func) {
        return this.values().map(func);
    }
    filter(func) {
        return this.values().filter(func);
    }
    find(func) {
        return this.values().find(func);
    }
    forEach(func) {
        this.values().forEach(func);
    }
    values() {
        return this._val.map(it => it.val);
    }
    bindFilter(pred) {
        return new ListFilterBinding_1.default(this, pred);
    }
    onElementChange(val, oldVal) {
        this.elementListeners.forEach(it => it(val, oldVal));
    }
}
exports.default = ObsList;
//# sourceMappingURL=ObsList.js.map