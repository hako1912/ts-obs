"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Entry {
    constructor(_key, _val) {
        this._key = _key;
        this._val = _val;
    }
    get key() {
        return this._key;
    }
    get val() {
        return this._val;
    }
}
exports.Entry = Entry;
// TODO: createFilterとか
class MemoryStore {
    constructor() {
        // TODO: to ObservableList?
        this.store = [];
    }
    insert(val) {
        if (this.has(val.key())) {
            // すでに存在するキーに対して挿入しようとした場合
            throw Error(`key of ${val.key()} is already exists`);
        }
        this.store.push(new Entry(val.key(), val));
    }
    findBy(key) {
        const entry = this.store.find(it => it.key.eq(key));
        if (entry == null) {
            throw Error('no value present');
        }
        return entry.vals;
    }
    has(key) {
        const find = this.store.find(it => it.key.eq(key));
        return find != null;
    }
    update(newVal, key) {
        if (!this.has(key)) {
            // 旧値が存在しない場合
            throw Error(`key of ${key} is no value present`);
        }
        this.deleteBy(key);
        this.insert(newVal);
    }
    deleteBy(key) {
        this.store = this.store.filter(it => it.key.not(key));
    }
    size() {
        return this.store.length;
    }
}
exports.default = MemoryStore;
