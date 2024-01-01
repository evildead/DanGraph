[dangraph](../README.md) / [Exports](../modules.md) / [directed\_graph/danDirectedGraphDepthFirstIterator](../modules/directed_graph_danDirectedGraphDepthFirstIterator.md) / [\<internal\>](../modules/directed_graph_danDirectedGraphDepthFirstIterator._internal_.md) / GraphIterator

# Interface: GraphIterator\<T\>

[directed\_graph/danDirectedGraphDepthFirstIterator](../modules/directed_graph_danDirectedGraphDepthFirstIterator.md).[\<internal\>](../modules/directed_graph_danDirectedGraphDepthFirstIterator._internal_.md).GraphIterator

The GraphIterator interface

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`DanDirectedGraphBreadthFirstIterator`](../classes/directed_graph_danDirectedGraphBreadthFirstIterator.DanDirectedGraphBreadthFirstIterator.md)
- [`DanDirectedGraphDepthFirstIterator`](../classes/directed_graph_danDirectedGraphDepthFirstIterator.DanDirectedGraphDepthFirstIterator.md)

## Table of contents

### Methods

- [current](directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md#current)
- [hasNext](directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md#hasnext)
- [next](directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md#next)
- [rewind](directed_graph_danDirectedGraphDepthFirstIterator._internal_.GraphIterator.md#rewind)

## Methods

### current

▸ **current**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/commons.ts:31](https://github.com/evildead/DanGraph/blob/2bfd060/src/commons.ts#L31)

___

### hasNext

▸ **hasNext**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/commons.ts:37](https://github.com/evildead/DanGraph/blob/2bfd060/src/commons.ts#L37)

___

### next

▸ **next**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/commons.ts:34](https://github.com/evildead/DanGraph/blob/2bfd060/src/commons.ts#L34)

___

### rewind

▸ **rewind**(): `void`

#### Returns

`void`

#### Defined in

[src/commons.ts:40](https://github.com/evildead/DanGraph/blob/2bfd060/src/commons.ts#L40)
