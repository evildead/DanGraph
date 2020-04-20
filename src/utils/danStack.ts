/**
 * A Stackable interface is composed of:
 * push    -> insert a value to the top of the stack
 * pop     -> get the value from the top of the stack and remove it from the stack itself
 * peek    -> get the value from the top of the stack but do not remove it from the stack itself
 * isEmpty -> check if the stack is empty
 * clear   -> clear all stack's elements
 */
export interface Stackable<T> {
  push(val: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  clear(): void;
}

/**
 * DanStack is a simple class implementing Stackable interface
 */
export class DanStack<T> implements Stackable<T> {
  private _list: T[];

  /**
   * The public class constructor
   */
  public constructor() {
    this._list = [];
  }

  /**
   * Insert a value to the top of the stack
   * We use the 'push' method of the private member '_list'
   * @param {T} val the value to be pushed inside the stack
   */
  public push(val: T): void {
    this._list.push(val);
  }

  /**
   * Get the value from the top of the stack and remove it from the stack itself
   * We use the 'pop' method of the private member '_list'
   * @returns {T|undefined} the element on top of the stack if the stack is not empty; conversely it returns undefined
   */
  public pop(): T | undefined {
    return this._list.pop();
  }

  /**
   * Get the value from the top of the stack but do not remove it from the stack itself
   * @returns {T|undefined} the element on top of the stack if the stack is not empty; conversely it returns undefined
   */
  public peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._list[this._list.length - 1];
  }

  /**
   * Check if the stack is empty
   * We use the 'length' method of the private member '_list' to check the number of elements present:
   * if the number is less than 1, the stack is empty
   * @returns {boolean} true if the stack is empty; it returns false is the stack is not empty
   */
  public isEmpty(): boolean {
    return this._list.length < 1;
  }

  /**
   * Clear all stack's elements
   * We use the 'splice' method of the private member '_list'
   */
  public clear(): void {
    this._list.splice(0, this._list.length);
  }
}
