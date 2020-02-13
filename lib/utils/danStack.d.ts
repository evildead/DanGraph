export interface Stackable<T> {
    push(val: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    clear(): void;
}
export declare class DanStack<T> implements Stackable<T> {
    private _list;
    constructor();
    push(val: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    clear(): void;
}
