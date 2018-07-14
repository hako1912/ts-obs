import {Functions} from "@/funciton/funciton";
import Entity from "@/domain/Entity";
import EntityKey from "@/domain/EntityKey";
import Repository from "@/domain/Repository";
import assert = require("power-assert");

class TestRepository extends Repository<TestEntityKey, TestEntity> {

}

class TestEntity extends Entity<TestEntityKey> {

    constructor(public name: string,
                public val: number){super()}

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


describe("Repository", () => {
    it("insert -> update -> delete", () => {
        const rep = new TestRepository()
        assert.equal(rep.size(), 0)
        // 登録
        const entInsert = new TestEntity('taro', 1)
        rep.insert(entInsert)
        // 確認
        assert.equal(rep.size(), 1)
        assert.equal(rep.findBy(new TestEntityKey('taro')), entInsert)

        // 更新
        const entUpdate = new TestEntity('taro', 2)
        rep.update(entUpdate)
        // 確認
        assert.equal(rep.size(), 1)
        assert.equal(rep.findBy(new TestEntityKey('taro')), entUpdate)

        // 削除
        rep.remove(new TestEntityKey('taro'))
        assert.equal(rep.size(), 0)
    });

    it("insert 複数件", () => {
        const rep = new TestRepository()
        assert.equal(rep.size(), 0)
        // 登録
        rep.insert(new TestEntity('taro1', 1))
        rep.insert(new TestEntity('taro2', 1))
        rep.insert(new TestEntity('taro3', 1))
        // 確認
        assert.equal(rep.size(), 3)
    });
});