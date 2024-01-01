[dangraph](../README.md) / [Exports](../modules.md) / [undirected\_graph/danUndirectedGraph](../modules/undirected_graph_danUndirectedGraph.md) / [\<internal\>](../modules/undirected_graph_danUndirectedGraph._internal_.md) / DanNode

# Interface: DanNode\<I, D\>

[undirected\_graph/danUndirectedGraph](../modules/undirected_graph_danUndirectedGraph.md).[\<internal\>](../modules/undirected_graph_danUndirectedGraph._internal_.md).DanNode

The DanNode interface represents a graph node.
It contains a node identifier and may contain additional data.

## Type parameters

| Name |
| :------ |
| `I` |
| `D` |

## Table of contents

### Properties

- [data](undirected_graph_danUndirectedGraph._internal_.DanNode.md#data)
- [id](undirected_graph_danUndirectedGraph._internal_.DanNode.md#id)

### Methods

- [renderData](undirected_graph_danUndirectedGraph._internal_.DanNode.md#renderdata)
- [toString](undirected_graph_danUndirectedGraph._internal_.DanNode.md#tostring)

## Properties

### data

• `Optional` **data**: `D`

#### Defined in

[src/commons.ts:7](https://github.com/evildead/DanGraph/blob/f53d48f/src/commons.ts#L7)

___

### id

• **id**: `I`

#### Defined in

[src/commons.ts:6](https://github.com/evildead/DanGraph/blob/f53d48f/src/commons.ts#L6)

## Methods

### renderData

▸ **renderData**(): `string`

#### Returns

`string`

#### Defined in

[src/commons.ts:9](https://github.com/evildead/DanGraph/blob/f53d48f/src/commons.ts#L9)

___

### toString

▸ **toString**(`showDetails`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `showDetails` | `boolean` |

#### Returns

`string`

#### Defined in

[src/commons.ts:10](https://github.com/evildead/DanGraph/blob/f53d48f/src/commons.ts#L10)
