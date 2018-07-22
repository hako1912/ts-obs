"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function curry(func) {
    return (v1) => (v2) => func(v1, v2);
}
exports.default = curry;
