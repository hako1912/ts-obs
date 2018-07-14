"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MemoryStore_1 = __importDefault(require("./MemoryStore"));
class Repository {
    constructor() {
        this.store = new MemoryStore_1.default();
        // TODO: listFilterなどを必要に応じて子クラスで定義
    }
    preInsert(entity) {
        // noop
    }
    insert(entity) {
        // サブクラスで登録前に処理を挟む場合ここで
        this.preInsert(entity);
        this.store.insert(entity);
    }
    preUpdate(newVal, key) {
        // noop
    }
    update(newValue, key) {
        // サブクラスで登録前に処理を挟む場合ここで
        this.preUpdate(newValue, key);
        this.store.update(newValue, key);
    }
    remove(key) {
        this.store.deleteBy(key);
    }
    size() {
        return this.store.size();
    }
    findBy(key) {
        return this.store.findBy(key);
    }
    has(key) {
        return this.store.has(key);
    }
}
exports.default = Repository;
