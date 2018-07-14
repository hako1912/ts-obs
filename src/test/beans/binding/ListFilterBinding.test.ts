import ObsList from "@/beans/ObsList";
import * as assert from "power-assert";

describe("ListFilterBinding", () => {
    it("配列フィルタ", () => {
        const obs = new ObsList<number>()
        obs.push(1, 2, 3)

        const filter = obs.bindFilter(val => val < 3)
        assert.equal(filter.val.length, 2)
        assert.equal(filter.val[0].val, 1)
        assert.equal(filter.val[1].val, 2)

        obs.push(0)
        assert.equal(filter.val.length, 3)
        assert.equal(filter.val[0].val, 1)
        assert.equal(filter.val[1].val, 2)
        assert.equal(filter.val[2].val, 0)

        obs.push(4)
        assert.equal(filter.val.length, 3)
        assert.equal(filter.val[0].val, 1)
        assert.equal(filter.val[1].val, 2)
        assert.equal(filter.val[2].val, 0)
    });
});