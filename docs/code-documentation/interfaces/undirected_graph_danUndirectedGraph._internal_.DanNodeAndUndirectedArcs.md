[dangraph](../README.md) / [Exports](../modules.md) / [undirected\_graph/danUndirectedGraph](../modules/undirected_graph_danUndirectedGraph.md) / [\<internal\>](../modules/undirected_graph_danUndirectedGraph._internal_.md) / DanNodeAndUndirectedArcs

# Interface: DanNodeAndUndirectedArcs\<I, D\>

[undirected\_graph/danUndirectedGraph](../modules/undirected_graph_danUndirectedGraph.md).[\<internal\>](../modules/undirected_graph_danUndirectedGraph._internal_.md).DanNodeAndUndirectedArcs

The DanNodeAndUndirectedArcs interface describes a node (DanNode<I, D>)
and its arcs (Map<I, DanArc<I, D>>)

## Type parameters

| Name |
| :------ |
| `I` |
| `D` |

## Table of contents

### Properties

- [adjacents](undirected_graph_danUndirectedGraph._internal_.DanNodeAndUndirectedArcs.md#adjacents)
- [node](undirected_graph_danUndirectedGraph._internal_.DanNodeAndUndirectedArcs.md#node)

## Properties

### adjacents

• **adjacents**: `Map`\<`I`, [`DanArc`](undirected_graph_danUndirectedGraph._internal_.DanArc.md)\<`I`, `D`\>\>

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:16](https://github.com/evildead/DanGraph/blob/355b956/src/undirected_graph/danUndirectedGraph.ts#L16)

___

### node

• **node**: [`DanNode`](undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:15](https://github.com/evildead/DanGraph/blob/355b956/src/undirected_graph/danUndirectedGraph.ts#L15)
