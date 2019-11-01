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
    countNodes() {
        return this._graph.size;
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