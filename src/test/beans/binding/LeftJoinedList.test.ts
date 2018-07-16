import IndexedList from "../../../main/beans/binding/IndexedList";
import LeftJoinedList from "../../../main/beans/binding/LeftJoinedList";
import * as assert from "power-assert";
import ValueObject from "../../../main/beans/ValueObject";

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

describe("LeftJoinedList", () => {
    it("constructor", () => {
        const lefts: IndexedList<number, A> = new IndexedList(it => it.id)
        const rights: IndexedList<number, B> = new IndexedList(it => it.id)

        lefts.push(new A(1, 'a1'))
        rights.push(new B(1, 'b1'))
        const joinings = new LeftJoinedList(lefts, rights)

        assert.equal(joinings.values.length, 1)
        assert.equal(joinings.values[0].valA, 'a1')
        assert.equal(joinings.values[0].valB, 'b1')
    });

    it("constructor only secondaryList", () => {
        const lefts: IndexedList<number, A> = new IndexedList(it => it.id)
        const rights: IndexedList<number, B> = new IndexedList(it => it.id)

        lefts.push(new A(1, 'a1'))
        const joinings = new LeftJoinedList(lefts, rights)

        assert.equal(joinings.values.length, 1)
        assert.equal(joinings.values[0].valA, 'a1')
        assert.equal(joinings.values[0].valB, undefined)
    });

    it("constructor only primaryList", () => {
        const lefts: IndexedList<number, A> = new IndexedList(it => it.id)
        const rights: IndexedList<number, B> = new IndexedList(it => it.id)

        rights.push(new B(1, 'b1'))
        const joinings = new LeftJoinedList(lefts, rights)

        assert.equal(joinings.values.length, 0)
    });

    it("left push -> right push", () => {
        const lefts: IndexedList<number, A> = new IndexedList(it => it.id)
        const rights: IndexedList<number, B> = new IndexedList(it => it.id)
        const joinings = new LeftJoinedList(lefts, rights)

        lefts.push(new A(1, 'a1'))
        assert.equal(joinings.values.length, 1)
        assert.equal(joinings.values[0].valA, 'a1')
        assert.equal(joinings.values[0].valB, undefined)

        rights.push(new B(1, 'b1'))
        assert.equal(joinings.values.length, 1)
        assert.equal(joinings.values[0].valA, 'a1')
        assert.equal(joinings.values[0].valB, 'b1')
    });

    it("right push -> left push", () => {
        const lefts: IndexedList<number, A> = new IndexedList(it => it.id)
        const rights: IndexedList<number, B> = new IndexedList(it => it.id)
        const joinings = new LeftJoinedList(lefts, rights)

        rights.push(new B(1, 'b1'))
        assert.equal(joinings.values.length, 0)

        lefts.push(new A(1, 'a1'))
        assert.equal(joinings.values.length, 1)
        assert.equal(joinings.values[0].valA, 'a1')
        assert.equal(joinings.values[0].valB, 'b1')
    });

    it("key of ValueObject", () => {
        const lefts: IndexedList<Vo, A> = new IndexedList(it => new Vo(it.id))
        const rights: IndexedList<Vo, B> = new IndexedList(it => new Vo(it.id))
        const joinings = new LeftJoinedList(lefts, rights)

        rights.push(new B(1, 'b1'))
        assert.equal(joinings.values.length, 0)

        lefts.push(new A(1, 'a1'))
        assert.equal(joinings.values.length, 1)
        assert.equal(joinings.values[0].valA, 'a1')
        assert.equal(joinings.values[0].valB, 'b1')
    });
});

class Vo extends ValueObject {
    constructor(private id: number){super()}
    eq(val: this): boolean {
        return this.id === val.id;
    }

}