import SurrogateKeyEntity from "../../main/domain/SurrogateKeyEntity";
import SurrogateKeyRepository from "../../main/domain/SurrogateKeyRepository";
import assert = require("power-assert");
import LeftJoinedList from "../../main/beans/binding/LeftJoinedList";


describe("Repository", () => {
    it("insert -> update -> delete", () => {
        const rep = new TestRepository()
        assert.equal(rep.size(), 0)

        // 登録
        const entInsert = new TestEntity('hoge', 1)
        console.warn('★AAA')
        
        rep.insert(entInsert)
        assert.equal(rep.size(), 1)
        assert.equal(rep.findBy(0), entInsert)

        // 更新
        const entUpdate = new TestEntity('hoge', 2)
        rep.update(entUpdate, 0)
        assert.equal(rep.size(), 1)
        assert.equal(rep.findBy(0), entUpdate)

        // 削除
        rep.deleteBy(0)
        assert.equal(rep.size(), 0)
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

class TestRepository extends SurrogateKeyRepository<TestEntity> {
}

class TestRepository2 extends SurrogateKeyRepository<TestEntity2> {
}

class TestEntity extends SurrogateKeyEntity {
    constructor(public name: string,
        public val1: number) {
        super()
    }
}

class TestEntity2 extends SurrogateKeyEntity {
    constructor(public name: string,
        public val2: number) {
        super()
    }
}