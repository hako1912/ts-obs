import * as assert from "power-assert";
import ObservableList from "../../../main/beans/ObservableList";

describe("FilteredList", () => {
    it("配列フィルタ", () => {
        const obs = new ObservableList<number>()
        obs.push(1, 2, 3)

        const filter = obs.bindFilter(val => val < 3)
        assert.equal(filter.flatValues().length, 2)
        assert.equal(filter.flatValues()[0], 1)
        assert.equal(filter.flatValues()[1], 2)

        obs.push(0)
        assert.equal(filter.flatValues().length, 3)
        assert.equal(filter.flatValues()[0], 1)
        assert.equal(filter.flatValues()[1], 2)
        assert.equal(filter.flatValues()[2], 0)

        obs.push(4)
        assert.equal(filter.flatValues().length, 3)
        assert.equal(filter.flatValues()[0], 1)
        assert.equal(filter.flatValues()[1], 2)
        assert.equal(filter.flatValues()[2], 0)
    });
});