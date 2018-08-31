import CustomMap from './../CustomMap';
import ObservableList from "../ObservableList";
import ObservableValue from "../ObservableValue";
export default class IndexedList<K, V> extends ObservableList<V> {
    readonly keySupplier: (val: V) => K;
    constructor(keySupplier: (val: V) => K);
    readonly keyValueMap: CustomMap<K, ObservableValue<V>>;
    findBy(key: K): V | null;
    push(...values: V[]): ObservableValue<V>[];
    remove(...values: V[]): void;
    clear(): void;
}
