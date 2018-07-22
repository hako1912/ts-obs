"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValueObject_1 = __importDefault(require("../beans/ValueObject"));
function eq(val1, val2) {
    if (val1 instanceof ValueObject_1.default && val2 instanceof ValueObject_1.default) {
        return val1.eq(val2);
    }
    return val1 == null ? val2 == null : val1 === val2;
}
exports.default = eq;
