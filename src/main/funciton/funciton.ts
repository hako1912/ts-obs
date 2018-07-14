import ValueObject from "../beans/ValueObject";

export module Functions {
    export function curry<T, U, R>(func: (a1: T, a2: U) => R) {
        return (v1: T) => (v2: U) => func(v1, v2)
    }

    export function part<T, U, R>(func: (a1: T, a2: U) => R, arg: T) {
        return (v2: U) => func(arg, v2)
    }

    export function eq<T>(val1: T, val2: T): boolean {
        if(val1 instanceof ValueObject && val2 instanceof ValueObject){
            return val1.eq(val2)
        }
        return val1 == null ? val2 == null : val1 === val2
    }
}

