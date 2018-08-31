import IndexedList from '../beans/binding/IndexedList';
import Entity from "./Entity";
export default abstract class Repository<E extends Entity> {
    private incrementalId;
    store: IndexedList<number, E>;
    findBy(id: number): E;
    findAll(): E[];
    insert(...entities: E[]): void;
    update(...entities: E[]): void;
    deleteBy(...ids: number[]): void;
    truncate(): void;
    size(): number;
    has(id: number): boolean;
}
