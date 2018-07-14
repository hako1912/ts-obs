"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValueObject {
    not(val) {
        return !this.eq(val);
    }
}
exports.default = ValueObject;
