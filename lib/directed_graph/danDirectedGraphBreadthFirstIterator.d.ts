import { DanDirectedGraph } from './danDirectedGraph';
import { GraphIterator, DanNode } from '../commons';
export declare class DanDirectedGraphBreadthFirstIterator<I, D> implements GraphIterator<DanNode<I, D>> {
    private _graph;
    private _visitedNodes;
    private _startingNodeId;
    private _currentNodeId;
    private _nextNodeId;
    private _currLevelQueue;
    private _currLevelQueuePosition;
    private _nextLevelQueue;
    private _nextLevelSet;
    constructor(collection: DanDirectedGraph<I, D>, startingNodeId: I);
    private _getNodeAndDirectedArcsFromNodeId;
    private _initFields;
    current(): DanNode<I, D> | undefined;
    next(): DanNode<I, D> | undefined;
    private _addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued;
    private _advance;
    hasNext(): boolean;
    rewind(): void;
}
