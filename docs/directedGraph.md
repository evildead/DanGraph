# Directed graph

## Definition
[Wikipedia - Directed graph](https://en.wikipedia.org/wiki/Directed_graph)

## Examples
### The following graph is not acyclic and node 1 has a path to any other node in the graph:

![Directed cyclic graph](docs/images/directed-graph_cyclic_node1-connected-to-all.png)

```ts
import { DirectedGraph, CDanNode, CDanArc } from 'dangraph';
const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();

myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }), DirectedGraph.ArcType.outgoing);
myGraph.addArcToNode(new CDanNode({ id: 2 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }), DirectedGraph.ArcType.outgoing);
myGraph.addArcToNode(new CDanNode({ id: 2 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }), DirectedGraph.ArcType.outgoing);
myGraph.addArcToNode(new CDanNode({ id: 4 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }), DirectedGraph.ArcType.outgoing);
myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }), DirectedGraph.ArcType.outgoing);
myGraph.addArcToNode(new CDanNode({ id: 4 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }), DirectedGraph.ArcType.incoming);
myGraph.addArcToNode(new CDanNode({ id: 6 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }), DirectedGraph.ArcType.outgoing);
myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }), DirectedGraph.ArcType.incoming);
myGraph.addArcToNode(new CDanNode({ id: 3 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }), DirectedGraph.ArcType.outgoing);

console.log(myGraph.toString());
if (myGraph.isAcyclic()) {
  console.log('The graph is acyclic');
} else {
  console.log('The graph is not acyclic');
}

if (myGraph.sourceConnectedToAllNodes(1)) {
  console.log('Node 1 has a path to any other node in the graph');
} else {
  console.log('Node 1 does not have a path to any other node in the graph');
}
```

### The following graph is acyclic and node 1 does not have a path to node 7

![Directed acyclic graph](docs/images/directed-graph_acyclic_node1-not-connected-to-all.png)

```ts
import { DirectedGraph, CDanNode, CDanArc } from 'dangraph';
const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();

myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }), DirectedGraph.ArcType.outgoing);
myGraph.addArcToNode(new CDanNode({ id: 2 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }), DirectedGraph.ArcType.outgoing);
myGraph.addArcToNode(new CDanNode({ id: 2 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }), DirectedGraph.ArcType.outgoing);
myGraph.addArcToNode(new CDanNode({ id: 4 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }), DirectedGraph.ArcType.outgoing);
myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }), DirectedGraph.ArcType.outgoing);
myGraph.addArcToNode(new CDanNode({ id: 4 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }), DirectedGraph.ArcType.outgoing);
myGraph.addArcToNode(new CDanNode({ id: 6 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }), DirectedGraph.ArcType.outgoing);
myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }), DirectedGraph.ArcType.incoming);
myGraph.addArcToNode(new CDanNode({ id: 3 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }), DirectedGraph.ArcType.incoming);

console.log(myGraph.toString());
if (myGraph.isAcyclic()) {
  console.log('The graph is acyclic');
} else {
  console.log('The graph is not acyclic');
}

if (myGraph.sourceConnectedToAllNodes(1)) {
  console.log('Node 1 has a path to any other node in the graph');
} else {
  console.log('Node 1 does not have a path to any other node in the graph');
}
```
