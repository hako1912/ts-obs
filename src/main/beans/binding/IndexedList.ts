import ObservableList from "../ObservableList";
import ObservableValue from "../ObservableValue";


// K: key
// V: value
export default class IndexedList<K, T> extends ObservableList<T> {
    private keyValueMap = new Map<K, T>()

    constructor(private _keySupplier: (val: T) => K) {
        super()
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
        const errors = keyValues.map(it => it.key).filter(it => this.keyValueMap.has(it))
        if (0 < errors.length) {
            throw new Error(`duplicated keys: ${errors}`)
        }

        keyValues.forEach(it => this.keyValueMap.set(it.key, it.val))
        return super.push(...values)
    }


    remove(...values: T[]): void {
        values.map(it => this._keySupplier(it)).forEach(this.keyValueMap.delete)
        super.remove(...values);
    }

    clear(): void {
        this.keyValueMap.clear()
        super.clear();
    }
}