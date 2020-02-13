/**
 * The DanNode interface represents a graph node.
 * It contains a node identifier and may contain additional data.
 */
export interface DanNode<I, D> {
  id: I;
  data?: D;

  renderData(): string;
  toString(showDetails: boolean): string;
}

/**
 * The DanArc interface represents a graph arc.
 * It contains a node structure, the arc weight and may contain an array of string labels.
 */
export interface DanArc<I, D> {
  weight: number;
  labels?: string[];
  node: DanNode<I, D>;

  renderLabels(separator: string): string;
  toString(showDetails: boolean): string;
}

/**
 * The GraphIterator interface
 */
export interface GraphIterator<T> {
  // Return the current element.
  current(): T | undefined;

  // Return the current element and move forward to next element.
  next(): T | undefined;

  // Checks if graph contains more elements.
  hasNext(): boolean;

  // Rewind the Iterator to the first element.
  rewind(): void;
}

/**
 * The class implementing DanNode
 */
export class CDanNode<I, D> implements DanNode<I, D> {
  public id: I;
  public data?: D;

  public constructor({ id, data }: { id: I; data?: D }) {
    this.id = id;
    if (data !== undefined) {
      this.data = data;
    }
  }

  public renderData(): string {
    if (!this.data) {
      return '';
    }
    return `${this.data}`;
  }

  public toString(showDetails: boolean = false): string {
    let nodeToString = '';
    if (showDetails) {
      nodeToString += `id{${this.id}}-data{${this.renderData()}}`;
    } else {
      nodeToString += `${this.id}`;
    }
    return nodeToString;
  }
}

/**
 * The class implementing DanArc
 */
export class CDanArc<I, D> implements DanArc<I, D> {
  public weight: number;
  public labels?: string[];
  public node: DanNode<I, D>;

  public constructor({ weight, node, labels }: { weight: number; labels?: string[]; node: DanNode<I, D> }) {
    this.weight = weight;
    this.node = node;
    if (labels !== undefined) {
      this.labels = labels;
    }
  }

  public renderLabels(separator: string = '|'): string {
    if (!this.labels) {
      return '';
    }
    let renderedLabel = '';
    for (let label of this.labels) {
      if (renderedLabel.length > 0) {
        renderedLabel += `${separator}${label}`;
      } else {
        renderedLabel += `${label}`;
      }
    }
    return renderedLabel;
  }

  public toString(showDetails: boolean = false): string {
    let arcToString = '';
    if (showDetails) {
      arcToString += `node{${this.node.toString(true)}}-weight{${this.weight}}-label{${this.renderLabels()}}`;
    } else {
      arcToString += `${this.node.toString(false)}`;
    }
    return arcToString;
  }
}
