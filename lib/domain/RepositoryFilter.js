"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FilteredList_1 = __importDefault(require("../beans/binding/FilteredList"));
const Predicates_1 = __importDefault(require("../funciton/Predicates"));
class RepositoryFilter {
    all() {
        return new FilteredList_1.default(this.getRepository().store, Predicates_1.default.always);
    }
}
exports.default = RepositoryFilter;
