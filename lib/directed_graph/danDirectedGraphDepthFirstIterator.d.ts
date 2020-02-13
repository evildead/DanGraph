import { DanDirectedGraph } from './danDirectedGraph';
import { GraphIterator, DanNode } from '../commons';
export declare class DanDirectedGraphDepthFirstIterator<I, D> implements GraphIterator<DanNode<I, D>> {
    private _graph;
    private _visitedNodes;
    private _startingNodeId;
    private _currentNodeId;
    private _nextNodeId;
    private _stack;
    constructor(collection: DanDirectedGraph<I, D>, startingNodeId: I);
    private _getNodeAndDirectedArcsFromNodeId;
    private _initFields;
    current(): DanNode<I, D> | undefined;
    next(): DanNode<I, D> | undefined;
    private _advance;
    hasNext(): boolean;
    rewind(): void;
}
