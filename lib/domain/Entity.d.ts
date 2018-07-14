import EntityKey from "./EntityKey";
import ValueObject from "./ValueObject";
export default abstract class Entity<K extends EntityKey> extends ValueObject {
    abstract key(): K;
    eq(val: this): boolean;
}
