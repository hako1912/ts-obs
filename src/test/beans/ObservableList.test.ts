import * as assert from "power-assert";
import ObservableList from "../../main/beans/ObservableList";

describe("ObservableList", () => {
    it("配列変更", () => {
        const obs = new ObservableList<string>()

        let appends: string[] = []
        let removes: string[] = []
        obs.addArrayListener((ap, rm) => {
            appends = ap
            removes = rm
        })

        obs.push('val1')
        assert.equal(appends.length, 1)
        assert.equal(appends[0], 'val1')
        assert.equal(removes.length, 0)

        obs.push('val2', 'val3')
        assert.equal(appends.length, 2)
        assert.equal(appends[0], 'val2')
        assert.equal(appends[1], 'val3')
        assert.equal(removes.length, 0)

        obs.remove('val1')
        assert.equal(appends.length, 0)
        assert.equal(removes.length, 1)
        assert.equal(removes[0], 'val1')
    });

    it("要素変更", () => {
        const obs = new ObservableList<string>()
        obs.push('vals')

        let val: string = ''
        let oldVal: string = ''
        obs.addElementListener((a, b) => {
            val = a
            oldVal = b
        })

        obs.val[0].val = 'change'
        assert.equal(val, 'change')
        assert.equal(oldVal, 'vals')
    });
});