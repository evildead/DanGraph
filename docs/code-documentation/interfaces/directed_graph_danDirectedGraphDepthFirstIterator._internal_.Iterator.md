[dangraph](../README.md) / [Exports](../modules.md) / [directed_graph/danDirectedGraphDepthFirstIterator](../modules/directed_graph_danDirectedGraphDepthFirstIterator.md) / [\<internal\>](../modules/directed_graph_danDirectedGraphDepthFirstIterator._internal_.md) / Iterator

# Interface: Iterator\<T, TReturn, TNext\>

[directed_graph/danDirectedGraphDepthFirstIterator](../modules/directed_graph_danDirectedGraphDepthFirstIterator.md).[\<internal\>](../modules/directed_graph_danDirectedGraphDepthFirstIterator._internal_.md).Iterator

## Type parameters

| Name      | Type        |
| :-------- | :---------- |
| `T`       | `T`         |
| `TReturn` | `any`       |
| `TNext`   | `undefined` |

## Hierarchy

- **`Iterator`**

  ↳ [`IterableIterator`](directed_graph_danDirectedGraphDepthFirstIterator._internal_.IterableIterator.md)

## Table of contents

### Methods

- [next](directed_graph_danDirectedGraphDepthFirstIterator._internal_.Iterator.md#next)
- [return](directed_graph_danDirectedGraphDepthFirstIterator._internal_.Iterator.md#return)
- [throw](directed_graph_danDirectedGraphDepthFirstIterator._internal_.Iterator.md#throw)

## Methods

### next

▸ **next**(`...args`): [`IteratorResult`](../modules/directed_graph_danDirectedGraphDepthFirstIterator._internal_.md#iteratorresult)\<`T`, `TReturn`\>

#### Parameters

| Name      | Type            |
| :-------- | :-------------- |
| `...args` | [] \| [`TNext`] |

#### Returns

[`IteratorResult`](../modules/directed_graph_danDirectedGraphDepthFirstIterator._internal_.md#iteratorresult)\<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:43

---

### return

▸ **return**(`value?`): [`IteratorResult`](../modules/directed_graph_danDirectedGraphDepthFirstIterator._internal_.md#iteratorresult)\<`T`, `TReturn`\>

#### Parameters

| Name     | Type      |
| :------- | :-------- |
| `value?` | `TReturn` |

#### Returns

[`IteratorResult`](../modules/directed_graph_danDirectedGraphDepthFirstIterator._internal_.md#iteratorresult)\<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:44

---

### throw

▸ **throw**(`e?`): [`IteratorResult`](../modules/directed_graph_danDirectedGraphDepthFirstIterator._internal_.md#iteratorresult)\<`T`, `TReturn`\>

#### Parameters

| Name | Type  |
| :--- | :---- |
| `e?` | `any` |

#### Returns

[`IteratorResult`](../modules/directed_graph_danDirectedGraphDepthFirstIterator._internal_.md#iteratorresult)\<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:45
