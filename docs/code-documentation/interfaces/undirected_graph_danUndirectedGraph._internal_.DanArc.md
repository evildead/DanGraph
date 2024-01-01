[dangraph](../README.md) / [Exports](../modules.md) / [undirected_graph/danUndirectedGraph](../modules/undirected_graph_danUndirectedGraph.md) / [\<internal\>](../modules/undirected_graph_danUndirectedGraph._internal_.md) / DanArc

# Interface: DanArc\<I, D\>

[undirected_graph/danUndirectedGraph](../modules/undirected_graph_danUndirectedGraph.md).[\<internal\>](../modules/undirected_graph_danUndirectedGraph._internal_.md).DanArc

The DanArc interface represents a graph arc.
It contains a node structure, the arc weight and may contain an array of string labels.

## Type parameters

| Name |
| :--- |
| `I`  |
| `D`  |

## Table of contents

### Properties

- [labels](undirected_graph_danUndirectedGraph._internal_.DanArc.md#labels)
- [node](undirected_graph_danUndirectedGraph._internal_.DanArc.md#node)
- [weight](undirected_graph_danUndirectedGraph._internal_.DanArc.md#weight)

### Methods

- [renderLabels](undirected_graph_danUndirectedGraph._internal_.DanArc.md#renderlabels)
- [toString](undirected_graph_danUndirectedGraph._internal_.DanArc.md#tostring)

## Properties

### labels

• `Optional` **labels**: `string`[]

#### Defined in

[src/commons.ts:19](https://github.com/evildead/DanGraph/blob/2bfd060/src/commons.ts#L19)

---

### node

• **node**: [`DanNode`](undirected_graph_danUndirectedGraph._internal_.DanNode.md)\<`I`, `D`\>

#### Defined in

[src/commons.ts:20](https://github.com/evildead/DanGraph/blob/2bfd060/src/commons.ts#L20)

---

### weight

• **weight**: `number`

#### Defined in

[src/commons.ts:18](https://github.com/evildead/DanGraph/blob/2bfd060/src/commons.ts#L18)

## Methods

### renderLabels

▸ **renderLabels**(`separator`): `string`

#### Parameters

| Name        | Type     |
| :---------- | :------- |
| `separator` | `string` |

#### Returns

`string`

#### Defined in

[src/commons.ts:22](https://github.com/evildead/DanGraph/blob/2bfd060/src/commons.ts#L22)

---

### toString

▸ **toString**(`showDetails`): `string`

#### Parameters

| Name          | Type      |
| :------------ | :-------- |
| `showDetails` | `boolean` |

#### Returns

`string`

#### Defined in

[src/commons.ts:23](https://github.com/evildead/DanGraph/blob/2bfd060/src/commons.ts#L23)
