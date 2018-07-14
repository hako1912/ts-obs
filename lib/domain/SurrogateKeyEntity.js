"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = __importDefault(require("./Entity"));
class SurrogateKeyEntity extends Entity_1.default {
    key() {
        if (!this.id) {
            throw new Error('unassigned key');
        }
        return this.id;
    }
    hasKey() {
        return this.id != null;
    }
    assigneKey(key) {
        if (this.id) {
            throw new Error('already unassigned');
        }
        this.id = key;
    }
}
exports.default = SurrogateKeyEntity;
