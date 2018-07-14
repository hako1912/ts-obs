export default abstract class ValueObject {
    abstract eq(val: this): boolean

    not(val: this): boolean {
        return !this.eq(val)
    }
}

