import Repository from "./Repository";
import SurrogateKeyEntity from "./SurrogateKeyEntity";


export default abstract class SurrogateKeyRepository<E extends SurrogateKeyEntity> extends Repository<number, E> {

    private incremental = 0

    preInsert(entity: E) {
        // 連番キーを割り当てる
        if (!entity.hasKey()) {
            entity.assignKey(this.incremental++)
        }
    }

    preUpdate(newValue: E, key: number) {
        if (!newValue.hasKey()) {
            newValue.assignKey(key)
        }
    }

}