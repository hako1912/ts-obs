export declare module Functions {
    function curry<T, U, R>(func: (a1: T, a2: U) => R): (v1: T) => (v2: U) => R;
    function part<T, U, R>(func: (a1: T, a2: U) => R, arg: T): (v2: U) => R;
    function eq<T>(val1: T, val2: T): boolean;
}
