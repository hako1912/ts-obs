import ValueObject from "@/domain/ValueObject";
import EntityKey from "@/domain/EntityKey";
export default abstract class Entity<K extends EntityKey> extends ValueObject {
    abstract key(): K;
    eq(val: this): boolean;
}
