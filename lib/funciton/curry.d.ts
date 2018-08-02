export default function curry<T, U, R>(func: (a1: T, a2: U) => R): (v1: T) => (v2: U) => R;
