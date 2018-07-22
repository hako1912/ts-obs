"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ValueObject_1 = __importDefault(require("../beans/ValueObject"));
var functions;
(function (functions) {
    function curry(func) {
        return (v1) => (v2) => func(v1, v2);
    }
    functions.curry = curry;
    function part(func, arg) {
        return (v2) => func(arg, v2);
    }
    functions.part = part;
    function eq(val1, val2) {
        if (val1 instanceof ValueObject_1.default && val2 instanceof ValueObject_1.default) {
            return val1.eq(val2);
        }
        return val1 == null ? val2 == null : val1 === val2;
    }
    functions.eq = eq;
    function not(val1, val2) {
        return !eq(val1, val2);
    }
    functions.not = not;
    function mixin(first, second) {
        let result = {};
        // 名前が被るプロパティ、関数はfirstで上書きされる
        for (let id of getProperties(first)) {
            result[id] = first[id];
        }
        for (let id of getProperties(second)) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    functions.mixin = mixin;
    // これでもいけそう
    // https://stackoverflow.com/questions/30158515/list-down-all-prototype-properties-of-an-javascript-object
    function getProperties(obj, properties = []) {
        if (obj.__proto__ != null) {
            return getProperties(obj.__proto__, Object.getOwnPropertyNames(obj)).concat(properties);
        }
        return properties;
    }
    functions.getProperties = getProperties;
})(functions = exports.functions || (exports.functions = {}));
