import CustomMapEntry from "./CustomMapEntry"

export default class CustomMap<K, V> {
    private entries: CustomMapEntry<K, V>[] = []

    get values(): V[] {
        return this.entries.map(it => it.value)
    }

    get keys(): K[] {
        return this.entries.map(it => it.key)
    }

    put(key: K, value: V): void {
        let current = this.findEntry(key)
        if (current) {
            this.update(key, value)
        } else {
            this.entries.push(new CustomMapEntry(key, value))
        }
    }

    remove(key: K): boolean {
        const beforeSize = this.entries.length
        console.log(`key=${key}`)
        this.entries = this.entries.filter(it => it.key !== key)
        return this.entries.length < beforeSize
    }

    update(key: K, value: V): void {
        if (!this.remove(key)) {
            throw new Error('entry remove failed')
        }
        this.entries.push(new CustomMapEntry(key, value))
    }

    clear(): void {
        this.entries = []
    }

    forEach(func: (value: V, key: K) => void): void {
        this.entries.forEach(it => func(it.value, it.key))
    }

    has(key: K): boolean {
        return this.find(key) ? true : false
    }

    find(key: K): V | undefined {
        const entry = this.findEntry(key)
        return entry == null ? undefined : entry.value
    }

    private findEntry(key: K): CustomMapEntry<K, V> | undefined {
        return this.entries.find(it => it.key === key)
    }

}