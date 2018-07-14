export module Functions {
    export function curry<T, U, R>(func: (a1: T, a2: U) => R) {
        return (v1: T) => (v2: U) => func(v1, v2)
    }

    export function part<T, U, R>(func: (a1: T, a2: U) => R, arg: T) {
        return (v2: U) => func(arg, v2)
    }
}

function add(n1: number[], n2: number): boolean {
    return false
}


