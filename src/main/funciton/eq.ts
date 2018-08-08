import ValueObject from "../beans/ValueObject";

export default function eq<T>(val1: T, val2: T): boolean {
    if (val1 instanceof ValueObject && val2 instanceof ValueObject) {
        return val1.eq(val2)
    }
    return val1 == null ? val2 == null : val1 === val2
}