import EntityKey from "./EntityKey";

export default class SurrogateKey extends EntityKey {
    constructor(private id: number) {
        super()
    }

    eq(val: this): boolean {
        return this.id === val.id;
    }
}