"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deprecated_1 = __importDefault(require("../decorator/deprecated"));
class ObservableValue {
    constructor(_val) {
        this._val = _val;
        this.listeners = [];
    }
    get value() {
        return this._val;
    }
    set value(value) {
        if (this.val == value) {
            return;
        }
        const old = this.val;
        this._val = value;
        this.listeners.forEach(lis => lis(value, old));
    }
    get val() {
        return this._val;
    }
    set val(value) {
        if (this.val == value) {
            return;
        }
        const old = this.val;
        this._val = value;
        this.listeners.forEach(lis => lis(value, old));
    }
    addListener(listener) {
        this.listeners.push(listener);
    }
    removeListener(listener) {
        this.listeners = this.listeners.filter(it => listener === it);
    }
}
__decorate([
    deprecated_1.default
], ObservableValue.prototype, "val", null);
exports.default = ObservableValue;
