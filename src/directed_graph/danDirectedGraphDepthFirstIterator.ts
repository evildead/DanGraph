// DanDirectedGraph class
import { DanDirectedGraph, DanNodeAndDirectedArcs } from './danDirectedGraph';

// common interfaces, classes, ...
import { GraphIterator, DanNode, DanArc } from '../commons';

// DanStack
import { DanStack } from '../utils/danStack';

/**
 * The class DanDirectedGraphDepthFirstIterator implementing GraphIterator
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
   */
  public constructor(collection: DanDirectedGraph<I, D>, startingNodeId: I) {
    this._graph = collection;
    this._stack = new DanStack<IterableIterator<[I, DanArc<I, D>]>>();
    this._visitedNodes = new Set<I>();
    this._initFields(startingNodeId);
  }

  /**
   * Retrieve node and directed arcs structure from node identifier
   * @param nodeId the node identifier
   * @returns the node and directed arcs structure DanNodeAndDirectedArcs
   * @throws exception if nodeId was not found in graph
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
    do {
      let neighbors = this._stack.peek();
      if (neighbors === undefined) {
        this._nextNodeId = null;
        return;
      }
      let result = neighbors.next();
      // No more nodes -> back out a level
      while (result.done) {
        this._stack.pop();
        // All done!
        if (this._stack.isEmpty()) {
          this._nextNodeId = null;
          return;
        }
        neighbors = this._stack.peek();
        if (neighbors === undefined) {
          this._nextNodeId = null;
          return;
        }
        result = neighbors.next();
      }
      const [nodeId, arc] = result.value;
      this._nextNodeId = nodeId;
    } while (this._visitedNodes.has(this._nextNodeId as I));
    const nextNodeStructure = this._getNodeAndDirectedArcsFromNodeId(this._nextNodeId as I);
    this._stack.push(nextNodeStructure.outgoing.entries());
  }

  /**
   * Check if the iterator can step to a next node
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
