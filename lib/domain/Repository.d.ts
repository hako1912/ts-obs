import IndexedList from '../beans/binding/IndexedList';
import Entity from "./Entity";
export default abstract class Repository<E extends Entity> {
    private incrementalId;
    store: IndexedList<number, E>;
    findBy(id: number): E;
    findAll(): E[];
    insert(entity: E): number;
    update(entity: E): void;
    deleteBy(id: number): void;
    truncate(): void;
    size(): number;
    has(id: number): boolean;
}
