// DanDirectedGraph class
import { DanDirectedGraph, DanNodeAndDirectedArcs } from './danDirectedGraph';

// common interfaces, classes, ...
import { GraphIterator, DanNode } from '../commons';

/**
 * The class DanDirectedGraphBreadthFirstIterator implements GraphIterator interface
 */
export class DanDirectedGraphBreadthFirstIterator<I, D> implements GraphIterator<DanNode<I, D>> {
  // the graph
  private _graph: DanDirectedGraph<I, D>;
  // list of visited items
  private _visitedNodes: Set<I>;
  // the starting node identifier
  private _startingNodeId: I;
  // the currentNode identifier
  private _currentNodeId: I | null;
  // the nextNode identifier
  private _nextNodeId: I | null;
  // the current level queue
  private _currLevelQueue: DanNode<I, D>[];
  // the current level queue position
  private _currLevelQueuePosition: number;
  // the next level queue
  private _nextLevelQueue: DanNode<I, D>[];
  // the next level set of elements
  private _nextLevelSet: Set<I>;

  /**
   * The public class constructor
   * @param {DanDirectedGraph<I, D>} collection the directed graph
   * @param {I} startingNodeId the starting node identifier
   * @throws {Error} exception if startingNodeId was not found in graph
   */
  public constructor(collection: DanDirectedGraph<I, D>, startingNodeId: I) {
    this._graph = collection;
    this._visitedNodes = new Set<I>();
    this._currLevelQueue = [];
    this._nextLevelQueue = [];
    this._nextLevelSet = new Set<I>();
    this._initFields(startingNodeId);
  }

  /**
   * Retrieve node and directed arcs structure from node identifier
   * @param {I} nodeId the node identifier
   * @returns {DanNodeAndDirectedArcs<I, D>} the node and directed arcs structure DanNodeAndDirectedArcs
   * @throws {Error} exception if nodeId was not found in graph
   */
  private _getNodeAndDirectedArcsFromNodeId(nodeId: I): DanNodeAndDirectedArcs<I, D> {
    const nodeAndDirectedArcsStructure = this._graph.getNodeAndDirectedArcsFromNodeId(nodeId);
    if (nodeAndDirectedArcsStructure === undefined) {
      throw new Error(`node id ${nodeId} not found in graph`);
    }
    return nodeAndDirectedArcsStructure;
  }

  /**
   * Init the class fields with the starting node identifier passed in input
   * @param {I} startingNodeId the starting node identifier
   * @throws {Error} exception if startingNodeId was not found in graph
   */
  private _initFields(startingNodeId: I): void {
    // check if startingNodeId is in the graph: if startingNodeId is not found
    // in the graph, this method will throw an exception
    const startingNodeStructure = this._getNodeAndDirectedArcsFromNodeId(startingNodeId);
    this._currLevelQueue.push(startingNodeStructure.node);
    this._startingNodeId = startingNodeId;
    this._currLevelQueuePosition = 0;
    this._currentNodeId = null;
    this._nextNodeId = startingNodeId;
    this._addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued();
  }

  /**
   * Get the current node, or return undefined if iterator was not yet started
   * @returns {DanNode<I, D>|undefined}
   * @throws {Error} exception if this._currentNodeId was not found in graph
   */
  public current(): DanNode<I, D> | undefined {
    if (this._currentNodeId === null) {
      return undefined;
    }
    const nodeAndDirectedArcsStructure = this._getNodeAndDirectedArcsFromNodeId(this._currentNodeId);
    return nodeAndDirectedArcsStructure.node;
  }

  /**
   * Get the next node, or return undefined if the iterator's end was reached
   * @returns {DanNode<I, D>|undefined}
   * @throws {Error} exception if this._nextNodeId was not found in graph
   */
  public next(): DanNode<I, D> | undefined {
    // return undefined if there are no more nodes left to visit
    if (!this.hasNext()) {
      return undefined;
    }
    // this.hasNext() returned true, so this._nextNodeId cannot be null
    const nextNodeStructure = this._getNodeAndDirectedArcsFromNodeId(this._nextNodeId as I);
    // add nextNode to visitedNodes
    this._visitedNodes.add(this._nextNodeId as I);
    // advance the iterator and compute the successive node
    this._advance();
    // assign the current node identifier
    this._currentNodeId = nextNodeStructure.node.id;
    // return the next node
    return nextNodeStructure.node;
  }

  /**
   * Add the outgoing nodes of this._nextNodeId to the next-level-queue, if the node was not already visited, and if it's not already present inside the queue
   * @returns {boolean} true if this._nextNodeId is not null, otherwise false
   * @throws {Error} exception if this._nextNodeId was not found in graph
   */
  private _addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued(): boolean {
    if (this._nextNodeId === null) {
      return false;
    }
    const nextNodeStructure = this._getNodeAndDirectedArcsFromNodeId(this._nextNodeId);
    // loop through all the outgoing nodes of next-node
    for (const [nodeId, arc] of nextNodeStructure.outgoing) {
      // add the node inside the next-level-queue, only if:
      // - it was not already visited (!this._visitedNodes.has(nodeId)) AND
      // - it's not already present inside the queue (!this._nextLevelSet.has(nodeId))
      if (!this._visitedNodes.has(nodeId) && !this._nextLevelSet.has(nodeId)) {
        this._nextLevelQueue.push(this._getNodeAndDirectedArcsFromNodeId(nodeId).node);
        this._nextLevelSet.add(nodeId);
      }
    }
    return true;
  }

  /**
   * Advance to the next node in a breadth first fashion
   */
  private _advance(): void {
    // if there are elements left to visit inside the current-level queue, move forward the current-level queue iterator (this._currLevelQueuePosition)
    if (this._currLevelQueuePosition + 1 < this._currLevelQueue.length) {
      // assing the next node identifier
      this._nextNodeId = this._currLevelQueue[++this._currLevelQueuePosition].id;
      // add outgoing nodes to next-level queue
      this._addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued();
      return;
    }

    // no more elements left to visit inside the current-level queue, and the next-level queue is empty
    if (this._nextLevelQueue.length < 1) {
      // assing the next node identifier to null
      this._nextNodeId = null;
      return;
    }

    // clear current-level queue
    this._currLevelQueue.splice(0, this._currLevelQueue.length);
    this._currLevelQueuePosition = 0;
    // copy next-level queue element to current-level queue
    this._currLevelQueue = [...this._nextLevelQueue];
    // clear next-level queue
    this._nextLevelQueue.splice(0, this._nextLevelQueue.length);
    this._nextLevelSet.clear();

    // assing the next node identifier
    this._nextNodeId = this._currLevelQueue[this._currLevelQueuePosition].id;
    // add outgoing nodes to next-level queue
    this._addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued();
  }

  /**
   * Check if the iterator can step to a next node
   * @returns {boolean} true if the iterator can step to a next node, false if there are no more nodes left to visit in the iterator
   */
  public hasNext(): boolean {
    return this._nextNodeId !== null;
  }

  /**
   * Restart the iterator
   */
  public rewind(): void {
    this._visitedNodes.clear();
    this._currLevelQueue.splice(0, this._currLevelQueue.length);
    this._nextLevelQueue.splice(0, this._nextLevelQueue.length);
    this._nextLevelSet.clear();
    this._initFields(this._startingNodeId);
  }
}
