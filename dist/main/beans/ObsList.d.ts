import { ArrayChangeListener, Predicate, ValueChangeListener } from "../types";
import ObsValue from "@/beans/ObsValue";
import ListFilterBinding from "@/beans/binding/ListFilterBinding";
export default class ObsList<T> {
    private _val;
    onElementChangeObj: ValueChangeListener<T>;
    protected arrayListeners: ArrayChangeListener<T>[];
    protected elementListeners: ValueChangeListener<T>[];
    constructor(_val?: ObsValue<T>[]);
    val: ObsValue<T>[];
    addElementListener(listener: ValueChangeListener<T>): void;
    addArrayListener(listener: ArrayChangeListener<T>): void;
    removeArrayListener(listener: ArrayChangeListener<T>): void;
    removeElementListener(listener: ValueChangeListener<T>): void;
    push(...values: T[]): ObsValue<T>[];
    remove(...values: T[]): void;
    removeIf(predicate: (val: T) => boolean): void;
    clear(): void;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
    map<R>(func: (val: T) => R): R[];
    filter(func: (val: T) => boolean): T[];
    find(func: (val: T) => boolean): T | undefined;
    forEach(func: (val: T) => void): void;
    values(): T[];
    bindFilter(pred: Predicate<T>): ListFilterBinding<T>;
    private onElementChange;
}
