import EntityKey from "./EntityKey";
import Entity from "./Entity";
import {functions} from "../funciton/functions";
import IndexedList from "../beans/binding/IndexedList";
import eq = functions.eq;

export default abstract class Repository<K extends EntityKey, E extends Entity<K>> {

    protected _store = new IndexedList<K, E>(it => it.$key)

    get store(): IndexedList<K, E> {
        return this._store
    }

    preInsert(entity: E) {
        // noop
    }

    insert(val: E): void {
        // サブクラスで登録前に処理を挟む場合ここで
        this.preInsert(val)
        console.log(`insert: val=${JSON.stringify(val)}`)


        if (this.has(val.$key)) {
            // すでに存在するキーに対して挿入しようとした場合
            throw Error(`key of ${val.$key} is already exists`)
        }
        // $key validation
        if (val.$key == null) {
            throw Error('undefined $key')
        }
        this.store.push(val)
    }

    preUpdate(newVal: E, key: K) {
        // noop
    }

    update(newVal: E, key: K) {
        // サブクラスで登録前に処理を挟む場合ここで
        this.preUpdate(newVal, key)
        console.log(`update: key=${JSON.stringify(key)}, newVal=${JSON.stringify(newVal)}`)

        if (!this.has(key)) {
            // 旧値が存在しない場合
            throw Error(`key of ${key} is no value present`)
        }
        if (this.deleteBy(key) === 0) {
            throw Error('cant delete before update')
        }
        this.insert(newVal)
    }

    deleteBy(key: K): number {
        console.log(`deleteBy: key=${JSON.stringify(key)}`)
        return this.store.removeIf(it => eq(it.$key, key))
    }

    size(): number {
        return this.store.val.length
    }

    findBy(key: K): E {
        console.log(`findBy: key=${JSON.stringify(key)}`)
        const val = this.store.find(it => eq(it.$key, key))
        if (val == null) {
            throw Error(`no value present. key=${JSON.stringify(key)}`)
        }
        return val
    }

    has(key: K): boolean {
        const find = this.store.find(it => it.$key.eq(key))
        return find != null
    }
}