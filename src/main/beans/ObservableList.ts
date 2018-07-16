import {ArrayChangeListener, ValueChangeListener} from "../types";
import ObservableValue from "./ObservableValue";
import deprecated from "../decorator/deprecated";

// 保持するObservableValueはサブクラスのみ参照可にする
export default class ObservableList<T> {

    onElementChangeObj: ValueChangeListener<T> = this.onElementChange.bind(this)
    protected arrayListeners: ArrayChangeListener<T>[] = []
    protected elementListeners: ValueChangeListener<T>[] = []

    constructor(protected _obsValues: ObservableValue<T>[] = []) {
        this._obsValues.forEach(obs => {
            obs.addListener(this.onElementChangeObj)
        })
    }

    get values(): T[] {
        return this._obsValues.map(it => it.value)
    }

    @deprecated
    get val(): ObservableValue<T>[] {
        return this._obsValues
    }

    set val(value: ObservableValue<T>[]) {
        this._obsValues = value
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

    public push(...values: T[]): ObservableValue<T>[] {
        if (values.length === 0) {
            return []
        }
        const appends = values.map(it => new ObservableValue(it))
        this._obsValues.push(...appends)
        this.arrayListeners.forEach(lis => lis(values, []))
        appends.forEach(it => it.addListener(this.onElementChangeObj))
        return appends
    }

    public remove(...values: T[]) {
        // const obsValues = values.map(it => new ObservableValue(it))
        // obsValues.forEach(it => it.removeListener(this.onElementChangeObj))

        const removes: T[] = []
        this._obsValues = this._obsValues.filter(it => {
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


    public removeIf(predicate: (val: T) => boolean): number {
        const preLength = this.values.length
        const removes = this.values.filter(it => predicate(it))
        this.remove(...removes)
        // 削除した件数を返す
        return this.values.length - preLength
    }

    public clear(): void {
        if (this._obsValues.length === 0) {
            return
        }
        const oldVal = this.values
        this._obsValues = []
        this.arrayListeners.forEach(lis => lis([], oldVal))
    }

    public isEmpty(): boolean {
        return this._obsValues.length === 0
    }

    public isNotEmpty(): boolean {
        return !this.isEmpty()
    }

    public map<R>(func: (val: T) => R): R[] {
        return this.values.map(func)
    }

    public filter(func: (val: T) => boolean): T[] {
        return this.values.filter(func)
    }

    public find(func: (val: T) => boolean): T | undefined {
        return this.values.find(func)
    }

    public forEach(func: (val: T) => void): void {
        this.values.forEach(func)
    }

    private onElementChange(val: T, oldVal: T) {
        this.elementListeners.forEach(it => it(val, oldVal))
    }
}