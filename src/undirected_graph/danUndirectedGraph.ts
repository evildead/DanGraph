// Lodash
import _ from 'lodash';

// common interfaces, classes, ...
import { DanNode, DanArc, CDanNode, CDanArc } from '../commons';

// common utility functions
import { randomIntFromInterval } from '../utils/commonUtils';

/**
 * The DanNodeAndUndirectedArcs interface describes a node (DanNode<I, D>)
 * and its arcs (Map<I, DanArc<I, D>>)
 */
interface DanNodeAndUndirectedArcs<I, D> {
  node: DanNode<I, D>;
  adjacents: Map<I, DanArc<I, D>>;
}

/**
 * The DanUndirectedGraph class handles undirected graphs
 */
export class DanUndirectedGraph<I, D> {
  protected _graph: Map<I, DanNodeAndUndirectedArcs<I, D>>;

  /**
   * the public class constructor
   */
  public constructor() {
    this._graph = new Map();
  }

  /**
   * A utility public static method to generate an undirected graph with a number of _numOfNodes_ consecutive nodes
   * @param {number} numOfNodes the number of nodes of the output graph
   * @returns {DanUndirectedGraph<number, undefined>} an undirected graph witn _numOfNodes_ nodes
   */
  public static generateConsecutiveNodeGraph(numOfNodes: number): DanUndirectedGraph<number, undefined> {
    const outGraph = new DanUndirectedGraph<number, undefined>();
    if (numOfNodes > 0) {
      outGraph.addNode(new CDanNode({ id: 0 }));
    }
    for (let i = 1; i < numOfNodes; ++i) {
      outGraph.addArcToNode(
        new CDanNode({ id: i - 1 }),
        new CDanArc({
          weight: 1,
          node: new CDanNode({ id: i })
        })
      );
    }
    return outGraph;
  }

  /**
   * A utility public static method to generate an undirected graph with a number of _numOfNodes_ random nodes
   * @param {number} numOfNodes the number of nodes of the output graph
   * @returns {DanUndirectedGraph<number, undefined>} an undirected graph witn _numOfNodes_ nodes
   */
  public static generateRandomNodeGraph(numOfNodes: number): DanUndirectedGraph<number, undefined> {
    const outGraph = new DanUndirectedGraph<number, undefined>();
    for (let i = 0; i < numOfNodes; ++i) {
      outGraph.addNode(new CDanNode({ id: i }));
      if (i > 0 && randomIntFromInterval(1, 2) > 1) {
        outGraph.addArcToNode(
          new CDanNode({ id: randomIntFromInterval(0, i - 1) }),
          new CDanArc({
            weight: 1,
            node: new CDanNode({ id: i })
          })
        );
      }
    }
    return outGraph;
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
      adjacents: new Map()
    });
    return true;
  }

  /**
   * Add an arc to a node, given the node identifier
   * @param {I} idNode the id of the node receiving _arcToAdd_
   * @param {DanArc<I, D>} arcToAdd the arc being added
   * @returns {boolean} true if _arcToAdd_ was correctly added to the adjacent arcs of idNode; false if the idNode does not exist or if _arcToAdd_ was already present
   */
  public addArcToNodeId(idNode: I, arcToAdd: DanArc<I, D>): boolean {
    // idNode is not present in the graph
    if (!this._graph.has(idNode)) {
      return false;
    }

    // add nodeToAdd to graph if not already present
    this.addNode(arcToAdd.node);

    const nodeArcs = this._graph.get(idNode) as DanNodeAndUndirectedArcs<I, D>;
    const nodeToAddArcs = this._graph.get(arcToAdd.node.id) as DanNodeAndUndirectedArcs<I, D>;

    // arcToAdd.node is already present
    if (nodeArcs.adjacents.has(arcToAdd.node.id)) {
      return false;
    }
    // add arcToAdd among the adjacent arcs of idNode
    nodeArcs.adjacents.set(arcToAdd.node.id, arcToAdd);
    // add node among the adjacent nodes of arcToAdd.node
    nodeToAddArcs.adjacents.set(
      nodeArcs.node.id,
      new CDanArc({
        weight: arcToAdd.weight,
        node: nodeArcs.node,
        labels: arcToAdd.labels ? arcToAdd.labels : undefined
      })
    );
    return true;
  }

  /**
   * Add arc to node, given the node interface structure
   * @param {DanNode<I, D>} node the node receiving _arcToAdd_
   * @param {DanArc<I, D>} nodeToAdd the node being added
   * @returns {boolean} true if _arcToAdd_ was correctly added to the adjacent arcs of node; false if _arcToAdd_ was already present
   */
  public addArcToNode(node: DanNode<I, D>, arcToAdd: DanArc<I, D>): boolean {
    // idNode is not present in the graph
    if (!this._graph.has(node.id)) {
      this.addNode(node);
    }
    return this.addArcToNodeId(node.id, arcToAdd);
  }

  /**
   * Remove the node given in input from the graph
   * @param {I} idNode the id of the node to remove
   * @returns {boolean} true if the node is correctly removed
   */
  public removeNode(idNode: I): boolean {
    if (!this._graph.has(idNode)) {
      return false;
    }
    const nodeArcs = this._graph.get(idNode) as DanNodeAndUndirectedArcs<I, D>;
    // remove idNode from all of its adjacent nodes
    for (let key of nodeArcs.adjacents.keys()) {
      const tmpNodeArcs = this._graph.get(key) as DanNodeAndUndirectedArcs<I, D>;
      tmpNodeArcs.adjacents.delete(idNode);
    }
    // finally remove node from the graph
    this._graph.delete(idNode);
    return true;
  }

  /**
   * Get the list of adjacent nodes of a given node identifier
   * @param {I} idNode the id of the node to check
   * @returns {DanNode[]} the list of adjacent nodes of idNode as array of DanNode<I, D>
   */
  protected _getAdjacentNodesList(idNode: I): DanNode<I, D>[] {
    // idNode is not present in the graph
    if (!this._graph.has(idNode)) {
      return [];
    }

    const outgoingNodes: DanNode<I, D>[] = [];
    const nodeArcs = this._graph.get(idNode) as DanNodeAndUndirectedArcs<I, D>;

    for (let outArc of nodeArcs.adjacents.values()) {
      outgoingNodes.push(outArc.node);
    }
    return outgoingNodes;
  }

  /**
   * Get a node in the graph
   * @returns {DanNode<I, D> | undefined} a node in the graph or undefined if the graph is empty
   */
  protected _getANode(): DanNode<I, D> | undefined {
    let outNode: DanNode<I, D> | undefined = undefined;
    for (let value of this._graph.values()) {
      outNode = value.node;
      break;
    }
    return outNode;
  }

  /**
   * Protected method to visit all the neighbours of a node, given in input the node id and a previous set of visitedNodes
   * @param {Set<I>} visitedNodes the nodes already visited
   * @param {I} nextNode the next node to visit
   */
  protected _visitNodes(visitedNodes: Set<I>, nextNode: I): void {
    visitedNodes.add(nextNode);
    const adjacentNodes = this._getAdjacentNodesList(nextNode);
    for (let adjacentNode of adjacentNodes) {
      if (!visitedNodes.has(adjacentNode.id)) {
        this._visitNodes(visitedNodes, adjacentNode.id);
      }
    }
  }

  /**
   * Recursively checks for the presence of a cycle starting from node id nextNode
   * @param {Set<I>} visitedNodes the nodes already visited
   * @param {I} nextNode the next node to visit
   * @param {I|undefined} fromNode the parent node (default: undefined)
   * @returns {boolean} true if a cycle is found, false if no cycle is found
   */
  protected _checkForCycle(visitedNodes: Set<I>, nextNode: I, fromNode: I | undefined = undefined): boolean {
    visitedNodes.add(nextNode);
    const adjacentNodes = this._getAdjacentNodesList(nextNode);
    for (let adjacentNode of adjacentNodes) {
      if (fromNode !== undefined && adjacentNode.id === fromNode) {
        continue;
      }
      if (!visitedNodes.has(adjacentNode.id)) {
        const recursiveRes = this._checkForCycle(visitedNodes, adjacentNode.id, nextNode);
        if (recursiveRes) {
          return true;
        }
      } else {
        return true;
      }
    }
    return false;
  }

  /**
   * Check if the graph is connected
   * @returns {boolean} true if the graph is connected
   */
  public isConnected(): boolean {
    if (this.isEmpty()) {
      return true;
    }
    const visitedNodes: Set<I> = new Set();
    this._visitNodes(visitedNodes, (this._getANode() as DanNode<I, D>).id);
    return visitedNodes.size === this.countNodes();
  }

  /**
   * Public method to check if the graph is acyclic
   * @returns {boolean} true if the graph does not contain cycles
   */
  public isAcyclic(): boolean {
    if (this.isEmpty()) {
      return true;
    }
    const visitedNodes: Set<I> = new Set();
    for (let idNode of this._graph.keys()) {
      if (!visitedNodes.has(idNode)) {
        const cycleFound = this._checkForCycle(visitedNodes, idNode);
        if (cycleFound) {
          return false;
        }
      }
    }
    return true;
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
   * The string representation of the undirected graph
   * @param {boolean} showDetails if this option is true, all the node and arc details will be included in the output string (default: false)
   * @returns {string} the string representation of the undirected graph
   */
  public toString(showArcDetails: boolean = false): string {
    let outStr = '';
    for (let [key, value] of this._graph) {
      let adjacents = '';
      for (let adjArc of value.adjacents.values()) {
        if (showArcDetails) {
          adjacents += `(${adjArc.toString(true)});`;
        } else {
          adjacents += `(${adjArc.toString(false)});`;
        }
      }
      outStr = outStr.concat(`\n${key} - adjacents:[${adjacents}]\n`);
    }
    return outStr;
  }

  /**
   * Clone the inner graph structure
   * @returns {Map<I, DanNodeAndUndirectedArcs<I, D>>} a copy of the inner graph structure
   */
  protected _getCopyOfInnerGraph(): Map<I, DanNodeAndUndirectedArcs<I, D>> {
    return _.cloneDeep(this._graph);
  }

  /**
   * Get node and undirected arcs structure (as DanNodeAndUndirectedArcs) from nodeId
   * @param {I} idNode the node identifier
   * @returns {DanNodeAndUndirectedArcs<I, D>|undefined} node and undirected arcs structure or undefined if nodeId is not present in the graph
   */
  public getNodeAndUndirectedArcsFromNodeId(idNode: I): DanNodeAndUndirectedArcs<I, D> | undefined {
    return this._graph.get(idNode);
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
