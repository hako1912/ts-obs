import ValueObject from "ValueObject";

export default class Point implements ValueObject<Point> {
    constructor(private _x: number, private _y: number) {
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    eq(val: Point): boolean {
        return false;
    }

    copy(options: { x?: number, y?: number } = {}) {
        return new Point(options.x || this._x, options.y || this._y)
    }


}