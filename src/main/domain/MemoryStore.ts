import ValueObject from "./ValueObject";
import Entity from "./Entity";

export class Entry<K, V> {
    constructor(private _key: K, private _val: V) {
    }

    get key(): K {
        return this._key;
    }

    get val(): V {
        return this._val;
    }
}

// TODO: createFilterとか
export default class MemoryStore<K extends ValueObject, V extends Entity<K>> {

    // TODO: to ObsList?
    store: Entry<K, V>[] = []

    insert(val: V): void {
        if (this.has(val.key())) {
            // すでに存在するキーに対して挿入しようとした場合
            throw Error(`key of ${val.key()} is already exists`)
        }
        this.store.push(new Entry(val.key(), val))
    }

    findBy(key: K): V {
        const entry = this.store.find(it => it.key.eq(key))
        if (entry == null) {
            throw Error('no value present')
        }
        return entry.val
    }

    has(key: K): boolean {
        const find = this.store.find(it => it.key.eq(key))
        return find != null
    }

    update(newVal: V) {
        if (!this.has(newVal.key())) {
            // 旧値が存在しない場合
            throw Error(`key of ${newVal.key()} is no value present`)
        }
        this.deleteBy(newVal.key())
        this.insert(newVal)
    }

    deleteBy(key: K) {
        this.store = this.store.filter(it => it.key.not(key))
    }

    size(): number {
        return this.store.length
    }


}