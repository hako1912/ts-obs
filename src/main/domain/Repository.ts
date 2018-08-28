import IndexedList from '../beans/binding/IndexedList';
import Entity from "./Entity";

export default abstract class Repository<E extends Entity> {

    private incrementalId = 0

    // ホントはprotectedにしたいけどLeftJoinedListを作るときにこまる
    public store = new IndexedList<number, E>(it => it.$id)

    findBy(id: number): E {
        const entity = this.store.find(it => it.$id === id)
        if (entity == null) {
            throw Error(`no value present. key=${id}`)
        }
        return entity
    }

    findAll() {
        return this.store.values
    }

    insert(...entities: E[]): void {
        entities.forEach(entity => {
            // 連番キーを割り当てる
            if (entity.$id == null || entity.$id < 0) {
                entity.$id = this.incrementalId++
            }
            // すでに存在するキーに対して挿入しようとした場合
            if (this.has(entity.$id)) {
                throw Error(`key=${entity.$id} is already exists.`)
            }
        })
        this.store.push(...entities)
    }

    update(...entities: E[]) {
        entities.forEach(entity => {
            if (entity.$id == null || entity.$id < 0) {
                throw Error(`updateError: key is not assigned.`)
            }
            const updateTarget = this.store.val.find(it => it.value.$id === entity.$id)
            if (updateTarget == null) {
                throw Error(`updateError: key=${entity.$id} is not exists.`)
            }
            updateTarget.value = entity
        })
    }

    deleteBy(...ids: number[]): void {
        ids.forEach(id => {
            if (!this.has(id)) {
                throw Error(`deleteError: key=${id} is not exists.`)
            }
            this.store.removeIf(it => it.$id === id)
        })
    }

    truncate() {
        this.store.clear()
        this.incrementalId = 0
    }

    size(): number {
        return this.store.val.length
    }

    has(id: number): boolean {
        return this.store.find(it => it.$id === id) != null
    }
}