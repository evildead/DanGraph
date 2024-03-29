// Lodash
import _ from 'lodash';

// common interfaces, classes, ...
import { DanNode, DanArc, CDanNode, CDanArc, GraphIterator } from '../commons';

// common utility functions
import { randomIntFromInterval } from '../utils/commonUtils';

// Iterators
import { DanDirectedGraphDepthFirstIterator } from './danDirectedGraphDepthFirstIterator';
import { DanDirectedGraphBreadthFirstIterator } from './danDirectedGraphBreadthFirstIterator';

/**
 * The DanNodeAndDirectedArcs interface describes a node (DanNode<I, D>)
 * and its incoming and outgoing arcs (Map<I, DanArc<I, D>>)
 */
export interface DanNodeAndDirectedArcs<I, D> {
  node: DanNode<I, D>;
  incoming: Map<I, DanArc<I, D>>;
  outgoing: Map<I, DanArc<I, D>>;
}

/**
 * The directed arc type: incoming or outgoing
 */
export enum ArcType {
  incoming = 'incoming',
  outgoing = 'outgoing'
}

/**
 * The class DanDirectedGraph handles directed graphs
 */
export class DanDirectedGraph<I, D> {
  protected _graph: Map<I, DanNodeAndDirectedArcs<I, D>>;

  /**
   * the public class constructor
   */
  public constructor() {
    this._graph = new Map();
  }

  /**
   * A utility public static method to generate a directed graph with a number of _numOfNodes_ consecutive nodes
   * @param {number} numOfNodes the number of nodes of the output graph
   * @returns {DanDirectedGraph<number, undefined>} a directed graph witn _numOfNodes_ nodes
   */
  public static generateConsecutiveNodeGraph(numOfNodes: number): DanDirectedGraph<number, undefined> {
    const outGraph = new DanDirectedGraph<number, undefined>();
    if (numOfNodes > 0) {
      outGraph.addNode(new CDanNode({ id: 0 }));
    }
    for (let i = 1; i < numOfNodes; ++i) {
      outGraph.addArcToNode(
        new CDanNode({ id: i - 1 }),
        new CDanArc({
          weight: 1,
          node: new CDanNode({ id: i })
        }),
        ArcType.outgoing
      );
    }
    return outGraph;
  }

  /**
   * A utility public static method to generate a directed graph with a number of _numOfNodes_ random nodes
   * @param {number} numOfNodes the number of nodes of the output graph
   * @returns {DanDirectedGraph<number, undefined>} a directed graph witn _numOfNodes_ nodes
   */
  public static generateRandomNodeGraph(numOfNodes: number): DanDirectedGraph<number, undefined> {
    const outGraph = new DanDirectedGraph<number, undefined>();
    for (let i = 0; i < numOfNodes; ++i) {
      outGraph.addNode(new CDanNode({ id: i }));
      if (i > 0 && randomIntFromInterval(1, 2) > 1) {
        outGraph.addArcToNode(
          new CDanNode({ id: randomIntFromInterval(0, i - 1) }),
          new CDanArc({
            weight: 1,
            node: new CDanNode({ id: i })
          }),
          ArcType.outgoing
        );
      }
    }
    return outGraph;
  }

  /**
   * Clone the inner graph structure
   * @returns {Map<I, DanNodeAndDirectedArcs<I, D>>} a copy of the inner graph structure
   */
  protected _getCopyOfInnerGraph(): Map<I, DanNodeAndDirectedArcs<I, D>> {
    return _.cloneDeep(this._graph);
  }

  /**
   * Get node and directed arcs structure (as DanNodeAndDirectedArcs) from nodeId
   * @param {I} idNode the node identifier
   * @returns {DanNodeAndDirectedArcs<I, D>|undefined} node and directed arcs structure or undefined if nodeId is not present in the graph
   */
  public getNodeAndDirectedArcsFromNodeId(idNode: I): DanNodeAndDirectedArcs<I, D> | undefined {
    return this._graph.get(idNode);
  }

  /**
   * Add a node to the graph
   * @param {DanNode<I, D>} node the node to add
   * @returns {boolean} true if the node was correctly added to the graph; false if the node is already present
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
   * Add arc to node given a node id
   * @param {I} idNode the id of the node receiving _arcToAdd_
   * @param {DanArc<I, D>} arcToAdd the arc being added
   * @param {ArcType} arcType _arcToAdd_ will be added among the incoming or outgoing arcs of idNode, based on the value of arcType
   * @returns {boolean} true if _arcToAdd_ was correctly added to the icoming/ougoing arcs of idNode; false if the idNode does not exist or if _arcToAdd_ was already present
   */
  public addArcToNodeId(idNode: I, arcToAdd: DanArc<I, D>, arcType: ArcType): boolean {
    // idNode is not present in the graph
    if (!this._graph.has(idNode)) {
      return false;
    }

    // add nodeToAdd to graph if not already present
    this.addNode(arcToAdd.node);

    const nodeArcs = this._graph.get(idNode) as DanNodeAndDirectedArcs<I, D>;
    const nodeToAddArcs = this._graph.get(arcToAdd.node.id) as DanNodeAndDirectedArcs<I, D>;

    switch (arcType) {
      case ArcType.incoming:
        // arcToAdd.node is already present
        if (nodeArcs.incoming.has(arcToAdd.node.id)) {
          return false;
        }
        // add arcToAdd among the incoming arcs of idNode
        nodeArcs.incoming.set(arcToAdd.node.id, arcToAdd);
        // add node among the outgoing nodes of arcToAdd.node
        nodeToAddArcs.outgoing.set(
          nodeArcs.node.id,
          new CDanArc({
            weight: arcToAdd.weight,
            node: nodeArcs.node,
            labels: arcToAdd.labels ? arcToAdd.labels : undefined
          })
        );
        return true;
      case ArcType.outgoing:
        // arcToAdd.node is already present
        if (nodeArcs.outgoing.has(arcToAdd.node.id)) {
          return false;
        }
        // add arcToAdd among the outgoing nodes of idNode
        nodeArcs.outgoing.set(arcToAdd.node.id, arcToAdd);
        // add node among the incoming nodes of arcToAdd.node
        nodeToAddArcs.incoming.set(
          nodeArcs.node.id,
          new CDanArc({
            weight: arcToAdd.weight,
            node: nodeArcs.node,
            labels: arcToAdd.labels ? arcToAdd.labels : undefined
          })
        );
        return true;
      default:
        return false;
    }
  }

  /**
   * Add arc to node given a node structure
   * @param {DanNode<I, D>} node the node receiving _arcToAdd_
   * @param {DanArc<I, D>} arcToAdd the arc being added
   * @param {ArcType} arcType _arcToAdd_ will be added among the incoming or outgoing arcs of node, based on the value of arcType
   * @returns {boolean} true if _arcToAdd_ was correctly added to the icoming/ougoing arcs of node; false if _arcToAdd_ was already present
   */
  public addArcToNode(node: DanNode<I, D>, arcToAdd: DanArc<I, D>, arcType: ArcType): boolean {
    // idNode is not present in the graph
    if (!this._graph.has(node.id)) {
      this.addNode(node);
    }
    return this.addArcToNodeId(node.id, arcToAdd, arcType);
  }

  /**
   * Remove a node given in input from the graph
   * @param {I} idNode the id of the node to remove
   * @returns {boolean} true if the node is correctly removed
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
   * Check if node is a leaf
   * @param {I} idNode the id of the node to check
   * @returns {boolean} true if the node is a leaf (no outgoing arcs)
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
   * Get a leaf in the graph or return undefined.
   * @returns {DanNode<I, D>|undefined} the first leaf found, or undefined if no leaf is found
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
   * The string representation of the directed graph
   * @param {boolean} showDetails if this option is true, all the node and arc details will be included in the output string (default: false)
   * @returns {string} the string representation of the directed graph
   */
  public toString(showArcDetails: boolean = false): string {
    let outStr = '';
    for (let [key, value] of this._graph) {
      let incoming = '';
      let outgoing = '';
      for (let inArc of value.incoming.values()) {
        if (showArcDetails) {
          incoming += `(${inArc.toString(true)});`;
        } else {
          incoming += `(${inArc.toString(false)});`;
        }
      }
      for (let outArc of value.outgoing.values()) {
        if (showArcDetails) {
          outgoing += `(${outArc.toString(true)});`;
        } else {
          outgoing += `(${outArc.toString(false)});`;
        }
      }
      outStr = outStr.concat(`\n${key} - incoming:[${incoming}]; outgoing:[${outgoing}]\n`);
    }
    return outStr;
  }

  /**
   * Public method to retrieve the number of nodes in the graph
   * @returns {number} the number of nodes in the graph
   */
  public countNodes(): number {
    return this._graph.size;
  }

  /**
   * Check if the graph is empty
   * @returns {boolean} true if the graph does not contain any node
   */
  public isEmpty(): boolean {
    return this.countNodes() < 1;
  }

  /**
   * Get all the outgoing nodes from a node identifier
   * @param {I} idNode the id of the node to check
   * @returns {DanNode[]} the list of outgoing nodes of idNode as array of DanNode<I, D>
   */
  protected _getOutgoingNodesList(idNode: I): DanNode<I, D>[] {
    // idNode is not present in the graph
    if (!this._graph.has(idNode)) {
      return [];
    }

    const outgoingNodes: DanNode<I, D>[] = [];
    const nodeArcs = this._graph.get(idNode) as DanNodeAndDirectedArcs<I, D>;

    for (let outArc of nodeArcs.outgoing.values()) {
      outgoingNodes.push(outArc.node);
    }
    return outgoingNodes;
  }

  /**
   * Protected method to check if the graph is acyclic.
   * Remove leaves iteratively from the graph: stop if the graph gets empty (acyclic graph),
   * or if there are no more leaves to remove (cyclic graph).
   * @returns {boolean} true if the graph does not contain cycles, otherwise false
   */
  protected _isAcyclic(): boolean {
    let leaf: DanNode<I, D> | undefined = undefined;
    do {
      if (this.isEmpty()) {
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
   * Public method to check if the graph is acyclic.
   * First we keep a copy of the current inner graph.
   * Then we invoke the protected [this._isAcyclic](#DanDirectedGraph<I, D>+_isAcyclic) method to check if the graph is acyclic.
   * Then we restore the inner state (memento pattern).
   * @returns {boolean} true if the graph does not contain cycles
   */
  public isAcyclic(): boolean {
    if (this.isEmpty()) {
      return true;
    }
    const graphMemento = this._getCopyOfInnerGraph();
    const res = this._isAcyclic();
    this._graph = graphMemento;
    return res;
  }

  /**
   * Protected method to visit all the neighbours of a node, given in input the node id and a previous set of visitedNodes
   * @param {Set<I>} visitedNodes the nodes already visited
   * @param {I} nextNode the next node to visit
   */
  protected _visitNodes(visitedNodes: Set<I>, nextNode: I): void {
    visitedNodes.add(nextNode);
    const outgoingNodes = this._getOutgoingNodesList(nextNode);
    for (let outgoingNode of outgoingNodes) {
      if (!visitedNodes.has(outgoingNode.id)) {
        this._visitNodes(visitedNodes, outgoingNode.id);
      }
    }
  }

  /**
   * Public method to check if all nodes are connected to the source node in input
   * @param {I} idNode source node to be checked
   * @returns {boolean} true if source can reach all of the nodes in the graph
   */
  public sourceConnectedToAllNodes(idNode: I): boolean {
    // idNode is not present in the graph
    if (!this._graph.has(idNode)) {
      return false;
    }

    const visitedNodes: Set<I> = new Set();
    this._visitNodes(visitedNodes, idNode);
    return visitedNodes.size === this.countNodes();
  }

  /**
   * Get depth-first iterator
   * @param {I} startingNodeId the starting node identifier for the iterator
   * @returns {GraphIterator<DanNode<I, D>>} the depth-first iterator
   */
  public getDepthFirstIterator(startingNodeId: I): GraphIterator<DanNode<I, D>> {
    return new DanDirectedGraphDepthFirstIterator<I, D>(this, startingNodeId);
  }

  /**
   * Get breadth-first iterator
   * @param {I} startingNodeId the starting node identifier for the iterator
   * @returns {GraphIterator<DanNode<I, D>>} the breadth-first iterator
   */
  public getBreadthFirstIterator(startingNodeId: I): GraphIterator<DanNode<I, D>> {
    return new DanDirectedGraphBreadthFirstIterator<I, D>(this, startingNodeId);
  }

  /**
   * Check if idNode is present in the graph
   * @param {I} idNode the id of the node
   * @returns true only if idNode is present
   */
  public hasNodeId(idNode: I): boolean {
    return this._graph.has(idNode);
  }
}
