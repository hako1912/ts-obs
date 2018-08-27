export default class Dependencies {

    static container: Map<new () => any, any> = new Map()

    static inject<T>(clazz: new () => T): T {
        const instance = Dependencies.container.get(clazz)
        if (instance) {
            return instance
        }
        const newInstance = new clazz()
        Dependencies.container.set(clazz, newInstance)
        return newInstance
    }
}
