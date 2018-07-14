"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EntityKey_1 = __importDefault(require("./EntityKey"));
class SurrogateKey extends EntityKey_1.default {
    constructor(id) {
        super();
        this.id = id;
    }
    eq(val) {
        return this.id === val.id;
    }
}
exports.default = SurrogateKey;
