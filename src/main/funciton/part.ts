export default function part<T, U, R>(func: (a1: T, a2: U) => R, arg: T) {
    return (v2: U) => func(arg, v2)
}