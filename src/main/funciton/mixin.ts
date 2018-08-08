import getProperties from "./getProperties";

export default function mixin<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    // 名前が被るプロパティ、関数はfirstで上書きされる
    for (let id of getProperties(first)) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id of getProperties(second)) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}