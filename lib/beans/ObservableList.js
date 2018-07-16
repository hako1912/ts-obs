"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ObservableValue_1 = __importDefault(require("./ObservableValue"));
const deprecated_1 = __importDefault(require("../decorator/deprecated"));
// 保持するObservableValueはサブクラスのみ参照可にする
class ObservableList {
    constructor(_obsValues = []) {
        this._obsValues = _obsValues;
        this.onElementChangeObj = this.onElementChange.bind(this);
        this.arrayListeners = [];
        this.elementListeners = [];
        this._obsValues.forEach(obs => {
            obs.addListener(this.onElementChangeObj);
        });
    }
    get values() {
        return this._obsValues.map(it => it.value);
    }
    get val() {
        return this._obsValues;
    }
    set val(value) {
        this._obsValues = value;
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
        const appends = values.map(it => new ObservableValue_1.default(it));
        this._obsValues.push(...appends);
        this.arrayListeners.forEach(lis => lis(values, []));
        appends.forEach(it => it.addListener(this.onElementChangeObj));
        return appends;
    }
    remove(...values) {
        // const obsValues = values.map(it => new ObservableValue(it))
        // obsValues.forEach(it => it.removeListener(this.onElementChangeObj))
        const removes = [];
        this._obsValues = this._obsValues.filter(it => {
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
        const preLength = this.values.length;
        const removes = this.values.filter(it => predicate(it));
        this.remove(...removes);
        // 削除した件数を返す
        return this.values.length - preLength;
    }
    clear() {
        if (this._obsValues.length === 0) {
            return;
        }
        const oldVal = this.values;
        this._obsValues = [];
        this.arrayListeners.forEach(lis => lis([], oldVal));
    }
    isEmpty() {
        return this._obsValues.length === 0;
    }
    isNotEmpty() {
        return !this.isEmpty();
    }
    map(func) {
        return this.values.map(func);
    }
    filter(func) {
        return this.values.filter(func);
    }
    find(func) {
        return this.values.find(func);
    }
    forEach(func) {
        this.values.forEach(func);
    }
    onElementChange(val, oldVal) {
        this.elementListeners.forEach(it => it(val, oldVal));
    }
}
__decorate([
    deprecated_1.default
], ObservableList.prototype, "val", null);
exports.default = ObservableList;
