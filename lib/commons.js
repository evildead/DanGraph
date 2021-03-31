"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CDanArc = exports.CDanNode = void 0;
class CDanNode {
    constructor({ id, data }) {
        this.id = id;
        if (data !== undefined) {
            this.data = data;
        }
    }
    renderData() {
        if (!this.data) {
            return '';
        }
        return `${this.data}`;
    }
    toString(showDetails = false) {
        let nodeToString = '';
        if (showDetails) {
            nodeToString += `id{${this.id}}-data{${this.renderData()}}`;
        }
        else {
            nodeToString += `${this.id}`;
        }
        return nodeToString;
    }
}
exports.CDanNode = CDanNode;
class CDanArc {
    constructor({ weight, node, labels }) {
        this.weight = weight;
        this.node = node;
        if (labels !== undefined) {
            this.labels = labels;
        }
    }
    renderLabels(separator = '|') {
        if (!this.labels) {
            return '';
        }
        let renderedLabel = '';
        for (let label of this.labels) {
            if (renderedLabel.length > 0) {
                renderedLabel += `${separator}${label}`;
            }
            else {
                renderedLabel += `${label}`;
            }
        }
        return renderedLabel;
    }
    toString(showDetails = false) {
        let arcToString = '';
        if (showDetails) {
            arcToString += `node{${this.node.toString(true)}}-weight{${this.weight}}-label{${this.renderLabels()}}`;
        }
        else {
            arcToString += `${this.node.toString(false)}`;
        }
        return arcToString;
    }
}
exports.CDanArc = CDanArc;
//# sourceMappingURL=commons.js.map