import EntityKey from "./EntityKey";
import Entity from "./Entity";
import MemoryStore from "./MemoryStore";
export default abstract class Repository<K extends EntityKey, E extends Entity<K>> {
    protected store: MemoryStore<K, E>;
    preInsert(entity: E): void;
    insert(entity: E): void;
    preUpdate(newVal: E, key: K): void;
    update(newValue: E, key: K): void;
    remove(key: K): void;
    size(): number;
    findBy(key: K): E;
    has(key: K): boolean;
}
