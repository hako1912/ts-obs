export default function curry<T, U, R>(func: (a1: T, a2: U) => R) {
    return (v1: T) => (v2: U) => func(v1, v2)
}