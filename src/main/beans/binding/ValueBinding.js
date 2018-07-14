"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ObsValue_1 = __importDefault(require("@/beans/ObsValue"));
class ValueBinding {
    constructor(obs, mapper) {
        this.obs = obs;
        this.mapper = mapper;
        this.val = new ObsValue_1.default(mapper(obs.val));
        obs.addListener((val, oldVal) => {
            this.val.val = this.mapper(val);
        });
    }
}
exports.default = ValueBinding;
//# sourceMappingURL=ValueBinding.js.map