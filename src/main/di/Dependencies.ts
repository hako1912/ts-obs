import {Class} from "../types";


export default class Dependencies {

    static container: Map<Class<any>, any> = new Map()

    static inject<T>(clazz: Class<T>): T {
        const instance = Dependencies.container.get(clazz)
        if (instance) {
            return instance
        }
        const newInstance = new clazz()
        Dependencies.container.set(clazz, newInstance)
        return newInstance
    }
}
