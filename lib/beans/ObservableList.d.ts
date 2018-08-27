import ObservableValue from "./ObservableValue";
declare type ArrayChangeListener<T> = (appends: T[], removes: T[]) => void;
declare type ValueChangeListener<T> = (now: T, old: T) => void;
export default class ObservableList<T> {
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
export {};
