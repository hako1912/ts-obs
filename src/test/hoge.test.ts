import * as assert from "power-assert";


const curry = <T, R>(func: (a1: T, a2: T) => R) => {
    return (v1: T)  => (v2: T) => func(v1, v2)
}

const add = (n1: number, n2: number) => console.log(n1 + n2)


describe("TestTarget", () => {
    it("should have a name", () => {
        console.log('tesettt222t')
        console.log(curry(add)(1))
        // assert.equal(1,2)
    });
});