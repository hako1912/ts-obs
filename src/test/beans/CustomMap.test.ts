import * as assert from "power-assert";
import {CustomMap} from "../../main/beans/CustomMap";
import ValueObject from "../../main/beans/ValueObject";

describe("CustomMap", () => {
    it("put", () => {
        const map = new CustomMap<number, string>()
        map.put(1, 'a')
        map.put(2, 'b')
        map.put(3, 'c')
        assert.deepEqual(map.values, ['a', 'b', 'c'])

        map.put(1, 'd')
        assert.deepEqual(map.values, ['b', 'c', 'd'])
    });

    it("remove", () => {
        const map = new CustomMap<number, string>()
        map.put(1, 'a')
        map.put(2, 'b')
        map.put(3, 'c')
        assert.deepEqual(map.values, ['a', 'b', 'c'])

        map.remove(1)
        assert.deepEqual(map.values, ['b', 'c'])
        map.remove(2)
        assert.deepEqual(map.values, ['c'])
        map.remove(3)
        assert.deepEqual(map.values, [])
    });

    it("update", () => {
        const map = new CustomMap<number, string>()
        map.put(1, 'a')
        map.put(2, 'b')
        map.put(3, 'c')
        assert.deepEqual(map.values, ['a', 'b', 'c'])

        map.update(1, 'A')
        assert.deepEqual(map.values, ['b', 'c', 'A'])
    });

    it("has: primitive $key", () => {
        const map = new CustomMap<number, string>()
        map.put(1, 'a')
        map.put(2, 'b')
        map.put(3, 'c')
        assert.deepEqual(map.values, ['a', 'b', 'c'])

        assert.deepEqual(map.has(1), true)
        assert.deepEqual(map.has(2), true)
        assert.deepEqual(map.has(3), true)
        assert.deepEqual(map.has(4), false)
    });

    it("has: ValueObject $key", () => {
        const map = new CustomMap<Vo, string>()
        map.put(new Vo(1), 'a')
        map.put(new Vo(2), 'b')
        map.put(new Vo(3), 'c')
        assert.deepEqual(map.values, ['a', 'b', 'c'])

        assert.deepEqual(map.has(new Vo(1)), true)
        assert.deepEqual(map.has(new Vo(2)), true)
        assert.deepEqual(map.has(new Vo(3)), true)
        assert.deepEqual(map.has(new Vo(4)), false)
    });

    it("values", () => {
        const map = new CustomMap<Vo, string>()
        map.put(new Vo(1), 'a')
        map.put(new Vo(2), 'b')
        map.put(new Vo(3), 'c')
        assert.deepEqual(map.values, ['a', 'b', 'c'])
    });

    it("keys", () => {
        const map = new CustomMap<number, string>()
        map.put(1, 'a')
        map.put(2, 'b')
        map.put(3, 'c')
        assert.deepEqual(map.keys, [1, 2, 3])
    });

    it("find: primitive $key", () => {
        const map = new CustomMap<number, string>()
        map.put(1, 'a')
        map.put(2, 'b')
        map.put(3, 'c')
        assert.deepEqual(map.find(1), 'a')
        assert.deepEqual(map.find(2), 'b')
        assert.deepEqual(map.find(3), 'c')
    });

    it("find: ValueObject $key", () => {
        const map = new CustomMap<Vo, string>()
        map.put(new Vo(1), 'a')
        map.put(new Vo(2), 'b')
        map.put(new Vo(3), 'c')
        assert.deepEqual(map.find(new Vo(1)), 'a')
        assert.deepEqual(map.find(new Vo(2)), 'b')
        assert.deepEqual(map.find(new Vo(3)), 'c')
    });
});

class Vo extends ValueObject {
    constructor(private id: number){super()}
    eq(val: this): boolean {
        return this.id === val.id;
    }

}