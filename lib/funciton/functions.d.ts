export declare namespace functions {
    function curry<T, U, R>(func: (a1: T, a2: U) => R): (v1: T) => (v2: U) => R;
    function part<T, U, R>(func: (a1: T, a2: U) => R, arg: T): (v2: U) => R;
    function eq<T>(val1: T, val2: T): boolean;
    function not<T>(val1: T, val2: T): boolean;
    function mixin<T, U>(first: T, second: U): T & U;
    function getProperties(obj: any, properties?: string[]): string[];
}
