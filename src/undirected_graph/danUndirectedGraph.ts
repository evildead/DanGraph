import { DanNode } from '../commons';

interface DanNodeAndUndirectedArcs<I, D> {
  node: DanNode<I, D>;
  adjacents: Map<I, DanNode<I, D>>;
}

export class DanDirectedGraph<I, D> {
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
}
