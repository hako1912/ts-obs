// TODO: Contraint
import SurrogateKeyEntity from "./SurrogateKeyEntity";

type Joiner = (e1: SurrogateKeyEntity, e2: SurrogateKeyEntity) => boolean

export default class RepositoryRelation {


    join(e1: SurrogateKeyEntity, e2: SurrogateKeyEntity, joiner: Joiner) {
        joiner(e1, e2)
    }

}