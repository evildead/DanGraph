"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DanDirectedGraphDepthFirstIterator = void 0;
const danStack_1 = require("../utils/danStack");
class DanDirectedGraphDepthFirstIterator {
    constructor(collection, startingNodeId) {
        this._graph = collection;
        this._stack = new danStack_1.DanStack();
        this._visitedNodes = new Set();
        this._initFields(startingNodeId);
    }
    _getNodeAndDirectedArcsFromNodeId(nodeId) {
        const nodeAndDirectedArcsStructure = this._graph.getNodeAndDirectedArcsFromNodeId(nodeId);
        if (nodeAndDirectedArcsStructure === undefined) {
            throw new Error(`node id ${nodeId} not found in graph`);
        }
        return nodeAndDirectedArcsStructure;
    }
    _initFields(startingNodeId) {
        const startingNodeStructure = this._getNodeAndDirectedArcsFromNodeId(startingNodeId);
        this._stack.push(startingNodeStructure.outgoing.entries());
        this._startingNodeId = startingNodeId;
        this._currentNodeId = null;
        this._nextNodeId = startingNodeId;
    }
    current() {
        if (this._currentNodeId === null) {
            return undefined;
        }
        const nodeAndDirectedArcsStructure = this._getNodeAndDirectedArcsFromNodeId(this._currentNodeId);
        return nodeAndDirectedArcsStructure.node;
    }
    next() {
        if (!this.hasNext()) {
            return undefined;
        }
        const nextNodeStructure = this._getNodeAndDirectedArcsFromNodeId(this._nextNodeId);
        this._visitedNodes.add(this._nextNodeId);
        this._advance();
        this._currentNodeId = nextNodeStructure.node.id;
        return nextNodeStructure.node;
    }
    _advance() {
        if (this._stack.isEmpty()) {
            this._nextNodeId = null;
            return;
        }
        do {
            let neighbors = this._stack.peek();
            if (neighbors === undefined) {
                this._nextNodeId = null;
                return;
            }
            let result = neighbors.next();
            while (result.done) {
                this._stack.pop();
                if (this._stack.isEmpty()) {
                    this._nextNodeId = null;
                    return;
                }
                neighbors = this._stack.peek();
                if (neighbors === undefined) {
                    this._nextNodeId = null;
                    return;
                }
                result = neighbors.next();
            }
            const [nodeId, arc] = result.value;
            this._nextNodeId = nodeId;
        } while (this._visitedNodes.has(this._nextNodeId));
        const nextNodeStructure = this._getNodeAndDirectedArcsFromNodeId(this._nextNodeId);
        this._stack.push(nextNodeStructure.outgoing.entries());
    }
    hasNext() {
        return this._nextNodeId !== null;
    }
    rewind() {
        this._visitedNodes.clear();
        this._stack.clear();
        this._initFields(this._startingNodeId);
    }
}
exports.DanDirectedGraphDepthFirstIterator = DanDirectedGraphDepthFirstIterator;
//# sourceMappingURL=danDirectedGraphDepthFirstIterator.js.map