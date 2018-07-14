import ValueObject from "@/domain/ValueObject";
import Entity from "@/domain/Entity";

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
export default class MemoryStore<K extends ValueObject<K>, V extends Entity<K>> {

    store: Entry<K, V>[] = []

    insert(val: V): void {
        const currentVal = this.findBy(val.key())
        if (currentVal != null) {
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

    update(newVal: V) {
        const currentVal = this.findBy(newVal.key())
        if (currentVal == null) {
            // 旧値が存在しない場合
            throw Error(`key of ${newVal.key()} is no value present`)
        }
        this.deleteBy(newVal.key())
        this.insert(newVal)
    }

    deleteBy(key: K) {
        this.store.filter(it => it.key.not(key))
    }

}