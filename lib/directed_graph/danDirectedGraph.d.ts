import { DanNode } from '../commons';
interface DanNodeAndDirectedArcs<I, D> {
    node: DanNode<I, D>;
    incoming: Map<I, DanNode<I, D>>;
    outgoing: Map<I, DanNode<I, D>>;
}
export declare enum ArcType {
    incoming = "incoming",
    outgoing = "outgoing"
}
export declare class DanDirectedGraph<I, D> {
    protected _graph: Map<I, DanNodeAndDirectedArcs<I, D>>;
    constructor();
    protected _getCopyOfInnerGraph(): Map<I, DanNodeAndDirectedArcs<I, D>>;
    addNode(node: DanNode<I, D>): boolean;
    addNodeToId(idNode: I, nodeToAdd: DanNode<I, D>, arcType: ArcType): boolean;
    addNodeToNode(node: DanNode<I, D>, nodeToAdd: DanNode<I, D>, arcType: ArcType): boolean;
    removeNode(idNode: I): boolean;
    isNodeALeaf(idNode: I): boolean;
    protected _getALeaf(): DanNode<I, D> | undefined;
    toString(): string;
    countNodes(): number;
    protected _isAcyclic(): boolean;
    isAcyclic(): boolean;
}
export {};
