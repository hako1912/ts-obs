import ObsList from "../ObsList";
import ObsValue from "@/beans/ObsValue";

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