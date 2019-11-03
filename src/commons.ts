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

export class CDanNode<I, D> implements DanNode<I, D> {
  public id: I;
  public data?: D;

  public constructor({id, data}: {
    id: I;
    data?: D;
  }) {
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

export class CDanArc<I, D> implements DanArc<I, D> {
  public weight: number;
  public labels?: string[];
  public node: DanNode<I, D>;

  public constructor({weight, node, labels}: {
    weight: number;
    labels?: string[];
    node: DanNode<I, D>;
  }) {
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
