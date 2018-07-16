"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IndexedList_1 = __importDefault(require("./IndexedList"));
const __1 = require("../..");
var mixin = __1.functions.mixin;
// K: key
// P: primaryList(not null)
// S: secondaryList(optional)
class LeftJoinedList extends IndexedList_1.default {
    constructor(primaries, secondaries) {
        // 2つのリストを結合した新しいリストを生成する
        const initialValues = [];
        primaries.keyValueMap.forEach((v, k) => {
            const secondary = secondaries.keyValueMap.find(k);
            initialValues.push(secondary == null ? v : mixin(v, secondary));
        });
        // 優先要素は必ず存在するため、優先リストのキー生成器を使用する
        super(it => primaries.keySupplier(it));
        super.push(...initialValues);
        // 優先リストの変更監視
        primaries.addArrayListener((appends, removes) => {
            // サブ要素と結合し、自リストに追加する
            appends.forEach(it => {
                const key = primaries.keySupplier(it);
                const secondary = secondaries.keyValueMap.find(key);
                this.push(secondary == null ? it : mixin(it, secondary));
            });
            // 無条件で自リストから削除する
            removes.forEach(it => {
                const key = primaries.keySupplier(it);
                const val = this.keyValueMap.find(key);
                if (val) {
                    // 存在しないことはあり得ないが念のため
                    this.remove(val);
                }
            });
        });
        // サブリストの変更監視
        secondaries.addArrayListener((appends, removes) => {
            // 優先要素と結合し、自リストに追加する
            // ※優先要素が存在しない場合は追加しない
            appends.forEach(it => {
                const key = secondaries.keySupplier(it);
                const primary = primaries.keyValueMap.find(key);
                if (primary) {
                    // すでに存在する自要素を一旦削除する
                    if (this.keyValueMap.has(key)) {
                        this.remove(this.keyValueMap.find(key));
                    }
                    // 優先要素が存在する場合のみpushする
                    this.push(mixin(it, primary));
                }
            });
            // 自要素からサブ要素のみ削除する
            removes.forEach(it => {
                const key = secondaries.keySupplier(it);
                const val = this.keyValueMap.find(key);
                if (val) {
                    // 一度要素削除してから、優先要素のみで再度挿入する
                    this.remove(val);
                    this.push(primaries.keyValueMap.find(key));
                } // 存在しない場合＝優先要素のみ存在 or 要素なし
            });
        });
    }
}
exports.default = LeftJoinedList;
