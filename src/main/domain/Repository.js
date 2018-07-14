"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MemoryStore_1 = __importDefault(require("@/domain/MemoryStore"));
class Repository {
    constructor() {
        this.store = new MemoryStore_1.default();
        // TODO: listFilterなどを必要に応じて子クラスで定義
    }
    insert(entity) {
        this.store.insert(entity);
    }
    update(newValue) {
        this.store.update(newValue);
    }
    remove(key) {
        this.store.deleteBy(key);
    }
}
exports.default = Repository;
//# sourceMappingURL=Repository.js.map