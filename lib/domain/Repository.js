"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IndexedList_1 = __importDefault(require("../beans/binding/IndexedList"));
const eq_1 = __importDefault(require("../funciton/eq"));
class Repository {
    constructor() {
        this._store = new IndexedList_1.default(it => it.$key);
    }
    get store() {
        return this._store;
    }
    preInsert(entity) {
        // noop
    }
    insert(val) {
        // サブクラスで登録前に処理を挟む場合ここで
        this.preInsert(val);
        console.log(`insert: val=${JSON.stringify(val)}`);
        if (this.has(val.$key)) {
            // すでに存在するキーに対して挿入しようとした場合
            throw Error(`key of ${val.$key} is already exists`);
        }
        // $key validation
        if (val.$key == null) {
            throw Error('undefined $key');
        }
        this.store.push(val);
    }
    preUpdate(newVal, key) {
        // noop
    }
    update(newVal, key) {
        // サブクラスで登録前に処理を挟む場合ここで
        this.preUpdate(newVal, key);
        console.log(`update: key=${JSON.stringify(key)}, newVal=${JSON.stringify(newVal)}`);
        if (!this.has(key)) {
            // 旧値が存在しない場合
            throw Error(`key of ${key} is no value present`);
        }
        if (this.deleteBy(key) === 0) {
            throw Error('cant delete before update');
        }
        this.insert(newVal);
    }
    deleteBy(key) {
        console.log(`deleteBy: key=${JSON.stringify(key)}`);
        return this.store.removeIf(it => eq_1.default(it.$key, key));
    }
    size() {
        return this.store.val.length;
    }
    findBy(key) {
        console.log(`findBy: key=${JSON.stringify(key)}`);
        const val = this.store.find(it => eq_1.default(it.$key, key));
        if (val == null) {
            throw Error(`no value present. key=${JSON.stringify(key)}`);
        }
        return val;
    }
    has(key) {
        const find = this.store.find(it => it.$key.eq(key));
        return find != null;
    }
}
exports.default = Repository;
