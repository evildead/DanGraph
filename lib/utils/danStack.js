"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DanStack = void 0;
class DanStack {
    constructor() {
        this._list = [];
    }
    push(val) {
        this._list.push(val);
    }
    pop() {
        return this._list.pop();
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this._list[this._list.length - 1];
    }
    isEmpty() {
        return this._list.length < 1;
    }
    clear() {
        this._list.splice(0, this._list.length);
    }
}
exports.DanStack = DanStack;
//# sourceMappingURL=danStack.js.map