import ObservableList from "../ObservableList";
export default class FilteredList<T> extends ObservableList<T> {
    private targetObservers;
    private pred;
    constructor(targetObservers: ObservableList<T>, pred: (val: T) => boolean);
}
