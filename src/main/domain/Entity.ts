import EntityKey from "./EntityKey";
import ValueObject from "../beans/ValueObject";

export default abstract class Entity<K extends EntityKey> extends ValueObject {
    abstract get $key(): K

    eq(val: this): boolean {
        return this.$key.eq(val.$key);
    }
}



