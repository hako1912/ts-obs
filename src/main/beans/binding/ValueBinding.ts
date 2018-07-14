import ObservableValue from "../ObservableValue";

export default class ValueBinding<T, U = T> {
  constructor(
    private obs: ObservableValue<T>,
    private mapper: (val: T) => U,
  ) {
    this.val = new ObservableValue(mapper(obs.val))
    obs.addListener((val, oldVal) => {
      this.val.val = this.mapper(val)
    })
  }

  private val: ObservableValue<U>
}