import * as assert from "power-assert";
import ObservableList from "../../../main/beans/ObservableList";
import FilteredList from "../../../main/beans/binding/FilteredList";

describe("FilteredList", () => {
    it("配列フィルタ", () => {
        const obs = new ObservableList<number>()
        obs.push(1, 2, 3)

        const filter = new FilteredList(obs, val => val < 3)
        assert.equal(filter.values.length, 2)
        assert.equal(filter.values[0], 1)
        assert.equal(filter.values[1], 2)

        obs.push(0)
        assert.equal(filter.values.length, 3)
        assert.equal(filter.values[0], 1)
        assert.equal(filter.values[1], 2)
        assert.equal(filter.values[2], 0)

        obs.push(4)
        assert.equal(filter.values.length, 3)
        assert.equal(filter.values[0], 1)
        assert.equal(filter.values[1], 2)
        assert.equal(filter.values[2], 0)
    });

    it("要素変更時に条件判定", () => {
        const obs = new ObservableList<number>()
        obs.push(1, 2, 3)

        const filter = new FilteredList(obs, val => val < 3)
        assert.equal(filter.values.length, 2)
        assert.equal(filter.values[0], 1)
        assert.equal(filter.values[1], 2)

        obs.val[1].value = 100
        assert.equal(filter.values.length, 1)
        assert.equal(filter.values[0], 1)
        // assert.equal(filter.values[1], 100)
        // assert.equal(filter.values[1], 2)
    });
});