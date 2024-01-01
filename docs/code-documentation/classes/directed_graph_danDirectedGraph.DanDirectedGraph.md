[dangraph](../README.md) / [Exports](../modules.md) / [directed\_graph/danDirectedGraph](../modules/directed_graph_danDirectedGraph.md) / DanDirectedGraph

# Class: DanDirectedGraph\<I, D\>

[directed\_graph/danDirectedGraph](../modules/directed_graph_danDirectedGraph.md).DanDirectedGraph

The class DanDirectedGraph handles directed graphs

## Type parameters

| Name |
| :------ |
| `I` |
| `D` |

## Table of contents

### Constructors

- [constructor](directed_graph_danDirectedGraph.DanDirectedGraph.md#constructor)

### Properties

- [\_graph](directed_graph_danDirectedGraph.DanDirectedGraph.md#_graph)

### Methods

- [\_getALeaf](directed_graph_danDirectedGraph.DanDirectedGraph.md#_getaleaf)
- [\_getCopyOfInnerGraph](directed_graph_danDirectedGraph.DanDirectedGraph.md#_getcopyofinnergraph)
- [\_getOutgoingNodesList](directed_graph_danDirectedGraph.DanDirectedGraph.md#_getoutgoingnodeslist)
- [\_isAcyclic](directed_graph_danDirectedGraph.DanDirectedGraph.md#_isacyclic)
- [\_visitNodes](directed_graph_danDirectedGraph.DanDirectedGraph.md#_visitnodes)
- [addArcToNode](directed_graph_danDirectedGraph.DanDirectedGraph.md#addarctonode)
- [addArcToNodeId](directed_graph_danDirectedGraph.DanDirectedGraph.md#addarctonodeid)
- [addNode](directed_graph_danDirectedGraph.DanDirectedGraph.md#addnode)
- [countNodes](directed_graph_danDirectedGraph.DanDirectedGraph.md#countnodes)
- [getBreadthFirstIterator](directed_graph_danDirectedGraph.DanDirectedGraph.md#getbreadthfirstiterator)
- [getDepthFirstIterator](directed_graph_danDirectedGraph.DanDirectedGraph.md#getdepthfirstiterator)
- [getNodeAndDirectedArcsFromNodeId](directed_graph_danDirectedGraph.DanDirectedGraph.md#getnodeanddirectedarcsfromnodeid)
- [isAcyclic](directed_graph_danDirectedGraph.DanDirectedGraph.md#isacyclic)
- [isEmpty](directed_graph_danDirectedGraph.DanDirectedGraph.md#isempty)
- [isNodeALeaf](directed_graph_danDirectedGraph.DanDirectedGraph.md#isnodealeaf)
- [removeNode](directed_graph_danDirectedGraph.DanDirectedGraph.md#removenode)
- [sourceConnectedToAllNodes](directed_graph_danDirectedGraph.DanDirectedGraph.md#sourceconnectedtoallnodes)
- [toString](directed_graph_danDirectedGraph.DanDirectedGraph.md#tostring)
- [generateConsecutiveNodeGraph](directed_graph_danDirectedGraph.DanDirectedGraph.md#generateconsecutivenodegraph)
- [generateRandomNodeGraph](directed_graph_danDirectedGraph.DanDirectedGraph.md#generaterandomnodegraph)

## Constructors

### constructor

• **new DanDirectedGraph**\<`I`, `D`\>(): [`DanDirectedGraph`](directed_graph_danDirectedGraph.DanDirectedGraph.md)\<`I`, `D`\>

the public class constructor

#### Type parameters

| Name |
| :------ |
| `I` |
| `D` |

#### Returns

[`DanDirectedGraph`](directed_graph_danDirectedGraph.DanDirectedGraph.md)\<`I`, `D`\>

#### Defined in

[src/directed_graph/danDirectedGraph.ts:41](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L41)

## Properties

### \_graph

• `Protected` **\_graph**: `Map`\<`I`, [`DanNodeAndDirectedArcs`](../interfaces/directed_graph_danDirectedGraph.DanNodeAndDirectedArcs.md)\<`I`, `D`\>\>

#### Defined in

[src/directed_graph/danDirectedGraph.ts:36](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L36)

## Methods

### \_getALeaf

▸ **_getALeaf**(): `undefined` \| [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

Get a leaf in the graph or return undefined.

#### Returns

`undefined` \| [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

the first leaf found, or undefined if no leaf is found

#### Defined in

[src/directed_graph/danDirectedGraph.ts:250](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L250)

___

### \_getCopyOfInnerGraph

▸ **_getCopyOfInnerGraph**(): `Map`\<`I`, [`DanNodeAndDirectedArcs`](../interfaces/directed_graph_danDirectedGraph.DanNodeAndDirectedArcs.md)\<`I`, `D`\>\>

Clone the inner graph structure

#### Returns

`Map`\<`I`, [`DanNodeAndDirectedArcs`](../interfaces/directed_graph_danDirectedGraph.DanNodeAndDirectedArcs.md)\<`I`, `D`\>\>

a copy of the inner graph structure

#### Defined in

[src/directed_graph/danDirectedGraph.ts:95](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L95)

___

### \_getOutgoingNodesList

▸ **_getOutgoingNodesList**(`idNode`): [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>[]

Get all the outgoing nodes from a node identifier

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idNode` | `I` | the id of the node to check |

#### Returns

[`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>[]

the list of outgoing nodes of idNode as array of DanNode<I, D>

#### Defined in

[src/directed_graph/danDirectedGraph.ts:310](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L310)

___

### \_isAcyclic

▸ **_isAcyclic**(): `boolean`

Protected method to check if the graph is acyclic.
Remove leaves iteratively from the graph: stop if the graph gets empty (acyclic graph),
or if there are no more leaves to remove (cyclic graph).

#### Returns

`boolean`

true if the graph does not contain cycles, otherwise false

#### Defined in

[src/directed_graph/danDirectedGraph.ts:331](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L331)

___

### \_visitNodes

▸ **_visitNodes**(`visitedNodes`, `nextNode`): `void`

Protected method to visit all the neighbours of a node, given in input the node id and a previous set of visitedNodes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `visitedNodes` | `Set`\<`I`\> | the nodes already visited |
| `nextNode` | `I` | the next node to visit |

#### Returns

`void`

#### Defined in

[src/directed_graph/danDirectedGraph.ts:367](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L367)

___

### addArcToNode

▸ **addArcToNode**(`node`, `arcToAdd`, `arcType`): `boolean`

Add arc to node given a node structure

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\> | the node receiving _arcToAdd_ |
| `arcToAdd` | [`DanArc`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanArc.md)\<`I`, `D`\> | the arc being added |
| `arcType` | [`ArcType`](../enums/directed_graph_danDirectedGraph.ArcType.md) | _arcToAdd_ will be added among the incoming or outgoing arcs of node, based on the value of arcType |

#### Returns

`boolean`

true if _arcToAdd_ was correctly added to the icoming/ougoing arcs of node; false if _arcToAdd_ was already present

#### Defined in

[src/directed_graph/danDirectedGraph.ts:195](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L195)

___

### addArcToNodeId

▸ **addArcToNodeId**(`idNode`, `arcToAdd`, `arcType`): `boolean`

Add arc to node given a node id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idNode` | `I` | the id of the node receiving _arcToAdd_ |
| `arcToAdd` | [`DanArc`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanArc.md)\<`I`, `D`\> | the arc being added |
| `arcType` | [`ArcType`](../enums/directed_graph_danDirectedGraph.ArcType.md) | _arcToAdd_ will be added among the incoming or outgoing arcs of idNode, based on the value of arcType |

#### Returns

`boolean`

true if _arcToAdd_ was correctly added to the icoming/ougoing arcs of idNode; false if the idNode does not exist or if _arcToAdd_ was already present

#### Defined in

[src/directed_graph/danDirectedGraph.ts:136](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L136)

___

### addNode

▸ **addNode**(`node`): `boolean`

Add a node to the graph

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\> | the node to add |

#### Returns

`boolean`

true if the node was correctly added to the graph; false if the node is already present

#### Defined in

[src/directed_graph/danDirectedGraph.ts:117](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L117)

___

### countNodes

▸ **countNodes**(): `number`

Public method to retrieve the number of nodes in the graph

#### Returns

`number`

the number of nodes in the graph

#### Defined in

[src/directed_graph/danDirectedGraph.ts:293](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L293)

___

### getBreadthFirstIterator

▸ **getBreadthFirstIterator**(`startingNodeId`): [`GraphIterator`](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md)\<[`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>\>

Get breadth-first iterator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startingNodeId` | `I` | the starting node identifier for the iterator |

#### Returns

[`GraphIterator`](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md)\<[`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>\>

the breadth-first iterator

#### Defined in

[src/directed_graph/danDirectedGraph.ts:407](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L407)

___

### getDepthFirstIterator

▸ **getDepthFirstIterator**(`startingNodeId`): [`GraphIterator`](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md)\<[`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>\>

Get depth-first iterator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startingNodeId` | `I` | the starting node identifier for the iterator |

#### Returns

[`GraphIterator`](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md)\<[`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>\>

the depth-first iterator

#### Defined in

[src/directed_graph/danDirectedGraph.ts:398](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L398)

___

### getNodeAndDirectedArcsFromNodeId

▸ **getNodeAndDirectedArcsFromNodeId**(`idNode`): `undefined` \| [`DanNodeAndDirectedArcs`](../interfaces/directed_graph_danDirectedGraph.DanNodeAndDirectedArcs.md)\<`I`, `D`\>

Get node and directed arcs structure (as DanNodeAndDirectedArcs) from nodeId

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idNode` | `I` | the node identifier |

#### Returns

`undefined` \| [`DanNodeAndDirectedArcs`](../interfaces/directed_graph_danDirectedGraph.DanNodeAndDirectedArcs.md)\<`I`, `D`\>

node and directed arcs structure or undefined if nodeId is not present in the graph

#### Defined in

[src/directed_graph/danDirectedGraph.ts:104](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L104)

___

### isAcyclic

▸ **isAcyclic**(): `boolean`

Public method to check if the graph is acyclic.
First we keep a copy of the current inner graph.
Then we invoke the protected [this._isAcyclic](#DanDirectedGraph<I, D>+_isAcyclic) method to check if the graph is acyclic.
Then we restore the inner state (memento pattern).

#### Returns

`boolean`

true if the graph does not contain cycles

#### Defined in

[src/directed_graph/danDirectedGraph.ts:352](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L352)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Check if the graph is empty

#### Returns

`boolean`

true if the graph does not contain any node

#### Defined in

[src/directed_graph/danDirectedGraph.ts:301](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L301)

___

### isNodeALeaf

▸ **isNodeALeaf**(`idNode`): `boolean`

Check if node is a leaf

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idNode` | `I` | the id of the node to check |

#### Returns

`boolean`

true if the node is a leaf (no outgoing arcs)

#### Defined in

[src/directed_graph/danDirectedGraph.ts:233](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L233)

___

### removeNode

▸ **removeNode**(`idNode`): `boolean`

Remove a node given in input from the graph

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idNode` | `I` | the id of the node to remove |

#### Returns

`boolean`

true if the node is correctly removed

#### Defined in

[src/directed_graph/danDirectedGraph.ts:208](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L208)

___

### sourceConnectedToAllNodes

▸ **sourceConnectedToAllNodes**(`idNode`): `boolean`

Public method to check if all nodes are connected to the source node in input

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idNode` | `I` | source node to be checked |

#### Returns

`boolean`

true if source can reach all of the nodes in the graph

#### Defined in

[src/directed_graph/danDirectedGraph.ts:382](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L382)

___

### toString

▸ **toString**(`showArcDetails?`): `string`

The string representation of the directed graph

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `showArcDetails` | `boolean` | `false` |

#### Returns

`string`

the string representation of the directed graph

#### Defined in

[src/directed_graph/danDirectedGraph.ts:265](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L265)

___

### generateConsecutiveNodeGraph

▸ **generateConsecutiveNodeGraph**(`numOfNodes`): [`DanDirectedGraph`](directed_graph_danDirectedGraph.DanDirectedGraph.md)\<`number`, `undefined`\>

A utility public static method to generate a directed graph with a number of _numOfNodes_ consecutive nodes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numOfNodes` | `number` | the number of nodes of the output graph |

#### Returns

[`DanDirectedGraph`](directed_graph_danDirectedGraph.DanDirectedGraph.md)\<`number`, `undefined`\>

a directed graph witn _numOfNodes_ nodes

#### Defined in

[src/directed_graph/danDirectedGraph.ts:50](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L50)

___

### generateRandomNodeGraph

▸ **generateRandomNodeGraph**(`numOfNodes`): [`DanDirectedGraph`](directed_graph_danDirectedGraph.DanDirectedGraph.md)\<`number`, `undefined`\>

A utility public static method to generate a directed graph with a number of _numOfNodes_ random nodes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numOfNodes` | `number` | the number of nodes of the output graph |

#### Returns

[`DanDirectedGraph`](directed_graph_danDirectedGraph.DanDirectedGraph.md)\<`number`, `undefined`\>

a directed graph witn _numOfNodes_ nodes

#### Defined in

[src/directed_graph/danDirectedGraph.ts:73](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraph.ts#L73)
