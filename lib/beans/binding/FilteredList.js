"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ObservableList_1 = __importDefault(require("../ObservableList"));
const ObservableValue_1 = __importDefault(require("../ObservableValue"));
// TODO: フィルタ条件は最初に渡したもので固定
// TODO: 条件を動的に変えたいならObsPredをつくる
class FilteredList extends ObservableList_1.default {
    constructor(obs, pred) {
        super();
        this.obs = obs;
        this.pred = pred;
        this._obsValues.push(...obs.filter(it => pred(it)).map(it => new ObservableValue_1.default(it)));
        obs.addArrayListener((appends, removes) => {
            this._obsValues = this._obsValues.filter(it => removes.indexOf(it.val));
            this._obsValues.push(...appends.filter(it => this.pred(it)).map(it => new ObservableValue_1.default(it)));
        });
    }
}
exports.default = FilteredList;
