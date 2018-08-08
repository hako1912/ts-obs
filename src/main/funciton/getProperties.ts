// これでもいけそう
// https://stackoverflow.com/questions/30158515/list-down-all-prototype-properties-of-an-javascript-object
export default function getProperties(obj: any, properties: string[] = []): string[] {
    if (obj.__proto__ != null) {
        return getProperties(obj.__proto__, Object.getOwnPropertyNames(obj)).concat(properties)
    }
    return properties
}