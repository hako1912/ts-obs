import * as assert from "power-assert";
import Dependencies from "../../main/di/Dependencies";

describe("Dependencies", () => {
    it("inject compare to inject", () => {
        const val1 = Dependencies.inject(Test)
        const val2 = Dependencies.inject(Test)
        assert.equal(val1, val2)
    });
    it("inject compare to constructor", () => {
        const val1 = Dependencies.inject(Test)
        const val2 = new Test()
        assert.notEqual(val1, val2)
    });
});

class Test {

}