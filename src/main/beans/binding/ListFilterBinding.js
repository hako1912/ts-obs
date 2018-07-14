"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ObsValue_1 = __importDefault(require("@/beans/ObsValue"));
// TODO: フィルタ条件は最初に渡したもので固定
// TODO: 条件を動的に変えたいならObsPredをつくる
class ListFilterBinding {
    constructor(obs, pred) {
        this.obs = obs;
        this.pred = pred;
        this._val = [];
        this._val.push(...obs.filter(it => pred(it)).map(it => new ObsValue_1.default(it)));
        obs.addArrayListener((appends, removes) => {
            this._val = this._val.filter(it => removes.indexOf(it.val));
            this._val.push(...appends.filter(it => this.pred(it)).map(it => new ObsValue_1.default(it)));
        });
    }
    get val() {
        return this._val;
    }
}
exports.default = ListFilterBinding;
//# sourceMappingURL=ListFilterBinding.js.map