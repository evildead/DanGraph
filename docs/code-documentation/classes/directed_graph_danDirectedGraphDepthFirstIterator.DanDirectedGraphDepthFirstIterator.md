[dangraph](../README.md) / [Exports](../modules.md) / [directed_graph/danDirectedGraphDepthFirstIterator](../modules/directed_graph_danDirectedGraphDepthFirstIterator.md) / DanDirectedGraphDepthFirstIterator

# Class: DanDirectedGraphDepthFirstIterator\<I, D\>

[directed_graph/danDirectedGraphDepthFirstIterator](../modules/directed_graph_danDirectedGraphDepthFirstIterator.md).DanDirectedGraphDepthFirstIterator

The class DanDirectedGraphDepthFirstIterator implements GraphIterator interface

## Type parameters

| Name |
| :--- |
| `I`  |
| `D`  |

## Implements

- [`GraphIterator`](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md)\<[`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>\>

## Table of contents

### Constructors

- [constructor](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md#constructor)

### Properties

- [\_currentNodeId](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md#_currentnodeid)
- [\_graph](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md#_graph)
- [\_nextNodeId](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md#_nextnodeid)
- [\_stack](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md#_stack)
- [\_startingNodeId](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md#_startingnodeid)
- [\_visitedNodes](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md#_visitednodes)

### Methods

- [\_advance](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md#_advance)
- [\_getNodeAndDirectedArcsFromNodeId](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md#_getnodeanddirectedarcsfromnodeid)
- [\_initFields](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md#_initfields)
- [current](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md#current)
- [hasNext](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md#hasnext)
- [next](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md#next)
- [rewind](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md#rewind)

## Constructors

### constructor

• **new DanDirectedGraphDepthFirstIterator**\<`I`, `D`\>(`collection`, `startingNodeId`): [`DanDirectedGraphDepthFirstIterator`](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md)\<`I`, `D`\>

The public class constructor

#### Type parameters

| Name |
| :--- |
| `I`  |
| `D`  |

#### Parameters

| Name             | Type                                                                                  | Description                  |
| :--------------- | :------------------------------------------------------------------------------------ | :--------------------------- |
| `collection`     | [`DanDirectedGraph`](directed_graph_danDirectedGraph.DanDirectedGraph.md)\<`I`, `D`\> | the directed graph           |
| `startingNodeId` | `I`                                                                                   | the starting node identifier |

#### Returns

[`DanDirectedGraphDepthFirstIterator`](directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md)\<`I`, `D`\>

**`Throws`**

exception if startingNodeId was not found in graph

#### Defined in

[src/directed_graph/danDirectedGraphDepthFirstIterator.ts:33](https://github.com/evildead/DanGraph/blob/2bfd060/src/directed_graph/danDirectedGraphDepthFirstIterator.ts#L33)

## Properties

### \_currentNodeId

• `Private` **\_currentNodeId**: `null` \| `I`

#### Defined in

[src/directed_graph/danDirectedGraphDepthFirstIterator.ts:21](https://github.com/evildead/DanGraph/blob/2bfd060/src/directed_graph/danDirectedGraphDepthFirstIterator.ts#L21)

---

### \_graph

• `Private` **\_graph**: [`DanDirectedGraph`](directed_graph_danDirectedGraph.DanDirectedGraph.md)\<`I`, `D`\>

#### Defined in

[src/directed_graph/danDirectedGraphDepthFirstIterator.ts:15](https://github.com/evildead/DanGraph/blob/2bfd060/src/directed_graph/danDirectedGraphDepthFirstIterator.ts#L15)

---

### \_nextNodeId

• `Private` **\_nextNodeId**: `null` \| `I`

#### Defined in

[src/directed_graph/danDirectedGraphDepthFirstIterator.ts:23](https://github.com/evildead/DanGraph/blob/2bfd060/src/directed_graph/danDirectedGraphDepthFirstIterator.ts#L23)

---

### \_stack

• `Private` **\_stack**: [`DanStack`](utils_danStack.DanStack.md)\<[`IterableIterator`](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.IterableIterator.md)\<[`I`, [`DanArc`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanArc.md)\<`I`, `D`\>]\>\>

#### Defined in

[src/directed_graph/danDirectedGraphDepthFirstIterator.ts:25](https://github.com/evildead/DanGraph/blob/2bfd060/src/directed_graph/danDirectedGraphDepthFirstIterator.ts#L25)

---

### \_startingNodeId

• `Private` **\_startingNodeId**: `I`

#### Defined in

[src/directed_graph/danDirectedGraphDepthFirstIterator.ts:19](https://github.com/evildead/DanGraph/blob/2bfd060/src/directed_graph/danDirectedGraphDepthFirstIterator.ts#L19)

---

### \_visitedNodes

• `Private` **\_visitedNodes**: `Set`\<`I`\>

#### Defined in

[src/directed_graph/danDirectedGraphDepthFirstIterator.ts:17](https://github.com/evildead/DanGraph/blob/2bfd060/src/directed_graph/danDirectedGraphDepthFirstIterator.ts#L17)

## Methods

### \_advance

▸ **\_advance**(): `void`

Advance to the next node in a depth first fashion

#### Returns

`void`

#### Defined in

[src/directed_graph/danDirectedGraphDepthFirstIterator.ts:111](https://github.com/evildead/DanGraph/blob/2bfd060/src/directed_graph/danDirectedGraphDepthFirstIterator.ts#L111)

---

### \_getNodeAndDirectedArcsFromNodeId

▸ **\_getNodeAndDirectedArcsFromNodeId**(`nodeId`): [`DanNodeAndDirectedArcs`](../interfaces/directed_graph_danDirectedGraph.DanNodeAndDirectedArcs.md)\<`I`, `D`\>

Retrieve node and directed arcs structure from node identifier

#### Parameters

| Name     | Type | Description         |
| :------- | :--- | :------------------ |
| `nodeId` | `I`  | the node identifier |

#### Returns

[`DanNodeAndDirectedArcs`](../interfaces/directed_graph_danDirectedGraph.DanNodeAndDirectedArcs.md)\<`I`, `D`\>

the node and directed arcs structure DanNodeAndDirectedArcs

**`Throws`**

exception if nodeId was not found in graph

#### Defined in

[src/directed_graph/danDirectedGraphDepthFirstIterator.ts:46](https://github.com/evildead/DanGraph/blob/2bfd060/src/directed_graph/danDirectedGraphDepthFirstIterator.ts#L46)

---

### \_initFields

▸ **\_initFields**(`startingNodeId`): `void`

Init the class fields with the starting node identifier passed in input

#### Parameters

| Name             | Type | Description                  |
| :--------------- | :--- | :--------------------------- |
| `startingNodeId` | `I`  | the starting node identifier |

#### Returns

`void`

**`Throws`**

exception if startingNodeId was not found in graph

#### Defined in

[src/directed_graph/danDirectedGraphDepthFirstIterator.ts:59](https://github.com/evildead/DanGraph/blob/2bfd060/src/directed_graph/danDirectedGraphDepthFirstIterator.ts#L59)

---

### current

▸ **current**(): `undefined` \| [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

Get the current node, or return undefined if iterator was not yet started

#### Returns

`undefined` \| [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

**`Throws`**

exception if this.\_currentNodeId was not found in graph

#### Implementation of

[GraphIterator](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md).[current](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md#current)

#### Defined in

[src/directed_graph/danDirectedGraphDepthFirstIterator.ts:78](https://github.com/evildead/DanGraph/blob/2bfd060/src/directed_graph/danDirectedGraphDepthFirstIterator.ts#L78)

---

### hasNext

▸ **hasNext**(): `boolean`

Check if the iterator can step to a next node

#### Returns

`boolean`

true if the iterator can step to a next node, false if there are no more nodes left to visit in the iterator

#### Implementation of

[GraphIterator](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md).[hasNext](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md#hasnext)

#### Defined in

[src/directed_graph/danDirectedGraphDepthFirstIterator.ts:160](https://github.com/evildead/DanGraph/blob/2bfd060/src/directed_graph/danDirectedGraphDepthFirstIterator.ts#L160)

---

### next

▸ **next**(): `undefined` \| [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

Get the next node, or return undefined if the iterator's end was reached

#### Returns

`undefined` \| [`DanNode`](../interfaces/undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

**`Throws`**

exception if this.\_nextNodeId was not found in graph

#### Implementation of

[GraphIterator](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md).[next](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md#next)

#### Defined in

[src/directed_graph/danDirectedGraphDepthFirstIterator.ts:91](https://github.com/evildead/DanGraph/blob/2bfd060/src/directed_graph/danDirectedGraphDepthFirstIterator.ts#L91)

---

### rewind

▸ **rewind**(): `void`

Restart the iterator

#### Returns

`void`

#### Implementation of

[GraphIterator](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md).[rewind](../interfaces/directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md#rewind)

#### Defined in

[src/directed_graph/danDirectedGraphDepthFirstIterator.ts:167](https://github.com/evildead/DanGraph/blob/2bfd060/src/directed_graph/danDirectedGraphDepthFirstIterator.ts#L167)
