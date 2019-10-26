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
    addNode(node: DanNode<I, D>): boolean;
    addNodeToId(idNode: I, nodeToAdd: DanNode<I, D>, arcType: ArcType): boolean;
    addNodeToNode(node: DanNode<I, D>, nodeToAdd: DanNode<I, D>, arcType: ArcType): boolean;
    toString(): string;
    countNodes(): number;
}
export {};
