import IndexedList from "./IndexedList";
export default class LeftJoinedList<K, P, S> extends IndexedList<K, P & {
    [E in keyof S]: E | undefined;
}> {
    constructor(primaries: IndexedList<K, P>, secondaries: IndexedList<K, S>, foreignKeySupplier?: (secondaryVal: S) => K);
}
