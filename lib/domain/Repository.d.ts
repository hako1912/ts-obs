import EntityKey from "./EntityKey";
import Entity from "./Entity";
import IndexedList from "../beans/binding/IndexedList";
export default abstract class Repository<K extends EntityKey, E extends Entity<K>> {
    protected _store: IndexedList<K, E>;
    readonly store: IndexedList<K, E>;
    preInsert(entity: E): void;
    insert(val: E): void;
    preUpdate(newVal: E, key: K): void;
    update(newVal: E, key: K): void;
    deleteBy(key: K): number;
    size(): number;
    findBy(key: K): E;
    has(key: K): boolean;
}
