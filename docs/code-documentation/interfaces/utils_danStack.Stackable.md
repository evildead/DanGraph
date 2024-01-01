[dangraph](../README.md) / [Exports](../modules.md) / [utils/danStack](../modules/utils_danStack.md) / Stackable

# Interface: Stackable\<T\>

[utils/danStack](../modules/utils_danStack.md).Stackable

A Stackable interface is composed of:
push    -> insert a value to the top of the stack
pop     -> get the value from the top of the stack and remove it from the stack itself
peek    -> get the value from the top of the stack but do not remove it from the stack itself
isEmpty -> check if the stack is empty
clear   -> clear all stack's elements

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`DanStack`](../classes/utils_danStack.DanStack.md)

## Table of contents

### Methods

- [clear](utils_danStack.Stackable.md#clear)
- [isEmpty](utils_danStack.Stackable.md#isempty)
- [peek](utils_danStack.Stackable.md#peek)
- [pop](utils_danStack.Stackable.md#pop)
- [push](utils_danStack.Stackable.md#push)

## Methods

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/utils/danStack.ts:14](https://github.com/evildead/DanGraph/blob/81ddea9/src/utils/danStack.ts#L14)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/utils/danStack.ts:13](https://github.com/evildead/DanGraph/blob/81ddea9/src/utils/danStack.ts#L13)

___

### peek

▸ **peek**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/utils/danStack.ts:12](https://github.com/evildead/DanGraph/blob/81ddea9/src/utils/danStack.ts#L12)

___

### pop

▸ **pop**(): `undefined` \| `T`

#### Returns

`undefined` \| `T`

#### Defined in

[src/utils/danStack.ts:11](https://github.com/evildead/DanGraph/blob/81ddea9/src/utils/danStack.ts#L11)

___

### push

▸ **push**(`val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `T` |

#### Returns

`void`

#### Defined in

[src/utils/danStack.ts:10](https://github.com/evildead/DanGraph/blob/81ddea9/src/utils/danStack.ts#L10)
