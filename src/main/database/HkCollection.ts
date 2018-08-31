import HkDocument from "./HkDocument";
import IndexedList from '../beans/binding/IndexedList'

export default class HkCollection<D extends HkDocument> {

    // コレクションは生成時に必ずドキュメントに紐づくようにする
    // ルートはドキュメントなので、ドキュメントに紐づかないコレクションは存在しない
    constructor(protected _$parent: HkDocument) { }

    // IDはコレクション名で固定。変えてはいけない。
    readonly $id: string = this.constructor.name

    private documents = new IndexedList<number, D>(doc => doc.$id)
    
    private incrementalId: number = 0

    get $parent(): HkDocument | undefined { return this._$parent }

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

    put(...documents: D[]): void {
        documents.forEach(doc => {
            const id = doc.$id
            if (id == null || id < 0) {
                doc.update({ $id: this.incrementalId++, $parent: this })
            } else {
                if (this.has(id)) {
                    throw Error(`id=${id} is already exists.`)
                }
                if (this.incrementalId <= id) {
                    this.incrementalId = id + 1
                }
                doc.update({ $parent: this })
            }
        })
        this.documents.push(...documents)
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