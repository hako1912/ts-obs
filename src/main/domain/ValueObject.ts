

export default abstract class ValueObject<T> {
    abstract eq(val: T): boolean

    not(val: T): boolean {
        return !this.eq(val)
    }
}