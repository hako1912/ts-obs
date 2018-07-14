import EntityKey from "./EntityKey";
import Entity from "./Entity";
import MemoryStore from "./MemoryStore";

export default abstract class Repository<K extends EntityKey, E extends Entity<K>> {

    protected store: MemoryStore<K, E> = new MemoryStore()

    insert(entity: E): void {
        this.store.insert(entity)
    }

    update(newValue: E): void {
        this.store.update(newValue)
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

    // TODO: listFilterなどを必要に応じて子クラスで定義
}