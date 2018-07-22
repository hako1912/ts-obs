"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function part(func, arg) {
    return (v2) => func(arg, v2);
}
exports.default = part;
