import ObservableList from "../ObservableList";
import ObservableValue from "../ObservableValue";

export default class FilteredList<T> extends ObservableList<T>{
    public constructor(
        private targetObservers: ObservableList<T>,
        private pred: (val: T) => boolean) {
        super()
        this._obsValues.push(...targetObservers.filter(it => pred(it)).map(it => new ObservableValue(it)))

        targetObservers.addArrayListener((appends, removes) => {
            this._obsValues = this._obsValues.filter(it => removes.indexOf(it.val))
            this._obsValues.push(...appends.filter(it => this.pred(it)).map(it => new ObservableValue(it)))
        })
        targetObservers.addElementListener((now, old) => {
            const currentObs = this._obsValues.find(it => it.value === old)
            if (currentObs == null) {
                // もともとフィルタリストに存在しないなら、追加する必要があるか判定
                if (this.pred(now)) {
                    this._obsValues.push(new ObservableValue(now))
                }
            } else {
                // すでにフィルタリストに存在するなら、削除する必要があるか判定
                if (!this.pred(now)) {
                    // もともとフィルタリストに存在する要素を削除するのでoldと比較
                    this._obsValues = this._obsValues.filter(it => it.value !== old)
                } else {
                    // もともとフィルタリスとに存在し、削除する必要がないなら、更新
                    currentObs.value = now
                }
            }
        })

    }
}