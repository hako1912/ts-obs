// types
export declare type ArrayChangeListener<T> = (appends: T[], removes: T[]) => void;
export declare type ValueChangeListener<T> = (now: T, old: T) => void;
export declare type Predicate<T> = (val: T) => boolean;
export declare type Class<T> = new () => T;
export declare type Flatten<T> = T extends ObservableValue<infer U> ? U : T;

// function
export function curry<T, U, R>(func: (a1: T, a2: U) => R): (v1: T) => (v2: U) => R;
export function eq<T>(val1: T, val2: T): boolean;
export function not<T>(val1: T, val2: T): boolean;
export function part<T, U, R>(func: (a1: T, a2: U) => R, arg: T): (v2: U) => R;
export function mixin<T, U>(first: T, second: U): T & U;
export function getProperties(obj: any, properties?: string[]): string[];

export class Predicates {
    private constructor();
    static readonly always: Predicate<any>;
    static readonly never: Predicate<any>;
    static negate<T>(pred: Predicate<T>): Predicate<T>;
}

// di
export class Dependencies {
    static container: Map<Class<any>, any>;
    static inject<T>(clazz: Class<T>): T;
}

// beans
export class CustomMap<K, V> {
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
export namespace CustomMap {
    class Entry<K, V> {
        private _key;
        private _value;
        constructor(_key: K, _value: V);
        readonly key: K;
        readonly value: V;
    }
}
export class ObservableList<T> {
    protected _obsValues: ObservableValue<T>[];
    onElementChangeObj: ValueChangeListener<T>;
    protected arrayListeners: ArrayChangeListener<T>[];
    protected elementListeners: ValueChangeListener<T>[];
    constructor(_obsValues?: ObservableValue<T>[]);
    readonly values: T[];
    val: ObservableValue<T>[];
    addElementListener(listener: ValueChangeListener<T>): void;
    addArrayListener(listener: ArrayChangeListener<T>): void;
    removeArrayListener(listener: ArrayChangeListener<T>): void;
    removeElementListener(listener: ValueChangeListener<T>): void;
    push(...values: T[]): ObservableValue<T>[];
    remove(...values: T[]): void;
    removeIf(predicate: (val: T) => boolean): number;
    clear(): void;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
    map<R>(func: (val: T) => R): R[];
    filter(func: (val: T) => boolean): T[];
    find(func: (val: T) => boolean): T | undefined;
    forEach(func: (val: T) => void): void;
    private onElementChange;
}
export class ObservableValue<T> {
    private _val;
    protected listeners: ValueChangeListener<T>[];
    constructor(_val: T);
    value: T;
    val: T;
    addListener(listener: ValueChangeListener<T>): void;
    removeListener(listener: ValueChangeListener<T>): void;
}
export abstract class ValueObject {
    abstract eq(val: this): boolean;
    not(val: this): boolean;
}
// beans/binding
export class FilteredList<T> extends ObservableList<T> {
    private obs;
    private pred;
    constructor(obs: ObservableList<T>, pred: (val: T) => boolean);
}
export class IndexedList<K, T> extends ObservableList<T> {
    private _keySupplier;
    constructor(_keySupplier: (val: T) => K);
    private _keyValueMap;
    readonly keyValueMap: CustomMap<K, T>;
    readonly keySupplier: (val: T) => K;
    push(...values: T[]): ObservableValue<T>[];
    remove(...values: T[]): void;
    clear(): void;
}
export class LeftJoinedList<K, P, S> extends IndexedList<K, P & {
    [E in keyof S]: E | undefined;
}> {
    constructor(primaries: IndexedList<K, P>, secondaries: IndexedList<K, S>, foreignKeySupplier?: (secondaryVal: S) => K);
}
export class ValueBinding<T, U = T> {
    private obs;
    private mapper;
    constructor(obs: ObservableValue<T>, mapper: (val: T) => U);
    private val;
}

// domain
export abstract class Repository<K extends EntityKey, E extends Entity<K>> {
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
export abstract class Entity<K extends EntityKey> extends ValueObject {
    abstract readonly $key: K;
    eq(val: this): boolean;
}
export class SurrogateKey extends EntityKey {
    private id;
    constructor(id: number);
    eq(val: this): boolean;
}
export abstract class SurrogateKeyRepository<E extends SurrogateKeyEntity> extends Repository<SurrogateKey, E> {
    private incremental;
    preInsert(entity: E): void;
    preUpdate(newValue: E, key: SurrogateKey): void;
}
export class SurrogateKeyEntity extends Entity<SurrogateKey> {
    protected $id?: SurrogateKey;
    readonly $key: SurrogateKey;
    hasKey(): boolean;
    assignKey(key: SurrogateKey): void;
}
export abstract class EntityKey extends ValueObject {
}
