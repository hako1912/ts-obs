export default class Dependencies {
    static container: Map<new () => any, any>;
    static inject<T>(clazz: new () => T): T;
}
