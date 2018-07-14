import ObsList from "../ObsList";
import ObsValue from "../ObsValue";

// TODO: フィルタ条件は最初に渡したもので固定
// TODO: 条件を動的に変えたいならObsPredをつくる
export default class ListFilterBinding<T> {
    public constructor(
        private obs: ObsList<T>,
        private pred: (val: T) => boolean) {
        this._val.push(...obs.filter(it => pred(it)).map(it => new ObsValue(it)))
        obs.addArrayListener((appends, removes) => {
            this._val = this._val.filter(it => removes.indexOf(it.val))
            this._val.push(...appends.filter(it => this.pred(it)).map(it => new ObsValue(it)))
        })
    }

    private _val: ObsValue<T>[] = []

    get val(): ObsValue<T>[] {
        return this._val;
    }
}