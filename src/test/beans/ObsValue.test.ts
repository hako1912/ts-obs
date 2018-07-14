import * as assert from "power-assert";
import ObsValue from "@/beans/ObsValue";

describe("ObsValue", () => {
    it("addListener", () => {
        const obs = new ObsValue('init')
        let target = 0
        obs.addListener((val, oldVal) => {
            target = 1
        })
        assert.equal(target, 0)
        obs.val = 'changed'
        assert.equal(target, 1)
    });
});