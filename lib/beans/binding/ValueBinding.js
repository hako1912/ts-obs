"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ObservableValue_1 = __importDefault(require("../ObservableValue"));
class ValueBinding {
    constructor(obs, mapper) {
        this.obs = obs;
        this.mapper = mapper;
        this.val = new ObservableValue_1.default(mapper(obs.val));
        obs.addListener((val, oldVal) => {
            this.val.val = this.mapper(val);
        });
    }
}
exports.default = ValueBinding;
