import IndexedList from "../../../main/beans/binding/IndexedList";
import LeftJoinedList from "../../../main/beans/binding/LeftJoinedList";
import * as assert from "power-assert";
import ValueObject from "../../../main/beans/ValueObject";

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

    it("サブリストのみ要素をもつ状態で生成", () => {
        const lefts: IndexedList<number, A> = new IndexedList(it => it.id)
        const rights: IndexedList<number, B> = new IndexedList(it => it.id)

        lefts.push(new A(1, 'a1'))
        const joinings = new LeftJoinedList(lefts, rights)

        assert.equal(joinings.values.length, 1)
        assert.equal(joinings.values[0].valA, 'a1')
        assert.equal(joinings.values[0].valB, undefined)
    });

    it("優先リストのみ要素をもつ状態で生成", () => {
        const lefts: IndexedList<number, A> = new IndexedList(it => it.id)
        const rights: IndexedList<number, B> = new IndexedList(it => it.id)

        rights.push(new B(1, 'b1'))
        const joinings = new LeftJoinedList(lefts, rights)

        assert.equal(joinings.values.length, 0)
    });

    it("要素追加： サブ->優先->サブ", () => {
        const lefts: IndexedList<number, A> = new IndexedList(it => it.id)
        const rights: IndexedList<number, B> = new IndexedList(it => it.id)
        const joinings = new LeftJoinedList(lefts, rights)

        rights.push(new B(1, 'b1'))
        assert.equal(joinings.values.length, 0)

        lefts.push(new A(1, 'a1'))
        assert.equal(joinings.values.length, 1)
        assert.equal(joinings.values[0].valA, 'a1')
        assert.equal(joinings.values[0].valB, 'b1')

        rights.push(new B(2, 'b2'))
        assert.equal(joinings.values.length, 1)
        assert.equal(joinings.values[0].valA, 'a1')
        assert.equal(joinings.values[0].valB, 'b1')
    });

    it("要素追加： 優先->サブ->優先", () => {
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

        lefts.push(new A(2, 'a2'))
        assert.equal(joinings.values.length, 2)
        assert.equal(joinings.values[0].valA, 'a1')
        assert.equal(joinings.values[0].valB, 'b1')
        assert.equal(joinings.values[1].valA, 'a2')
        assert.equal(joinings.values[1].valB, undefined)
    });

    it("キーがValueObject", () => {
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
    constructor(private id: number) {
        super()
    }

    eq(val: this): boolean {
        return this.id === val.id;
    }

}

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