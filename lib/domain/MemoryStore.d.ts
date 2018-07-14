import ValueObject from "./ValueObject";
import Entity from "./Entity";
export declare class Entry<K, V> {
    private _key;
    private _val;
    constructor(_key: K, _val: V);
    readonly key: K;
    readonly val: V;
}
export default class MemoryStore<K extends ValueObject, V extends Entity<K>> {
    store: Entry<K, V>[];
    insert(val: V): void;
    findBy(key: K): V;
    has(key: K): boolean;
    update(newVal: V, key: K): void;
    deleteBy(key: K): void;
    size(): number;
}