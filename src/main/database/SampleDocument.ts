import HkDocument from "./HkDocument";
import HkCollection from "./HkCollection";


type SampleDocumentCollections = { docs: HkCollection<SampleDocument> }

/**
 * ドキュメントクラスのサンプル。
 */
export default class SampleDocument extends HkDocument {

    // メンバは外部クラスからは読み取り専用にする。
    constructor(protected _name: string, protected _value: number) {
        super()
        // コレクションがある場合はここで設定する。
        this._$collections = {
            docs: new HkCollection<SampleDocument>(this)
        }
    }

    get name(): string { return this._name }
    get value(): number { return this._value }

    // コレクションのgetterを型注釈をつけてオーバーライドする。
    // ※なくても動くけど補完が効かなくなる。
    get $collections(): SampleDocumentCollections {
        return <SampleDocumentCollections>this._$collections
    }

    public update(options: {
        $id?: number, $parent?: HkCollection<any>, $collections?: {}, name?: string, value?: number
    } = {}) {
        if (options.name != null) { this._name = options.name }
        if (options.value != null) { this._value = options.value }
        super.update(options)
    }

}

