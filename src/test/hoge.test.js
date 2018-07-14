"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curry = (func) => {
    return (v1) => (v2) => func(v1, v2);
};
const add = (n1, n2) => console.log(n1 + n2);
describe("TestTarget", () => {
    it("should have a name", () => {
        console.log('tesettt222t');
        console.log(curry(add)(1));
        // assert.equal(1,2)
    });
});
//# sourceMappingURL=hoge.test.js.map