import ValueObject from "../../main/beans/ValueObject";
import {functions} from "../../main/funciton/functions";
import eq = functions.eq;
import * as assert from "power-assert";


describe("function", () => {
    it("eq_ValueObject_match", () => {
        const actual = eq(new Vo(10), new Vo(10))
        assert.equal(actual, true)
    });

    it("eq_ValueObject_notMatch", () => {
        const actual = eq(new Vo(10), new Vo(11))
        assert.equal(actual, false)
    });

    it("eq_Object_match", () => {
        const notVo = new NotVo(10)
        const actual = eq(notVo, notVo)
        assert.equal(actual, true)
    });

    it("eq_Object_notMatch", () => {
        const actual = eq(new NotVo(10), new NotVo(10))
        assert.equal(actual, false)
    });

});

class NotVo {
    constructor(public val: number){}
    eq(other: this): boolean {
        return this.val === other.val;
    }
}

class Vo extends ValueObject {
    constructor(public val: number){super()}
    eq(other: this): boolean {
        return this.val === other.val;
    }
}