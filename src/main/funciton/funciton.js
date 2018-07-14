"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Functions;
(function (Functions) {
    function curry(func) {
        return (v1) => (v2) => func(v1, v2);
    }
    Functions.curry = curry;
    function part(func, arg) {
        return (v2) => func(arg, v2);
    }
    Functions.part = part;
})(Functions = exports.Functions || (exports.Functions = {}));
function add(n1, n2) {
    return false;
}
//# sourceMappingURL=funciton.js.map