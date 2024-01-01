[dangraph](../README.md) / [Exports](../modules.md) / [directed\_graph/danDirectedGraphBreadthFirstIterator](../modules/directed_graph_danDirectedGraphBreadthFirstIterator.md) / DanDirectedGraphBreadthFirstIterator

# Class: DanDirectedGraphBreadthFirstIterator\<I, D\>

[directed\_graph/danDirectedGraphBreadthFirstIterator](../modules/directed_graph_danDirectedGraphBreadthFirstIterator.md).DanDirectedGraphBreadthFirstIterator

The class DanDirectedGraphBreadthFirstIterator implements GraphIterator interface

## Type parameters

| Name |
| :------ |
| `I` |
| `D` |

## Implements

- [`GraphIterator`](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md)\<[`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>\>

## Table of contents

### Constructors

- [constructor](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#constructor)

### Properties

- [\_currLevelQueue](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#_currlevelqueue)
- [\_currLevelQueuePosition](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#_currlevelqueueposition)
- [\_currentNodeId](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#_currentnodeid)
- [\_graph](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#_graph)
- [\_nextLevelQueue](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#_nextlevelqueue)
- [\_nextLevelSet](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#_nextlevelset)
- [\_nextNodeId](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#_nextnodeid)
- [\_startingNodeId](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#_startingnodeid)
- [\_visitedNodes](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#_visitednodes)

### Methods

- [\_addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#_addnextnodeoutgoingstonextlevelqueueifnotalreadyvisitedorqueued)
- [\_advance](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#_advance)
- [\_getNodeAndDirectedArcsFromNodeId](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#_getnodeanddirectedarcsfromnodeid)
- [\_initFields](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#_initfields)
- [current](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#current)
- [hasNext](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#hasnext)
- [next](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#next)
- [rewind](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md#rewind)

## Constructors

### constructor

• **new DanDirectedGraphBreadthFirstIterator**\<`I`, `D`\>(`collection`, `startingNodeId`): [`DanDirectedGraphBreadthFirstIterator`](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md)\<`I`, `D`\>

The public class constructor

#### Type parameters

| Name |
| :------ |
| `I` |
| `D` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | [`DanDirectedGraph`](directed_graph_danDirectedGraph.DanDirectedGraph.md)\<`I`, `D`\> | the directed graph |
| `startingNodeId` | `I` | the starting node identifier |

#### Returns

[`DanDirectedGraphBreadthFirstIterator`](directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md)\<`I`, `D`\>

**`Throws`**

exception if startingNodeId was not found in graph

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:36](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L36)

## Properties

### \_currLevelQueue

• `Private` **\_currLevelQueue**: [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>[]

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:22](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L22)

___

### \_currLevelQueuePosition

• `Private` **\_currLevelQueuePosition**: `number`

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:24](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L24)

___

### \_currentNodeId

• `Private` **\_currentNodeId**: ``null`` \| `I`

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:18](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L18)

___

### \_graph

• `Private` **\_graph**: [`DanDirectedGraph`](directed_graph_danDirectedGraph.DanDirectedGraph.md)\<`I`, `D`\>

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:12](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L12)

___

### \_nextLevelQueue

• `Private` **\_nextLevelQueue**: [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>[]

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:26](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L26)

___

### \_nextLevelSet

• `Private` **\_nextLevelSet**: `Set`\<`I`\>

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:28](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L28)

___

### \_nextNodeId

• `Private` **\_nextNodeId**: ``null`` \| `I`

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:20](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L20)

___

### \_startingNodeId

• `Private` **\_startingNodeId**: `I`

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:16](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L16)

___

### \_visitedNodes

• `Private` **\_visitedNodes**: `Set`\<`I`\>

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:14](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L14)

## Methods

### \_addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued

▸ **_addNextNodeOutgoingsToNextLevelQueueIfNotAlreadyVisitedOrQueued**(): `boolean`

Add the outgoing nodes of this._nextNodeId to the next-level-queue, if the node was not already visited, and if it's not already present inside the queue

#### Returns

`boolean`

true if this._nextNodeId is not null, otherwise false

**`Throws`**

exception if this._nextNodeId was not found in graph

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:116](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L116)

___

### \_advance

▸ **_advance**(): `void`

Advance to the next node in a breadth first fashion

#### Returns

`void`

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:137](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L137)

___

### \_getNodeAndDirectedArcsFromNodeId

▸ **_getNodeAndDirectedArcsFromNodeId**(`nodeId`): [`DanNodeAndDirectedArcs`](../interfaces/directed_graph_danDirectedGraph.DanNodeAndDirectedArcs.md)\<`I`, `D`\>

Retrieve node and directed arcs structure from node identifier

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId` | `I` | the node identifier |

#### Returns

[`DanNodeAndDirectedArcs`](../interfaces/directed_graph_danDirectedGraph.DanNodeAndDirectedArcs.md)\<`I`, `D`\>

the node and directed arcs structure DanNodeAndDirectedArcs

**`Throws`**

exception if nodeId was not found in graph

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:51](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L51)

___

### \_initFields

▸ **_initFields**(`startingNodeId`): `void`

Init the class fields with the starting node identifier passed in input

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startingNodeId` | `I` | the starting node identifier |

#### Returns

`void`

**`Throws`**

exception if startingNodeId was not found in graph

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:64](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L64)

___

### current

▸ **current**(): `undefined` \| [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

Get the current node, or return undefined if iterator was not yet started

#### Returns

`undefined` \| [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

**`Throws`**

exception if this._currentNodeId was not found in graph

#### Implementation of

[GraphIterator](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md).[current](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md#current)

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:81](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L81)

___

### hasNext

▸ **hasNext**(): `boolean`

Check if the iterator can step to a next node

#### Returns

`boolean`

true if the iterator can step to a next node, false if there are no more nodes left to visit in the iterator

#### Implementation of

[GraphIterator](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md).[hasNext](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md#hasnext)

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:173](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L173)

___

### next

▸ **next**(): `undefined` \| [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

Get the next node, or return undefined if the iterator's end was reached

#### Returns

`undefined` \| [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

**`Throws`**

exception if this._nextNodeId was not found in graph

#### Implementation of

[GraphIterator](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md).[next](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md#next)

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:94](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L94)

___

### rewind

▸ **rewind**(): `void`

Restart the iterator

#### Returns

`void`

#### Implementation of

[GraphIterator](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md).[rewind](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md#rewind)

#### Defined in

[src/directed_graph/danDirectedGraphBreadthFirstIterator.ts:180](https://github.com/evildead/DanGraph/blob/f53d48f/src/directed_graph/danDirectedGraphBreadthFirstIterator.ts#L180)
