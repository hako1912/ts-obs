import assert = require("power-assert");
import Entity from "../../main/domain/Entity";
import Repository from "../../main/domain/Repository";
import EntityKey from "../../main/domain/EntityKey";
import RepositoryFilter from "../../main/domain/RepositoryFilter";
import Dependencies from "../../main/di/Dependencies";


describe("RepositoryFilter", () => {
    it("all", () => {
        const rep = Dependencies.inject(TestRepository)
        const repFilter = new TestRepositoryFilter()
        assert.equal(repFilter.all().flatValues().length, 0)

        // 登録
        const entInsert = new TestEntity('hoge', 1)
        rep.insert(entInsert)
        assert.equal(repFilter.all().flatValues().length, 1)
        assert.equal(repFilter.all().flatValues()[0], entInsert)

        // 更新
        const entUpdate = new TestEntity('hoge', 2)
        rep.update(entUpdate, new TestEntityKey('hoge'))
        assert.equal(rep.size(), 1)
        assert.equal(repFilter.all().flatValues().length, 1)
        assert.equal(repFilter.all().flatValues()[0], entUpdate)

        // 削除
        rep.deleteBy(new TestEntityKey('hoge'))
        assert.equal(rep.size(), 0)
        assert.equal(repFilter.all().flatValues().length, 0)
    });
});

class TestRepositoryFilter extends RepositoryFilter<TestEntityKey, TestEntity, TestRepository> {
    getRepository(): TestRepository {
        return Dependencies.inject(TestRepository);
    }
}

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
