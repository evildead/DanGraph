"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DanDirectedGraphBreadthFirstIterator {
    constructor(collection, startingNodeId) {
        this._graph = collection;
        this._visitedNodes = new Set();
        this._currLevelQueue = [];
        this._nextLevelQueue = [];
        this._nextLevelSet = new Set();
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
        this._currLevelQueue.push(startingNodeStructure.node);
        this._startingNodeId = startingNodeId;
        this._currLevelQueuePosition = 0;
        this._currentNodeId = null;
        this._nextNodeId = startingNodeId;
        this._addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued();
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
    _addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued() {
        if (this._nextNodeId === null) {
            return false;
        }
        const nextNodeStructure = this._getNodeAndDirectedArcsFromNodeId(this._nextNodeId);
        for (const [nodeId, arc] of nextNodeStructure.outgoing) {
            if (!this._visitedNodes.has(nodeId) && !this._nextLevelSet.has(nodeId)) {
                this._nextLevelQueue.push(this._getNodeAndDirectedArcsFromNodeId(nodeId).node);
                this._nextLevelSet.add(nodeId);
            }
        }
        return true;
    }
    _advance() {
        if (this._currLevelQueuePosition + 1 < this._currLevelQueue.length) {
            this._nextNodeId = this._currLevelQueue[++this._currLevelQueuePosition].id;
            this._addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued();
            return;
        }
        if (this._nextLevelQueue.length < 1) {
            this._nextNodeId = null;
            return;
        }
        this._currLevelQueue.splice(0, this._currLevelQueue.length);
        this._currLevelQueuePosition = 0;
        this._currLevelQueue = [...this._nextLevelQueue];
        this._nextLevelQueue.splice(0, this._nextLevelQueue.length);
        this._nextLevelSet.clear();
        this._nextNodeId = this._currLevelQueue[this._currLevelQueuePosition].id;
        this._addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued();
    }
    hasNext() {
        return this._nextNodeId !== null;
    }
    rewind() {
        this._visitedNodes.clear();
        this._currLevelQueue.splice(0, this._currLevelQueue.length);
        this._nextLevelQueue.splice(0, this._nextLevelQueue.length);
        this._nextLevelSet.clear();
        this._initFields(this._startingNodeId);
    }
}
exports.DanDirectedGraphBreadthFirstIterator = DanDirectedGraphBreadthFirstIterator;
//# sourceMappingURL=danDirectedGraphBreadthFirstIterator.js.map