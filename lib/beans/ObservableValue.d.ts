declare type ValueChangeListener<T> = (now: T, old: T) => void;
export default class ObservableValue<T> {
    private _val;
    protected listeners: ValueChangeListener<T>[];
    constructor(_val: T);
    value: T;
    val: T;
    addListener(listener: ValueChangeListener<T>): void;
    removeListener(listener: ValueChangeListener<T>): void;
}
export {};
