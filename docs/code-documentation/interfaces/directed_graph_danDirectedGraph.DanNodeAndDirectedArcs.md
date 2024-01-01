[dangraph](../README.md) / [Exports](../modules.md) / [directed\_graph/danDirectedGraph](../modules/directed_graph_danDirectedGraph.md) / DanNodeAndDirectedArcs

# Interface: DanNodeAndDirectedArcs\<I, D\>

[directed\_graph/danDirectedGraph](../modules/directed_graph_danDirectedGraph.md).DanNodeAndDirectedArcs

The DanNodeAndDirectedArcs interface describes a node (DanNode<I, D>)
and its incoming and outgoing arcs (Map<I, DanArc<I, D>>)

## Type parameters

| Name |
| :------ |
| `I` |
| `D` |

## Table of contents

### Properties

- [incoming](directed_graph_danDirectedGraph.DanNodeAndDirectedArcs.md#incoming)
- [node](directed_graph_danDirectedGraph.DanNodeAndDirectedArcs.md#node)
- [outgoing](directed_graph_danDirectedGraph.DanNodeAndDirectedArcs.md#outgoing)

## Properties

### incoming

• **incoming**: `Map`\<`I`, [`DanArc`](undirected_graph_danUndirectedGraph._internal_.DanArc.md)\<`I`, `D`\>\>

#### Defined in

[src/directed_graph/danDirectedGraph.ts:20](https://github.com/evildead/DanGraph/blob/81ddea9/src/directed_graph/danDirectedGraph.ts#L20)

___

### node

• **node**: [`DanNode`](undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

#### Defined in

[src/directed_graph/danDirectedGraph.ts:19](https://github.com/evildead/DanGraph/blob/81ddea9/src/directed_graph/danDirectedGraph.ts#L19)

___

### outgoing

• **outgoing**: `Map`\<`I`, [`DanArc`](undirected_graph_danUndirectedGraph._internal_.DanArc.md)\<`I`, `D`\>\>

#### Defined in

[src/directed_graph/danDirectedGraph.ts:21](https://github.com/evildead/DanGraph/blob/81ddea9/src/directed_graph/danDirectedGraph.ts#L21)
