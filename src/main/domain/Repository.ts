import EntityKey from "./EntityKey";
import Entity from "./Entity";
import MemoryStore from "./MemoryStore";
import ObsList from "../beans/ObsList";
import FilteredList from "../beans/binding/FilteredList";

export default abstract class Repository<K extends EntityKey, E extends Entity<K>> {

    protected store: MemoryStore<K, E> = new MemoryStore()

    preInsert(entity: E) {
        // noop
    }

    insert(entity: E): void {
        // サブクラスで登録前に処理を挟む場合ここで
        this.preInsert(entity)
        this.store.insert(entity)
    }

    preUpdate(newVal: E, key: K){
        // noop
    }

    update(newValue: E, key: K): void {
        // サブクラスで登録前に処理を挟む場合ここで
        this.preUpdate(newValue, key)
        this.store.update(newValue, key)
    }

    remove(key: K): void {
        this.store.deleteBy(key)
    }

    size(): number {
        return this.store.size()
    }

    findBy(key: K): E {
        return this.store.findBy(key)
    }

    has(key: K): boolean {
        return this.store.has(key)
    }

    bindFilter(pred: (entity: E) => boolean = it => true): FilteredList<E>{
        // 引数を省略すると全取得
        return this.store.bindFilter(pred)
    }
}