"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            adjacents: new Map()
        });
        return true;
    }
}
exports.DanDirectedGraph = DanDirectedGraph;
//# sourceMappingURL=danUndirectedGraph.js.map