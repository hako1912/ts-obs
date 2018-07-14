import Repository from "./Repository";
import SurrogateKeyEntity from "./SurrogateKeyEntity";
import SurrogateKey from "./SurrogateKey";
export default abstract class SurrogateKeyRepository<E extends SurrogateKeyEntity> extends Repository<SurrogateKey, E> {
    private incremental;
    constructor();
    preInsert(entity: E): void;
    preUpdate(newValue: E, key: SurrogateKey): void;
}
