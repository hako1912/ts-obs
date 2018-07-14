import Entity from "@/domain/Entity";
import ValueObject from "@/domain/ValueObject";
import MemoryStore from "@/domain/MemoryStore";

export default abstract class Repository<K extends ValueObject, E extends Entity<K>> {

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

    // TODO: listFilterなどを必要に応じて子クラスで定義
}