import { CustomMap } from './../CustomMap';
import ObservableList from "../ObservableList";
import ObservableValue from "../ObservableValue";
export default class IndexedList<K, T> extends ObservableList<T> {
    private _keySupplier;
    constructor(_keySupplier: (val: T) => K);
    private _keyValueMap;
    readonly keyValueMap: CustomMap<K, T>;
    readonly keySupplier: (val: T) => K;
    push(...values: T[]): ObservableValue<T>[];
    remove(...values: T[]): void;
    clear(): void;
}
