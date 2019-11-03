export interface DanNode<I, D> {
    id: I;
    data?: D;
    renderData(): string;
    toString(showDetails: boolean): string;
}
export interface DanArc<I, D> {
    weight: number;
    labels?: string[];
    node: DanNode<I, D>;
    renderLabels(separator: string): string;
    toString(showDetails: boolean): string;
}
export declare class CDanNode<I, D> implements DanNode<I, D> {
    id: I;
    data?: D;
    constructor({ id, data }: {
        id: I;
        data?: D;
    });
    renderData(): string;
    toString(showDetails?: boolean): string;
}
export declare class CDanArc<I, D> implements DanArc<I, D> {
    weight: number;
    labels?: string[];
    node: DanNode<I, D>;
    constructor({ weight, node, labels }: {
        weight: number;
        labels?: string[];
        node: DanNode<I, D>;
    });
    renderLabels(separator?: string): string;
    toString(showDetails?: boolean): string;
}
