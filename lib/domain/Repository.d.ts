import EntityKey from "./EntityKey";
import Entity from "./Entity";
import MemoryStore from "./MemoryStore";
export default abstract class Repository<K extends EntityKey, E extends Entity<K>> {
    protected store: MemoryStore<K, E>;
    insert(entity: E): void;
    update(newValue: E): void;
    remove(key: K): void;
    size(): number;
    findBy(key: K): E;
    has(key: K): boolean;
}
