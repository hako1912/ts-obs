import ObsValue from "@/beans/ObsValue";
export default class ValueBinding<T, U = T> {
    private obs;
    private mapper;
    constructor(obs: ObsValue<T>, mapper: (val: T) => U);
    private val;
}
