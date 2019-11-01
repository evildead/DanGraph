export interface DanNode<I, D> {
  id: I;
  data?: D;
}

export interface DanArc<I, D> {
  weight: number;
  node: DanNode<I, D>;
}
