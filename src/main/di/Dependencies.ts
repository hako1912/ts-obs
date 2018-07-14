import {Class} from "../types";
import {Functions} from "../funciton/funciton";


export default class Dependencies {

    // class instance map
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
