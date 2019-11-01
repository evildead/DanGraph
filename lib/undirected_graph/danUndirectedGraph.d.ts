import { DanNode, DanArc } from '../commons';
interface DanNodeAndUndirectedArcs<I, D> {
    node: DanNode<I, D>;
    adjacents: Map<I, DanArc<I, D>>;
}
export declare class DanUndirectedGraph<I, D> {
    protected _graph: Map<I, DanNodeAndUndirectedArcs<I, D>>;
    constructor();
    addNode(node: DanNode<I, D>): boolean;
    countNodes(): number;
    toString(showArcWeight?: boolean): string;
}
export {};
