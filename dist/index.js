/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main/domain/Entity.ts":
/*!***********************************!*\
  !*** ./src/main/domain/Entity.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ValueObject_1 = __importDefault(__webpack_require__(/*! ./ValueObject */ \"./src/main/domain/ValueObject.ts\"));\r\nclass Entity extends ValueObject_1.default {\r\n    eq(vals) {\r\n        // キー同士が同じなら同じエンティティ\r\n        return this.key().eq(vals.key());\r\n    }\r\n}\r\nexports.default = Entity;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/Entity.ts?");

/***/ }),

/***/ "./src/main/domain/EntityKey.ts":
/*!**************************************!*\
  !*** ./src/main/domain/EntityKey.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ValueObject_1 = __importDefault(__webpack_require__(/*! ./ValueObject */ \"./src/main/domain/ValueObject.ts\"));\r\nclass EntityKey extends ValueObject_1.default {\r\n}\r\nexports.default = EntityKey;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/EntityKey.ts?");

/***/ }),

/***/ "./src/main/domain/MemoryStore.ts":
/*!****************************************!*\
  !*** ./src/main/domain/MemoryStore.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Entry {\r\n    constructor(_key, _val) {\r\n        this._key = _key;\r\n        this._val = _val;\r\n    }\r\n    get key() {\r\n        return this._key;\r\n    }\r\n    get vals() {\r\n        return this._val;\r\n    }\r\n}\r\nexports.Entry = Entry;\r\n// TODO: createFilterとか\r\nclass MemoryStore {\r\n    constructor() {\r\n        // TODO: to ObservableList?\r\n        this.store = [];\r\n    }\r\n    insert(vals) {\r\n        if (this.has(vals.key())) {\r\n            // すでに存在するキーに対して挿入しようとした場合\r\n            throw Error(`key of ${vals.key()} is already exists`);\r\n        }\r\n        this.store.push(new Entry(vals.key(), vals));\r\n    }\r\n    findBy(key) {\r\n        const entry = this.store.find(it => it.key.eq(key));\r\n        if (entry == null) {\r\n            throw Error('no value present');\r\n        }\r\n        return entry.vals;\r\n    }\r\n    has(key) {\r\n        const find = this.store.find(it => it.key.eq(key));\r\n        return find != null;\r\n    }\r\n    update(newVal, key) {\r\n        if (!this.has(key)) {\r\n            // 旧値が存在しない場合\r\n            throw Error(`key of ${key} is no value present`);\r\n        }\r\n        this.deleteBy(key);\r\n        this.insert(newVal);\r\n    }\r\n    deleteBy(key) {\r\n        this.store = this.store.filter(it => it.key.not(key));\r\n    }\r\n    size() {\r\n        return this.store.length;\r\n    }\r\n}\r\nexports.default = MemoryStore;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/MemoryStore.ts?");

/***/ }),

/***/ "./src/main/domain/Repository.ts":
/*!***************************************!*\
  !*** ./src/main/domain/Repository.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst MemoryStore_1 = __importDefault(__webpack_require__(/*! ./MemoryStore */ \"./src/main/domain/MemoryStore.ts\"));\r\nclass Repository {\r\n    constructor() {\r\n        this.store = new MemoryStore_1.default();\r\n        // TODO: listFilterなどを必要に応じて子クラスで定義\r\n    }\r\n    preInsert(entity) {\r\n        // noop\r\n    }\r\n    insert(entity) {\r\n        // サブクラスで登録前に処理を挟む場合ここで\r\n        this.preInsert(entity);\r\n        this.store.insert(entity);\r\n    }\r\n    preUpdate(newVal, key) {\r\n        // noop\r\n    }\r\n    update(newValue, key) {\r\n        // サブクラスで登録前に処理を挟む場合ここで\r\n        this.preUpdate(newValue, key);\r\n        this.store.update(newValue, key);\r\n    }\r\n    remove(key) {\r\n        this.store.deleteBy(key);\r\n    }\r\n    size() {\r\n        return this.store.size();\r\n    }\r\n    findBy(key) {\r\n        return this.store.findBy(key);\r\n    }\r\n    has(key) {\r\n        return this.store.has(key);\r\n    }\r\n}\r\nexports.default = Repository;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/Repository.ts?");

/***/ }),

/***/ "./src/main/domain/SurrogateKey.ts":
/*!*****************************************!*\
  !*** ./src/main/domain/SurrogateKey.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst EntityKey_1 = __importDefault(__webpack_require__(/*! ./EntityKey */ \"./src/main/domain/EntityKey.ts\"));\r\nclass SurrogateKey extends EntityKey_1.default {\r\n    constructor(id) {\r\n        super();\r\n        this.id = id;\r\n    }\r\n    eq(vals) {\r\n        return this.id === vals.id;\r\n    }\r\n}\r\nexports.default = SurrogateKey;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/SurrogateKey.ts?");

/***/ }),

/***/ "./src/main/domain/SurrogateKeyEntity.ts":
/*!***********************************************!*\
  !*** ./src/main/domain/SurrogateKeyEntity.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Entity_1 = __importDefault(__webpack_require__(/*! ./Entity */ \"./src/main/domain/Entity.ts\"));\r\nclass SurrogateKeyEntity extends Entity_1.default {\r\n    key() {\r\n        if (!this.id) {\r\n            throw new Error('unassigned key');\r\n        }\r\n        return this.id;\r\n    }\r\n    hasKey() {\r\n        return this.id != null;\r\n    }\r\n    assigneKey(key) {\r\n        if (this.id) {\r\n            throw new Error('already unassigned');\r\n        }\r\n        this.id = key;\r\n    }\r\n}\r\nexports.default = SurrogateKeyEntity;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/SurrogateKeyEntity.ts?");

/***/ }),

/***/ "./src/main/domain/SurrogateKeyRepository.ts":
/*!***************************************************!*\
  !*** ./src/main/domain/SurrogateKeyRepository.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Repository_1 = __importDefault(__webpack_require__(/*! ./Repository */ \"./src/main/domain/Repository.ts\"));\r\nconst SurrogateKey_1 = __importDefault(__webpack_require__(/*! ./SurrogateKey */ \"./src/main/domain/SurrogateKey.ts\"));\r\nclass SurrogateKeyRepository extends Repository_1.default {\r\n    constructor() {\r\n        super();\r\n        this.incremental = 0;\r\n    }\r\n    preInsert(entity) {\r\n        // 連番キーを割り当てる\r\n        if (!entity.hasKey()) {\r\n            entity.assigneKey(new SurrogateKey_1.default(this.incremental++));\r\n        }\r\n    }\r\n    preUpdate(newValue, key) {\r\n        newValue.assigneKey(key);\r\n    }\r\n}\r\nexports.default = SurrogateKeyRepository;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/SurrogateKeyRepository.ts?");

/***/ }),

/***/ "./src/main/domain/ValueObject.ts":
/*!****************************************!*\
  !*** ./src/main/domain/ValueObject.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass ValueObject {\r\n    not(vals) {\r\n        return !this.eq(vals);\r\n    }\r\n}\r\nexports.default = ValueObject;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/ValueObject.ts?");

/***/ }),

/***/ "./src/main/index.ts":
/*!***************************!*\
  !*** ./src/main/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! ./domain/Repository */ \"./src/main/domain/Repository.ts\"));\r\n__export(__webpack_require__(/*! ./domain/Entity */ \"./src/main/domain/Entity.ts\"));\r\n__export(__webpack_require__(/*! ./domain/ValueObject */ \"./src/main/domain/ValueObject.ts\"));\r\n__export(__webpack_require__(/*! ./domain/MemoryStore */ \"./src/main/domain/MemoryStore.ts\"));\r\n__export(__webpack_require__(/*! ./domain/SurrogateKey */ \"./src/main/domain/SurrogateKey.ts\"));\r\n__export(__webpack_require__(/*! ./domain/SurrogateKeyRepository */ \"./src/main/domain/SurrogateKeyRepository.ts\"));\r\n__export(__webpack_require__(/*! ./domain/SurrogateKeyEntity */ \"./src/main/domain/SurrogateKeyEntity.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/main/index.ts?");

/***/ })

/******/ });