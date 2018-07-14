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

/***/ "./src/main/domain/MemoryStore.ts":
/*!****************************************!*\
  !*** ./src/main/domain/MemoryStore.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Entry {\r\n    constructor(_key, _val) {\r\n        this._key = _key;\r\n        this._val = _val;\r\n    }\r\n    get key() {\r\n        return this._key;\r\n    }\r\n    get val() {\r\n        return this._val;\r\n    }\r\n}\r\nexports.Entry = Entry;\r\n// TODO: createFilterとか\r\nclass MemoryStore {\r\n    constructor() {\r\n        // TODO: to ObsList?\r\n        this.store = [];\r\n    }\r\n    insert(val) {\r\n        if (this.has(val.key())) {\r\n            // すでに存在するキーに対して挿入しようとした場合\r\n            throw Error(`key of ${val.key()} is already exists`);\r\n        }\r\n        this.store.push(new Entry(val.key(), val));\r\n    }\r\n    findBy(key) {\r\n        const entry = this.store.find(it => it.key.eq(key));\r\n        if (entry == null) {\r\n            throw Error('no value present');\r\n        }\r\n        return entry.val;\r\n    }\r\n    has(key) {\r\n        const find = this.store.find(it => it.key.eq(key));\r\n        return find != null;\r\n    }\r\n    update(newVal) {\r\n        if (!this.has(newVal.key())) {\r\n            // 旧値が存在しない場合\r\n            throw Error(`key of ${newVal.key()} is no value present`);\r\n        }\r\n        this.deleteBy(newVal.key());\r\n        this.insert(newVal);\r\n    }\r\n    deleteBy(key) {\r\n        this.store = this.store.filter(it => it.key.not(key));\r\n    }\r\n    size() {\r\n        return this.store.length;\r\n    }\r\n}\r\nexports.default = MemoryStore;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/MemoryStore.ts?");

/***/ }),

/***/ "./src/main/domain/Repository.ts":
/*!***************************************!*\
  !*** ./src/main/domain/Repository.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst MemoryStore_1 = __importDefault(__webpack_require__(/*! @/domain/MemoryStore */ \"./src/main/domain/MemoryStore.ts\"));\r\nclass Repository {\r\n    constructor() {\r\n        this.store = new MemoryStore_1.default();\r\n        // TODO: listFilterなどを必要に応じて子クラスで定義\r\n    }\r\n    insert(entity) {\r\n        this.store.insert(entity);\r\n    }\r\n    update(newValue) {\r\n        this.store.update(newValue);\r\n    }\r\n    remove(key) {\r\n        this.store.deleteBy(key);\r\n    }\r\n    size() {\r\n        return this.store.size();\r\n    }\r\n    findBy(key) {\r\n        return this.store.findBy(key);\r\n    }\r\n    has(key) {\r\n        return this.store.has(key);\r\n    }\r\n}\r\nexports.default = Repository;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/Repository.ts?");

/***/ }),

/***/ "./src/main/index.ts":
/*!***************************!*\
  !*** ./src/main/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// import Repository from \"@/domain/Repository\";\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__export(__webpack_require__(/*! @/domain/Repository */ \"./src/main/domain/Repository.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/main/index.ts?");

/***/ })

/******/ });