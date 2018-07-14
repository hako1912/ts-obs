export declare type ArrayChangeListener<T> = (appends: T[], removes: T[]) => void;
export declare type ValueChangeListener<T> = (now: T, old: T) => void;
export declare type Predicate<T> = (val: T) => boolean;
