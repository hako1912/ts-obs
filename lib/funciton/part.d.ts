export default function part<T, U, R>(func: (a1: T, a2: U) => R, arg: T): (v2: U) => R;
