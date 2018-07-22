import eq from "./eq";

export default function not<T>(val1: T, val2: T): boolean {
    return !eq(val1, val2)
}