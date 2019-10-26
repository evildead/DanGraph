// Lodash
import _ from 'lodash';

import { DanNode } from '../commons';

interface DanNodeAndDirectedArcs<I, D> {
  node: DanNode<I, D>;
  incoming: Map<I, DanNode<I, D>>;
  outgoing: Map<I, DanNode<I, D>>;
}

export enum ArcType {
  incoming = 'incoming',
  outgoing = 'outgoing'
}

export class DanDirectedGraph<I, D> {
  protected _graph: Map<I, DanNodeAndDirectedArcs<I, D>>;

  public constructor() {
    this._graph = new Map();
  }

  /**
   * _getCopyOfInnerGraph
   * @returns a copy of the inner graph structure
   */
  protected _getCopyOfInnerGraph(): Map<I, DanNodeAndDirectedArcs<I, D>> {
    return _.cloneDeep(this._graph);
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
      incoming: new Map(),
      outgoing: new Map()
    });
    return true;
  }

  /**
   * addNodeToId
   * @param idNode the id of the node receiving nodeToAdd
   * @param nodeToAdd the node being added
   * @param arcType nodeToAdd will be added among the incoming or outgoing arcs of idNode, based on the value of arcType
   * @returns true if nodeToAdd was correctly added to the icoming/ougoing arcs of idNode; false if the idNode does not exist or if nodeToAdd was already present
   */
  public addNodeToId(idNode: I, nodeToAdd: DanNode<I, D>, arcType: ArcType): boolean {
    // idNode is not present in the graph
    if (!this._graph.has(idNode)) {
      return false;
    }

    // add nodeToAdd to graph if not already present
    this.addNode(nodeToAdd);

    const nodeArcs = this._graph.get(idNode) as DanNodeAndDirectedArcs<I, D>;
    const nodeToAddArcs = this._graph.get(nodeToAdd.id) as DanNodeAndDirectedArcs<I, D>;

    switch (arcType) {
      case ArcType.incoming:
        // nodeToAdd is already present
        if (nodeArcs.incoming.has(nodeToAdd.id)) {
          return false;
        }
        // add nodeToAdd among the incoming nodes of idNode
        nodeArcs.incoming.set(nodeToAddArcs.node.id, nodeToAddArcs.node);
        // add node among the outgoing nodes of nodeToAdd
        nodeToAddArcs.outgoing.set(nodeArcs.node.id, nodeArcs.node);
        return true;
      case ArcType.outgoing:
        // nodeToAdd is already present
        if (nodeArcs.outgoing.has(nodeToAdd.id)) {
          return false;
        }
        // add nodeToAdd among the outgoing nodes of idNode
        nodeArcs.outgoing.set(nodeToAddArcs.node.id, nodeToAddArcs.node);
        // add node among the incoming nodes of nodeToAdd
        nodeToAddArcs.incoming.set(nodeArcs.node.id, nodeArcs.node);
        return true;
      default:
        return false;
    }
  }

  /**
   * addNodeToNode
   * @param node the node receiving nodeToAdd
   * @param nodeToAdd the node being added
   * @param arcType nodeToAdd will be added among the incoming or outgoing arcs of node, based on the value of arcType
   * @returns true if nodeToAdd was correctly added to the icoming/ougoing arcs of node; false if nodeToAdd was already present
   */
  public addNodeToNode(node: DanNode<I, D>, nodeToAdd: DanNode<I, D>, arcType: ArcType): boolean {
    // idNode is not present in the graph
    if (!this._graph.has(node.id)) {
      this.addNode(node);
    }
    return this.addNodeToId(node.id, nodeToAdd, arcType);
  }

  /**
   * removeNode
   * @param idNode the id of the node to remove
   * @returns true if the node is correctly removed
   */
  public removeNode(idNode: I): boolean {
    if (!this._graph.has(idNode)) {
      return false;
    }
    const nodeArcs = this._graph.get(idNode) as DanNodeAndDirectedArcs<I, D>;
    // remove idNode from all of its incoming nodes
    for (let key of nodeArcs.incoming.keys()) {
      const tmpNodeArcs = this._graph.get(key) as DanNodeAndDirectedArcs<I, D>;
      tmpNodeArcs.outgoing.delete(idNode);
    }
    // remove idNode from all of its outgoing nodes
    for (let key of nodeArcs.outgoing.keys()) {
      const tmpNodeArcs = this._graph.get(key) as DanNodeAndDirectedArcs<I, D>;
      tmpNodeArcs.incoming.delete(idNode);
    }
    // finally remove node from the graph
    this._graph.delete(idNode);
    return true;
  }

  /**
   * isNodeALeaf
   * @param idNode the id of the node to check
   * @returns true if the node is a leaf (no outgoing arcs)
   */
  public isNodeALeaf(idNode: I): boolean {
    if (!this._graph.has(idNode)) {
      return false;
    }

    const nodeArcs = this._graph.get(idNode) as DanNodeAndDirectedArcs<I, D>;
    if (nodeArcs.outgoing.size > 0) {
      return false;
    }

    return true;
  }

  /**
   * _getALeaf
   * @returns the first leaf found, or undefined if no leaf is found
   */
  protected _getALeaf(): DanNode<I, D> | undefined {
    for (let key of this._graph.keys()) {
      if (this.isNodeALeaf(key)) {
        const leafArcs = this._graph.get(key) as DanNodeAndDirectedArcs<I, D>;
        return leafArcs.node;
      }
    }
    return undefined;
  }

  /**
   * toString
   */
  public toString(): string {
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

  /**
   * countNodes
   */
  public countNodes(): number {
    return this._graph.size;
  }

  /**
   * _isAcyclic
   * @returns true if the graph does not contain cycles
   */
  protected _isAcyclic(): boolean {
    let leaf: DanNode<I, D> | undefined = undefined;
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

  /**
   * isAcyclic
   * @returns true if the graph does not contain cycles
   */
  public isAcyclic(): boolean {
    const graphMemento = this._getCopyOfInnerGraph();
    const res = this._isAcyclic();
    this._graph = graphMemento;
    return res;
  }
}
