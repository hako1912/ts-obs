import FilteredList from "../beans/binding/FilteredList";
import Repository from "./Repository";
import EntityKey from "./EntityKey";
import Entity from "./Entity";
export default abstract class RepositoryFilter<K extends EntityKey, E extends Entity<K>, R extends Repository<K, E>> {
    abstract getRepository(): R;
    all(): FilteredList<E>;
}
