import ValueObject from "@/domain/ValueObject";
import EntityKey from "@/domain/EntityKey";

export default abstract class Entity<K extends EntityKey> extends ValueObject {
    abstract key(): K

    eq(val: this): boolean {
        // キー同士が同じなら同じエンティティ
        return this.key().eq(val.key());
    }
}



