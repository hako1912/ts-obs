import SurrogateKeyEntity from "../../main/domain/SurrogateKeyEntity";
import SurrogateKeyRepository from "../../main/domain/SurrogateKeyRepository";
import SurrogateKey from "../../main/domain/SurrogateKey";
import assert = require("power-assert");

class TestRepository extends SurrogateKeyRepository<TestEntity> {
}

class TestEntity extends SurrogateKeyEntity {
    constructor(public name: string,
                public val: number) {
        super()
    }
}

describe("Repository", () => {
    it("insert -> update -> delete", () => {
        const rep = new TestRepository()
        assert.equal(rep.size(), 0)
        // 登録
        const entInsert = new TestEntity('taro', 1)
        rep.insert(entInsert)
        // 確認
        assert.equal(rep.size(), 1)
        assert.equal(rep.findBy(new SurrogateKey(0)), entInsert)


        // 更新
        const entUpdate = new TestEntity('taro', 2)
        rep.update(entUpdate, new SurrogateKey(0))
        // 確認
        assert.equal(rep.size(), 1)
        assert.equal(rep.findBy(new SurrogateKey(0)), entUpdate)

        // 削除
        rep.remove(new SurrogateKey(0))
        // 確認
        assert.equal(rep.size(), 0)
    });
});