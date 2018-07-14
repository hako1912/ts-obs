import ObsList from "../ObsList";
import ObsValue from "@/beans/ObsValue";
export default class ListFilterBinding<T> {
    private obs;
    private pred;
    constructor(obs: ObsList<T>, pred: (val: T) => boolean);
    private _val;
    readonly val: ObsValue<T>[];
}
