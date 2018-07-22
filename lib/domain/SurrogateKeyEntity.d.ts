import Entity from "./Entity";
import SurrogateKey from "./SurrogateKey";
export default class SurrogateKeyEntity extends Entity<SurrogateKey> {
    protected $id?: SurrogateKey;
    readonly $key: SurrogateKey;
    hasKey(): boolean;
    assignKey(key: SurrogateKey): void;
}
