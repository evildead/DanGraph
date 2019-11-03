import { DanNode, DanArc, CDanNode, CDanArc } from '../commons';
import { randomIntFromInterval } from '../utils/commonUtils';

interface DanNodeAndUndirectedArcs<I, D> {
  node: DanNode<I, D>;
  adjacents: Map<I, DanArc<I, D>>;
}

export class DanUndirectedGraph<I, D> {
  protected _graph: Map<I, DanNodeAndUndirectedArcs<I, D>>;

  public constructor() {
    this._graph = new Map();
  }

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
   * addArcToNodeId
   * @param idNode the id of the node receiving nodeToAdd
   * @param arcToAdd the arc being added
   * @returns true if arcToAdd was correctly added to the adjacent arcs of idNode; false if the idNode does not exist or if arcToAdd was already present
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
    nodeToAddArcs.adjacents.set(nodeArcs.node.id, new CDanArc({
      weight: arcToAdd.weight,
      node: nodeArcs.node,
      labels: arcToAdd.labels ? arcToAdd.labels : undefined
    }));
    return true;
  }

  /**
   * addArcToNode
   * @param node the node receiving nodeToAdd
   * @param nodeToAdd the node being added
   * @returns true if nodeToAdd was correctly added to the adjacent arcs of node; false if nodeToAdd was already present
   */
  public addArcToNode(node: DanNode<I, D>, arcToAdd: DanArc<I, D>): boolean {
    // idNode is not present in the graph
    if (!this._graph.has(node.id)) {
      this.addNode(node);
    }
    return this.addArcToNodeId(node.id, arcToAdd);
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
   * _getAdjacentNodesList
   * @param idNode the id of the node to check
   * @returns the list of adjacent nodes of idNode as array of DanNode<I, D>
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

  protected _getANode(): DanNode<I, D> | undefined {
    let outNode: DanNode<I, D> | undefined = undefined;
    for (let value of this._graph.values()) {
      outNode = value.node;
    }
    return outNode;
  }

  /**
   * _visitNodes
   * @param visitedNodes nodes already visited
   * @param nextNode the next node to visit
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
   * _checkForCycle
   * recursively checks for the presence of a cycle starting from node id nextNode
   * @param visitedNodes nodes already visited
   * @param nextNode the next node to visit
   * @param fromNode the parent node
   * @returns true if a cycle is found, false if no cycle is found
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
   * isConnected
   * @returns true if the graph is connected
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
   * isAcyclic
   * @returns true if the graph does not contain cycles
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
   * countNodes
   * @returns the number of nodes in the graph
   */
  public countNodes(): number {
    return this._graph.size;
  }

  /**
   * isEmpty
   * @returns true if the graph does not contain any node
   */
  public isEmpty(): boolean {
    return this.countNodes() < 1;
  }

  /**
   * toString
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
}
