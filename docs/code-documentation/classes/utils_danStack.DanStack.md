[dangraph](../README.md) / [Exports](../modules.md) / [utils/danStack](../modules/utils_danStack.md) / DanStack

# Class: DanStack\<T\>

[utils/danStack](../modules/utils_danStack.md).DanStack

DanStack is a simple class implementing Stackable interface

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Stackable`](../interfaces/utils_danStack.Stackable.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](utils_danStack.DanStack.md#constructor)

### Properties

- [\_list](utils_danStack.DanStack.md#_list)

### Methods

- [clear](utils_danStack.DanStack.md#clear)
- [isEmpty](utils_danStack.DanStack.md#isempty)
- [peek](utils_danStack.DanStack.md#peek)
- [pop](utils_danStack.DanStack.md#pop)
- [push](utils_danStack.DanStack.md#push)

## Constructors

### constructor

• **new DanStack**\<`T`\>(): [`DanStack`](utils_danStack.DanStack.md)\<`T`\>

The public class constructor

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`DanStack`](utils_danStack.DanStack.md)\<`T`\>

#### Defined in

[src/utils/danStack.ts:26](https://github.com/evildead/DanGraph/blob/355b956/src/utils/danStack.ts#L26)

## Properties

### \_list

• `Private` **\_list**: `T`[]

#### Defined in

[src/utils/danStack.ts:21](https://github.com/evildead/DanGraph/blob/355b956/src/utils/danStack.ts#L21)

## Methods

### clear

▸ **clear**(): `void`

Clear all stack's elements
We use the 'splice' method of the private member '_list'

#### Returns

`void`

#### Implementation of

[Stackable](../interfaces/utils_danStack.Stackable.md).[clear](../interfaces/utils_danStack.Stackable.md#clear)

#### Defined in

[src/utils/danStack.ts:73](https://github.com/evildead/DanGraph/blob/355b956/src/utils/danStack.ts#L73)

___

### isEmpty

▸ **isEmpty**(): `boolean`

Check if the stack is empty
We use the 'length' method of the private member '_list' to check the number of elements present:
if the number is less than 1, the stack is empty

#### Returns

`boolean`

true if the stack is empty; it returns false is the stack is not empty

#### Implementation of

[Stackable](../interfaces/utils_danStack.Stackable.md).[isEmpty](../interfaces/utils_danStack.Stackable.md#isempty)

#### Defined in

[src/utils/danStack.ts:65](https://github.com/evildead/DanGraph/blob/355b956/src/utils/danStack.ts#L65)

___

### peek

▸ **peek**(): `undefined` \| `T`

Get the value from the top of the stack but do not remove it from the stack itself

#### Returns

`undefined` \| `T`

the element on top of the stack if the stack is not empty; conversely it returns undefined

#### Implementation of

[Stackable](../interfaces/utils_danStack.Stackable.md).[peek](../interfaces/utils_danStack.Stackable.md#peek)

#### Defined in

[src/utils/danStack.ts:52](https://github.com/evildead/DanGraph/blob/355b956/src/utils/danStack.ts#L52)

___

### pop

▸ **pop**(): `undefined` \| `T`

Get the value from the top of the stack and remove it from the stack itself
We use the 'pop' method of the private member '_list'

#### Returns

`undefined` \| `T`

the element on top of the stack if the stack is not empty; conversely it returns undefined

#### Implementation of

[Stackable](../interfaces/utils_danStack.Stackable.md).[pop](../interfaces/utils_danStack.Stackable.md#pop)

#### Defined in

[src/utils/danStack.ts:44](https://github.com/evildead/DanGraph/blob/355b956/src/utils/danStack.ts#L44)

___

### push

▸ **push**(`val`): `void`

Insert a value to the top of the stack
We use the 'push' method of the private member '_list'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `val` | `T` | the value to be pushed inside the stack |

#### Returns

`void`

#### Implementation of

[Stackable](../interfaces/utils_danStack.Stackable.md).[push](../interfaces/utils_danStack.Stackable.md#push)

#### Defined in

[src/utils/danStack.ts:35](https://github.com/evildead/DanGraph/blob/355b956/src/utils/danStack.ts#L35)
