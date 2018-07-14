import ObservableList from "../ObservableList";
import ObservableValue from "../ObservableValue";

// TODO: フィルタ条件は最初に渡したもので固定
// TODO: 条件を動的に変えたいならObsPredをつくる
export default class FilteredList<T> {
    public constructor(
        private obs: ObservableList<T>,
        private pred: (val: T) => boolean) {
        this._val.push(...obs.filter(it => pred(it)).map(it => new ObservableValue(it)))
        obs.addArrayListener((appends, removes) => {
            this._val = this._val.filter(it => removes.indexOf(it.val))
            this._val.push(...appends.filter(it => this.pred(it)).map(it => new ObservableValue(it)))
        })
    }

    private _val: ObservableValue<T>[] = []

    get val(): ObservableValue<T>[] {
        return this._val;
    }

    flatValues(): T[] {
        return this._val.map(it => it.val)
    }
}