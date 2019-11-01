import { DanNode, DanArc } from '../commons';

interface DanNodeAndUndirectedArcs<I, D> {
  node: DanNode<I, D>;
  adjacents: Map<I, DanArc<I, D>>;
}

export class DanUndirectedGraph<I, D> {
  protected _graph: Map<I, DanNodeAndUndirectedArcs<I, D>>;

  public constructor() {
    this._graph = new Map();
  }

  /**
   * addNode
   * @param node the node to add
   * @returns true if the node was correctly added to the graph; false if the node is already present
   */
  public addNode(node: DanNode<I, D>): boolean {
    if (this._graph.has(node.id)) {
      return false;
    }
    this._graph.set(node.id, {
      node: node,
      adjacents: new Map()
    });
    return true;
  }

  /**
   * countNodes
   */
  public countNodes(): number {
    return this._graph.size;
  }

  /**
   * toString
   */
  public toString(showArcWeight: boolean = false): string {
    let outStr = '';
    for (let [key, value] of this._graph) {
      let adjacents = '';
      for (let [adjKey, adjArc] of value.adjacents) {
        if (showArcWeight) {
          adjacents = adjacents.concat(`(node{${adjKey}}-weight{${adjArc.weight}});`);
        } else {
          adjacents = adjacents.concat(`${adjKey};`);
        }
      }
      outStr = outStr.concat(`\n${key} - adjacents:[${adjacents}]\n`);
    }
    return outStr;
  }
}
