import EntityKey from "./EntityKey";
import Entity from "./Entity";
import ObservableList from "../beans/ObservableList";
export default abstract class Repository<K extends EntityKey, E extends Entity<K>> {
    protected _store: ObservableList<E>;
    readonly store: ObservableList<E>;
    preInsert(entity: E): void;
    insert(val: E): void;
    preUpdate(newVal: E, key: K): void;
    update(newVal: E, key: K): void;
    deleteBy(key: K): number;
    size(): number;
    findBy(key: K): E;
    has(key: K): boolean;
}
