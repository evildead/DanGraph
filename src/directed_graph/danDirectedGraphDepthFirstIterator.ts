// DanDirectedGraph class
import { DanDirectedGraph, DanNodeAndDirectedArcs } from './danDirectedGraph';

// common interfaces, classes, ...
import { GraphIterator, DanNode, DanArc } from '../commons';

// DanStack
import { DanStack } from '../utils/danStack';

/**
 * The class DanDirectedGraphDepthFirstIterator implements GraphIterator interface
 */
export class DanDirectedGraphDepthFirstIterator<I, D> implements GraphIterator<DanNode<I, D>> {
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
  // the stack
  private _stack: DanStack<IterableIterator<[I, DanArc<I, D>]>>;

  /**
   * The public class constructor
   * @param {DanDirectedGraph<I, D>} collection the directed graph
   * @param {I} startingNodeId the starting node identifier
   * @throws {Error} exception if startingNodeId was not found in graph
   */
  public constructor(collection: DanDirectedGraph<I, D>, startingNodeId: I) {
    this._graph = collection;
    this._stack = new DanStack<IterableIterator<[I, DanArc<I, D>]>>();
    this._visitedNodes = new Set<I>();
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

    // add first node neighbors to the stack
    this._stack.push(startingNodeStructure.outgoing.entries());

    // assign fields
    this._startingNodeId = startingNodeId;
    this._currentNodeId = null;
    this._nextNodeId = startingNodeId;
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
   * Advance to the next node in a depth first fashion
   */
  private _advance(): void {
    // if the stack is empty set nextNode to null and return
    if (this._stack.isEmpty()) {
      this._nextNodeId = null;
      return;
    }

    // Repeat the procedure to compute the nextNode, until the nextNode itself is among the visited ones
    do {
      // get the neighbors iterator on top of the stack
      let neighbors = this._stack.peek();
      if (neighbors === undefined) {
        this._nextNodeId = null;
        return;
      }
      // advance the iterator
      let result = neighbors.next();
      // No more nodes -> back out a level
      // N.B.: when result.done === true, the itarator reached the end
      while (result.done) {
        // pop the neighbors iterator out of the stack
        this._stack.pop();
        // The stack is empty: All done! Set the nextNode to null and return
        if (this._stack.isEmpty()) {
          this._nextNodeId = null;
          return;
        }
        // get the neighbors iterator on top of the stack and advance the iterator
        neighbors = this._stack.peek();
        if (neighbors === undefined) {
          this._nextNodeId = null;
          return;
        }
        result = neighbors.next();
      }
      // get the nodeId value out of the neighbors iterator and assing it to the nextNode
      const [nodeId, arc] = result.value;
      this._nextNodeId = nodeId;
    } while (this._visitedNodes.has(this._nextNodeId as I));

    // get next node structure and neighbors, and push the neighbors iterator on top of the stack
    const nextNodeStructure = this._getNodeAndDirectedArcsFromNodeId(this._nextNodeId as I);
    this._stack.push(nextNodeStructure.outgoing.entries());
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
    this._stack.clear();
    this._initFields(this._startingNodeId);
  }
}
