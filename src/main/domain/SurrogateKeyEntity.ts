import Entity from "./Entity";

export default class SurrogateKeyEntity extends Entity<number> {
    // 登録時に発行される
    protected $id?: number

    get $key(): number {
        if (this.$id == null) {
            throw new Error('unassigned $key')
        }
        return this.$id;
    }

    public hasKey(): boolean {
        return this.$id != null
    }

    public assignKey(key: number) {
        if (this.hasKey()) {
            throw new Error('already unassigned')
        }
        this.$id = key
    }

}