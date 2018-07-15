"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dependencies {
    static inject(clazz) {
        const instance = Dependencies.container.get(clazz);
        if (instance) {
            return instance;
        }
        const newInstance = new clazz();
        Dependencies.container.set(clazz, newInstance);
        return newInstance;
    }
}
Dependencies.container = new Map();
exports.default = Dependencies;
