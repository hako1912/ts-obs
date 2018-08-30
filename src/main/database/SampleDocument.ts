import HkDocument from "./HkDocument";
import HkCollection from "./HkCollection";

// TODO: ここ自動生成
export default class SampleDocument extends HkDocument {

    constructor(
        readonly name: string,
        readonly value: number,
        $parent?: HkCollection<any>,
        $id: number = -1) {
        super($parent, $id)

        this.$collections = {
            docs: new HkCollection<SampleDocument>()
        }

    }

    readonly $collections: {
        docs: HkCollection<SampleDocument>
    }

    public copy(
        options: { name?: string, value?: number, $id?: number, $parent?: HkCollection<any> } = {}
    ): SampleDocument {
        const doc = new SampleDocument(
            options.name === void (0) ? this.name : options.name,
            options.value === void (0) ? this.value : options.value,
            options.$parent === void (0) ? this.$parent : options.$parent,
            options.$id === void (0) ? this.$id : options.$id,
        )
        return doc
    }
}