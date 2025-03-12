---
type: note
title: JavaScript Array
icon: file
order: 2
date: 2025-03-11
category:
  - js
tag:
  - js基础
  - 数组方法
sticky: false
star: false
breadcrumb: false
comment: true
headerDepth: 5
# toc: false
---

## Array() 构造函数

```js
new Array();
new Array(element0);
new Array(element0, element1);
new Array(element0, element1, /* … ,*/ elementN);
new Array(arrayLength);

Array();
Array(element0);
Array(element0, element1);
Array(element0, element1, /* … ,*/ elementN);
Array(arrayLength);
```

::: info
调用 `Array()` 时可以使用或不使用 `new`。两者都会创建一个新的 `Array` 实例。
:::

### 参数

- `elementN`

  `Array` 构造函数会根据给定的元素创建一个 JavaScript 数组，但是当仅有一个参数且为数字时除外（详见下面的 arrayLength 参数）。注意，后者仅适用于用 `Array` 构造函数创建数组，而不适用于用方括号创建的数组字面量。

- `arrayLength`：如果传递给 Array 构造函数的唯一参数是介于 0 到 2^32^ - 1（含）之间的整数，这将返回一个新的 JavaScript 数组，其 length 属性设置为该数字（ ==注意== ：这意味着一个由 arrayLength 个空槽组成的数组，而不是具有实际 undefined 值的槽——参见稀疏数组）。如果传递给 Array 构造函数的唯一参数是大于 2^32^ - 1 的数字，则会抛出 RangeError。

### 数组字面量

可以通过使用数组字面量创建数组：

```js
Copy to Clipboard
const fruits = ["Apple", "Banana"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

### 单个参数的 Array 构造函数

可以通过单个数字参数的构造函数创建数组，数组的长度为传入的参数，该数组不包含任何实际的元素。

```js
Copy to Clipboard
const arrayEmpty = new Array(2);

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined；实际上是一个空槽
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); // false
```

```js
Copy to Clipboard
const arrayOfOne = new Array("2"); // 这里是字符串 "2" 而不是数字 2

console.log(arrayOfOne.length); // 1
console.log(arrayOfOne[0]); // "2"
```

### 多个参数的 Array 构造函数

如果向构造函数传入多个参数，则会创建一个包含给定元素的新 Array。

```js
Copy to Clipboard
const fruits = new Array("Apple", "Banana");

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

## Array 静态方法

### Array.from()

```js
Array.from(arrayLike, mapFn, thisArg);
```

- `arrayLike`：想要转换成数组的类数组或可迭代对象。（如字符串、Map、Set、arguments 对象等）。
- `mapFn`（可选）：调用数组每个元素的函数。如果提供，每个将要添加到数组中的值首先会传递给该函数，然后将 `mapFn` 的返回值增加到数组中。使用以下参数调用该函数：
  - `element`数组当前正在处理的元素。
  - `index`数组当前正在处理的元素的索引。
- `thisArg`（可选）：执行 `mapFn` 时用作 `this` 的值。

```js
// 字符串转换成数组
Array.from("foo");
// [ "f", "o", "o" ]

// 从 Set 构建数组
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]

// 从 Map 构建数组
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];

// 根据 DOM 元素的属性创建一个数组
const images = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));

// 从类数组对象构建数组（arguments）
function f() {
  return Array.from(arguments);
}
f(1, 2, 3);
// [ 1, 2, 3 ]

// 使用箭头函数作为映射函数去操作多个元素
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// 生成一个数字序列。因为数组在每个位置都使用 `undefined` 初始化，下面的 `v` 值将是 `undefined`
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]

// 序列生成器函数（通常称为“range”，例如 Clojure、PHP 等）
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// 生成的数字范围 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// 生成的数字范围 1..10，步长为 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// 使用 Array.from 生成字母表，并将其序列排序
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x)
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// 在非数组构造函数上调用 from()
function NotArray(len) {
  console.log("NotArray called with length", len);
}

// 可迭代对象
console.log(Array.from.call(NotArray, new Set(["foo", "bar", "baz"])));
// NotArray called with length undefined
// NotArray { '0': 'foo', '1': 'bar', '2': 'baz', length: 3 }

// 类数组对象
console.log(Array.from.call(NotArray, { length: 1, 0: "foo" }));
// NotArray called with length 1
// NotArray { '0': 'foo', length: 1 }

// 当 this 值不是构造函数，返回一个普通的数组对象。
console.log(Array.from.call({}, { length: 1, 0: "foo" })); // [ 'foo' ]
```

### Array.fromAsync()

```js
Array.fromAsync(arrayLike, mapFn, thisArg);
```

- `arrayLike`：一个异步可迭代对象（如 AsyncGenerator、AsyncIterator、Promise 对象等）。
- `mapFn`（可选）：一个函数，将每个元素映射为一个新的元素，类似于数组的 `map` 方法。
- `thisArg`（可选）：`mapFn` 函数的执行环境（即 `this` 关键字的值）。

```js
Copy to Clipboard
async function* asyncGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const arr = await Array.fromAsync(asyncGenerator(), x => x * 2);

console.log(arr); // [2, 4, 6]
```

### Array.isArray()

```js
Array.isArray(obj);
```

- `obj`：要测试的对象。

返回一个布尔值，表示对象是否为数组。

```js
Copy to Clipboard
const arr = [1, 2, 3];

console.log(Array.isArray(arr)); // true
console.log(Array.isArray({})); // false
console.log(Array.isArray('123')); // false
```

### Array.of()

```js
Array.of(element0[, element1[, ...[, elementN]]])
```

- `elementN`：要添加到数组中的元素。

创建一个具有可变数量参数的新数组，并将它们按顺序添加到新数组中。

```js
Copy to Clipboard
const arr = Array.of(1, 2, 3);

console.log(arr); // [1, 2, 3]
```
