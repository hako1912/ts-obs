"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
var eq = __1.functions.eq;
var not = __1.functions.not;
class CustomMap {
    constructor() {
        this.entries = [];
    }
    get values() {
        return this.entries.map(it => it.value);
    }
    get keys() {
        return this.entries.map(it => it.key);
    }
    put(key, value) {
        let current = this.findEntry(key);
        if (current) {
            this.update(key, value);
        }
        else {
            this.entries.push(new CustomMap.Entry(key, value));
        }
    }
    remove(key) {
        const beforeSize = this.entries.length;
        console.log(`key=${key}`);
        this.entries = this.entries.filter(it => not(it.key, key));
        return this.entries.length < beforeSize;
    }
    update(key, value) {
        if (!this.remove(key)) {
            throw new Error('entry remove failed');
        }
        this.entries.push(new CustomMap.Entry(key, value));
    }
    clear() {
        this.entries = [];
    }
    forEach(func) {
        this.entries.forEach(it => func(it.value, it.key));
    }
    has(key) {
        return this.find(key) ? true : false;
    }
    find(key) {
        const entry = this.findEntry(key);
        return entry == null ? undefined : entry.value;
    }
    findEntry(key) {
        return this.entries.find(it => eq(it.key, key));
    }
}
exports.CustomMap = CustomMap;
(function (CustomMap) {
    class Entry {
        constructor(_key, _value) {
            this._key = _key;
            this._value = _value;
        }
        get key() {
            return this._key;
        }
        get value() {
            return this._value;
        }
    }
    CustomMap.Entry = Entry;
})(CustomMap = exports.CustomMap || (exports.CustomMap = {}));
