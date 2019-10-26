"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArcType;
(function (ArcType) {
    ArcType["incoming"] = "incoming";
    ArcType["outgoing"] = "outgoing";
})(ArcType = exports.ArcType || (exports.ArcType = {}));
class DanDirectedGraph {
    constructor() {
        this._graph = new Map();
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
    toString() {
        let outStr = '';
        for (var [key, value] of this._graph) {
            let incoming = '';
            let outgoing = '';
            for (var inKey of value.incoming.keys()) {
                incoming = incoming.concat(`${inKey};`);
            }
            for (var outKey of value.outgoing.keys()) {
                outgoing = outgoing.concat(`${outKey};`);
            }
            outStr = outStr.concat(`\n${key} - incoming:[${incoming}]; -outgoing:[${outgoing}]\n`);
        }
        return outStr;
    }
    countNodes() {
        return this._graph.size;
    }
}
exports.DanDirectedGraph = DanDirectedGraph;
//# sourceMappingURL=danDirectedGraph.js.map