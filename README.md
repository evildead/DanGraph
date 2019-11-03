# DanGraph
_DanGraph_ is a library written in typescript to manipulate directed and undirected graphs

## How to
Building a graph is as simple as invoking a class constructor and a couple of very simple methods.

Es:
```ts
import { DirectedGraph, CDanNode, CDanArc } from 'dangraph';
const myGraph = new DirectedGraph.DanDirectedGraph<number, undefined>();
myGraph.addArcToNode(
    new CDanNode({ id: 1 }),
    new CDanArc({ weight: 1, node: new CDanNode({ id: 2 }) }),
    DirectedGraph.ArcType.outgoing
);
```

## Documentation

Read more about

  * [Directed Graphs](docs/directedGraph.md)
  * [Undirected Graphs](docs/undirectedGraph.md)
