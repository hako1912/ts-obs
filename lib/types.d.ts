import ObservableValue from "./beans/ObservableValue";
export declare type ArrayChangeListener<T> = (appends: T[], removes: T[]) => void;
export declare type ValueChangeListener<T> = (now: T, old: T) => void;
export declare type Predicate<T> = (val: T) => boolean;
export declare type Class<T> = new () => T;
export declare type Flatten<T> = T extends ObservableValue<infer U> ? U : T;
