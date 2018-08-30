import assert = require("power-assert");
import HkCollection from "../../main/database/HkCollection";
import SampleDocument from "../../main/database/SampleDocument";

beforeEach(() => {

})

describe("HkCollection", () => {
    it("put", () => {
        const col = new HkCollection<SampleDocument>()
        assert.equal(col.size(), 0)

        const doc0 = new SampleDocument('hoge', 1)
        col.put(doc0)
        assert.equal(col.size(), 1)
        assert.equal(doc0.$id, 0)
        assert.equal(col.findBy(0), doc0)

        const doc1 = new SampleDocument('hoge', 1)
        col.put(doc1)
        assert.equal(col.size(), 2)
        assert.equal(doc1.$id, 1)
        assert.equal(col.findBy(1), doc1)

        const doc2 = new SampleDocument('hoge', 1)
        doc2.update({ $id: 10 })
        col.put(doc2)
        assert.equal(col.size(), 3)
        assert.equal(doc2.$id, 10)
        assert.equal(col.findBy(10), doc2)

        const doc3 = new SampleDocument('hoge', 1)
        col.put(doc3)
        assert.equal(col.size(), 4)
        assert.equal(doc3.$id, 11)
        assert.equal(col.findBy(11), doc3)
    });

    it("update", () => {
        const col = new HkCollection<SampleDocument>()
        assert.equal(col.size(), 0)

        const doc0 = new SampleDocument('hoge1', 1)
        col.put(doc0)
        assert.equal(col.size(), 1)
        assert.equal(doc0.$id, 0)
        assert.equal(col.findBy(0), doc0)

        const doc1 = new SampleDocument('hoge2', 1)
        col.put(doc1)
        assert.equal(col.size(), 2)
        assert.equal(doc1.$id, 1)
        assert.equal(col.findBy(1), doc1)

        doc0.update({ name: 'UPDATE' })
        assert.equal(col.size(), 2)
        assert.equal(doc0.$id, 0)
        assert.equal(doc0.name, 'UPDATE')
        assert.equal(col.findBy(0).name, 'UPDATE')
    });

    it("deleteBy", () => {
        const col = new HkCollection<SampleDocument>()
        assert.equal(col.size(), 0)


        const doc0 = new SampleDocument('hoge1', 1)
        col.put(doc0)
        assert.equal(col.size(), 1)
        assert.equal(doc0.$id, 0)
        assert.equal(col.findBy(0), doc0)

        const doc1 = new SampleDocument('hoge2', 1)
        col.put(doc1)
        assert.equal(col.size(), 2)
        assert.equal(doc1.$id, 1)
        assert.equal(col.findBy(1), doc1)

        col.deleteBy(0)
        assert.equal(col.size(), 1)
        col.deleteBy(1)
        assert.equal(col.size(), 0)
    });
});
