import ValueObject from "../beans/ValueObject";

export namespace functions {
    export function curry<T, U, R>(func: (a1: T, a2: U) => R) {
        return (v1: T) => (v2: U) => func(v1, v2)
    }

    export function part<T, U, R>(func: (a1: T, a2: U) => R, arg: T) {
        return (v2: U) => func(arg, v2)
    }

    export function eq<T>(val1: T, val2: T): boolean {
        if (val1 instanceof ValueObject && val2 instanceof ValueObject) {
            return val1.eq(val2)
        }
        return val1 == null ? val2 == null : val1 === val2
    }

    export function not<T>(val1: T, val2: T): boolean {
        return !eq(val1, val2)
    }

    export function mixin<T, U>(first: T, second: U): T & U {
        let result = <T & U>{};
        for (let id in first) {
            (<any>result)[id] = (<any>first)[id];
        }
        for (let id in second) {
            if (!result.hasOwnProperty(id)) {
                (<any>result)[id] = (<any>second)[id];
            }
        }
        return result;
    }
}

