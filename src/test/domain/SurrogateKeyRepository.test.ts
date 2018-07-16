import SurrogateKeyEntity from "../../main/domain/SurrogateKeyEntity";
import SurrogateKeyRepository from "../../main/domain/SurrogateKeyRepository";
import SurrogateKey from "../../main/domain/SurrogateKey";
import assert = require("power-assert");
import LeftJoinedList from "../../main/beans/binding/LeftJoinedList";


describe("Repository", () => {
    it("insert -> update -> delete", () => {
        const rep = new TestRepository()
        assert.equal(rep.size(), 0)

        // 登録
        const entInsert = new TestEntity('hoge', 1)
        rep.insert(entInsert)
        assert.equal(rep.size(), 1)
        assert.equal(rep.findBy(new SurrogateKey(0)), entInsert)

        // 更新
        const entUpdate = new TestEntity('hoge', 2)
        rep.update(entUpdate, new SurrogateKey(0))
        assert.equal(rep.size(), 1)
        assert.equal(rep.findBy(new SurrogateKey(0)), entUpdate)

        // 削除
        rep.deleteBy(new SurrogateKey(0))
        assert.equal(rep.size(), 0)
    });

    it("join", () => {
        const rep1 = new TestRepository()
        const rep2 = new TestRepository2()



        const join = new LeftJoinedList(rep1.store, rep2.store)

        rep1.insert(new TestEntity('a', 1))
        rep2.insert(new TestEntity2('a', 1))
        assert.equal(join.values.length, 1)

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