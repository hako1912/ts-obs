import Entity from "@/domain/Entity";
import ValueObject from "@/domain/ValueObject";
import MemoryStore from "@/domain/MemoryStore";
export default abstract class Repository<K extends ValueObject<K>, E extends Entity<K>> {
    protected store: MemoryStore<K, E>;
    insert(entity: E): void;
    update(newValue: E): void;
    remove(key: K): void;
}
