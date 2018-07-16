export declare class CustomMap<K, V> {
    private entries;
    readonly values: V[];
    readonly keys: K[];
    put(key: K, value: V): void;
    remove(key: K): boolean;
    update(key: K, value: V): void;
    clear(): void;
    forEach(func: (value: V, key: K) => void): void;
    has(key: K): boolean;
    find(key: K): V | undefined;
    private findEntry;
}
export declare namespace CustomMap {
    class Entry<K, V> {
        private _key;
        private _value;
        constructor(_key: K, _value: V);
        readonly key: K;
        readonly value: V;
    }
}
