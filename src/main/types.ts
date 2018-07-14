import ObservableValue from "./beans/ObservableValue";

export type ArrayChangeListener<T> = (appends: T[], removes: T[]) => void
export type ValueChangeListener<T> = (now: T, old: T) => void
export type Predicate<T> = (val: T) => boolean
export type Class<T> = new() => T