import assert = require("power-assert");
import Entity from "../../main/domain/Entity";
import Repository from "../../main/domain/Repository";
import EntityKey from "../../main/domain/EntityKey";


describe("Repository", () => {
    it("insert -> update -> delete", () => {
        const rep = new TestRepository()
        assert.equal(rep.size(), 0)

        // 登録
        const entInsert = new TestEntity('hoge', 1)
        rep.insert(entInsert)
        assert.equal(rep.size(), 1)
        assert.equal(rep.findBy(new TestEntityKey('hoge')), entInsert)

        // 更新
        const entUpdate = new TestEntity('hoge', 2)
        rep.update(entUpdate, new TestEntityKey('hoge'))
        assert.equal(rep.size(), 1)
        assert.equal(rep.findBy(new TestEntityKey('hoge')), entUpdate)

        // 削除
        rep.remove(new TestEntityKey('hoge'))
        assert.equal(rep.size(), 0)
    });
});


class TestRepository extends Repository<TestEntityKey, TestEntity> {

}

class TestEntity extends Entity<TestEntityKey> {

    constructor(public name: string,
                public val: number) {
        super()
    }

    key(): TestEntityKey {
        return new TestEntityKey(this.name);
    }

}

class TestEntityKey extends EntityKey {

    constructor(private name: string) {
        super()
    }

    eq(val: this): boolean {
        return val.name === this.name
    }

}
