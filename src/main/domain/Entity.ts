import ValueObject from "@/domain/ValueObject";

export default abstract class Entity<K extends ValueObject> extends ValueObject {
    abstract key(): K
}



