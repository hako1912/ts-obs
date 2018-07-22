"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// これでもいけそう
// https://stackoverflow.com/questions/30158515/list-down-all-prototype-properties-of-an-javascript-object
function getProperties(obj, properties = []) {
    if (obj.__proto__ != null) {
        return getProperties(obj.__proto__, Object.getOwnPropertyNames(obj)).concat(properties);
    }
    return properties;
}
exports.default = getProperties;
