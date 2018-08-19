import EntityKey from "./EntityKey";
import ValueObject from "../beans/ValueObject";
import eq from "../funciton/eq"

export default abstract class Entity<K extends EntityKey | number> extends ValueObject {
    abstract get $key(): K

    eq(val: this): boolean {
        return eq(this.$key, val.$key);
    }
}



