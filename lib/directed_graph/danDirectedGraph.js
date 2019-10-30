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
    addNodeToId(idNode, nodeToAdd, arcType) {
        if (!this._graph.has(idNode)) {
            return false;
        }
        this.addNode(nodeToAdd);
        const nodeArcs = this._graph.get(idNode);
        const nodeToAddArcs = this._graph.get(nodeToAdd.id);
        switch (arcType) {
            case ArcType.incoming:
                if (nodeArcs.incoming.has(nodeToAdd.id)) {
                    return false;
                }
                nodeArcs.incoming.set(nodeToAddArcs.node.id, nodeToAddArcs.node);
                nodeToAddArcs.outgoing.set(nodeArcs.node.id, nodeArcs.node);
                return true;
            case ArcType.outgoing:
                if (nodeArcs.outgoing.has(nodeToAdd.id)) {
                    return false;
                }
                nodeArcs.outgoing.set(nodeToAddArcs.node.id, nodeToAddArcs.node);
                nodeToAddArcs.incoming.set(nodeArcs.node.id, nodeArcs.node);
                return true;
            default:
                return false;
        }
    }
    addNodeToNode(node, nodeToAdd, arcType) {
        if (!this._graph.has(node.id)) {
            this.addNode(node);
        }
        return this.addNodeToId(node.id, nodeToAdd, arcType);
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
    toString() {
        let outStr = '';
        for (let [key, value] of this._graph) {
            let incoming = '';
            let outgoing = '';
            for (let inKey of value.incoming.keys()) {
                incoming = incoming.concat(`${inKey};`);
            }
            for (let outKey of value.outgoing.keys()) {
                outgoing = outgoing.concat(`${outKey};`);
            }
            outStr = outStr.concat(`\n${key} - incoming:[${incoming}]; outgoing:[${outgoing}]\n`);
        }
        return outStr;
    }
    countNodes() {
        return this._graph.size;
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
}
exports.DanDirectedGraph = DanDirectedGraph;
//# sourceMappingURL=danDirectedGraph.js.map