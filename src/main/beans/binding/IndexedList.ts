import ObservableList from "../ObservableList";
import ObservableValue from "../ObservableValue";
import {CustomMap} from "../CustomMap";


// K: key
// V: value
export default class IndexedList<K, T> extends ObservableList<T> {
    constructor(private _keySupplier: (val: T) => K) {
        super()
    }

    private _keyValueMap = new CustomMap<K, T>()

    get keyValueMap(): CustomMap<K, T> {
        return this._keyValueMap;
    }

    get keySupplier(): (val: T) => K {
        return this._keySupplier;
    }

    public push(...values: T[]): ObservableValue<T>[] {
        // validate duplicate key
        const keyValues = values.map(it => {
            return {
                key: this._keySupplier(it),
                val: it
            }
        })
        const errors = keyValues.map(it => it.key).filter(it => this._keyValueMap.has(it))
        if (0 < errors.length) {
            throw new Error(`duplicated keys: ${errors}`)
        }

        keyValues.forEach(it => this._keyValueMap.put(it.key, it.val))
        return super.push(...values)
    }


    remove(...values: T[]): void {
        values.map(it => this._keySupplier(it)).forEach(it => this._keyValueMap.remove(it))
        super.remove(...values);
    }

    clear(): void {
        this._keyValueMap.clear()
        super.clear();
    }
}