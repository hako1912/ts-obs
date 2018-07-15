/**
 * 同一のキーをもつリストどうしを結合したリスト
 */
import IndexedList from "./IndexedList";

export default class JoinedList<K, V1, V2> extends IndexedList<K, V1 & V2> {
    constructor(orgs1: IndexedList<K, V1>,
                orgs2: IndexedList<K, V2>) {
        // TODO:  片方にしかないプロパティはundefinedか初期値で埋める？
        // TODO: 未実装
        const v1Map = new Map<K, V1>()
        orgs1.forEach(it => {
            v1Map.set(orgs1.keySupplier(it), it)
        })
        const v2Map = new Map<K, V2>()
        orgs2.forEach(it => {
            v2Map.set(orgs2.keySupplier(it), it)
        })
        const map = new Map<K, V1 & V2>()
        for(const key of v1Map.keys()){
            map.set(key, extend(<V1>v1Map.get(key), <V2>v2Map.get(key)))
        }

        super(it => orgs1.keySupplier(it)) // TODO: どっちのkeySupplierつかってもいいはず
        super.push(...map.values())
    }
}

function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class A {
    val1: number = 0
}

class B {
    val2: number = 0
}

const c = extend(new A(), new B())