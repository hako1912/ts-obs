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

/***/ "./src/main/beans/CustomMap.ts":
/*!*************************************!*\
  !*** ./src/main/beans/CustomMap.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst not_1 = __importDefault(__webpack_require__(/*! ../funciton/not */ \"./src/main/funciton/not.ts\"));\r\nconst eq_1 = __importDefault(__webpack_require__(/*! ../funciton/eq */ \"./src/main/funciton/eq.ts\"));\r\nclass CustomMap {\r\n    constructor() {\r\n        this.entries = [];\r\n    }\r\n    get values() {\r\n        return this.entries.map(it => it.value);\r\n    }\r\n    get keys() {\r\n        return this.entries.map(it => it.key);\r\n    }\r\n    put(key, value) {\r\n        let current = this.findEntry(key);\r\n        if (current) {\r\n            this.update(key, value);\r\n        }\r\n        else {\r\n            this.entries.push(new CustomMap.Entry(key, value));\r\n        }\r\n    }\r\n    remove(key) {\r\n        const beforeSize = this.entries.length;\r\n        console.log(`key=${key}`);\r\n        this.entries = this.entries.filter(it => not_1.default(it.key, key));\r\n        return this.entries.length < beforeSize;\r\n    }\r\n    update(key, value) {\r\n        if (!this.remove(key)) {\r\n            throw new Error('entry remove failed');\r\n        }\r\n        this.entries.push(new CustomMap.Entry(key, value));\r\n    }\r\n    clear() {\r\n        this.entries = [];\r\n    }\r\n    forEach(func) {\r\n        this.entries.forEach(it => func(it.value, it.key));\r\n    }\r\n    has(key) {\r\n        return this.find(key) ? true : false;\r\n    }\r\n    find(key) {\r\n        const entry = this.findEntry(key);\r\n        return entry == null ? undefined : entry.value;\r\n    }\r\n    findEntry(key) {\r\n        return this.entries.find(it => eq_1.default(it.key, key));\r\n    }\r\n}\r\nexports.CustomMap = CustomMap;\r\n(function (CustomMap) {\r\n    class Entry {\r\n        constructor(_key, _value) {\r\n            this._key = _key;\r\n            this._value = _value;\r\n        }\r\n        get key() {\r\n            return this._key;\r\n        }\r\n        get value() {\r\n            return this._value;\r\n        }\r\n    }\r\n    CustomMap.Entry = Entry;\r\n})(CustomMap = exports.CustomMap || (exports.CustomMap = {}));\r\n\n\n//# sourceURL=webpack:///./src/main/beans/CustomMap.ts?");

/***/ }),

/***/ "./src/main/beans/ObservableList.ts":
/*!******************************************!*\
  !*** ./src/main/beans/ObservableList.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ObservableValue_1 = __importDefault(__webpack_require__(/*! ./ObservableValue */ \"./src/main/beans/ObservableValue.ts\"));\r\n// 保持するObservableValueはサブクラスのみ参照可にする\r\nclass ObservableList {\r\n    constructor(_obsValues = []) {\r\n        this._obsValues = _obsValues;\r\n        this.onElementChangeObj = this.onElementChange.bind(this);\r\n        this.arrayListeners = [];\r\n        this.elementListeners = [];\r\n        this._obsValues.forEach(obs => {\r\n            obs.addListener(this.onElementChangeObj);\r\n        });\r\n    }\r\n    get values() {\r\n        return this._obsValues.map(it => it.value);\r\n    }\r\n    // @deprecated\r\n    get val() {\r\n        return this._obsValues;\r\n    }\r\n    set val(value) {\r\n        this._obsValues = value;\r\n    }\r\n    addElementListener(listener) {\r\n        this.elementListeners.push(listener);\r\n    }\r\n    addArrayListener(listener) {\r\n        this.arrayListeners.push(listener);\r\n    }\r\n    removeArrayListener(listener) {\r\n        this.arrayListeners = this.arrayListeners.filter(it => listener !== it);\r\n    }\r\n    removeElementListener(listener) {\r\n        this.elementListeners = this.elementListeners.filter(it => listener !== it);\r\n    }\r\n    push(...values) {\r\n        if (values.length === 0) {\r\n            return [];\r\n        }\r\n        const appends = values.map(it => new ObservableValue_1.default(it));\r\n        this._obsValues.push(...appends);\r\n        this.arrayListeners.forEach(lis => lis(values, []));\r\n        appends.forEach(it => it.addListener(this.onElementChangeObj));\r\n        return appends;\r\n    }\r\n    remove(...values) {\r\n        // const obsValues = values.map(it => new ObservableValue(it))\r\n        // obsValues.forEach(it => it.removeListener(this.onElementChangeObj))\r\n        const removes = [];\r\n        this._obsValues = this._obsValues.filter(it => {\r\n            if (values.indexOf(it.val) === -1) {\r\n                return true;\r\n            }\r\n            removes.push(it.val);\r\n            return false;\r\n        });\r\n        if (0 < removes.length) {\r\n            this.arrayListeners.forEach(lis => lis([], removes));\r\n        }\r\n    }\r\n    removeIf(predicate) {\r\n        const preLength = this.values.length;\r\n        const removes = this.values.filter(it => predicate(it));\r\n        this.remove(...removes);\r\n        // 削除した件数を返す\r\n        return this.values.length - preLength;\r\n    }\r\n    clear() {\r\n        if (this._obsValues.length === 0) {\r\n            return;\r\n        }\r\n        const oldVal = this.values;\r\n        this._obsValues = [];\r\n        this.arrayListeners.forEach(lis => lis([], oldVal));\r\n    }\r\n    isEmpty() {\r\n        return this._obsValues.length === 0;\r\n    }\r\n    isNotEmpty() {\r\n        return !this.isEmpty();\r\n    }\r\n    map(func) {\r\n        return this.values.map(func);\r\n    }\r\n    filter(func) {\r\n        return this.values.filter(func);\r\n    }\r\n    find(func) {\r\n        return this.values.find(func);\r\n    }\r\n    forEach(func) {\r\n        this.values.forEach(func);\r\n    }\r\n    onElementChange(val, oldVal) {\r\n        this.elementListeners.forEach(it => it(val, oldVal));\r\n    }\r\n}\r\nexports.default = ObservableList;\r\n\n\n//# sourceURL=webpack:///./src/main/beans/ObservableList.ts?");

/***/ }),

/***/ "./src/main/beans/ObservableValue.ts":
/*!*******************************************!*\
  !*** ./src/main/beans/ObservableValue.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass ObservableValue {\r\n    constructor(_val) {\r\n        this._val = _val;\r\n        this.listeners = [];\r\n    }\r\n    get value() {\r\n        return this._val;\r\n    }\r\n    set value(value) {\r\n        if (this.val == value) {\r\n            return;\r\n        }\r\n        const old = this.val;\r\n        this._val = value;\r\n        this.listeners.forEach(lis => lis(value, old));\r\n    }\r\n    // @deprecated\r\n    get val() {\r\n        return this._val;\r\n    }\r\n    set val(value) {\r\n        if (this.val == value) {\r\n            return;\r\n        }\r\n        const old = this.val;\r\n        this._val = value;\r\n        this.listeners.forEach(lis => lis(value, old));\r\n    }\r\n    addListener(listener) {\r\n        this.listeners.push(listener);\r\n    }\r\n    removeListener(listener) {\r\n        this.listeners = this.listeners.filter(it => listener === it);\r\n    }\r\n}\r\nexports.default = ObservableValue;\r\n\n\n//# sourceURL=webpack:///./src/main/beans/ObservableValue.ts?");

/***/ }),

/***/ "./src/main/beans/ValueObject.ts":
/*!***************************************!*\
  !*** ./src/main/beans/ValueObject.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass ValueObject {\r\n    not(val) {\r\n        return !this.eq(val);\r\n    }\r\n}\r\nexports.default = ValueObject;\r\n\n\n//# sourceURL=webpack:///./src/main/beans/ValueObject.ts?");

/***/ }),

/***/ "./src/main/beans/binding/FilteredList.ts":
/*!************************************************!*\
  !*** ./src/main/beans/binding/FilteredList.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ObservableList_1 = __importDefault(__webpack_require__(/*! ../ObservableList */ \"./src/main/beans/ObservableList.ts\"));\r\nconst ObservableValue_1 = __importDefault(__webpack_require__(/*! ../ObservableValue */ \"./src/main/beans/ObservableValue.ts\"));\r\nclass FilteredList extends ObservableList_1.default {\r\n    constructor(obs, pred) {\r\n        super();\r\n        this.obs = obs;\r\n        this.pred = pred;\r\n        this._obsValues.push(...obs.filter(it => pred(it)).map(it => new ObservableValue_1.default(it)));\r\n        obs.addArrayListener((appends, removes) => {\r\n            this._obsValues = this._obsValues.filter(it => removes.indexOf(it.val));\r\n            this._obsValues.push(...appends.filter(it => this.pred(it)).map(it => new ObservableValue_1.default(it)));\r\n        });\r\n    }\r\n}\r\nexports.default = FilteredList;\r\n\n\n//# sourceURL=webpack:///./src/main/beans/binding/FilteredList.ts?");

/***/ }),

/***/ "./src/main/beans/binding/IndexedList.ts":
/*!***********************************************!*\
  !*** ./src/main/beans/binding/IndexedList.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst CustomMap_1 = __webpack_require__(/*! ./../CustomMap */ \"./src/main/beans/CustomMap.ts\");\r\nconst ObservableList_1 = __importDefault(__webpack_require__(/*! ../ObservableList */ \"./src/main/beans/ObservableList.ts\"));\r\n// K: $key\r\n// V: value\r\nclass IndexedList extends ObservableList_1.default {\r\n    constructor(_keySupplier) {\r\n        super();\r\n        this._keySupplier = _keySupplier;\r\n        this._keyValueMap = new CustomMap_1.CustomMap();\r\n    }\r\n    get keyValueMap() {\r\n        return this._keyValueMap;\r\n    }\r\n    get keySupplier() {\r\n        return this._keySupplier;\r\n    }\r\n    push(...values) {\r\n        // validate duplicate $key\r\n        const keyValues = values.map(it => {\r\n            const key = this._keySupplier(it);\r\n            if (!key) {\r\n                throw new Error('キーが取得できない。');\r\n            }\r\n            return {\r\n                key: this._keySupplier(it),\r\n                val: it\r\n            };\r\n        });\r\n        const errors = keyValues.map(it => it.key).filter(it => this._keyValueMap.has(it));\r\n        if (0 < errors.length) {\r\n            throw new Error(`duplicated keys: ${errors}`);\r\n        }\r\n        keyValues.forEach(it => this._keyValueMap.put(it.key, it.val));\r\n        return super.push(...values);\r\n    }\r\n    remove(...values) {\r\n        values.map(it => this._keySupplier(it)).forEach(it => this._keyValueMap.remove(it));\r\n        super.remove(...values);\r\n    }\r\n    clear() {\r\n        this._keyValueMap.clear();\r\n        super.clear();\r\n    }\r\n}\r\nexports.default = IndexedList;\r\n\n\n//# sourceURL=webpack:///./src/main/beans/binding/IndexedList.ts?");

/***/ }),

/***/ "./src/main/beans/binding/LeftJoinedList.ts":
/*!**************************************************!*\
  !*** ./src/main/beans/binding/LeftJoinedList.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst IndexedList_1 = __importDefault(__webpack_require__(/*! ./IndexedList */ \"./src/main/beans/binding/IndexedList.ts\"));\r\nconst mixin_1 = __importDefault(__webpack_require__(/*! ../../funciton/mixin */ \"./src/main/funciton/mixin.ts\"));\r\nconst eq_1 = __importDefault(__webpack_require__(/*! ../../funciton/eq */ \"./src/main/funciton/eq.ts\"));\r\n// K: $key\r\n// P: primaryList(not null)\r\n// S: secondaryList(optional)\r\n// TODO: 要素変更の監視\r\nclass LeftJoinedList extends IndexedList_1.default {\r\n    constructor(primaries, secondaries, foreignKeySupplier = secondaries.keySupplier) {\r\n        // 2つのリストを結合した新しいリストを生成する\r\n        const initialValues = [];\r\n        primaries.keyValueMap.forEach((v, k) => {\r\n            const secondary = secondaries.keyValueMap.find(k);\r\n            initialValues.push(secondary == null ? v : mixin_1.default(v, secondary));\r\n        });\r\n        // 優先要素は必ず存在するため、優先リストのキー生成器を使用する\r\n        super(it => primaries.keySupplier(it));\r\n        super.push(...initialValues);\r\n        // 優先リストの変更監視\r\n        primaries.addArrayListener((appends, removes) => {\r\n            // 無条件で自リストから削除する\r\n            removes.forEach(it => {\r\n                const key = primaries.keySupplier(it);\r\n                const val = this.keyValueMap.find(key);\r\n                if (val) {\r\n                    // 存在しないことはあり得ないが念のため\r\n                    this.remove(val);\r\n                }\r\n                else {\r\n                    throw new Error('存在しないルート');\r\n                }\r\n            });\r\n            // サブ要素と結合し、自リストに追加する\r\n            appends.forEach(it => {\r\n                const key = primaries.keySupplier(it);\r\n                // サブ要素から、優先要素のキーを外部キーにもつ要素を探す\r\n                const secondary = secondaries.values.find(sec => eq_1.default(foreignKeySupplier(sec), key));\r\n                const current = this.keyValueMap.find(key);\r\n                if (current) {\r\n                    // 優先要素追加時は自要素が存在しないはずだからいらない気がする\r\n                    this.remove();\r\n                }\r\n                this.push(secondary == null ? it : mixin_1.default(it, secondary));\r\n            });\r\n        });\r\n        // サブリストの変更監視\r\n        secondaries.addArrayListener((appends, removes) => {\r\n            // 自要素からサブ要素のみ削除する\r\n            removes.forEach(it => {\r\n                const key = foreignKeySupplier(it);\r\n                const val = this.keyValueMap.find(key);\r\n                if (val) {\r\n                    // 一度要素削除してから、優先要素のみで再度挿入する\r\n                    this.remove(val);\r\n                    this.push(primaries.keyValueMap.find(key));\r\n                } // 存在しない場合＝優先要素のみ存在 or 要素なし\r\n            });\r\n            // 優先要素と結合し、自リストに追加する\r\n            // ※優先要素が存在しない場合は追加しない\r\n            appends.forEach(it => {\r\n                const key = foreignKeySupplier(it);\r\n                const primary = primaries.keyValueMap.find(key);\r\n                if (primary) {\r\n                    // すでに存在する自要素を一旦削除する\r\n                    if (this.keyValueMap.has(key)) {\r\n                        this.remove(this.keyValueMap.find(key));\r\n                    }\r\n                    // 優先要素が存在する場合のみpushする\r\n                    this.push(mixin_1.default(primary, it));\r\n                }\r\n            });\r\n        });\r\n    }\r\n}\r\nexports.default = LeftJoinedList;\r\n\n\n//# sourceURL=webpack:///./src/main/beans/binding/LeftJoinedList.ts?");

/***/ }),

/***/ "./src/main/beans/binding/ValueBinding.ts":
/*!************************************************!*\
  !*** ./src/main/beans/binding/ValueBinding.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ObservableValue_1 = __importDefault(__webpack_require__(/*! ../ObservableValue */ \"./src/main/beans/ObservableValue.ts\"));\r\nclass ValueBinding {\r\n    constructor(obs, mapper) {\r\n        this.obs = obs;\r\n        this.mapper = mapper;\r\n        this.val = new ObservableValue_1.default(mapper(obs.val));\r\n        obs.addListener((val, oldVal) => {\r\n            this.val.val = this.mapper(val);\r\n        });\r\n    }\r\n}\r\nexports.default = ValueBinding;\r\n\n\n//# sourceURL=webpack:///./src/main/beans/binding/ValueBinding.ts?");

/***/ }),

/***/ "./src/main/di/Dependencies.ts":
/*!*************************************!*\
  !*** ./src/main/di/Dependencies.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Dependencies {\r\n    static inject(clazz) {\r\n        const instance = Dependencies.container.get(clazz);\r\n        if (instance) {\r\n            return instance;\r\n        }\r\n        const newInstance = new clazz();\r\n        Dependencies.container.set(clazz, newInstance);\r\n        return newInstance;\r\n    }\r\n}\r\nDependencies.container = new Map();\r\nexports.default = Dependencies;\r\n\n\n//# sourceURL=webpack:///./src/main/di/Dependencies.ts?");

/***/ }),

/***/ "./src/main/domain/Entity.ts":
/*!***********************************!*\
  !*** ./src/main/domain/Entity.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ValueObject_1 = __importDefault(__webpack_require__(/*! ../beans/ValueObject */ \"./src/main/beans/ValueObject.ts\"));\r\nclass Entity extends ValueObject_1.default {\r\n    eq(val) {\r\n        return this.$key.eq(val.$key);\r\n    }\r\n}\r\nexports.default = Entity;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/Entity.ts?");

/***/ }),

/***/ "./src/main/domain/EntityKey.ts":
/*!**************************************!*\
  !*** ./src/main/domain/EntityKey.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ValueObject_1 = __importDefault(__webpack_require__(/*! ../beans/ValueObject */ \"./src/main/beans/ValueObject.ts\"));\r\nclass EntityKey extends ValueObject_1.default {\r\n}\r\nexports.default = EntityKey;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/EntityKey.ts?");

/***/ }),

/***/ "./src/main/domain/Repository.ts":
/*!***************************************!*\
  !*** ./src/main/domain/Repository.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst IndexedList_1 = __importDefault(__webpack_require__(/*! ../beans/binding/IndexedList */ \"./src/main/beans/binding/IndexedList.ts\"));\r\nconst eq_1 = __importDefault(__webpack_require__(/*! ../funciton/eq */ \"./src/main/funciton/eq.ts\"));\r\nclass Repository {\r\n    constructor() {\r\n        this._store = new IndexedList_1.default(it => it.$key);\r\n    }\r\n    get store() {\r\n        return this._store;\r\n    }\r\n    preInsert(entity) {\r\n        // noop\r\n    }\r\n    insert(val) {\r\n        // サブクラスで登録前に処理を挟む場合ここで\r\n        this.preInsert(val);\r\n        console.log(`insert: val=${JSON.stringify(val)}`);\r\n        if (this.has(val.$key)) {\r\n            // すでに存在するキーに対して挿入しようとした場合\r\n            throw Error(`key of ${val.$key} is already exists`);\r\n        }\r\n        // $key validation\r\n        if (val.$key == null) {\r\n            throw Error('undefined $key');\r\n        }\r\n        this.store.push(val);\r\n    }\r\n    preUpdate(newVal, key) {\r\n        // noop\r\n    }\r\n    update(newVal, key) {\r\n        // サブクラスで登録前に処理を挟む場合ここで\r\n        this.preUpdate(newVal, key);\r\n        console.log(`update: key=${JSON.stringify(key)}, newVal=${JSON.stringify(newVal)}`);\r\n        if (!this.has(key)) {\r\n            // 旧値が存在しない場合\r\n            throw Error(`key of ${key} is no value present`);\r\n        }\r\n        if (this.deleteBy(key) === 0) {\r\n            throw Error('cant delete before update');\r\n        }\r\n        this.insert(newVal);\r\n    }\r\n    deleteBy(key) {\r\n        console.log(`deleteBy: key=${JSON.stringify(key)}`);\r\n        return this.store.removeIf(it => eq_1.default(it.$key, key));\r\n    }\r\n    size() {\r\n        return this.store.val.length;\r\n    }\r\n    findBy(key) {\r\n        console.log(`findBy: key=${JSON.stringify(key)}`);\r\n        const val = this.store.find(it => eq_1.default(it.$key, key));\r\n        if (val == null) {\r\n            throw Error(`no value present. key=${JSON.stringify(key)}`);\r\n        }\r\n        return val;\r\n    }\r\n    has(key) {\r\n        const find = this.store.find(it => it.$key.eq(key));\r\n        return find != null;\r\n    }\r\n}\r\nexports.default = Repository;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/Repository.ts?");

/***/ }),

/***/ "./src/main/domain/SurrogateKey.ts":
/*!*****************************************!*\
  !*** ./src/main/domain/SurrogateKey.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst EntityKey_1 = __importDefault(__webpack_require__(/*! ./EntityKey */ \"./src/main/domain/EntityKey.ts\"));\r\nclass SurrogateKey extends EntityKey_1.default {\r\n    constructor(id) {\r\n        super();\r\n        this.id = id;\r\n    }\r\n    eq(val) {\r\n        return this.id === val.id;\r\n    }\r\n}\r\nexports.default = SurrogateKey;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/SurrogateKey.ts?");

/***/ }),

/***/ "./src/main/domain/SurrogateKeyEntity.ts":
/*!***********************************************!*\
  !*** ./src/main/domain/SurrogateKeyEntity.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Entity_1 = __importDefault(__webpack_require__(/*! ./Entity */ \"./src/main/domain/Entity.ts\"));\r\nclass SurrogateKeyEntity extends Entity_1.default {\r\n    get $key() {\r\n        if (!this.$id) {\r\n            throw new Error('unassigned $key');\r\n        }\r\n        return this.$id;\r\n    }\r\n    hasKey() {\r\n        return this.$id != null;\r\n    }\r\n    assignKey(key) {\r\n        if (this.hasKey()) {\r\n            throw new Error('already unassigned');\r\n        }\r\n        this.$id = key;\r\n    }\r\n}\r\nexports.default = SurrogateKeyEntity;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/SurrogateKeyEntity.ts?");

/***/ }),

/***/ "./src/main/domain/SurrogateKeyRepository.ts":
/*!***************************************************!*\
  !*** ./src/main/domain/SurrogateKeyRepository.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Repository_1 = __importDefault(__webpack_require__(/*! ./Repository */ \"./src/main/domain/Repository.ts\"));\r\nconst SurrogateKey_1 = __importDefault(__webpack_require__(/*! ./SurrogateKey */ \"./src/main/domain/SurrogateKey.ts\"));\r\nclass SurrogateKeyRepository extends Repository_1.default {\r\n    constructor() {\r\n        super(...arguments);\r\n        this.incremental = 0;\r\n    }\r\n    preInsert(entity) {\r\n        // 連番キーを割り当てる\r\n        if (!entity.hasKey()) {\r\n            entity.assignKey(new SurrogateKey_1.default(this.incremental++));\r\n        }\r\n    }\r\n    preUpdate(newValue, key) {\r\n        newValue.assignKey(key);\r\n    }\r\n}\r\nexports.default = SurrogateKeyRepository;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/SurrogateKeyRepository.ts?");

/***/ }),

/***/ "./src/main/funciton/Predicates.ts":
/*!*****************************************!*\
  !*** ./src/main/funciton/Predicates.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nclass Predicates {\r\n    constructor() {\r\n    }\r\n    static get always() {\r\n        return it => true;\r\n    }\r\n    static get never() {\r\n        return it => false;\r\n    }\r\n    static negate(pred) {\r\n        return it => !pred(it);\r\n    }\r\n}\r\nexports.default = Predicates;\r\n\n\n//# sourceURL=webpack:///./src/main/funciton/Predicates.ts?");

/***/ }),

/***/ "./src/main/funciton/curry.ts":
/*!************************************!*\
  !*** ./src/main/funciton/curry.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction curry(func) {\r\n    return (v1) => (v2) => func(v1, v2);\r\n}\r\nexports.default = curry;\r\n\n\n//# sourceURL=webpack:///./src/main/funciton/curry.ts?");

/***/ }),

/***/ "./src/main/funciton/eq.ts":
/*!*********************************!*\
  !*** ./src/main/funciton/eq.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ValueObject_1 = __importDefault(__webpack_require__(/*! ../beans/ValueObject */ \"./src/main/beans/ValueObject.ts\"));\r\nfunction eq(val1, val2) {\r\n    if (val1 instanceof ValueObject_1.default && val2 instanceof ValueObject_1.default) {\r\n        return val1.eq(val2);\r\n    }\r\n    return val1 == null ? val2 == null : val1 === val2;\r\n}\r\nexports.default = eq;\r\n\n\n//# sourceURL=webpack:///./src/main/funciton/eq.ts?");

/***/ }),

/***/ "./src/main/funciton/getProperties.ts":
/*!********************************************!*\
  !*** ./src/main/funciton/getProperties.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// これでもいけそう\r\n// https://stackoverflow.com/questions/30158515/list-down-all-prototype-properties-of-an-javascript-object\r\nfunction getProperties(obj, properties = []) {\r\n    if (obj.__proto__ != null) {\r\n        return getProperties(obj.__proto__, Object.getOwnPropertyNames(obj)).concat(properties);\r\n    }\r\n    return properties;\r\n}\r\nexports.default = getProperties;\r\n\n\n//# sourceURL=webpack:///./src/main/funciton/getProperties.ts?");

/***/ }),

/***/ "./src/main/funciton/mixin.ts":
/*!************************************!*\
  !*** ./src/main/funciton/mixin.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst getProperties_1 = __importDefault(__webpack_require__(/*! ./getProperties */ \"./src/main/funciton/getProperties.ts\"));\r\nfunction mixin(first, second) {\r\n    let result = {};\r\n    // 名前が被るプロパティ、関数はfirstで上書きされる\r\n    for (let id of getProperties_1.default(first)) {\r\n        result[id] = first[id];\r\n    }\r\n    for (let id of getProperties_1.default(second)) {\r\n        if (!result.hasOwnProperty(id)) {\r\n            result[id] = second[id];\r\n        }\r\n    }\r\n    return result;\r\n}\r\nexports.default = mixin;\r\n\n\n//# sourceURL=webpack:///./src/main/funciton/mixin.ts?");

/***/ }),

/***/ "./src/main/funciton/not.ts":
/*!**********************************!*\
  !*** ./src/main/funciton/not.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst eq_1 = __importDefault(__webpack_require__(/*! ./eq */ \"./src/main/funciton/eq.ts\"));\r\nfunction not(val1, val2) {\r\n    return !eq_1.default(val1, val2);\r\n}\r\nexports.default = not;\r\n\n\n//# sourceURL=webpack:///./src/main/funciton/not.ts?");

/***/ }),

/***/ "./src/main/funciton/part.ts":
/*!***********************************!*\
  !*** ./src/main/funciton/part.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction part(func, arg) {\r\n    return (v2) => func(arg, v2);\r\n}\r\nexports.default = part;\r\n\n\n//# sourceURL=webpack:///./src/main/funciton/part.ts?");

/***/ }),

/***/ "./src/main/index.ts":
/*!***************************!*\
  !*** ./src/main/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// function\r\nconst part_1 = __importDefault(__webpack_require__(/*! ./funciton/part */ \"./src/main/funciton/part.ts\"));\r\nexports.part = part_1.default;\r\nconst curry_1 = __importDefault(__webpack_require__(/*! ./funciton/curry */ \"./src/main/funciton/curry.ts\"));\r\nexports.curry = curry_1.default;\r\nconst eq_1 = __importDefault(__webpack_require__(/*! ./funciton/eq */ \"./src/main/funciton/eq.ts\"));\r\nexports.eq = eq_1.default;\r\nconst getProperties_1 = __importDefault(__webpack_require__(/*! ./funciton/getProperties */ \"./src/main/funciton/getProperties.ts\"));\r\nexports.getProperties = getProperties_1.default;\r\nconst not_1 = __importDefault(__webpack_require__(/*! ./funciton/not */ \"./src/main/funciton/not.ts\"));\r\nexports.not = not_1.default;\r\nconst mixin_1 = __importDefault(__webpack_require__(/*! ./funciton/mixin */ \"./src/main/funciton/mixin.ts\"));\r\nexports.mixin = mixin_1.default;\r\nconst Predicates_1 = __importDefault(__webpack_require__(/*! ./funciton/Predicates */ \"./src/main/funciton/Predicates.ts\"));\r\nexports.Predicates = Predicates_1.default;\r\n// DI\r\nconst Dependencies_1 = __importDefault(__webpack_require__(/*! ./di/Dependencies */ \"./src/main/di/Dependencies.ts\"));\r\nexports.Dependencies = Dependencies_1.default;\r\n// domain\r\nconst Repository_1 = __importDefault(__webpack_require__(/*! ./domain/Repository */ \"./src/main/domain/Repository.ts\"));\r\nexports.Repository = Repository_1.default;\r\nconst Entity_1 = __importDefault(__webpack_require__(/*! ./domain/Entity */ \"./src/main/domain/Entity.ts\"));\r\nexports.Entity = Entity_1.default;\r\nconst SurrogateKey_1 = __importDefault(__webpack_require__(/*! ./domain/SurrogateKey */ \"./src/main/domain/SurrogateKey.ts\"));\r\nexports.SurrogateKey = SurrogateKey_1.default;\r\nconst SurrogateKeyRepository_1 = __importDefault(__webpack_require__(/*! ./domain/SurrogateKeyRepository */ \"./src/main/domain/SurrogateKeyRepository.ts\"));\r\nexports.SurrogateKeyRepository = SurrogateKeyRepository_1.default;\r\nconst SurrogateKeyEntity_1 = __importDefault(__webpack_require__(/*! ./domain/SurrogateKeyEntity */ \"./src/main/domain/SurrogateKeyEntity.ts\"));\r\nexports.SurrogateKeyEntity = SurrogateKeyEntity_1.default;\r\n// beans\r\nconst LeftJoinedList_1 = __importDefault(__webpack_require__(/*! ./beans/binding/LeftJoinedList */ \"./src/main/beans/binding/LeftJoinedList.ts\"));\r\nexports.LeftJoinedList = LeftJoinedList_1.default;\r\nconst CustomMap_1 = __webpack_require__(/*! ./beans/CustomMap */ \"./src/main/beans/CustomMap.ts\");\r\nexports.CustomMap = CustomMap_1.CustomMap;\r\nconst IndexedList_1 = __importDefault(__webpack_require__(/*! ./beans/binding/IndexedList */ \"./src/main/beans/binding/IndexedList.ts\"));\r\nexports.IndexedList = IndexedList_1.default;\r\nconst ValueObject_1 = __importDefault(__webpack_require__(/*! ./beans/ValueObject */ \"./src/main/beans/ValueObject.ts\"));\r\nexports.ValueObject = ValueObject_1.default;\r\nconst ObservableList_1 = __importDefault(__webpack_require__(/*! ./beans/ObservableList */ \"./src/main/beans/ObservableList.ts\"));\r\nexports.ObservableList = ObservableList_1.default;\r\nconst ObservableValue_1 = __importDefault(__webpack_require__(/*! ./beans/ObservableValue */ \"./src/main/beans/ObservableValue.ts\"));\r\nexports.ObservableValue = ObservableValue_1.default;\r\nconst FilteredList_1 = __importDefault(__webpack_require__(/*! ./beans/binding/FilteredList */ \"./src/main/beans/binding/FilteredList.ts\"));\r\nexports.FilteredList = FilteredList_1.default;\r\nconst ValueBinding_1 = __importDefault(__webpack_require__(/*! ./beans/binding/ValueBinding */ \"./src/main/beans/binding/ValueBinding.ts\"));\r\nexports.ValueBinding = ValueBinding_1.default;\r\n\n\n//# sourceURL=webpack:///./src/main/index.ts?");

/***/ })

/******/ });