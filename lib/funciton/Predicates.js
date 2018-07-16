"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Predicates {
    constructor() {
    }
    static get always() {
        return it => true;
    }
    static get never() {
        return it => false;
    }
    static negate(pred) {
        return it => !pred(it);
    }
}
exports.default = Predicates;
