import IndexedList from "../../../main/beans/binding/IndexedList";
import JoinedList from "../../../main/beans/binding/JoinedList";
import * as assert from "power-assert";

class A {
    constructor(public id: number,
                public valA: string) {
    }
}

class B {
    constructor(public id: number,
                public valB: string) {
    }
}

describe("JoinedList", () => {
    it("constructor", () => {
        const obsList1: IndexedList<number, A> = new IndexedList(it => it.id)
        const obsList2: IndexedList<number, B> = new IndexedList(it => it.id)

        obsList1.push(new A(1, 'a1'))
        obsList2.push(new B(1, 'b1'))

        const joinings = new JoinedList(obsList1, obsList2)
        assert.equal(joinings.values.length, 1)
        assert.equal(joinings.values[0].valA, 'a1')
        assert.equal(joinings.values[0].valB, 'b1')
    });
});