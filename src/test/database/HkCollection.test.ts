import assert = require("power-assert");
import HkCollection from "../../main/database/HkCollection";
import HkDocument from "../../main/database/HkDocument";
import SampleDocument from "../../main/database/SampleDocument";

beforeEach(() => {

})

describe("HkCollection", () => {
    it("put", () => {
        const col = new HkCollection<TestDocument>()
        assert.equal(col.size(), 0)

        const doc0 = new TestDocument('hoge', 1)
        const docIns0 = col.put(doc0)[0]
        assert.equal(col.size(), 1)
        assert.equal(docIns0.$id, 0)
        assert.equal(col.findBy(0), docIns0)

        const doc1 = new TestDocument('hoge', 1)
        const docIns1 = col.put(doc1)[0]
        assert.equal(col.size(), 2)
        assert.equal(docIns1.$id, 1)
        assert.equal(col.findBy(1), docIns1)

        const doc2 = new TestDocument('hoge', 1)
        doc2.$id = 10
        const docIns2 = col.put(doc2)[0]
        assert.equal(col.size(), 3)
        assert.equal(docIns2.$id, 10)
        assert.equal(col.findBy(10), docIns2)

        const doc3 = new TestDocument('hoge', 1)
        const docIns3 = col.put(doc3)[0]
        assert.equal(col.size(), 4)
        assert.equal(docIns3.$id, 11)
        assert.equal(col.findBy(11), docIns3)
    });

    it("update", () => {
        const col = new HkCollection<TestDocument>()
        assert.equal(col.size(), 0)

        const doc0 = new TestDocument('hoge1', 1)
        const docIns0 = col.put(doc0)[0]
        assert.equal(col.size(), 1)
        assert.equal(docIns0.$id, 0)
        assert.equal(col.findBy(0), docIns0)

        const doc1 = new TestDocument('hoge2', 1)
        const docIns1 = col.put(doc1)[0]
        assert.equal(col.size(), 2)
        assert.equal(docIns1.$id, 1)
        assert.equal(col.findBy(1), docIns1)

        const docUpd = docIns0.copy({ name: 'UPDATE' })
        col.update(docUpd)
        assert.equal(col.size(), 2)
        assert.equal(docUpd.$id, 0)
        assert.equal(col.findBy(0).name, 'UPDATE')
    });

    it("deleteBy", () => {
        const col = new HkCollection<TestDocument>()
        assert.equal(col.size(), 0)


        const doc0 = new TestDocument('hoge1', 1)
        const docIns0 = col.put(doc0)[0]
        assert.equal(col.size(), 1)
        assert.equal(docIns0.$id, 0)
        assert.equal(col.findBy(0), docIns0)

        const doc1 = new TestDocument('hoge2', 1)
        const docIns1 = col.put(doc1)[0]
        assert.equal(col.size(), 2)
        assert.equal(docIns1.$id, 1)
        assert.equal(col.findBy(1), docIns1)

        col.deleteBy(0)
        assert.equal(col.size(), 1)
        col.deleteBy(1)
        assert.equal(col.size(), 0)
    });

    it("sample copy", () => {
        const docRoot = new SampleDocument('root', 1)
        const docSub = new SampleDocument('sub', 1)

        const doc1 = new SampleDocument('name1', 2)
        const doc2 = new SampleDocument('name2', 2)
        const doc3 = new SampleDocument('name3', 2)

        const ins1 = docRoot.$collections.docs.put(doc1)[0]
        const ins2 = docRoot.$collections.docs.put(doc2)[0]
        const ins3 = docRoot.$collections.docs.put(doc3)[0]
        assert.equal(docRoot.$collections.docs.size(), 3)
        assert.equal(docRoot.$collections.docs.findBy(0), ins1)
        assert.equal(docRoot.$collections.docs.findBy(1), ins2)
        assert.equal(docRoot.$collections.docs.findBy(2), ins3)

        const copyCol = HkCollection.copy(docRoot.$collections.docs)
        assert.equal(copyCol.size(), 3)
        // 値コピーされること
        assert.notEqual(copyCol.findBy(0), ins1)
        assert.notEqual(copyCol.findBy(0), ins2)
        assert.notEqual(copyCol.findBy(0), ins3)
        assert.equal(copyCol.findBy(0).name, 'name1')
        assert.equal(copyCol.findBy(1).name, 'name2')
        assert.equal(copyCol.findBy(2).name, 'name3')
        // コピー先を変えても元コレクションが変わらないこと
        copyCol.put(new SampleDocument('newItem', 10))
        assert.equal(copyCol.size(), 4)
        assert.equal(docRoot.$collections.docs.size(), 3)
    });
});

// class TestCollection extends HkCollection<TestDocument> {
// }

class TestDocument extends HkDocument {
    public copy(options: { $id?: number; $parent?: HkCollection<any>, name?: string } = {}): TestDocument {
        return new TestDocument(
            options.name === void (0) ? this.name : options.name,
            this.val1,
            options.$parent === void (0) ? this.$parent : options.$parent,
            options.$id === void (0) ? this.$id : options.$id
        )
    }
    constructor(
        public name: string,
        public val1: number,
        public $parent?: HkCollection<any>,
        public $id: number = -1) {
        super($parent, $id)
    }
}