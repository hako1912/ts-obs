import ObservableList from "../ObservableList";
import ObservableValue from "../ObservableValue";

// TODO: フィルタ条件は最初に渡したもので固定
// TODO: 条件を動的に変えたいならObsPredをつくる
export default class FilteredList<T>  extends ObservableList<T>{
    public constructor(
        private obs: ObservableList<T>,
        private pred: (val: T) => boolean) {
        super()
        this._obsValues.push(...obs.filter(it => pred(it)).map(it => new ObservableValue(it)))
        obs.addArrayListener((appends, removes) => {
            this._obsValues = this._obsValues.filter(it => removes.indexOf(it.val))
            this._obsValues.push(...appends.filter(it => this.pred(it)).map(it => new ObservableValue(it)))
        })
    }
}