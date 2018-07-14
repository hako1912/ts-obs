import ObsValue from "../ObsValue";

export default class ValueBinding<T, U = T> {
  constructor(
    private obs: ObsValue<T>,
    private mapper: (val: T) => U,
  ) {
    this.val = new ObsValue(mapper(obs.val))
    obs.addListener((val, oldVal) => {
      this.val.val = this.mapper(val)
    })
  }

  private val: ObsValue<U>
}