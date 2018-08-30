import HkDocument from "./HkDocument";
export default class HkCollection<D extends HkDocument> {
    readonly $parent?: HkDocument | undefined;
    $id: string;
    private incrementalId;
    private documents;
    constructor($parent?: HkDocument | undefined);
    static copy<T extends HkDocument>(col: HkCollection<T>): HkCollection<T>;
    findBy(id: number): D;
    findAll(): D[];
    put(...documents: D[]): D[];
    update(...documents: D[]): void;
    deleteBy(...ids: number[]): void;
    truncate(): void;
    size(): number;
    has(id: number): boolean;
}
