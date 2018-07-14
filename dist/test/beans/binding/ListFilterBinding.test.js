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
describe("ListFilterBinding", () => {
    it("配列フィルタ", () => {
        const obs = new ObsList_1.default();
        obs.push(1, 2, 3);
        const filter = obs.bindFilter(val => val < 3);
        assert.equal(filter.val.length, 2);
        assert.equal(filter.val[0].val, 1);
        assert.equal(filter.val[1].val, 2);
        obs.push(0);
        assert.equal(filter.val.length, 3);
        assert.equal(filter.val[0].val, 1);
        assert.equal(filter.val[1].val, 2);
        assert.equal(filter.val[2].val, 0);
        obs.push(4);
        assert.equal(filter.val.length, 3);
        assert.equal(filter.val[0].val, 1);
        assert.equal(filter.val[1].val, 2);
        assert.equal(filter.val[2].val, 0);
    });
});
//# sourceMappingURL=ListFilterBinding.test.js.map