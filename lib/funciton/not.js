"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eq_1 = __importDefault(require("./eq"));
function not(val1, val2) {
    return !eq_1.default(val1, val2);
}
exports.default = not;
