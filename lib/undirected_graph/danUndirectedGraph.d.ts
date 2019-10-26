import { DanNode } from '../commons';
interface DanNodeAndUndirectedArcs<I, D> {
    node: DanNode<I, D>;
    adjacents: Map<I, DanNode<I, D>>;
}
export declare class DanDirectedGraph<I, D> {
    protected _graph: Map<I, DanNodeAndUndirectedArcs<I, D>>;
    constructor();
    addNode(node: DanNode<I, D>): boolean;
}
export {};
