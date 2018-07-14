"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ObsList_1 = __importDefault(require("@/beans/ObsList"));
const assert = __importStar(require("power-assert"));
describe("ObsList", () => {
    it("配列変更", () => {
        const obs = new ObsList_1.default();
        let appends = [];
        let removes = [];
        obs.addArrayListener((ap, rm) => {
            appends = ap;
            removes = rm;
        });
        obs.push('val1');
        assert.equal(appends.length, 1);
        assert.equal(appends[0], 'val1');
        assert.equal(removes.length, 0);
        obs.push('val2', 'val3');
        assert.equal(appends.length, 2);
        assert.equal(appends[0], 'val2');
        assert.equal(appends[1], 'val3');
        assert.equal(removes.length, 0);
        obs.remove('val1');
        assert.equal(appends.length, 0);
        assert.equal(removes.length, 1);
        assert.equal(removes[0], 'val1');
    });
    it("要素変更", () => {
        const obs = new ObsList_1.default();
        obs.push('val');
        let val = '';
        let oldVal = '';
        obs.addElementListener((a, b) => {
            val = a;
            oldVal = b;
        });
        obs.val[0].val = 'change';
        assert.equal(val, 'change');
        assert.equal(oldVal, 'val');
    });
});
//# sourceMappingURL=ObsList.test.js.map