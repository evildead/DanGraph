import { DanNode, DanArc } from '../commons';
interface DanNodeAndUndirectedArcs<I, D> {
    node: DanNode<I, D>;
    adjacents: Map<I, DanArc<I, D>>;
}
export declare class DanUndirectedGraph<I, D> {
    protected _graph: Map<I, DanNodeAndUndirectedArcs<I, D>>;
    constructor();
    static generateConsecutiveNodeGraph(numOfNodes: number): DanUndirectedGraph<number, undefined>;
    static generateRandomNodeGraph(numOfNodes: number): DanUndirectedGraph<number, undefined>;
    addNode(node: DanNode<I, D>): boolean;
    addArcToNodeId(idNode: I, arcToAdd: DanArc<I, D>): boolean;
    addArcToNode(node: DanNode<I, D>, arcToAdd: DanArc<I, D>): boolean;
    removeNode(idNode: I): boolean;
    protected _getAdjacentNodesList(idNode: I): DanNode<I, D>[];
    protected _getANode(): DanNode<I, D> | undefined;
    protected _visitNodes(visitedNodes: Set<I>, nextNode: I): void;
    protected _checkForCycle(visitedNodes: Set<I>, nextNode: I, fromNode?: I | undefined): boolean;
    isConnected(): boolean;
    isAcyclic(): boolean;
    countNodes(): number;
    isEmpty(): boolean;
    toString(showArcDetails?: boolean): string;
}
export {};
