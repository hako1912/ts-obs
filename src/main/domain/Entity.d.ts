import ValueObject from "@/domain/ValueObject";
export default abstract class Entity<K extends ValueObject<K>> extends ValueObject<Entity<K>> {
    abstract key(): K;
}
