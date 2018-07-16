"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ObservableList_1 = __importDefault(require("../ObservableList"));
const CustomMap_1 = require("../CustomMap");
// K: $key
// V: value
class IndexedList extends ObservableList_1.default {
    constructor(_keySupplier) {
        super();
        this._keySupplier = _keySupplier;
        this._keyValueMap = new CustomMap_1.CustomMap();
    }
    get keyValueMap() {
        return this._keyValueMap;
    }
    get keySupplier() {
        return this._keySupplier;
    }
    push(...values) {
        // validate duplicate $key
        const keyValues = values.map(it => {
            return {
                key: this._keySupplier(it),
                val: it
            };
        });
        const errors = keyValues.map(it => it.key).filter(it => this._keyValueMap.has(it));
        if (0 < errors.length) {
            throw new Error(`duplicated keys: ${errors}`);
        }
        keyValues.forEach(it => this._keyValueMap.put(it.key, it.val));
        return super.push(...values);
    }
    remove(...values) {
        values.map(it => this._keySupplier(it)).forEach(it => this._keyValueMap.remove(it));
        super.remove(...values);
    }
    clear() {
        this._keyValueMap.clear();
        super.clear();
    }
}
exports.default = IndexedList;
