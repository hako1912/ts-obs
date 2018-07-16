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

/***/ "./src/main/beans/ObservableList.ts":
/*!******************************************!*\
  !*** ./src/main/beans/ObservableList.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ObservableValue_1 = __importDefault(__webpack_require__(/*! ./ObservableValue */ \"./src/main/beans/ObservableValue.ts\"));\r\nconst deprecated_1 = __importDefault(__webpack_require__(/*! ../decorator/deprecated */ \"./src/main/decorator/deprecated.ts\"));\r\n// 利用側はObservableValueが見れないようにする\r\n// ※サブクラスはObservableValueを見たいので、取得メソッドをprotectedで提供する\r\nclass ObservableList {\r\n    constructor(_obsValues = []) {\r\n        this._obsValues = _obsValues;\r\n        this.onElementChangeObj = this.onElementChange.bind(this);\r\n        this.arrayListeners = [];\r\n        this.elementListeners = [];\r\n        this._obsValues.forEach(obs => {\r\n            obs.addListener(this.onElementChangeObj);\r\n        });\r\n    }\r\n    //  obsValues(): ObservableValue<T>[] {\r\n    //     return this._obsValues\r\n    // }\r\n    get values() {\r\n        return this._obsValues.map(it => it.value);\r\n    }\r\n    get val() {\r\n        return this._obsValues;\r\n    }\r\n    set val(value) {\r\n        this._obsValues = value;\r\n    }\r\n    addElementListener(listener) {\r\n        this.elementListeners.push(listener);\r\n    }\r\n    addArrayListener(listener) {\r\n        this.arrayListeners.push(listener);\r\n    }\r\n    removeArrayListener(listener) {\r\n        this.arrayListeners = this.arrayListeners.filter(it => listener !== it);\r\n    }\r\n    removeElementListener(listener) {\r\n        this.elementListeners = this.elementListeners.filter(it => listener !== it);\r\n    }\r\n    push(...values) {\r\n        if (values.length === 0) {\r\n            return [];\r\n        }\r\n        const appends = values.map(it => new ObservableValue_1.default(it));\r\n        this._obsValues.push(...appends);\r\n        this.arrayListeners.forEach(lis => lis(values, []));\r\n        appends.forEach(it => it.addListener(this.onElementChangeObj));\r\n        return appends;\r\n    }\r\n    remove(...values) {\r\n        // これ意味あるのか\r\n        const obsValues = values.map(it => new ObservableValue_1.default(it));\r\n        obsValues.forEach(it => it.removeListener(this.onElementChangeObj));\r\n        const removes = [];\r\n        this._obsValues = this._obsValues.filter(it => {\r\n            if (values.indexOf(it.val) === -1) {\r\n                return true;\r\n            }\r\n            removes.push(it.val);\r\n            return false;\r\n        });\r\n        if (0 < removes.length) {\r\n            this.arrayListeners.forEach(lis => lis([], removes));\r\n        }\r\n    }\r\n    /**\r\n     *\r\n     * @param {(val: T) => boolean} predicate\r\n     * @returns {number} 削除した件数\r\n     */\r\n    removeIf(predicate) {\r\n        const preLength = this.values.length;\r\n        const removes = this.values.filter(it => predicate(it));\r\n        this.remove(...removes);\r\n        return this.values.length - preLength;\r\n    }\r\n    clear() {\r\n        if (this._obsValues.length === 0) {\r\n            return;\r\n        }\r\n        const oldVal = this.values;\r\n        this._obsValues = [];\r\n        this.arrayListeners.forEach(lis => lis([], oldVal));\r\n    }\r\n    isEmpty() {\r\n        return this._obsValues.length === 0;\r\n    }\r\n    isNotEmpty() {\r\n        return !this.isEmpty();\r\n    }\r\n    map(func) {\r\n        return this.values.map(func);\r\n    }\r\n    filter(func) {\r\n        return this.values.filter(func);\r\n    }\r\n    find(func) {\r\n        return this.values.find(func);\r\n    }\r\n    forEach(func) {\r\n        this.values.forEach(func);\r\n    }\r\n    // public bindFilter(pred: Predicate<T>): FilteredList<T> {\r\n    //     return new FilteredList(this, pred)\r\n    // }\r\n    onElementChange(val, oldVal) {\r\n        this.elementListeners.forEach(it => it(val, oldVal));\r\n    }\r\n}\r\n__decorate([\r\n    deprecated_1.default\r\n], ObservableList.prototype, \"val\", null);\r\nexports.default = ObservableList;\r\n\n\n//# sourceURL=webpack:///./src/main/beans/ObservableList.ts?");

/***/ }),

/***/ "./src/main/beans/ObservableValue.ts":
/*!*******************************************!*\
  !*** ./src/main/beans/ObservableValue.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst deprecated_1 = __importDefault(__webpack_require__(/*! ../decorator/deprecated */ \"./src/main/decorator/deprecated.ts\"));\r\nclass ObservableValue {\r\n    constructor(_val) {\r\n        this._val = _val;\r\n        this.listeners = [];\r\n    }\r\n    get value() {\r\n        return this._val;\r\n    }\r\n    set value(value) {\r\n        if (this.val == value) {\r\n            return;\r\n        }\r\n        const old = this.val;\r\n        this._val = value;\r\n        this.listeners.forEach(lis => lis(value, old));\r\n    }\r\n    get val() {\r\n        return this._val;\r\n    }\r\n    set val(value) {\r\n        if (this.val == value) {\r\n            return;\r\n        }\r\n        const old = this.val;\r\n        this._val = value;\r\n        this.listeners.forEach(lis => lis(value, old));\r\n    }\r\n    addListener(listener) {\r\n        this.listeners.push(listener);\r\n    }\r\n    removeListener(listener) {\r\n        this.listeners = this.listeners.filter(it => listener === it);\r\n    }\r\n}\r\n__decorate([\r\n    deprecated_1.default\r\n], ObservableValue.prototype, \"val\", null);\r\nexports.default = ObservableValue;\r\n\n\n//# sourceURL=webpack:///./src/main/beans/ObservableValue.ts?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ObservableList_1 = __importDefault(__webpack_require__(/*! ../ObservableList */ \"./src/main/beans/ObservableList.ts\"));\r\nconst ObservableValue_1 = __importDefault(__webpack_require__(/*! ../ObservableValue */ \"./src/main/beans/ObservableValue.ts\"));\r\n// TODO: フィルタ条件は最初に渡したもので固定\r\n// TODO: 条件を動的に変えたいならObsPredをつくる\r\nclass FilteredList extends ObservableList_1.default {\r\n    constructor(obs, pred) {\r\n        super();\r\n        this.obs = obs;\r\n        this.pred = pred;\r\n        this._obsValues.push(...obs.filter(it => pred(it)).map(it => new ObservableValue_1.default(it)));\r\n        obs.addArrayListener((appends, removes) => {\r\n            this._obsValues = this._obsValues.filter(it => removes.indexOf(it.val));\r\n            this._obsValues.push(...appends.filter(it => this.pred(it)).map(it => new ObservableValue_1.default(it)));\r\n        });\r\n    }\r\n}\r\nexports.default = FilteredList;\r\n\n\n//# sourceURL=webpack:///./src/main/beans/binding/FilteredList.ts?");

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

/***/ "./src/main/decorator/deprecated.ts":
/*!******************************************!*\
  !*** ./src/main/decorator/deprecated.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// export default function deprecated(){}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst deprecated = undefined;\r\nexports.default = deprecated;\r\n\n\n//# sourceURL=webpack:///./src/main/decorator/deprecated.ts?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ValueObject_1 = __importDefault(__webpack_require__(/*! ../beans/ValueObject */ \"./src/main/beans/ValueObject.ts\"));\r\nclass Entity extends ValueObject_1.default {\r\n    eq(val) {\r\n        return this.key().eq(val.key());\r\n    }\r\n}\r\nexports.default = Entity;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/Entity.ts?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ObservableList_1 = __importDefault(__webpack_require__(/*! ../beans/ObservableList */ \"./src/main/beans/ObservableList.ts\"));\r\nconst funciton_1 = __webpack_require__(/*! ../funciton/funciton */ \"./src/main/funciton/functions.ts\");\r\nvar eq = funciton_1.functions.eq;\r\nclass Repository {\r\n    constructor() {\r\n        this._store = new ObservableList_1.default();\r\n    }\r\n    get store() {\r\n        return this._store;\r\n    }\r\n    preInsert(entity) {\r\n        // noop\r\n    }\r\n    insert(val) {\r\n        console.log(`insert: val=${JSON.stringify(val)}`);\r\n        // サブクラスで登録前に処理を挟む場合ここで\r\n        this.preInsert(val);\r\n        if (this.has(val.key())) {\r\n            // すでに存在するキーに対して挿入しようとした場合\r\n            throw Error(`key of ${val.key()} is already exists`);\r\n        }\r\n        // key validation\r\n        if (val.key() == null) {\r\n            throw Error('undefined key');\r\n        }\r\n        this.store.push(val);\r\n    }\r\n    preUpdate(newVal, key) {\r\n        // noop\r\n    }\r\n    update(newVal, key) {\r\n        console.log(`update: key=${JSON.stringify(key)}, newVal=${JSON.stringify(newVal)}`);\r\n        // サブクラスで登録前に処理を挟む場合ここで\r\n        this.preUpdate(newVal, key);\r\n        if (!this.has(key)) {\r\n            // 旧値が存在しない場合\r\n            throw Error(`key of ${key} is no value present`);\r\n        }\r\n        if (this.deleteBy(key) === 0) {\r\n            throw Error('cant delete before update');\r\n        }\r\n        this.insert(newVal);\r\n    }\r\n    deleteBy(key) {\r\n        console.log(`deleteBy: key=${JSON.stringify(key)}`);\r\n        return this.store.removeIf(it => eq(it.key(), key));\r\n    }\r\n    size() {\r\n        return this.store.val.length;\r\n    }\r\n    findBy(key) {\r\n        console.log(`findBy: key=${JSON.stringify(key)}`);\r\n        const val = this.store.find(it => eq(it.key(), key));\r\n        if (val == null) {\r\n            throw Error('no value present');\r\n        }\r\n        return val;\r\n    }\r\n    has(key) {\r\n        const find = this.store.find(it => it.key().eq(key));\r\n        return find != null;\r\n    }\r\n}\r\nexports.default = Repository;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/Repository.ts?");

/***/ }),

/***/ "./src/main/domain/RepositoryFilter.ts":
/*!*********************************************!*\
  !*** ./src/main/domain/RepositoryFilter.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst FilteredList_1 = __importDefault(__webpack_require__(/*! ../beans/binding/FilteredList */ \"./src/main/beans/binding/FilteredList.ts\"));\r\nconst Predicates_1 = __importDefault(__webpack_require__(/*! ../funciton/Predicates */ \"./src/main/funciton/Predicates.ts\"));\r\nclass RepositoryFilter {\r\n    all() {\r\n        return new FilteredList_1.default(this.getRepository().store, Predicates_1.default.always);\r\n    }\r\n}\r\nexports.default = RepositoryFilter;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/RepositoryFilter.ts?");

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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst Entity_1 = __importDefault(__webpack_require__(/*! ./Entity */ \"./src/main/domain/Entity.ts\"));\r\nclass SurrogateKeyEntity extends Entity_1.default {\r\n    key() {\r\n        if (!this.id) {\r\n            throw new Error('unassigned key');\r\n        }\r\n        return this.id;\r\n    }\r\n    hasKey() {\r\n        return this.id != null;\r\n    }\r\n    assignKey(key) {\r\n        if (this.id) {\r\n            throw new Error('already unassigned');\r\n        }\r\n        this.id = key;\r\n    }\r\n}\r\nexports.default = SurrogateKeyEntity;\r\n\n\n//# sourceURL=webpack:///./src/main/domain/SurrogateKeyEntity.ts?");

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

/***/ "./src/main/funciton/funciton.ts":
/*!***************************************!*\
  !*** ./src/main/funciton/functions.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst ValueObject_1 = __importDefault(__webpack_require__(/*! ../beans/ValueObject */ \"./src/main/beans/ValueObject.ts\"));\r\nvar functions;\r\n(function (functions) {\r\n    function curry(func) {\r\n        return (v1) => (v2) => func(v1, v2);\r\n    }\r\n    functions.curry = curry;\r\n    function part(func, arg) {\r\n        return (v2) => func(arg, v2);\r\n    }\r\n    functions.part = part;\r\n    function eq(val1, val2) {\r\n        if (val1 instanceof ValueObject_1.default && val2 instanceof ValueObject_1.default) {\r\n            return val1.eq(val2);\r\n        }\r\n        return val1 == null ? val2 == null : val1 === val2;\r\n    }\r\n    functions.eq = eq;\r\n})(functions = exports.functions || (exports.functions = {}));\r\n\n\n//# sourceURL=webpack:///./src/main/funciton/functions.ts?");

/***/ }),

/***/ "./src/main/index.ts":
/*!***************************!*\
  !*** ./src/main/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nfunction __export(m) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n// domain\r\n__export(__webpack_require__(/*! ./domain/Repository */ \"./src/main/domain/Repository.ts\"));\r\n__export(__webpack_require__(/*! ./domain/Entity */ \"./src/main/domain/Entity.ts\"));\r\n__export(__webpack_require__(/*! ./domain/SurrogateKey */ \"./src/main/domain/SurrogateKey.ts\"));\r\n__export(__webpack_require__(/*! ./domain/SurrogateKeyRepository */ \"./src/main/domain/SurrogateKeyRepository.ts\"));\r\n__export(__webpack_require__(/*! ./domain/SurrogateKeyEntity */ \"./src/main/domain/SurrogateKeyEntity.ts\"));\r\n__export(__webpack_require__(/*! ./domain/RepositoryFilter */ \"./src/main/domain/RepositoryFilter.ts\"));\r\n// beans\r\n__export(__webpack_require__(/*! ./beans/ValueObject */ \"./src/main/beans/ValueObject.ts\"));\r\n__export(__webpack_require__(/*! ./beans/ObservableList */ \"./src/main/beans/ObservableList.ts\"));\r\n__export(__webpack_require__(/*! ./beans/ObservableValue */ \"./src/main/beans/ObservableValue.ts\"));\r\n__export(__webpack_require__(/*! ./beans/binding/FilteredList */ \"./src/main/beans/binding/FilteredList.ts\"));\r\n__export(__webpack_require__(/*! ./beans/binding/ValueBinding */ \"./src/main/beans/binding/ValueBinding.ts\"));\r\n// function\r\n__export(__webpack_require__(/*! ./funciton/funciton */ \"./src/main/funciton/functions.ts\"));\r\n__export(__webpack_require__(/*! ./funciton/Predicates */ \"./src/main/funciton/Predicates.ts\"));\r\n//\r\n__export(__webpack_require__(/*! ./di/Dependencies */ \"./src/main/di/Dependencies.ts\"));\r\n\n\n//# sourceURL=webpack:///./src/main/index.ts?");

/***/ })

/******/ });