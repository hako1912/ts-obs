import HkDocument from "./HkDocument";
export default class HkCollection<D extends HkDocument> {
    protected _$parent: HkDocument;
    constructor(_$parent: HkDocument);
    readonly $id: string;
    private documents;
    private incrementalId;
    readonly $parent: HkDocument | undefined;
    findBy(id: number): D;
    findAll(): D[];
    put(...documents: D[]): void;
    update(...documents: D[]): void;
    deleteBy(...ids: number[]): void;
    truncate(): void;
    size(): number;
    has(id: number): boolean;
}
