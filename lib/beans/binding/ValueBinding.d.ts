import ObservableValue from "../ObservableValue";
export default class ValueBinding<T, U = T> {
    private obs;
    private mapper;
    constructor(obs: ObservableValue<T>, mapper: (val: T) => U);
    private val;
}
