import FilteredList from "../beans/binding/FilteredList";
import Predicates from "../funciton/Predicates";
import SurrogateKeyEntity from "./SurrogateKeyEntity";
import SurrogateKeyRepository from "./SurrogateKeyRepository";


export default abstract class RepositoryFilter<E extends SurrogateKeyEntity> {

    abstract getRepository(): SurrogateKeyRepository<E>

    all(): FilteredList<E> {
        return new FilteredList(this.getRepository().store, Predicates.always)
    }

}
