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
 * The class CDanNode implements DanNode interface
 */
export class CDanNode<I, D> implements DanNode<I, D> {
  public id: I;
  public data?: D;

  /**
   * The public class constructor
   * @param {object} danNodeData the object containing the data to populate the DanNode interface
   * @param {I} danNodeData.id the node identifier
   * @param {D|undefined} danNodeData.data the node data
   */
  public constructor({ id, data }: { id: I; data?: D }) {
    this.id = id;
    if (data !== undefined) {
      this.data = data;
    }
  }

  /**
   * Render node data in string format
   * @returns {string} the node data in string format
   */
  public renderData(): string {
    if (!this.data) {
      return '';
    }
    return `${this.data}`;
  }

  /**
   * The string representation of the node
   * @param {boolean} showDetails if this option is true, even the node data is included in the output string (default: false)
   * @returns {string} the string representation of the node
   */
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
 * The class CDanArc implements DanArc interface
 */
export class CDanArc<I, D> implements DanArc<I, D> {
  public weight: number;
  public labels?: string[];
  public node: DanNode<I, D>;

  /**
   * The public class constructor
   * @param {object} danArcData the object containing the data to populate the DanArc interface
   * @param {number} danArcData.weight a numeric calue representing the weight of the arc
   * @param {string[]} danArcData.labels a list of labels associated to the arc
   * @param {DanNode<I, D>} danArcData.node the target node associated to the arc
   */
  public constructor({ weight, node, labels }: { weight: number; labels?: string[]; node: DanNode<I, D> }) {
    this.weight = weight;
    this.node = node;
    if (labels !== undefined) {
      this.labels = labels;
    }
  }

  /**
   * Render arc labels in a single string
   * @param {string} separator the labels separator (default: '|')
   * @returns {string} the string representing all the arc labels
   */
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

  /**
   * The string representation of the arc
   * @param {boolean} showDetails if this option is true, even the arc weight and labels are included in the final string (default: false)
   * @returns {string} the string representation of the arc
   */
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
