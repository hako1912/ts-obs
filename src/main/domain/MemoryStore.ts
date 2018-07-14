import ValueObject from "./ValueObject";
import Entity from "./Entity";
import ObsList from "../beans/ObsList";
import FilteredList from "../beans/binding/FilteredList";

// TODO: createFilterとか
export default class MemoryStore<K extends ValueObject, V extends Entity<K>> {

    store: ObsList<V> = new ObsList()

    insert(val: V): void {
        console.log(`insert: val=${JSON.stringify(val)}`)
        if (this.has(val.key())) {
            // すでに存在するキーに対して挿入しようとした場合
            throw Error(`key of ${val.key()} is already exists`)
        }
        // key validation
        if(val.key() == null){
            throw Error('undefined key')
        }
        this.store.push(val)
    }

    findBy(key: K): V {
        console.log(`findBy: key=${JSON.stringify(key)}`)
        const val = this.store.find(it => it.key().eq(key))
        if (val == null) {
            throw Error('no value present')
        }
        return val
    }

    has(key: K): boolean {
        const find = this.store.find(it => it.key().eq(key))
        return find != null
    }

    update(newVal: V, key: K) {
        console.log(`update: key=${JSON.stringify(key)}, newVal=${JSON.stringify(newVal)}`)
        if (!this.has(key)) {
            // 旧値が存在しない場合
            throw Error(`key of ${key} is no value present`)
        }
        if(this.deleteBy(key) === 0){
            throw Error('cant delete before update')
        }
        this.insert(newVal)
    }

    deleteBy(key: K): number {
        console.log(`deleteBy: key=${JSON.stringify(key)}`)
        return this.store.removeIf(it => it.key().eq(key))
    }

    size(): number {
        return this.store.val.length
    }

    bindFilter(pred: (val: V) => boolean): FilteredList<V>{
        return new FilteredList(this.store, pred)
    }

}