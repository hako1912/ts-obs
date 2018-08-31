import IndexedList from "../../../main/beans/binding/IndexedList";
import * as assert from "power-assert";
import ValueObject from "../../../main/beans/ValueObject";
import Entity from "../../../main/domain/Entity";

describe("IndexedList", () => {
    it("push キーがprimitive", () => {
        const list = new IndexedList<number, A>(it => it.id)

        list.push(new A(1, 'a'))
        list.push(new A(2, 'b'))
        list.push(new A(3, 'c'))

        let isError = false
        try {
            list.push(new A(3, 'C'))
        } catch {
            isError = true
        }
        assert.equal(isError, true)
    });

    it("push 連番エンティティ", () => {
        const list = new IndexedList<number, TestEntity>(it => it.$id)

        const e1 = new TestEntity()
        e1.$id = 1
        const e2 = new TestEntity()
        e2.$id = 2
        const e3 = new TestEntity()
        e3.$id = 3

        list.push(e1)
        list.push(e2)
        list.push(e3)
    });
});

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

class TestEntity extends Entity {
}
