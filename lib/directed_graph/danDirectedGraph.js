"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
var ArcType;
(function (ArcType) {
    ArcType["incoming"] = "incoming";
    ArcType["outgoing"] = "outgoing";
})(ArcType = exports.ArcType || (exports.ArcType = {}));
class DanDirectedGraph {
    constructor() {
        this._graph = new Map();
    }
    _getCopyOfInnerGraph() {
        return lodash_1.default.cloneDeep(this._graph);
    }
    addNode(node) {
        if (this._graph.has(node.id)) {
            return false;
        }
        this._graph.set(node.id, {
            node: node,
            incoming: new Map(),
            outgoing: new Map()
        });
        return true;
    }
    addArcToNodeId(idNode, arcToAdd, arcType) {
        if (!this._graph.has(idNode)) {
            return false;
        }
        this.addNode(arcToAdd.node);
        const nodeArcs = this._graph.get(idNode);
        const nodeToAddArcs = this._graph.get(arcToAdd.node.id);
        switch (arcType) {
            case ArcType.incoming:
                if (nodeArcs.incoming.has(arcToAdd.node.id)) {
                    return false;
                }
                nodeArcs.incoming.set(arcToAdd.node.id, arcToAdd);
                nodeToAddArcs.outgoing.set(nodeArcs.node.id, {
                    weight: arcToAdd.weight,
                    node: nodeArcs.node
                });
                return true;
            case ArcType.outgoing:
                if (nodeArcs.outgoing.has(arcToAdd.node.id)) {
                    return false;
                }
                nodeArcs.outgoing.set(arcToAdd.node.id, arcToAdd);
                nodeToAddArcs.incoming.set(nodeArcs.node.id, {
                    weight: arcToAdd.weight,
                    node: nodeArcs.node
                });
                return true;
            default:
                return false;
        }
    }
    addArcToNode(node, arcToAdd, arcType) {
        if (!this._graph.has(node.id)) {
            this.addNode(node);
        }
        return this.addArcToNodeId(node.id, arcToAdd, arcType);
    }
    removeNode(idNode) {
        if (!this._graph.has(idNode)) {
            return false;
        }
        const nodeArcs = this._graph.get(idNode);
        for (let key of nodeArcs.incoming.keys()) {
            const tmpNodeArcs = this._graph.get(key);
            tmpNodeArcs.outgoing.delete(idNode);
        }
        for (let key of nodeArcs.outgoing.keys()) {
            const tmpNodeArcs = this._graph.get(key);
            tmpNodeArcs.incoming.delete(idNode);
        }
        this._graph.delete(idNode);
        return true;
    }
    isNodeALeaf(idNode) {
        if (!this._graph.has(idNode)) {
            return false;
        }
        const nodeArcs = this._graph.get(idNode);
        if (nodeArcs.outgoing.size > 0) {
            return false;
        }
        return true;
    }
    _getALeaf() {
        for (let key of this._graph.keys()) {
            if (this.isNodeALeaf(key)) {
                const leafArcs = this._graph.get(key);
                return leafArcs.node;
            }
        }
        return undefined;
    }
    toString(showArcWeight = false) {
        let outStr = '';
        for (let [key, value] of this._graph) {
            let incoming = '';
            let outgoing = '';
            for (let [inKey, inArc] of value.incoming) {
                if (showArcWeight) {
                    incoming = incoming.concat(`(node{${inKey}}-weight{${inArc.weight}});`);
                }
                else {
                    incoming = incoming.concat(`${inKey};`);
                }
            }
            for (let [outKey, outArc] of value.outgoing) {
                if (showArcWeight) {
                    outgoing = outgoing.concat(`(node{${outKey}}-weight{${outArc.weight}});`);
                }
                else {
                    outgoing = outgoing.concat(`${outKey};`);
                }
            }
            outStr = outStr.concat(`\n${key} - incoming:[${incoming}]; outgoing:[${outgoing}]\n`);
        }
        return outStr;
    }
    countNodes() {
        return this._graph.size;
    }
    _getOutgoingNodesList(idNode) {
        if (!this._graph.has(idNode)) {
            return [];
        }
        const outgoingNodes = [];
        const nodeArcs = this._graph.get(idNode);
        for (let outArc of nodeArcs.outgoing.values()) {
            outgoingNodes.push(outArc.node);
        }
        return outgoingNodes;
    }
    _isAcyclic() {
        let leaf = undefined;
        do {
            if (this._graph.size < 1) {
                return true;
            }
            leaf = this._getALeaf();
            if (leaf !== undefined) {
                this.removeNode(leaf.id);
            }
        } while (leaf !== undefined);
        return false;
    }
    isAcyclic() {
        const graphMemento = this._getCopyOfInnerGraph();
        const res = this._isAcyclic();
        this._graph = graphMemento;
        return res;
    }
    _visitNodes(visitedNodes, nextNode) {
        visitedNodes.add(nextNode);
        const outgoingNodes = this._getOutgoingNodesList(nextNode);
        for (let outgoingNode of outgoingNodes) {
            if (!visitedNodes.has(outgoingNode.id)) {
                this._visitNodes(visitedNodes, outgoingNode.id);
            }
        }
    }
    sourceConnectedToAllNodes(idNode) {
        if (!this._graph.has(idNode)) {
            return false;
        }
        const visitedNodes = new Set();
        this._visitNodes(visitedNodes, idNode);
        return visitedNodes.size === this.countNodes();
    }
}
exports.DanDirectedGraph = DanDirectedGraph;
//# sourceMappingURL=danDirectedGraph.js.map