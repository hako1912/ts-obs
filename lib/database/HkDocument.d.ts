import HkCollection from "./HkCollection";
export default abstract class HkDocument {
    private _$id;
    private _$parent?;
    protected _$collections: {};
    readonly $id: number;
    readonly $parent: HkCollection<any> | undefined;
    abstract readonly $collections: {};
    update(options?: {
        $id?: number;
        $parent?: HkCollection<any>;
        $collections?: {};
    }): void;
}
