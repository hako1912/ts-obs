import * as assert from "power-assert";
import ObservableValue from "../../main/beans/ObservableValue";

describe("ObservableValue", () => {
    it("addListener", () => {
        const obs = new ObservableValue('init')
        let target = 0
        obs.addListener((val, oldVal) => {
            target = 1
        })
        assert.equal(target, 0)
        obs.val = 'changed'
        assert.equal(target, 1)
    });
});