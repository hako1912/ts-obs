import Repository from "./Repository";
import SurrogateKeyEntity from "./SurrogateKeyEntity";
import SurrogateKey from "./SurrogateKey";


export default abstract class SurrogateKeyRepository<E extends SurrogateKeyEntity> extends Repository<SurrogateKey, E> {

    private incremental = 0

    preInsert(entity: E) {
        // 連番キーを割り当てる
        if (!entity.hasKey()) {
            entity.assignKey(new SurrogateKey(this.incremental++))
        }
    }

    preUpdate(newValue: E, key: SurrogateKey) {
        newValue.assignKey(key)
    }

}