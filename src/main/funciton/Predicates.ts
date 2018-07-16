import {Predicate} from "../types";


export default class Predicates {
    private constructor() {
    }

    static get always(): Predicate<any> {
        return it => true
    }

    static get never(): Predicate<any> {
        return it => false
    }

    static negate<T>(pred: Predicate<T>): Predicate<T> {
        return it => !pred(it)
    }
}