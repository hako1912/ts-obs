import {ArrayChangeListener, Predicate, ValueChangeListener} from "../types";
import ObsValue from "./ObsValue";
import ListFilterBinding from "./binding/ListFilterBinding";

export default class ObsList<T> {

    onElementChangeObj: ValueChangeListener<T> = this.onElementChange.bind(this)
    protected arrayListeners: ArrayChangeListener<T>[] = []
    protected elementListeners: ValueChangeListener<T>[] = []

    constructor(private _val: ObsValue<T>[] = []) {
        this._val.forEach(obs => {
            obs.addListener(this.onElementChangeObj)
        })
    }


    get val(): ObsValue<T>[] {
        return this._val
    }

    set val(value: ObsValue<T>[]) {
        this._val = value
    }

    public addElementListener(listener: ValueChangeListener<T>) {
        this.elementListeners.push(listener)
    }

    public addArrayListener(listener: ArrayChangeListener<T>) {
        this.arrayListeners.push(listener)
    }

    public removeArrayListener(listener: ArrayChangeListener<T>) {
        this.arrayListeners = this.arrayListeners.filter(it => listener !== it)
    }

    public removeElementListener(listener: ValueChangeListener<T>) {
        this.elementListeners = this.elementListeners.filter(it => listener !== it)
    }

    public push(...values: T[]): ObsValue<T>[] {
        if (values.length === 0) {
            return []
        }
        const appends = values.map(it => new ObsValue(it))
        this._val.push(...appends)
        this.arrayListeners.forEach(lis => lis(values, []))
        appends.forEach(it => it.addListener(this.onElementChangeObj))
        return appends
    }

    public remove(...values: T[]) {
        const obsValues = values.map(it => new ObsValue(it))
        obsValues.forEach(it => it.removeListener(this.onElementChangeObj))

        const removes: T[] = []
        this._val = this._val.filter(it => {
            if (values.indexOf(it.val) === -1) {
                return true
            }
            removes.push(it.val)
            return false
        })
        if (0 < removes.length) {
            this.arrayListeners.forEach(lis => lis([], removes))
        }
    }

    public removeIf(predicate: (val: T) => boolean) {
        const removes = this.values().filter(it => predicate(it))
        this.remove(...removes)
    }

    public clear() {
        if (this._val.length === 0) {
            return
        }
        const oldVal = this.values()
        this._val = []
        this.arrayListeners.forEach(lis => lis([], oldVal))
    }

    public isEmpty(): boolean {
        return this._val.length === 0
    }

    public isNotEmpty(): boolean {
        return !this.isEmpty()
    }

    public map<R>(func: (val: T) => R): R[] {
        return this.values().map(func)
    }

    public filter(func: (val: T) => boolean): T[] {
        return this.values().filter(func)
    }

    public find(func: (val: T) => boolean): T | undefined {
        return this.values().find(func)
    }

    public forEach(func: (val: T) => void): void {
        this.values().forEach(func)
    }

    public values(): T[] {
        return this._val.map(it => it.val)
    }

    public bindFilter(pred: Predicate<T>): ListFilterBinding<T> {
        return new ListFilterBinding(this, pred)
    }

    private onElementChange(val: T, oldVal: T) {
        this.elementListeners.forEach(it => it(val, oldVal))
    }
}