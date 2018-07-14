import Entity from "@/domain/Entity";
import MemoryStore from "@/domain/MemoryStore";
import EntityKey from "@/domain/EntityKey";
export default abstract class Repository<K extends EntityKey, E extends Entity<K>> {
    protected store: MemoryStore<K, E>;
    insert(entity: E): void;
    update(newValue: E): void;
    remove(key: K): void;
    size(): number;
    findBy(key: K): E;
    has(key: K): boolean;
}
