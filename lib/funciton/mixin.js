"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getProperties_1 = __importDefault(require("./getProperties"));
function mixin(first, second) {
    let result = {};
    // 名前が被るプロパティ、関数はfirstで上書きされる
    for (let id of getProperties_1.default(first)) {
        result[id] = first[id];
    }
    for (let id of getProperties_1.default(second)) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
exports.default = mixin;
