"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert = __importStar(require("power-assert"));
const ObsValue_1 = __importDefault(require("@/beans/ObsValue"));
describe("ObsValue", () => {
    it("addListener", () => {
        const obs = new ObsValue_1.default('init');
        let target = 0;
        obs.addListener((val, oldVal) => {
            target = 1;
        });
        assert.equal(target, 0);
        obs.val = 'changed';
        assert.equal(target, 1);
    });
});
//# sourceMappingURL=ObsValue.test.js.map