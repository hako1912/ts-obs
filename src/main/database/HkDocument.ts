import HkCollection from "./HkCollection";

export default abstract class HkDocument {

    constructor(readonly $parent?: HkCollection<any>, readonly $id: number = -1) { }

    readonly $collections = {
        // TODO: ここにコレクション
    }

    public abstract copy(options?: { $id?: number, $parent?: HkCollection<any> }): any

}