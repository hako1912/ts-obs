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
        // TODO: to ObsList?
        this.store = [];
    }
    insert(val) {
        const currentVal = this.findBy(val.key());
        if (currentVal != null) {
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
        return entry.val;
    }
    update(newVal) {
        const currentVal = this.findBy(newVal.key());
        if (currentVal == null) {
            // 旧値が存在しない場合
            throw Error(`key of ${newVal.key()} is no value present`);
        }
        this.deleteBy(newVal.key());
        this.insert(newVal);
    }
    deleteBy(key) {
        this.store.filter(it => it.key.not(key));
    }
}
exports.default = MemoryStore;
//# sourceMappingURL=MemoryStore.js.map