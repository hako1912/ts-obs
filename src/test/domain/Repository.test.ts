import Entity from "../../main/domain/Entity";
import Repository from "../../main/domain/Repository";
import assert = require("power-assert");
import LeftJoinedList from "../../main/beans/binding/LeftJoinedList";

beforeEach(() => {

})

describe("Repository", () => {
    it("insert -> update -> delete", () => {
        const rep = new TestRepository()
        assert.equal(rep.size(), 0)

        // 登録
        const entInsert = new TestEntity('hoge', 1)
        
        const id = rep.insert(entInsert)
        assert.equal(rep.size(), 1)
        assert.equal(id, 0)
        assert.equal(rep.findBy(0), entInsert)

        // 更新
        const entUpdate = new TestEntity('hoge', 2)
        entUpdate.$id = 0
        rep.update(entUpdate)
        assert.equal(rep.size(), 1)
        assert.equal(rep.findBy(0), entUpdate)

        // 削除
        rep.deleteBy(0)
        assert.equal(rep.size(), 0)
    });

    it("update: インデックスが変わらず中身だけ変わること", () => {
        const rep = new TestRepository()
        
        const ent1 = new TestEntity('hoge1', 1)
        const ent2 = new TestEntity('hoge2', 2)
        const ent3 = new TestEntity('hoge3', 3)
        
        rep.insert(ent1)
        rep.insert(ent2)
        rep.insert(ent3)
        assert.equal(rep.findAll()[0].name, 'hoge1')
        assert.equal(rep.findAll()[1].name, 'hoge2')
        assert.equal(rep.findAll()[2].name, 'hoge3')
        // 更新
        const upd = new TestEntity('hoge4', 4)
        upd.$id = 1
        rep.update(upd)
        assert.equal(rep.findAll()[0].name, 'hoge1')
        assert.equal(rep.findAll()[1].name, 'hoge4')
        assert.equal(rep.findAll()[2].name, 'hoge3')
    });

    it("join： 連番キーのエンティティ", () => {
        const leftRep = new TestRepository()
        const rightRep = new TestRepository2()

        const join = new LeftJoinedList(leftRep.store, rightRep.store)

        leftRep.insert(new TestEntity('a', 1))
        assert.equal(join.values.length, 1)
        assert.equal(join.values[0].val1, 1)
        assert.equal(join.values[0].val2, undefined)

        rightRep.insert(new TestEntity2('b', 2))
        assert.equal(join.values.length, 1)
        assert.equal(join.values[0].val1, 1)
        assert.equal(join.values[0].val2, 2)

        rightRep.insert(new TestEntity2('b', 20))
        assert.equal(join.values.length, 1)
        assert.equal(join.values[0].val1, 1)
        assert.equal(join.values[0].val2, 2)

        leftRep.insert(new TestEntity('c', 10))
        assert.equal(join.values.length, 2)
        assert.equal(join.values[0].val1, 1)
        assert.equal(join.values[0].val2, 2)
        assert.equal(join.values[1].val1, 10)
        assert.equal(join.values[1].val2, 20)
    });
});

class TestRepository extends Repository<TestEntity> {
}

class TestRepository2 extends Repository<TestEntity2> {
}

class TestEntity extends Entity {
    constructor(public name: string,
        public val1: number) {
        super()
    }
}

class TestEntity2 extends Entity {
    constructor(public name: string,
        public val2: number) {
        super()
    }
}