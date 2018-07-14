"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = __importDefault(require("./Repository"));
const SurrogateKey_1 = __importDefault(require("./SurrogateKey"));
class SurrogateKeyRepository extends Repository_1.default {
    constructor() {
        super();
        this.incremental = 0;
    }
    preInsert(entity) {
        // 連番キーを割り当てる
        if (!entity.hasKey()) {
            entity.assigneKey(new SurrogateKey_1.default(this.incremental++));
        }
    }
    preUpdate(newValue, key) {
        newValue.assigneKey(key);
    }
}
exports.default = SurrogateKeyRepository;
