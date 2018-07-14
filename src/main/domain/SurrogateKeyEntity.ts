import Entity from "./Entity";
import SurrogateKey from "./SurrogateKey";

export default class SurrogateKeyEntity extends Entity<SurrogateKey> {
    // 登録時に発行される
    protected id?: SurrogateKey

    key(): SurrogateKey {
        if (!this.id) {
            throw new Error('unassigned key')
        }
        return this.id;
    }

    public hasKey(): boolean {
        return this.id != null
    }

    public assignKey(key: SurrogateKey) {
        if (this.id) {
            throw new Error('already unassigned')
        }
        this.id = key
    }

}