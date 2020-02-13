"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commons_1 = require("../commons");
const commonUtils_1 = require("../utils/commonUtils");
class DanUndirectedGraph {
    constructor() {
        this._graph = new Map();
    }
    static generateConsecutiveNodeGraph(numOfNodes) {
        const outGraph = new DanUndirectedGraph();
        if (numOfNodes > 0) {
            outGraph.addNode(new commons_1.CDanNode({ id: 0 }));
        }
        for (let i = 1; i < numOfNodes; ++i) {
            outGraph.addArcToNode(new commons_1.CDanNode({ id: i - 1 }), new commons_1.CDanArc({
                weight: 1,
                node: new commons_1.CDanNode({ id: i })
            }));
        }
        return outGraph;
    }
    static generateRandomNodeGraph(numOfNodes) {
        const outGraph = new DanUndirectedGraph();
        for (let i = 0; i < numOfNodes; ++i) {
            outGraph.addNode(new commons_1.CDanNode({ id: i }));
            if (i > 0 && commonUtils_1.randomIntFromInterval(1, 2) > 1) {
                outGraph.addArcToNode(new commons_1.CDanNode({ id: commonUtils_1.randomIntFromInterval(0, i - 1) }), new commons_1.CDanArc({
                    weight: 1,
                    node: new commons_1.CDanNode({ id: i })
                }));
            }
        }
        return outGraph;
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
        nodeToAddArcs.adjacents.set(nodeArcs.node.id, new commons_1.CDanArc({
            weight: arcToAdd.weight,
            node: nodeArcs.node,
            labels: arcToAdd.labels ? arcToAdd.labels : undefined
        }));
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
            break;
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
    toString(showArcDetails = false) {
        let outStr = '';
        for (let [key, value] of this._graph) {
            let adjacents = '';
            for (let adjArc of value.adjacents.values()) {
                if (showArcDetails) {
                    adjacents += `(${adjArc.toString(true)});`;
                }
                else {
                    adjacents += `(${adjArc.toString(false)});`;
                }
            }
            outStr = outStr.concat(`\n${key} - adjacents:[${adjacents}]\n`);
        }
        return outStr;
    }
    getInnerGraph() {
        return this._graph;
    }
}
exports.DanUndirectedGraph = DanUndirectedGraph;
//# sourceMappingURL=danUndirectedGraph.js.map