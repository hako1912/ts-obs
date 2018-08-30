import HkDocument from "./HkDocument";
import IndexedList from '../beans/binding/IndexedList'

export default class HkCollection<D extends HkDocument> {
    public $id: string = this.constructor.name

    private incrementalId: number = 0

    private documents = new IndexedList<number, D>(doc => doc.$id)

    constructor(readonly $parent?: HkDocument) {
    }

    static copy<T extends HkDocument>(col: HkCollection<T>): HkCollection<T> {
        const copyCol = new HkCollection<T>(col.$parent)
        col.documents.forEach(doc => {
            copyCol.put(doc.copy())
        })
        return copyCol
    }

    findBy(id: number): D {
        const doc = this.documents.findBy(id)
        if (doc == null) {
            throw Error(`no value present. id=${id}`)
        }
        return doc
    }

    findAll() {
        return this.documents.values
    }

    put(...documents: D[]): D[] {
        let added: D[] = []
        documents.forEach(doc => {
            const id = doc.$id
            if (id == null || id < 0) {
                added.push(doc.copy({
                    $id: this.incrementalId++,
                    $parent: this
                }) as D)
            } else {
                if (this.has(id)) {
                    throw Error(`key=${id} is already exists.`)
                }
                if (this.incrementalId <= id) {
                    this.incrementalId = id + 1
                }
                added.push(doc.copy(
                    {
                        $parent: this
                    }
                ) as D)
            }

        })
        this.documents.push(...added)
        return added
    }

    update(...documents: D[]) {
        documents.forEach(doc => {
            if (doc.$id == null || doc.$id < 0) {
                throw Error(`updateError: key is not assigned.`)
            }
            const updateTarget = this.documents.val.find(it => it.value.$id === doc.$id)
            if (updateTarget == null) {
                throw Error(`updateError: key=${doc.$id} is not exists.`)
            }
            updateTarget.value = doc
        })
    }

    deleteBy(...ids: number[]): void {
        ids.forEach(id => {
            if (!this.has(id)) {
                throw Error(`deleteError: key=${id} is not exists.`)
            }
            this.documents.removeIf(it => it.$id === id)
        })
    }

    truncate() {
        this.documents.clear()
        this.incrementalId = 0
    }

    size(): number {
        return this.documents.val.length
    }

    has(id: number): boolean {
        return this.documents.findBy(id) != null
    }
}