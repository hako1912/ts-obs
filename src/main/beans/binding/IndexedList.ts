import CustomMap from './../CustomMap';
import ObservableList from "../ObservableList";
import ObservableValue from "../ObservableValue";


// K: key
// V: value
export default class IndexedList<K, V> extends ObservableList<V> {

    constructor(readonly keySupplier: (val: V) => K) {
        super()
    }

    readonly keyValueMap = new CustomMap<K, ObservableValue<V>>()

    public findBy(key: K): V | null {
        const val = this.keyValueMap.find(key)
        return val == null ? null : val.value
    }

    public push(...values: V[]): ObservableValue<V>[] {

        values.forEach(it => {
            const key = this.keySupplier(it)
            if (key == null) {
                throw new Error('キーが取得できない。')
            }
            if (this.keyValueMap.has(key)) {
                throw new Error(`duplicated key=${key}`)
            }
        })

        const added = super.push(...values)
        added.forEach(it => {
            this.keyValueMap.put(this.keySupplier(it.value), it)
        })
        return added
    }


    remove(...values: V[]): void {
        values.map(it => this.keySupplier(it)).forEach(it => this.keyValueMap.remove(it))
        super.remove(...values);
    }

    clear(): void {
        this.keyValueMap.clear()
        super.clear();
    }
}