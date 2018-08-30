import HkCollection from "./HkCollection";
export default abstract class HkDocument {
    readonly $parent?: HkCollection<any> | undefined;
    readonly $id: number;
    constructor($parent?: HkCollection<any> | undefined, $id?: number);
    readonly $collections: {};
    abstract copy(options?: {
        $id?: number;
        $parent?: HkCollection<any>;
    }): any;
}
