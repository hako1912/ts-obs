import HkCollection from "./HkCollection";

export default abstract class HkDocument {

    constructor(protected _$parent?: HkCollection<any>, protected _$id: number = -1) { }

    get $parent(): HkCollection<any> | undefined {
        return this._$parent
    }
    get $id(): number {
        return this._$id
    }

    readonly $collections = {
        // TODO: ここにコレクション
    }

    public abstract copy(options?: { $id?: number, $parent?: HkCollection<any> }): any

}