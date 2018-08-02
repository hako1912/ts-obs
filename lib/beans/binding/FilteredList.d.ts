import ObservableList from "../ObservableList";
export default class FilteredList<T> extends ObservableList<T> {
    private obs;
    private pred;
    constructor(obs: ObservableList<T>, pred: (val: T) => boolean);
}
