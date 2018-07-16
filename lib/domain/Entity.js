"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValueObject_1 = __importDefault(require("../beans/ValueObject"));
class Entity extends ValueObject_1.default {
    eq(val) {
        return this.key().eq(val.key());
    }
}
exports.default = Entity;
