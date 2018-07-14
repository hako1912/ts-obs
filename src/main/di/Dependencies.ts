import {Class} from "../types";


export default class Dependencies {

    static container: any[] = []

    static inject<T>(clazz: Class<T>) {
        const instance = Dependencies.container.indexOf(clazz)
        if(instance){
            return instance
        }
        const newInstance = new clazz()
        Dependencies.container.push(newInstance)
        return newInstance
    }
}
