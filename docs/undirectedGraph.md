# Undirected graph

## Definition
[Wikipedia - Undirected graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics))

## Examples
### The following graph is acyclic and not connected:

![Undirected acyclic not-connected graph](docs/images/undirected-graph_acyclic_not-connected.png)

```ts
import { DirectedGraph, CDanNode, CDanArc } from 'dangraph';
const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();

myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }));
myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }));
myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }));
myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }));
myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }));
myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 9 }) }));

console.log(myGraph.toString());
if (myGraph.isAcyclic()) {
  console.log('The graph is acyclic');
} else {
  console.log('The graph is not acyclic');
}

if (myGraph.isConnected()) {
  console.log('The graph is connected');
} else {
  console.log('The graph is not connected');
}
```

### The following graph is acyclic and connected:

![Undirected acyclic connected graph](docs/images/undirected-graph_acyclic_connected.png)

```ts
import { DirectedGraph, CDanNode, CDanArc } from 'dangraph';
const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();

myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }));
myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }));
myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }));
myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }));
myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }));
myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 9 }) }));
myGraph.addArcToNode(new CDanNode({ id: 3 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }));
myGraph.addArcToNode(new CDanNode({ id: 6 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }));

console.log(myGraph.toString());
if (myGraph.isAcyclic()) {
  console.log('The graph is acyclic');
} else {
  console.log('The graph is not acyclic');
}

if (myGraph.isConnected()) {
  console.log('The graph is connected');
} else {
  console.log('The graph is not connected');
}
```

### The following graph is not acyclic and connected:

![Undirected not acyclic connected graph](docs/images/undirected-graph_cyclic_connected.png)

```ts
import { DirectedGraph, CDanNode, CDanArc } from 'dangraph';
const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();

myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }));
myGraph.addArcToNode(new CDanNode({ id: 1 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 3 }) }));
myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 4 }) }));
myGraph.addArcToNode(new CDanNode({ id: 5 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 6 }) }));
myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }));
myGraph.addArcToNode(new CDanNode({ id: 7 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 9 }) }));
myGraph.addArcToNode(new CDanNode({ id: 3 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 7 }) }));
myGraph.addArcToNode(new CDanNode({ id: 6 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 8 }) }));
myGraph.addArcToNode(new CDanNode({ id: 3 }), new CDanArc({ weight: 1, node: new CDanNode({ id: 5 }) }));

console.log(myGraph.toString());
if (myGraph.isAcyclic()) {
  console.log('The graph is acyclic');
} else {
  console.log('The graph is not acyclic');
}

if (myGraph.isConnected()) {
  console.log('The graph is connected');
} else {
  console.log('The graph is not connected');
}
```
