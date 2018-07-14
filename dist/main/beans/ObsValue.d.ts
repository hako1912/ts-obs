import { ValueChangeListener } from "../types";
export default class ObsValue<T> {
    private _val;
    protected listeners: ValueChangeListener<T>[];
    constructor(_val: T);
    val: T;
    addListener(listener: ValueChangeListener<T>): void;
    removeListener(listener: ValueChangeListener<T>): void;
}
