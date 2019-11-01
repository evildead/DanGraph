"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DanUndirectedGraph {
    constructor() {
        this._graph = new Map();
    }
    addNode(node) {
        if (this._graph.has(node.id)) {
            return false;
        }
        this._graph.set(node.id, {
            node: node,
            adjacents: new Map()
        });
        return true;
    }
    addArcToNodeId(idNode, arcToAdd) {
        if (!this._graph.has(idNode)) {
            return false;
        }
        this.addNode(arcToAdd.node);
        const nodeArcs = this._graph.get(idNode);
        const nodeToAddArcs = this._graph.get(arcToAdd.node.id);
        if (nodeArcs.adjacents.has(arcToAdd.node.id)) {
            return false;
        }
        nodeArcs.adjacents.set(arcToAdd.node.id, arcToAdd);
        nodeToAddArcs.adjacents.set(nodeArcs.node.id, {
            weight: arcToAdd.weight,
            node: nodeArcs.node
        });
        return true;
    }
    addArcToNode(node, arcToAdd) {
        if (!this._graph.has(node.id)) {
            this.addNode(node);
        }
        return this.addArcToNodeId(node.id, arcToAdd);
    }
    removeNode(idNode) {
        if (!this._graph.has(idNode)) {
            return false;
        }
        const nodeArcs = this._graph.get(idNode);
        for (let key of nodeArcs.adjacents.keys()) {
            const tmpNodeArcs = this._graph.get(key);
            tmpNodeArcs.adjacents.delete(idNode);
        }
        this._graph.delete(idNode);
        return true;
    }
    _getAdjacentNodesList(idNode) {
        if (!this._graph.has(idNode)) {
            return [];
        }
        const outgoingNodes = [];
        const nodeArcs = this._graph.get(idNode);
        for (let outArc of nodeArcs.adjacents.values()) {
            outgoingNodes.push(outArc.node);
        }
        return outgoingNodes;
    }
    _getANode() {
        let outNode = undefined;
        for (let value of this._graph.values()) {
            outNode = value.node;
        }
        return outNode;
    }
    _visitNodes(visitedNodes, nextNode) {
        visitedNodes.add(nextNode);
        const adjacentNodes = this._getAdjacentNodesList(nextNode);
        for (let adjacentNode of adjacentNodes) {
            if (!visitedNodes.has(adjacentNode.id)) {
                this._visitNodes(visitedNodes, adjacentNode.id);
            }
        }
    }
    _checkForCycle(visitedNodes, nextNode, fromNode = undefined) {
        visitedNodes.add(nextNode);
        const adjacentNodes = this._getAdjacentNodesList(nextNode);
        for (let adjacentNode of adjacentNodes) {
            if (fromNode !== undefined && adjacentNode.id === fromNode) {
                continue;
            }
            if (!visitedNodes.has(adjacentNode.id)) {
                const recursiveRes = this._checkForCycle(visitedNodes, adjacentNode.id, nextNode);
                if (recursiveRes) {
                    return true;
                }
            }
            else {
                return true;
            }
        }
        return false;
    }
    isConnected() {
        if (this.isEmpty()) {
            return true;
        }
        const visitedNodes = new Set();
        this._visitNodes(visitedNodes, this._getANode().id);
        return visitedNodes.size === this.countNodes();
    }
    isAcyclic() {
        if (this.isEmpty()) {
            return true;
        }
        const visitedNodes = new Set();
        for (let idNode of this._graph.keys()) {
            if (!visitedNodes.has(idNode)) {
                const cycleFound = this._checkForCycle(visitedNodes, idNode);
                if (cycleFound) {
                    return false;
                }
            }
        }
        return true;
    }
    countNodes() {
        return this._graph.size;
    }
    isEmpty() {
        return this.countNodes() < 1;
    }
    toString(showArcWeight = false) {
        let outStr = '';
        for (let [key, value] of this._graph) {
            let adjacents = '';
            for (let [adjKey, adjArc] of value.adjacents) {
                if (showArcWeight) {
                    adjacents = adjacents.concat(`(node{${adjKey}}-weight{${adjArc.weight}});`);
                }
                else {
                    adjacents = adjacents.concat(`${adjKey};`);
                }
            }
            outStr = outStr.concat(`\n${key} - adjacents:[${adjacents}]\n`);
        }
        return outStr;
    }
}
exports.DanUndirectedGraph = DanUndirectedGraph;
//# sourceMappingURL=danUndirectedGraph.js.map