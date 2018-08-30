import HkCollection from "./HkCollection";



export default abstract class HkDocument {

    // コレクションがドキュメントを格納するときに自動的に設定される
    // コレクションに格納されるまではこのデフォルト値となる
    private _$id: number = -1
    private _$parent?: HkCollection<any>

    // サブクラスでコレクションがある場合はコンストラクタで設定する。
    protected _$collections: {} = {}

    get $id(): number { return this._$id }
    get $parent(): HkCollection<any> | undefined { return this._$parent }

    // サブクラスでコレクションがある場合はオーバーライドする。
    // 補完が効くようにするため型注釈をつけること。
    abstract get $collections(): {}

    // サブクラスでフィールドがある場合はオーバーライドする。
    // super.update()を必ず呼ぶこと。
    public update(options: { $id?: number, $parent?: HkCollection<any>, $collections?: {} } = {}) {
        if (options.$id != null) { this._$id = options.$id }
        if (options.$parent != null) { this._$parent = options.$parent }
        if (options.$collections != null) { this._$collections = options.$collections }
    }

}