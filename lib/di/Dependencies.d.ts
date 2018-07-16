import { Class } from "../types";
export default class Dependencies {
    static container: Map<Class<any>, any>;
    static inject<T>(clazz: Class<T>): T;
}
