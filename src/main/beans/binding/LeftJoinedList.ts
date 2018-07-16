import IndexedList from "./IndexedList";
import {Functions} from "../..";
import mixin = Functions.mixin;

// K: key
// P: primaryList(not null)
// S: secondaryList(optional)
export default class LeftJoinedList<K, P, S> extends IndexedList<K, P & {[E in keyof S]: E | undefined}> {
    constructor(primaries: IndexedList<K, P>,
                secondaries: IndexedList<K, S>) {
        // 2つのリストを結合した新しいリストを生成する
        const initialValues: any[] = []
        primaries.keyValueMap.forEach((v, k) => {
            const secondary = secondaries.keyValueMap.get(k)
            initialValues.push(secondary == null ? v : mixin(v, secondary))
        })
        // キー生成器は、優先リストであるprimariesのものを使用する
        super(it => primaries.keySupplier(it))
        super.push(...initialValues as any)

        // 優先リストの変更監視
        primaries.addArrayListener((appends, removes) => {
            // 追加要素に対しては、サブリストとJOINしたうえで自リストに追加する
            appends.forEach(it => {
                const key = primaries.keySupplier(it)
                const secondary = secondaries.keyValueMap.get(key)
                this.push(secondary == null ? it : mixin(it, secondary) as any)
            })
            // 削除要素に対しては、無条件で自リストから削除する
            removes.forEach(it => {
                const key = primaries.keySupplier(it)
                const val = this.keyValueMap.get(key)
                if (val) {
                    // 存在しないことはあり得ないが念のため
                    this.remove(val)
                }
            })
        })
        // サブリストの変更監視
        secondaries.addArrayListener((appends, removes) => {
            // 追加要素に対しては、優先リストとJOINしたうえで自リストに追加する
            appends.forEach(it => {
                const key = secondaries.keySupplier(it)
                const primary = primaries.keyValueMap.get(key)
                if (primary) {
                    // すでに存在する自要素を一旦削除する（キー重複いわれるため）
                    if (this.keyValueMap.has(key)) {
                        this.remove(this.keyValueMap.get(key) as any)
                    }
                    // 優先要素が存在する場合のみpushする
                    this.push(mixin(it, primary) as any)
                }
            })
            // 削除要素に対しては、自リストから削除要素に対応するサブ要素のみ削除する
            removes.forEach(it => {
                const key = secondaries.keySupplier(it)
                const val = this.keyValueMap.get(key)
                if (val) {
                    // 一度要素削除してから、優先要素のみで再度挿入する
                    this.remove(val)
                    this.push(primaries.keyValueMap.get(key) as any)
                } // 存在しない場合＝優先要素のみ存在 or 要素なし
            })
        })
    }

}


