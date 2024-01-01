[dangraph](../README.md) / [Exports](../modules.md) / [undirected\_graph/danUndirectedGraph](../modules/undirected_graph_danUndirectedGraph.md) / DanUndirectedGraph

# Class: DanUndirectedGraph\<I, D\>

[undirected\_graph/danUndirectedGraph](../modules/undirected_graph_danUndirectedGraph.md).DanUndirectedGraph

The DanUndirectedGraph class handles undirected graphs

## Type parameters

| Name |
| :------ |
| `I` |
| `D` |

## Table of contents

### Constructors

- [constructor](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#constructor)

### Properties

- [\_graph](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#_graph)

### Methods

- [\_checkForCycle](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#_checkforcycle)
- [\_getANode](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#_getanode)
- [\_getAdjacentNodesList](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#_getadjacentnodeslist)
- [\_visitNodes](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#_visitnodes)
- [addArcToNode](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#addarctonode)
- [addArcToNodeId](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#addarctonodeid)
- [addNode](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#addnode)
- [countNodes](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#countnodes)
- [getInnerGraph](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#getinnergraph)
- [isAcyclic](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#isacyclic)
- [isConnected](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#isconnected)
- [isEmpty](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#isempty)
- [removeNode](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#removenode)
- [toString](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#tostring)
- [generateConsecutiveNodeGraph](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#generateconsecutivenodegraph)
- [generateRandomNodeGraph](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md#generaterandomnodegraph)

## Constructors

### constructor

• **new DanUndirectedGraph**\<`I`, `D`\>(): [`DanUndirectedGraph`](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md)\<`I`, `D`\>

the public class constructor

#### Type parameters

| Name |
| :------ |
| `I` |
| `D` |

#### Returns

[`DanUndirectedGraph`](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md)\<`I`, `D`\>

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:25](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L25)

## Properties

### \_graph

• `Protected` **\_graph**: `Map`\<`I`, [`DanNodeAndUndirectedArcs`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNodeAndUndirectedArcs.md)\<`I`, `D`\>\>

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:20](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L20)

## Methods

### \_checkForCycle

▸ **_checkForCycle**(`visitedNodes`, `nextNode`, `fromNode?`): `boolean`

Recursively checks for the presence of a cycle starting from node id nextNode

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `visitedNodes` | `Set`\<`I`\> | `undefined` | the nodes already visited |
| `nextNode` | `I` | `undefined` | the next node to visit |
| `fromNode` | `undefined` \| `I` | `undefined` | the parent node (default: undefined) |

#### Returns

`boolean`

true if a cycle is found, false if no cycle is found

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:214](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L214)

___

### \_getANode

▸ **_getANode**(): `undefined` \| [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

Get a node in the graph

#### Returns

`undefined` \| [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

a node in the graph or undefined if the graph is empty

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:183](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L183)

___

### \_getAdjacentNodesList

▸ **_getAdjacentNodesList**(`idNode`): [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>[]

Get the list of adjacent nodes of a given node identifier

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idNode` | `I` | the id of the node to check |

#### Returns

[`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>[]

the list of adjacent nodes of idNode as array of DanNode<I, D>

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:164](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L164)

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

[src/undirected_graph/danUndirectedGraph.ts:197](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L197)

___

### addArcToNode

▸ **addArcToNode**(`node`, `arcToAdd`): `boolean`

Add arc to node, given the node interface structure

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\> | the node receiving _arcToAdd_ |
| `arcToAdd` | [`DanArc`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanArc.md)\<`I`, `D`\> | - |

#### Returns

`boolean`

true if _arcToAdd_ was correctly added to the adjacent arcs of node; false if _arcToAdd_ was already present

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:131](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L131)

___

### addArcToNodeId

▸ **addArcToNodeId**(`idNode`, `arcToAdd`): `boolean`

Add an arc to a node, given the node identifier

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idNode` | `I` | the id of the node receiving _arcToAdd_ |
| `arcToAdd` | [`DanArc`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanArc.md)\<`I`, `D`\> | the arc being added |

#### Returns

`boolean`

true if _arcToAdd_ was correctly added to the adjacent arcs of idNode; false if the idNode does not exist or if _arcToAdd_ was already present

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:95](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L95)

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

[src/undirected_graph/danUndirectedGraph.ts:78](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L78)

___

### countNodes

▸ **countNodes**(): `number`

Public method to retrieve the number of nodes in the graph

#### Returns

`number`

the number of nodes in the graph

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:270](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L270)

___

### getInnerGraph

▸ **getInnerGraph**(): `Map`\<`I`, [`DanNodeAndUndirectedArcs`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNodeAndUndirectedArcs.md)\<`I`, `D`\>\>

Get the inner graph object

#### Returns

`Map`\<`I`, [`DanNodeAndUndirectedArcs`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNodeAndUndirectedArcs.md)\<`I`, `D`\>\>

the inner graph Map object

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:307](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L307)

___

### isAcyclic

▸ **isAcyclic**(): `boolean`

Public method to check if the graph is acyclic

#### Returns

`boolean`

true if the graph does not contain cycles

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:250](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L250)

___

### isConnected

▸ **isConnected**(): `boolean`

Check if the graph is connected

#### Returns

`boolean`

true if the graph is connected

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:237](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L237)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Check if the graph is empty

#### Returns

`boolean`

true if the graph does not contain any node

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:278](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L278)

___

### removeNode

▸ **removeNode**(`idNode`): `boolean`

Remove the node given in input from the graph

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `idNode` | `I` | the id of the node to remove |

#### Returns

`boolean`

true if the node is correctly removed

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:144](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L144)

___

### toString

▸ **toString**(`showArcDetails?`): `string`

The string representation of the undirected graph

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `showArcDetails` | `boolean` | `false` |

#### Returns

`string`

the string representation of the undirected graph

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:287](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L287)

___

### generateConsecutiveNodeGraph

▸ **generateConsecutiveNodeGraph**(`numOfNodes`): [`DanUndirectedGraph`](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md)\<`number`, `undefined`\>

A utility public static method to generate an undirected graph with a number of _numOfNodes_ consecutive nodes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numOfNodes` | `number` | the number of nodes of the output graph |

#### Returns

[`DanUndirectedGraph`](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md)\<`number`, `undefined`\>

an undirected graph witn _numOfNodes_ nodes

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:34](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L34)

___

### generateRandomNodeGraph

▸ **generateRandomNodeGraph**(`numOfNodes`): [`DanUndirectedGraph`](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md)\<`number`, `undefined`\>

A utility public static method to generate an undirected graph with a number of _numOfNodes_ random nodes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `numOfNodes` | `number` | the number of nodes of the output graph |

#### Returns

[`DanUndirectedGraph`](undirected_graph_danUndirectedGraph.DanUndirectedGraph.md)\<`number`, `undefined`\>

an undirected graph witn _numOfNodes_ nodes

#### Defined in

[src/undirected_graph/danUndirectedGraph.ts:56](https://github.com/evildead/DanGraph/blob/f53d48f/src/undirected_graph/danUndirectedGraph.ts#L56)
