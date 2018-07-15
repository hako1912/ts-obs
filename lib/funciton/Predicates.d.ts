import { Predicate } from "../types";
export default class Predicates {
    private constructor();
    static readonly always: Predicate<any>;
    static readonly never: Predicate<any>;
    static negate<T>(pred: Predicate<T>): Predicate<T>;
}
