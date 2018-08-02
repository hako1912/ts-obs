import EntityKey from "./EntityKey";
import ValueObject from "../beans/ValueObject";
export default abstract class Entity<K extends EntityKey> extends ValueObject {
    abstract readonly $key: K;
    eq(val: this): boolean;
}
