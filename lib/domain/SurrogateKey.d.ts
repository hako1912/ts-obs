import EntityKey from "./EntityKey";
export default class SurrogateKey extends EntityKey {
    private id;
    constructor(id: number);
    eq(val: this): boolean;
}
