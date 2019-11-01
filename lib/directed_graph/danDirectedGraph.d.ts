import { DanNode, DanArc } from '../commons';
interface DanNodeAndDirectedArcs<I, D> {
    node: DanNode<I, D>;
    incoming: Map<I, DanArc<I, D>>;
    outgoing: Map<I, DanArc<I, D>>;
}
export declare enum ArcType {
    incoming = "incoming",
    outgoing = "outgoing"
}
export declare class DanDirectedGraph<I, D> {
    protected _graph: Map<I, DanNodeAndDirectedArcs<I, D>>;
    constructor();
    static generateConsecutiveNodeGraph(numOfNodes: number): DanDirectedGraph<number, undefined>;
    static generateRandomNodeGraph(numOfNodes: number): DanDirectedGraph<number, undefined>;
    protected _getCopyOfInnerGraph(): Map<I, DanNodeAndDirectedArcs<I, D>>;
    addNode(node: DanNode<I, D>): boolean;
    addArcToNodeId(idNode: I, arcToAdd: DanArc<I, D>, arcType: ArcType): boolean;
    addArcToNode(node: DanNode<I, D>, arcToAdd: DanArc<I, D>, arcType: ArcType): boolean;
    removeNode(idNode: I): boolean;
    isNodeALeaf(idNode: I): boolean;
    protected _getALeaf(): DanNode<I, D> | undefined;
    toString(showArcWeight?: boolean): string;
    countNodes(): number;
    isEmpty(): boolean;
    protected _getOutgoingNodesList(idNode: I): DanNode<I, D>[];
    protected _isAcyclic(): boolean;
    isAcyclic(): boolean;
    protected _visitNodes(visitedNodes: Set<I>, nextNode: I): void;
    sourceConnectedToAllNodes(idNode: I): boolean;
}
export {};
