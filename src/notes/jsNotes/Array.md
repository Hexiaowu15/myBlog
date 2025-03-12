---
type: note
title: JavaScript Array
icon: emojione-v1:memo
order: 2
date: 2025-03-11
category:
  - js
tag:
  - js基础
  - 数组方法
sticky: false
star: true
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
async function* asyncGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const arr = await Array.fromAsync(asyncGenerator(), (x) => x * 2);

console.log(arr); // [2, 4, 6]

// 处理Promise数组
const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
const results = await Array.fromAsync(promises);
console.log(results); // [1, 2, 3]

// 作为Promise.all的替代方案
const urls = ["https://api.example.com/data1", "https://api.example.com/data2"];
const responses = await Array.fromAsync(urls.map((url) => fetch(url)));
const data = await Array.fromAsync(responses, (response) => response.json());
console.log(data); // [data1, data2]

// 处理混合数据源（同步和异步值）
const mixedValues = [1, Promise.resolve(2), 3, Promise.resolve(4)];
const normalizedValues = await Array.fromAsync(mixedValues);
console.log(normalizedValues); // [1, 2, 3, 4]

// 与async/await和错误处理结合使用
try {
  const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.reject(new Error("操作失败")),
  ];
  const results = await Array.fromAsync(promises);
} catch (error) {
  console.error("处理Promise时出错:", error.message); // 处理Promise时出错: 操作失败
}

// 使用映射函数处理异步结果
const userIds = [101, 102, 103];
async function fetchUserData(id) {
  // 模拟API调用
  return { id, name: `用户${id}` };
}

const users = await Array.fromAsync(userIds, fetchUserData);
console.log(users); // [{id: 101, name: '用户101'}, {id: 102, name: '用户102'}, {id: 103, name: '用户103'}]
```

### Array.isArray()

```js
Array.isArray(obj);
```

- `obj`：要测试的对象。

返回一个布尔值，表示对象是否为数组。

```js
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// 鲜为人知的事实：其实 Array.prototype 也是一个数组：
Array.isArray(Array.prototype);

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// 这不是一个数组，因为它不是使用数组字面量语法或 Array 构造函数创建的
Array.isArray({ __proto__: Array.prototype });

const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1, 2, 3]

// 正确检查 Array
Array.isArray(arr); // true
// arr 的原型是 xArray.prototype，它是一个不同于 Array.prototype 的对象
arr instanceof Array; // false
```

### Array.of()

```js
Array.of();
Array.of(element0);
Array.of(element0, element1);
Array.of(element0, element1, /* … ,*/ elementN);
```

- `elementN`：要添加到数组中的元素。

`Array.of()` 和 `Array()` 构造函数之间的区别在于对单个参数的处理：`Array.of(7)` 创建一个具有单个元素 7 的数组，而 `Array(7)` 创建一个 length 为 7 的空数组（这意味着一个由 7 个空槽组成的数组，而不是由 7 个 undefined 组成的数组）。

```js
Array.of(7); // [7]
Array(7); // 由 7 个空槽组成的数组

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
```
## Array 实例方法

### Array.prototype.at()

```js
arr.at(index);
```

- `index`：要返回的数组元素的索引（位置）。支持负索引，负整数从数组中的最后一个元素开始倒数。

返回给定索引处的数组元素。如果索引超出范围，则返回 `undefined`。

```js
// 使用at()访问数组元素
const array = [5, 12, 8, 130, 44];

let index = 2;
console.log(`索引为${index}的元素是 ${array.at(index)}`);
// 索引为2的元素是 8

// 使用负索引从末尾访问元素
index = -2;
console.log(`倒数第${Math.abs(index)}个元素是 ${array.at(index)}`);
// 倒数第2个元素是 130

// 与传统方法比较
console.log(array[array.length - 2]); // 130 (等同于 array.at(-2))

// 在链式调用中使用at()
const lastItem = [1, 2, 3, 4].filter(n => n % 2 === 0).at(-1);
console.log(lastItem); // 4

// 处理空数组
console.log([].at(0)); // undefined

// 处理超出范围的索引
console.log(array.at(10)); // undefined
console.log(array.at(-10)); // undefined
```

### Array.prototype.concat()

```js
arr.concat(value1, value2, /* …, */ valueN);
```

- `valueN`（可选）：要合并的数组或值。如果省略了所有 `valueN` 参数，则 `concat` 返回调用此方法的现有数组的浅拷贝。

返回一个新的数组，该数组由被调用的数组和所有参数组成。

```js
// 合并两个数组
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3);
// ['a', 'b', 'c', 'd', 'e', 'f']

// 合并多个数组
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num3);
console.log(numbers);
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 合并数组和值
const letters = ['a', 'b', 'c'];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric);
// ['a', 'b', 'c', 1, 2, 3]

// 嵌套数组的合并
const num4 = [[1]];
const num5 = [2, [3]];
const numsCombined = num4.concat(num5);
console.log(numsCombined);
// [[1], 2, [3]]

// 修改原始数组中的引用值会影响新数组
num4[0].push(4);
console.log(numsCombined);
// [[1, 4], 2, [3]]

// 创建数组的浅拷贝
const shallowCopy = array1.concat();
console.log(shallowCopy);
// ['a', 'b', 'c']
```

### Array.prototype.copyWithin()

```js
arr.copyWithin(target, start, end);
```

- `target`：0 为基底的索引，复制序列到该位置。如果是负数，`target` 将从末尾开始计算。
- `start`（可选）：0 为基底的索引，开始复制元素的起始位置。如果是负数，`start` 将从末尾开始计算。默认为 0。
- `end`（可选）：0 为基底的索引，开始复制元素的结束位置。`copyWithin` 将会拷贝到该位置，但不包括 `end` 这个位置的元素。如果是负数，`end` 将从末尾开始计算。默认为 `arr.length`。

返回修改后的数组。

```js
// 基本用法
const array1 = ['a', 'b', 'c', 'd', 'e'];

// 将索引3开始的元素复制到索引0的位置
console.log(array1.copyWithin(0, 3, 5));
// ['d', 'e', 'c', 'd', 'e']

// 将最后两个元素复制到前两个位置
const array2 = [1, 2, 3, 4, 5];
console.log(array2.copyWithin(0, 3));
// [4, 5, 3, 4, 5]

// 使用负索引
const array3 = [1, 2, 3, 4, 5];
console.log(array3.copyWithin(0, -2));
// [4, 5, 3, 4, 5]

// 复制部分数组到中间位置
const array4 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array4.copyWithin(2, 0, 2));
// [1, 2, 1, 2, 5, 6, 7, 8]

// 当目标区域与源区域重叠时
const array5 = [1, 2, 3, 4, 5];
console.log(array5.copyWithin(1, 0, 3));
// [1, 1, 2, 3, 5]

// 在类型化数组上使用
const int8Array = new Int8Array([1, 2, 3, 4, 5]);
console.log(int8Array.copyWithin(0, 2));
// Int8Array [3, 4, 5, 4, 5]
```

### Array.prototype.entries()

```js
arr.entries();
```

返回一个新的数组迭代器对象，该对象包含数组中每个索引的键/值对。

```js
// 使用for...of循环迭代键/值对
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();

for (const entry of iterator1) {
  console.log(entry);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']

// 使用解构赋值获取键和值
const array2 = ['a', 'b', 'c'];

for (const [index, element] of array2.entries()) {
  console.log(`${index}: ${element}`);
}
// 0: a
// 1: b
// 2: c

// 使用next()方法手动迭代
const array3 = ['a', 'b', 'c'];
const iterator3 = array3.entries();

console.log(iterator3.next().value); // [0, 'a']
console.log(iterator3.next().value); // [1, 'b']
console.log(iterator3.next().value); // [2, 'c']
console.log(iterator3.next().done);  // true

// 将迭代器转换回数组
const array4 = ['a', 'b', 'c'];
const entriesArray = [...array4.entries()];
console.log(entriesArray);
// [[0, 'a'], [1, 'b'], [2, 'c']]

// 在稀疏数组上使用
const sparse = [1, , 3];
for (const [index, element] of sparse.entries()) {
  console.log(`${index}: ${element}`);
}
// 0: 1
// 1: undefined
// 2: 3
```

### Array.prototype.every()

```js
arr.every(callback(element, index, array), thisArg);
```

- `callback`：用于测试数组中每个元素的函数。返回一个布尔值。
  - `element`：当前正在处理的元素。
  - `index`（可选）：当前正在处理的元素的索引。
  - `array`（可选）：调用 `every` 的数组。
- `thisArg`（可选）：执行 `callback` 时用作 `this` 的值。

测试一个数组内的所有元素是否都能通过指定函数的测试。返回一个布尔值。

```js
// 检查所有元素是否都大于10
const array1 = [12, 54, 18, 130, 44];
const isAllOver10 = array1.every(element => element > 10);
console.log(isAllOver10); // true

// 检查所有元素是否都大于100
const isAllOver100 = array1.every(element => element > 100);
console.log(isAllOver100); // false

// 检查数组是否为空（空数组总是返回true）
console.log([].every(elem => elem > 5)); // true

// 使用thisArg参数
function isBigEnough(element, index, array) {
  return element >= this.minimum;
}
const numbers = [1, 30, 39, 29, 10, 13];
console.log(numbers.every(isBigEnough, { minimum: 10 })); // false

// 检查对象数组中的属性
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 32 },
  { name: 'Charlie', age: 19 }
];
const isAllAdults = people.every(person => person.age >= 18);
console.log(isAllAdults); // true

// 检查数组是否按升序排序
function isSorted(arr) {
  return arr.every((value, index, array) => index === 0 || value >= array[index - 1]);
}
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 5, 4, 3])); // false
```

### Array.prototype.fill()

```js
arr.fill(value, start, end);
```

- `value`：用来填充数组的值。
- `start`（可选）：起始索引，默认值为 0。
- `end`（可选）：终止索引，默认值为 `this.length`。

用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。返回修改后的数组。

```js
// 用值填充整个数组
const array1 = [1, 2, 3, 4];
console.log(array1.fill(0));
// [0, 0, 0, 0]

// 从特定位置开始填充
const array2 = [1, 2, 3, 4];
console.log(array2.fill(0, 2));
// [1, 2, 0, 0]

// 指定开始和结束位置
const array3 = [1, 2, 3, 4];
console.log(array3.fill(0, 1, 3));
// [1, 0, 0, 4]

// 使用负索引
const array4 = [1, 2, 3, 4];
console.log(array4.fill(0, -2));
// [1, 2, 0, 0]

// 创建并初始化数组
const array5 = new Array(5).fill(0);
console.log(array5);
// [0, 0, 0, 0, 0]

// 填充对象引用（所有元素引用同一个对象）
const array6 = Array(3).fill({});
console.log(array6);
// [{}, {}, {}]
array6[0].name = 'John';
console.log(array6);
// [{name: 'John'}, {name: 'John'}, {name: 'John'}]

// 在类型化数组上使用
const uint8Array = new Uint8Array(4);
console.log(uint8Array.fill(42));
// Uint8Array [42, 42, 42, 42]
```

### Array.prototype.filter()

```js
arr.filter(callback(element, index, array), thisArg);
```

- `callback`：用于测试数组中每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。
  - `element`：当前正在处理的元素。
  - `index`（可选）：当前正在处理的元素的索引。
  - `array`（可选）：调用 `filter` 的数组。
- `thisArg`（可选）：执行 `callback` 时用作 `this` 的值。

创建一个新数组，其包含通过所提供函数实现的测试的所有元素。

```js
// 过滤出大于10的数字
const numbers = [12, 5, 8, 130, 44];
const filtered = numbers.filter(num => num > 10);
console.log(filtered);
// [12, 130, 44]

// 过滤对象数组
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 },
  { name: 'David', age: 16 }
];
const adults = people.filter(person => person.age >= 18);
console.log(adults);
// [{ name: 'Alice', age: 21 }, { name: 'Charlie', age: 30 }]

// 过滤无效值
const values = [0, 1, false, 2, '', 3, null, undefined, NaN];
const truthyValues = values.filter(Boolean);
console.log(truthyValues);
// [1, 2, 3]

// 使用thisArg参数
function isInRange(value) {
  return value >= this.min && value <= this.max;
}
const range = { min: 10, max: 20 };
const inRange = [1, 12, 15, 30].filter(isInRange, range);
console.log(inRange);
// [12, 15]

// 过滤稀疏数组（跳过空槽）
const sparse = [1, , 3, , 5];
const dense = sparse.filter(() => true);
console.log(dense);
// [1, 3, 5]

// 搜索数组
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
function filterItems(arr, query) {
  return arr.filter(item => item.toLowerCase().includes(query.toLowerCase()));
}
console.log(filterItems(fruits, 'ap'));
// ['apple', 'grapes']

// 链式调用
const evenSquaresOver50 = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .filter(square => square > 50);
console.log(evenSquaresOver50);
// [144, 1936]
```

### Array.prototype.find()

```js
arr.find(callback(element, index, array), thisArg);
```

- `callback`：在数组每一项上执行的函数，返回 `true` 表示找到了匹配的元素。
  - `element`：当前正在处理的元素。
  - `index`（可选）：当前正在处理的元素的索引。
  - `array`（可选）：调用 `find` 的数组。
- `thisArg`（可选）：执行 `callback` 时用作 `this` 的值。

返回数组中满足提供的测试函数的第一个元素的值。如果没有找到这样的元素，则返回 `undefined`。

```js
// 查找第一个大于10的元素
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
// 12

// 在对象数组中查找
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];
const result = inventory.find(({ name }) => name === 'cherries');
console.log(result);
// { name: 'cherries', quantity: 5 }

// 查找素数
function isPrime(element) {
  if (element <= 1) return false;
  if (element <= 3) return true;
  if (element % 2 === 0 || element % 3 === 0) return false;
  let i = 5;
  while (i * i <= element) {
    if (element % i === 0 || element % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}
const array2 = [4, 6, 8, 9, 12, 11];
console.log(array2.find(isPrime));
// 11

// 使用thisArg参数
function isInRange(value) {
  return value >= this.lower && value <= this.upper;
}
const range = { lower: 10, upper: 20 };
console.log([1, 5, 10, 15, 25].find(isInRange, range));
// 10

// 查找不存在的元素
console.log([1, 2, 3].find(x => x > 10));
// undefined

// 在稀疏数组中查找（跳过空槽）
const sparse = [1, , 3, , 5];
console.log(sparse.find((_, index) => index === 1));
// undefined
```

### Array.prototype.findIndex()

```js
arr.findIndex(callback(element, index, array), thisArg);
```

- `callback`：在数组每一项上执行的函数，返回 `true` 表示找到了匹配的元素。
  - `element`：当前正在处理的元素。
  - `index`（可选）：当前正在处理的元素的索引。
  - `array`（可选）：调用 `findIndex` 的数组。
- `thisArg`（可选）：执行 `callback` 时用作 `this` 的值。

返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。

```js
// 查找第一个大于10的元素的索引
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 10;
console.log(array1.findIndex(isLargeNumber));
// 1

// 查找素数的索引
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log([4, 6, 8, 12, 11].findIndex(isPrime));
// 4

// 查找对象数组中的元素索引
const fruits = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
];
console.log(fruits.findIndex(fruit => fruit.name === 'bananas'));
// 1

// 使用thisArg参数
function isInRange(value) {
  return value >= this.lower && value <= this.upper;
}
const range = { lower: 10, upper: 20 };
console.log([1, 5, 10, 15, 25].findIndex(isInRange, range));
// 2

// 查找不存在的元素
console.log([1, 2, 3].findIndex(x => x > 10));
// -1

// 在稀疏数组中查找（跳过空槽）
const sparse = [1, , 3, , 5];
console.log(sparse.findIndex((_, index) => index === 1));
// -1
```

### Array.prototype.findLast()

```js
arr.findLast(callback(element, index, array), thisArg);
```

- `callback`：在数组每一项上执行的函数，返回 `true` 表示找到了匹配的元素。
  - `element`：当前正在处理的元素。
  - `index`（可选）：当前正在处理的元素的索引。
  - `array`（可选）：调用 `findLast` 的数组。
- `thisArg`（可选）：执行 `callback` 时用作 `this` 的值。

返回数组中满足提供的测试函数的最后一个元素的值。如果没有找到这样的元素，则返回 `undefined`。

```js
// 查找最后一个大于10的元素
const array1 = [5, 12, 8, 130, 44];
const found = array1.findLast(element => element > 10);
console.log(found);
// 44

// 与find()方法比较
const firstFound = array1.find(element => element > 10);
console.log(firstFound);
// 12

// 在对象数组中查找最后一个匹配项
const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5},
  {name: 'apples', quantity: 3}
];
const result = inventory.findLast(({ name }) => name === 'apples');
console.log(result);
// { name: 'apples', quantity: 3 }

// 查找最后一个素数
function isPrime(element) {
  if (element <= 1) return false;
  if (element <= 3) return true;
  if (element % 2 === 0 || element % 3 === 0) return false;
  let i = 5;
  while (i * i <= element) {
    if (element % i === 0 || element % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}
const array2 = [4, 11, 8, 9, 12, 13];
console.log(array2.findLast(isPrime));
// 13

// 查找不存在的元素
console.log([1, 2, 3].findLast(x => x > 10));
// undefined
```

### Array.prototype.findLastIndex()

```js
arr.findLastIndex(callback(element, index, array), thisArg);
```

- `callback`：在数组每一项上执行的函数，返回 `true` 表示找到了匹配的元素。
  - `element`：当前正在处理的元素。
  - `index`（可选）：当前正在处理的元素的索引。
  - `array`（可选）：调用 `findLastIndex` 的数组。
- `thisArg`（可选）：执行 `callback` 时用作 `this` 的值。

返回数组中满足提供的测试函数的最后一个元素的索引。若没有找到对应元素则返回-1。

```js
// 查找最后一个大于10的元素的索引
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 10;
console.log(array1.findLastIndex(isLargeNumber));
// 4

// 与findIndex()方法比较
console.log(array1.findIndex(isLargeNumber));
// 1

// 查找最后一个素数的索引
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log([4, 6, 8, 11, 12, 13].findLastIndex(isPrime));
// 5

// 查找对象数组中的最后一个元素索引
const fruits = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 },
  { name: 'apples', quantity: 3 }
];
console.log(fruits.findLastIndex(fruit => fruit.name === 'apples'));
// 3

// 查找不存在的元素
console.log([1, 2, 3].findLastIndex(x => x > 10));
// -1
```

### Array.prototype.flat()

```js
arr.flat(depth);
```

- `depth`（可选）：指定要提取嵌套数组的结构深度，默认值为 1。

创建一个新数组，其中所有子数组元素递归地连接到指定的深度。

```js
// 扁平化一级嵌套数组
const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());
// [1, 2, 3, 4]

// 扁平化多级嵌套数组
const arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]

// 指定深度参数
console.log(arr2.flat(2));
// [1, 2, 3, 4, 5, 6]

// 使用Infinity参数扁平化任意深度的嵌套数组
const arr3 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr3.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 移除数组中的空项
const arr4 = [1, 2, , 4, 5];
console.log(arr4.flat());
// [1, 2, 4, 5]

// 替代方案：使用reduce和concat
const arr5 = [1, 2, [3, 4]];
const flattened = arr5.reduce((acc, val) => acc.concat(val), []);
console.log(flattened);
// [1, 2, 3, 4]
```

### Array.prototype.flatMap()

```js
arr.flatMap(callback(currentValue, index, array), thisArg);
```

- `callback`：可以生成一个新数组中的元素的函数，可以返回一个数组或其他任何值。
  - `currentValue`：当前正在处理的元素。
  - `index`（可选）：当前正在处理的元素的索引。
  - `array`（可选）：调用 `flatMap()` 的数组。
- `thisArg`（可选）：执行 `callback` 时用作 `this` 的值。

首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。相当于执行 `map()` 然后进行深度为1的 `flat()` 操作。

```js
// 基本用法
const arr1 = [1, 2, 3, 4];
console.log(arr1.flatMap(x => [x * 2]));
// [2, 4, 6, 8]

// 与map()后flat()等价
console.log(arr1.map(x => [x * 2]).flat());
// [2, 4, 6, 8]

// 生成更多元素
console.log(arr1.flatMap(x => [x, x * 2]));
// [1, 2, 2, 4, 3, 6, 4, 8]

// 过滤一些元素
console.log(arr1.flatMap(x => x % 2 === 0 ? [x] : []));
// [2, 4]

// 处理字符串
const sentences = ["Hello world", "JavaScript is awesome"];
console.log(sentences.flatMap(sentence => sentence.split(' ')));
// ["Hello", "world", "JavaScript", "is", "awesome"]

// 处理对象数组
const people = [
  { name: 'Alice', hobbies: ['reading', 'gaming'] },
  { name: 'Bob', hobbies: ['hiking', 'swimming'] }
];
console.log(people.flatMap(person => person.hobbies));
// ["reading", "gaming", "hiking", "swimming"]

// 使用thisArg参数
const multiplier = {
  factor: 2,
  multiply(num) {
    return [num * this.factor];
  }
};
console.log([1, 2, 3].flatMap(multiplier.multiply, multiplier));
// [2, 4, 6]
```

### Array.prototype.forEach()

```js
arr.forEach(callback(currentValue, index, array), thisArg);
```

- `callback`：为数组中每个元素执行的函数。
  - `currentValue`：当前正在处理的元素。
  - `index`（可选）：当前正在处理的元素的索引。
  - `array`（可选）：调用 `forEach()` 的数组。
- `thisArg`（可选）：执行 `callback` 时用作 `this` 的值。

对数组的每个元素执行一次给定的函数。

```js
// 基本用法
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
// a
// b
// c

// 使用索引参数
const array2 = ['a', 'b', 'c'];
array2.forEach((element, index) => {
  console.log(`${index}: ${element}`);
});
// 0: a
// 1: b
// 2: c

// 修改原数组
const numbers = [1, 2, 3];
numbers.forEach((num, index, arr) => {
  arr[index] = num * 2;
});
console.log(numbers);
// [2, 4, 6]

// 使用thisArg参数
class Counter {
  constructor() {
    this.count = 0;
  }
  increment(item) {
    this.count += item;
  }
}
const counter = new Counter();
[1, 2, 3].forEach(counter.increment, counter);
console.log(counter.count);
// 6

// 跳过空槽
const sparseArray = [1, , 3];
sparseArray.forEach(item => console.log(item));
// 1
// 3

// forEach不能中断循环
const array3 = [1, 2, 3];
try {
  array3.forEach(item => {
    console.log(item);
    if (item === 2) throw new Error('中断循环');
  });
} catch (e) {
  console.log(e.message);
}
// 1
// 2
// 中断循环

// 与for循环的性能比较
const largeArray = Array(1000000).fill(1);

console.time('forEach');
largeArray.forEach(item => item + 1);
console.timeEnd('forEach');

console.time('for');
for (let i = 0; i < largeArray.length; i++) {
  largeArray[i] + 1;
}
console.timeEnd('for');
// forEach: 约XX毫秒
// for: 约XX毫秒（通常for循环更快）
```

### Array.prototype.includes()

```js
arr.includes(searchElement, fromIndex);
```

- `searchElement`：要查找的元素。
- `fromIndex`（可选）：开始搜索的位置。默认为 0。

判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。

```js
// 基本用法
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// true

console.log(array1.includes(4));
// false

// 指定开始搜索的索引
const array2 = ['a', 'b', 'c'];
console.log(array2.includes('a', 1));
// false

// 使用负索引（从末尾开始计算）
console.log(array2.includes('c', -1));
// true

// 与indexOf比较
console.log(array1.indexOf(2) !== -1); // true (等同于includes(2))
console.log(array1.indexOf(4) !== -1); // false (等同于includes(4))

// 处理NaN（includes可以找到NaN，而indexOf不行）
const arrayWithNaN = [1, 2, NaN];
console.log(arrayWithNaN.includes(NaN)); // true
console.log(arrayWithNaN.indexOf(NaN) !== -1); // false

// 类型敏感
console.log([1, 2, 3].includes('1')); // false

// 在类型化数组中使用
const uint8Array = new Uint8Array([1, 2, 3]);
console.log(uint8Array.includes(2)); // true

// 检查多个值（需要自定义函数）
function includesAll(arr, values) {
  return values.every(value => arr.includes(value));
}
console.log(includesAll([1, 2, 3, 4], [1, 3])); // true
console.log(includesAll([1, 2, 3, 4], [1, 5])); // false
```

### Array.prototype.indexOf()

```js
arr.indexOf(searchElement, fromIndex);
```

- `searchElement`：要查找的元素。
- `fromIndex`（可选）：开始搜索的位置。默认为 0。

返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。

```js
// 基本用法
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
// 1

// 从指定索引开始搜索
console.log(beasts.indexOf('bison', 2));
// 4

// 查找不存在的元素
console.log(beasts.indexOf('giraffe'));
// -1

// 使用负索引（从末尾开始计算）
const array = [1, 2, 3, 4, 5];
console.log(array.indexOf(3, -3)); // 从倒数第3个元素开始搜索
// 2

// 查找所有匹配项
const indices = [];
const array2 = ['a', 'b', 'a', 'c', 'a', 'd'];
let idx = array2.indexOf('a');
while (idx !== -1) {
  indices.push(idx);
  idx = array2.indexOf('a', idx + 1);
}
console.log(indices);
// [0, 2, 4]

// 类型敏感
console.log([1, 2, 3].indexOf('1'));
// -1

// 无法查找NaN
console.log([1, NaN, 3].indexOf(NaN));
// -1

// 在类型化数组中使用
const uint8Array = new Uint8Array([1, 2, 3, 2]);
console.log(uint8Array.indexOf(2));
// 1
```

### Array.prototype.join()

```js
arr.join(separator);
```

- `separator`（可选）：指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果省略，数组元素用逗号（,）分隔。默认为 ","。

将一个数组的所有元素连接成一个字符串并返回这个字符串。

```js
// 基本用法
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// "Fire,Air,Water"

// 指定分隔符
console.log(elements.join(''));
// "FireAirWater"

console.log(elements.join('-'));
// "Fire-Air-Water"

// 处理不同类型的元素
const mixed = [1, 'hello', true, null, undefined, {a: 1}, [2, 3]];
console.log(mixed.join());
// "1,hello,true,,,[object Object],2,3"

// 处理空数组
console.log([].join());
// ""

// 处理只有一个元素的数组
console.log(['Lone wolf'].join());
// "Lone wolf"

// 处理稀疏数组（空槽被视为undefined）
const sparse = [1, , 3];
console.log(sparse.join());
// "1,,3"

// 创建重复字符串
function repeat(str, count) {
  return new Array(count + 1).join(str);
}
console.log(repeat('a', 3));
// "aaa"

// 构建HTML列表
function createList(items) {
  return `<ul>\n${items.map(item => `  <li>${item}</li>`).join('\n')}\n</ul>`;
}
console.log(createList(['Apple', 'Banana', 'Cherry']));
// <ul>
//   <li>Apple</li>
//   <li>Banana</li>
//   <li>Cherry</li>
// </ul>
```

### Array.prototype.keys()

```js
arr.keys();
```

返回一个包含数组中每个索引键的新Array Iterator对象。

```js
// 基本用法
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}
// 0
// 1
// 2

// 将迭代器转换为数组
const array2 = ['a', 'b', 'c'];
const keysArray = [...array2.keys()];
console.log(keysArray);
// [0, 1, 2]

// 处理稀疏数组（包括空槽的索引）
const sparse = ['a', , 'c'];
for (const key of sparse.keys()) {
  console.log(key);
}
// 0
// 1
// 2

// 手动迭代
const array3 = ['a', 'b', 'c'];
const iterator3 = array3.keys();

console.log(iterator3.next().value); // 0
console.log(iterator3.next().value); // 1
console.log(iterator3.next().value); // 2
console.log(iterator3.next().done);  // true

// 与索引数组比较
const array4 = ['a', 'b', 'c'];
const indices = Array.from({ length: array4.length }, (_, i) => i);
console.log(indices);
// [0, 1, 2]
```

### Array.prototype.lastIndexOf()

```js
arr.lastIndexOf(searchElement, fromIndex);
```

- `searchElement`：要查找的元素。
- `fromIndex`（可选）：从此位置开始逆向查找。默认为数组的长度减 1，即整个数组都被查找。如果该值大于或等于数组的长度，则整个数组会被查找。如果为负值，将其视为从数组末尾向前的偏移。

返回指定元素在数组中的最后一个索引，如果不存在则返回 -1。从数组的后面向前查找。

```js
// 基本用法
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(animals.lastIndexOf('Dodo'));
// 3

// 从指定位置开始搜索
console.log(animals.lastIndexOf('Dodo', 2));
// 0

// 使用负索引
const numbers = [2, 5, 9, 2];
console.log(numbers.lastIndexOf(2, -2));
// 0

// 查找不存在的元素
console.log(animals.lastIndexOf('Panda'));
// -1

// 查找所有匹配项（从后向前）
const indices = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
let idx = array.lastIndexOf('a');
while (idx !== -1) {
  indices.push(idx);
  idx = array.lastIndexOf('a', idx - 1);
}
console.log(indices);
// [4, 2, 0]

// 类型敏感
console.log([1, 2, 3].lastIndexOf('1'));
// -1

// 无法查找NaN
console.log([1, NaN, 3, NaN].lastIndexOf(NaN));
// -1
```

### Array.prototype.map()

```js
arr.map(callback(currentValue, index, array), thisArg);
```

- `callback`：生成新数组元素的函数。
  - `currentValue`：当前正在处理的元素。
  - `index`（可选）：当前正在处理的元素的索引。
  - `array`（可选）：调用 `map` 的数组。
- `thisArg`（可选）：执行 `callback` 时用作 `this` 的值。

创建一个新数组，其结果是该数组中的每个元素调用一次提供的函数后的返回值。

```js
// 基本用法
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);
// [2, 8, 18, 32]

// 使用索引参数
const array2 = [1, 4, 9, 16];
const map2 = array2.map((x, i) => x * i);
console.log(map2);
// [0, 4, 18, 48]

// 格式化对象数组
const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 }
];
const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
console.log(reformattedArray);
// [{ 1: 10 }, { 2: 20 }, { 3: 30 }]

// 使用thisArg参数
const multiplier = {
  factor: 2,
  multiply(num) {
    return num * this.factor;
  }
};
const numbers = [1, 2, 3];
const doubled = numbers.map(multiplier.multiply, multiplier);
console.log(doubled);
// [2, 4, 6]

// 处理稀疏数组（跳过空槽）
const sparse = [1, , 3];
const mapped = sparse.map(x => x * 2);
console.log(mapped);
// [2, empty, 6]

// 链式调用
const squareAndDouble = [1, 2, 3, 4]
  .map(x => x * x)
  .map(x => x * 2);
console.log(squareAndDouble);
// [2, 8, 18, 32]

// 将字符串数组转换为数字数组
const strings = ['1', '2', '3', '4'];
const numbers2 = strings.map(Number);
console.log(numbers2);
// [1, 2, 3, 4]
```

### Array.prototype.pop()

```js
arr.pop();
```

从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。

```js
// 基本用法
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// "tomato"

console.log(plants);
// ["broccoli", "cauliflower", "cabbage", "kale"]

// 从空数组中弹出元素
const emptyArray = [];
console.log(emptyArray.pop());
// undefined

// 实现栈数据结构
class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }
  pop() {
    if (this.items.length === 0) return "栈为空";
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2
console.log(stack.size()); // 2

// 清空数组
function clearArray(array) {
  while (array.length > 0) {
    array.pop();
  }
}
const arr = [1, 2, 3, 4];
clearArray(arr);
console.log(arr); // []
```

### Array.prototype.push()

```js
arr.push(element1, element2, /* …, */ elementN);
```

- `elementN`：要添加到数组末尾的元素。

将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

```js
// 基本用法
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
// 4
console.log(animals);
// ["pigs", "goats", "sheep", "cows"]

// 添加多个元素
animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// 合并两个数组
const vegetables = ['parsnip', 'potato'];
const moreVegs = ['celery', 'beetroot'];
vegetables.push(...moreVegs);
console.log(vegetables);
// ["parsnip", "potato", "celery", "beetroot"]

// 使用apply方法合并数组（旧方法）
const array1 = ['a', 'b'];
const array2 = ['c', 'd'];
Array.prototype.push.apply(array1, array2);
console.log(array1);
// ["a", "b", "c", "d"]

// 实现队列数据结构
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return "队列为空";
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) return "队列为空";
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.front()); // 2
console.log(queue.size()); // 2
```

### Array.prototype.reduce()

```js
arr.reduce(callback(accumulator, currentValue, index, array), initialValue);
```

- `callback`：为数组中每个元素执行的函数。
  - `accumulator`：累计器累计回调的返回值。
  - `currentValue`：当前正在处理的元素。
  - `index`（可选）：当前正在处理的元素的索引。
  - `array`（可选）：调用 `reduce()` 的数组。
- `initialValue`（可选）：作为第一次调用 `callback` 函数时的第一个参数的值。如果没有提供初始值，则将使用数组中的第一个元素。

对数组中的每个元素执行一个由您提供的reducer函数，将其结果汇总为单个返回值。

```js
// 基本用法：数组求和
const array1 = [1, 2, 3, 4];
const sum = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
// 10

// 不提供初始值
const array2 = [1, 2, 3, 4];
const sum2 = array2.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum2);
// 10

// 计算数组中每个元素出现的次数
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count);
// { apple: 3, banana: 2, orange: 1 }

// 数组扁平化
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (acc, curr) => acc.concat(curr),
  []
);
console.log(flattened);
// [0, 1, 2, 3, 4, 5]

// 按属性对对象数组分组
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 21 },
  { name: 'David', age: 17 }
];
const groupedByAge = people.reduce((acc, person) => {
  const age = person.age;
  if (!acc[age]) acc[age] = [];
  acc[age].push(person);
  return acc;
}, {});
console.log(groupedByAge);
// { '17': [{ name: 'Bob', age: 17 }, { name: 'David', age: 17 }],
//   '21': [{ name: 'Alice', age: 21 }, { name: 'Charlie', age: 21 }] }

// 使用reduce实现map
const numbers = [1, 2, 3, 4];
const doubled = numbers.reduce((acc, curr) => {
  acc.push(curr * 2);
  return acc;
}, []);
console.log(doubled);
// [2, 4, 6, 8]

// 使用reduce实现filter
const filtered = numbers.reduce((acc, curr) => {
  if (curr > 2) acc.push(curr);
  return acc;
}, []);
console.log(filtered);
// [3, 4]

// 链式操作的替代方案
const result = numbers
  .reduce((acc, curr) => {
    // 先过滤
    if (curr % 2 === 0) {
      // 再映射
      acc.push(curr * 2);
    }
    return acc;
  }, []);
console.log(result);
// [4, 8]
```

### Array.prototype.reduceRight()

```js
arr.reduceRight(callback(accumulator, currentValue, index, array), initialValue);
```

- `callback`：为数组中每个元素执行的函数。
  - `accumulator`：累计器累计回调的返回值。
  - `currentValue`：当前正在处理的元素。
  - `index`（可选）：当前正在处理的元素的索引。
  - `array`（可选）：调用 `reduceRight()` 的数组。
- `initialValue`（可选）：作为第一次调用 `callback` 函数时的第一个参数的值。

接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。

```js
// 基本用法
const array1 = [[0, 1], [2, 3], [4, 5]];
const result = array1.reduceRight((acc, curr) => acc.concat(curr), []);
console.log(result);
// [4, 5, 2, 3, 0, 1]

// 与reduce比较
const resultReduce = array1.reduce((acc, curr) => acc.concat(curr), []);
console.log(resultReduce);
// [0, 1, 2, 3, 4, 5]

// 字符串连接
const letters = ['a', 'b', 'c', 'd', 'e'];
const resultStr = letters.reduceRight((acc, curr) => acc + curr);
console.log(resultStr);
// "edcba"

// 不提供初始值
const numbers = [1, 2, 3, 4];
const sum = numbers.reduceRight((acc, curr) => acc + curr);
console.log(sum);
// 10

// 使用reduceRight实现reverse
function reverse(arr) {
  return arr.reduceRight((acc, curr) => {
    acc.push(curr);
    return acc;
  }, []);
}
console.log(reverse([1, 2, 3, 4, 5]));
// [5, 4, 3, 2, 1]

// 处理嵌套数组（从右到左扁平化）
function flattenDeep(arr) {
  return arr.reduceRight((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flattenDeep(curr) : curr);
  }, []);
}
console.log(flattenDeep([1, [2, [3, [4]], 5]]));
// [5, 4, 3, 2, 1]
```

### Array.prototype.reverse()

```js
arr.reverse();
```

将数组中元素的位置颠倒，并返回该数组的引用。

```js
// 基本用法
const array1 = ['one', 'two', 'three'];
const reversed = array1.reverse();
console.log(reversed);
// ["three", "two", "one"]

// 原数组也被修改
console.log(array1);
// ["three", "two", "one"]

// 反转稀疏数组
const sparse = [1, , 3];
sparse.reverse();
console.log(sparse);
// [3, empty, 1]

// 不修改原数组的反转方法
function reverseWithoutMutation(arr) {
  return [...arr].reverse();
}
const original = [1, 2, 3, 4, 5];
const reversed2 = reverseWithoutMutation(original);
console.log(reversed2); // [5, 4, 3, 2, 1]
console.log(original); // [1, 2, 3, 4, 5]

// 反转字符串
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('hello'));
// "olleh"

// 反转类数组对象
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
};
Array.prototype.reverse.call(arrayLike);
console.log(arrayLike);
// { 0: 3, 1: 2, 2: 1, length: 3 }
```

### Array.prototype.shift()

```js
arr.shift();
```

从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

```js
// 基本用法
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(firstElement);
// 1

console.log(array1);
// [2, 3]

// 从空数组中移除元素
const emptyArray = [];
console.log(emptyArray.shift());
// undefined

// 循环移除所有元素
const numbers = [1, 2, 3, 4, 5];
while (numbers.length > 0) {
  console.log(numbers.shift());
}
// 1
// 2
// 3
// 4
// 5
console.log(numbers);
// []

// 实现队列（先进先出）
class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(item) {
    this.queue.push(item);
  }
  dequeue() {
    return this.queue.shift();
  }
  peek() {
    return this.queue[0];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  size() {
    return this.queue.length;
  }
}

const q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
console.log(q.dequeue()); // 'a'
console.log(q.size());    // 2

// 在类数组对象上使用
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const first = Array.prototype.shift.call(arrayLike);
console.log(first);      // 'a'
console.log(arrayLike);  // { 0: 'b', 1: 'c', length: 2 }
```

### Array.prototype.slice()

```js
arr.slice(start, end);
```

- `start`（可选）：提取起始处的索引。默认为 0。
- `end`（可选）：提取终止处的索引（不包括 end）。默认为数组长度。

返回一个新的数组对象，这一对象是一个由 start 和 end 决定的原数组的浅拷贝（包括 start，不包括 end）。原始数组不会被改变。

```js
// 基本用法
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// ["camel", "duck"]

console.log(animals.slice(1, 5));
// ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// ["duck", "elephant"]

console.log(animals.slice(2, -1));
// ["camel", "duck"]

// 创建浅拷贝
const original = ['a', 'b', 'c'];
const copy = original.slice();
console.log(copy);
// ["a", "b", "c"]

// 浅拷贝的特性
const originalWithObjects = [{ name: 'John' }, { name: 'Jane' }];
const copyWithObjects = originalWithObjects.slice();
copyWithObjects[0].name = 'Mike';
console.log(originalWithObjects[0].name);
// "Mike" (原数组中的对象也被修改)

// 将类数组对象转换为数组
function list() {
  return Array.prototype.slice.call(arguments);
}
const list1 = list(1, 2, 3);
console.log(list1);
// [1, 2, 3]

// 使用slice实现数组克隆
function clone(arr) {
  return arr.slice(0);
}
const numbers = [1, 2, 3, 4, 5];
const cloned = clone(numbers);
console.log(cloned);
// [1, 2, 3, 4, 5]
```

### Array.prototype.some()

```js
arr.some(callback(element, index, array), thisArg);
```

- `callback`：用于测试数组中的元素的函数。
  - `element`：当前正在处理的元素。
  - `index`（可选）：当前正在处理的元素的索引。
  - `array`（可选）：调用 `some()` 的数组。
- `thisArg`（可选）：执行 `callback` 时用作 `this` 的值。

测试数组中是否至少有一个元素通过了由提供的函数实现的测试。

```js
// 基本用法
const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// true

// 检查数组中是否有大于10的元素
const greaterThan10 = (element) => element > 10;
console.log(array.some(greaterThan10));
// false

// 检查对象数组中的属性
const fruits = [
  { name: 'apple', color: 'red' },
  { name: 'banana', color: 'yellow' },
  { name: 'grape', color: 'purple' }
];
console.log(fruits.some(fruit => fruit.color === 'red'));
// true

// 使用thisArg参数
function hasValue(element) {
  return element === this.value;
}
const obj = { value: 3 };
console.log([1, 2, 3, 4, 5].some(hasValue, obj));
// true

// 检查空数组（总是返回false）
console.log([].some(x => x > 0));
// false

// 检查数组中是否存在特定元素
function exists(arr, element) {
  return arr.some(item => item === element);
}
console.log(exists([1, 2, 3, 4], 3));
// true

// 检查数组中是否有素数
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}
console.log([4, 6, 8, 12].some(isPrime));
// false
console.log([4, 6, 7, 12].some(isPrime));
// true
```

### Array.prototype.sort()

```js
arr.sort(compareFn);
```

- `compareFn`（可选）：用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的 Unicode 位点进行排序。
  - 如果 `compareFn(a, b)` 返回值小于 0，则 a 排在 b 前面。
  - 如果 `compareFn(a, b)` 返回值等于 0，则 a 和 b 的相对位置不变。
  - 如果 `compareFn(a, b)` 返回值大于 0，则 b 排在 a 前面。

对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的 UTF-16 代码单元值序列时构建的。

```js
// 基本用法（默认按字符串排序）
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// ["Dec", "Feb", "Jan", "March"]

// 数字排序（不提供比较函数会按字符串排序）
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// [1, 100000, 21, 30, 4]

// 使用比较函数进行数字排序
const array2 = [1, 30, 4, 21, 100000];
array2.sort((a, b) => a - b);
console.log(array2);
// [1, 4, 21, 30, 100000]

// 降序排序
const array3 = [1, 30, 4, 21, 100000];
array3.sort((a, b) => b - a);
console.log(array3);
// [100000, 30, 21, 4, 1]

// 对象数组排序
const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// 按value排序
items.sort((a, b) => a.value - b.value);
console.log(items);
// [{name: "The", value: -12}, {name: "Magnetic", value: 13}, ...]

// 按name排序
items.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(items);
// [{name: "And", value: 45}, {name: "Edward", value: 21}, ...]

// 处理非ASCII字符
const items2 = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items2.sort((a, b) => a.localeCompare(b));
console.log(items2);
// ["adieu", "café", "communiqué", "éclair", "premier", "réservé"]

// 稳定排序示例
const students = [
  { name: "Alex", grade: "A", age: 20 },
  { name: "Beth", grade: "B", age: 19 },
  { name: "Carl", grade: "A", age: 21 },
  { name: "Dave", grade: "B", age: 20 }
];

// 先按年龄排序
students.sort((a, b) => a.age - b.age);
// 再按成绩排序（保持年龄相同时的顺序）
students.sort((a, b) => {
  if (a.grade === b.grade) return 0;
  return a.grade < b.grade ? -1 : 1;
});
console.log(students);
// 结果会保持年龄的相对顺序
```

### Array.prototype.splice()

```js
arr.splice(start, deleteCount, item1, item2, /* …, */ itemN);
```

- `start`：指定修改的开始位置（从0计数）。如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位。
- `deleteCount`（可选）：整数，表示要移除的数组元素的个数。如果省略，则从 `start` 到数组末尾的所有元素都将被删除。
- `item1, item2, ...`（可选）：要添加进数组的元素，从 `start` 位置开始。如果不指定，则 `splice()` 将只删除数组元素。

通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。

```js
// 删除元素
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 1);
console.log(months);
// ["Jan", "April", "June"]

// 替换元素
const months2 = ['Jan', 'March', 'April', 'June'];
months2.splice(1, 1, 'Feb');
console.log(months2);
// ["Jan", "Feb", "April", "June"]

// 插入元素
const months3 = ['Jan', 'April', 'June'];
months3.splice(1, 0, 'Feb', 'March');
console.log(months3);
// ["Jan", "Feb", "March", "April", "June"]

// 删除多个元素
const myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
const removed = myFish.splice(3, 2);
console.log(myFish);
// ["angel", "clown", "drum"]
console.log(removed);
// ["mandarin", "sturgeon"]

// 使用负索引
const array = [1, 2, 3, 4, 5];
array.splice(-2, 1);
console.log(array);
// [1, 2, 3, 5]

// 删除从指定位置到末尾的所有元素
const array2 = [1, 2, 3, 4, 5];
array2.splice(2);
console.log(array2);
// [1, 2]

// 使用splice实现数组的删除操作
function removeItem(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}
const fruits = ['apple', 'banana', 'orange', 'grape'];
removeItem(fruits, 'orange');
console.log(fruits);
// ["apple", "banana", "grape"]
```

### Array.prototype.toLocaleString()

```js
arr.toLocaleString(locales, options);
```

- `locales`（可选）：带有BCP 47语言标记的字符串或字符串数组。
- `options`（可选）：一个可配置属性的对象。

返回一个字符串表示数组中的元素。数组中的元素将使用各自的 `toLocaleString` 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。

```js
// 基本用法
const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString);
// "1,a,12/21/1997, 2:12:00 PM"

// 不同语言环境的格式化
const prices = [1000, 2000, 3000];

// 美国英语格式
console.log(prices.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
// "$1,000.00,$2,000.00,$3,000.00"

// 德语格式
console.log(prices.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// "1.000,00 €,2.000,00 €,3.000,00 €"

// 中文格式
console.log(prices.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' }));
// "¥1,000.00,¥2,000.00,¥3,000.00"

// 日期格式化
const dates = [new Date(2020, 0, 1), new Date(2020, 1, 3), new Date(2020, 2, 15)];
console.log(dates.toLocaleString('en-US'));
// "1/1/2020, 12:00:00 AM,2/3/2020, 12:00:00 AM,3/15/2020, 12:00:00 AM"

// 数字格式化选项
const numbers = [1234.5, 67890, 0.125];
console.log(numbers.toLocaleString('en-US', { maximumFractionDigits: 2 }));
// "1,234.5,67,890,0.13"

// 混合类型数组
const mixed = [1234, 'hello', new Date(), true];
console.log(mixed.toLocaleString());
// 输出取决于浏览器的区域设置
```

### Array.prototype.toReversed()

```js
arr.toReversed();
```

返回一个新数组，它包含原数组的所有元素，但顺序相反。原数组不会被修改。

```js
// 基本用法
const items = [1, 2, 3];
console.log(items.toReversed()); // [3, 2, 1]
console.log(items); // [1, 2, 3] - 原数组不变

// 与reverse()方法比较
const array1 = [1, 2, 3];
const reversed1 = array1.reverse();
console.log(reversed1); // [3, 2, 1]
console.log(array1); // [3, 2, 1] - 原数组被修改

const array2 = [1, 2, 3];
const reversed2 = array2.toReversed();
console.log(reversed2); // [3, 2, 1]
console.log(array2); // [1, 2, 3] - 原数组不变

// 处理稀疏数组
const sparse = [1, , 3];
console.log(sparse.toReversed()); // [3, undefined, 1]

// 链式调用
const result = [1, 2, 3, 4]
  .filter(n => n % 2 === 0)
  .toReversed();
console.log(result); // [4, 2]

// 在类数组对象上使用
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3
};
const reversed = Array.prototype.toReversed.call(arrayLike);
console.log(reversed); // [3, 2, 1]
```

### Array.prototype.toSorted()

```js
arr.toSorted(compareFn);
```

- `compareFn`（可选）：用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的 Unicode 位点进行排序。

返回一个新数组，它包含原数组的所有元素，但是按照提供的比较函数排序。原数组不会被修改。

```js
// 基本用法
const months = ['March', 'Jan', 'Feb', 'Dec'];
const sorted = months.toSorted();
console.log(sorted); // ["Dec", "Feb", "Jan", "March"]
console.log(months); // ["March", "Jan", "Feb", "Dec"] - 原数组不变

// 与sort()方法比较
const array1 = [1, 30, 4, 21];
const sorted1 = array1.sort((a, b) => a - b);
console.log(sorted1); // [1, 4, 21, 30]
console.log(array1); // [1, 4, 21, 30] - 原数组被修改

const array2 = [1, 30, 4, 21];
const sorted2 = array2.toSorted((a, b) => a - b);
console.log(sorted2); // [1, 4, 21, 30]
console.log(array2); // [1, 30, 4, 21] - 原数组不变

// 对象数组排序
const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 }
];

const sortedByValue = items.toSorted((a, b) => a.value - b.value);
console.log(sortedByValue);
// [{name: "The", value: -12}, {name: "Edward", value: 21}, ...]
console.log(items); // 原数组不变

// 链式调用
const result = [5, 1, 4, 2, 3]
  .filter(n => n % 2 === 1)
  .toSorted((a, b) => a - b);
console.log(result); // [1, 3, 5]
```

### Array.prototype.toSpliced()

```js
arr.toSpliced(start, deleteCount, item1, item2, /* …, */ itemN);
```

- `start`：指定修改的开始位置。
- `deleteCount`（可选）：整数，表示要移除的数组元素的个数。
- `item1, item2, ...`（可选）：要添加进数组的元素。

返回一个新数组，它是原数组的一个副本，通过删除、替换或添加元素进行了修改。原数组不会被修改。

```js
// 基本用法
const months = ['Jan', 'Mar', 'Apr', 'May'];

// 在索引1处插入一个元素
const inserted = months.toSpliced(1, 0, 'Feb');
console.log(inserted); // ["Jan", "Feb", "Mar", "Apr", "May"]
console.log(months); // ["Jan", "Mar", "Apr", "May"] - 原数组不变

// 删除一个元素
const deleted = months.toSpliced(2, 1);
console.log(deleted); // ["Jan", "Mar", "May"]

// 替换一个元素
const replaced = months.toSpliced(0, 1, 'January');
console.log(replaced); // ["January", "Mar", "Apr", "May"]

// 与splice()方法比较
const array1 = [1, 2, 3, 4];
const result1 = array1.splice(1, 2, 'a', 'b');
console.log(result1); // [2, 3] - 返回被删除的元素
console.log(array1); // [1, "a", "b", 4] - 原数组被修改

const array2 = [1, 2, 3, 4];
const result2 = array2.toSpliced(1, 2, 'a', 'b');
console.log(result2); // [1, "a", "b", 4] - 返回修改后的新数组
console.log(array2); // [1, 2, 3, 4] - 原数组不变

// 链式调用
const result = [1, 2, 3, 4]
  .filter(n => n % 2 === 0)
  .toSpliced(0, 1, 6);
console.log(result); // [6, 4]
```

### Array.prototype.toString()

```js
arr.toString();
```

返回一个字符串，表示指定的数组及其元素。

```js
// 基本用法
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());
// "1,2,a,1a"

// 嵌套数组
const nested = [1, 2, [3, 4]];
console.log(nested.toString());
// "1,2,3,4"

// 包含对象的数组
const withObjects = [1, 2, { a: 1 }];
console.log(withObjects.toString());
// "1,2,[object Object]"

// 包含null和undefined的数组
const withNull = [1, null, undefined, 2];
console.log(withNull.toString());
// "1,,,2"

// 与join()方法比较
const array2 = [1, 2, 3, 4];
console.log(array2.toString()); // "1,2,3,4"
console.log(array2.join());     // "1,2,3,4"
console.log(array2.join(',')); // "1,2,3,4"
console.log(array2.join('+')); // "1+2+3+4"

// 在类数组对象上使用
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
};
console.log(Array.prototype.toString.call(arrayLike));
// "1,2,3"
```

### Array.prototype.unshift()

```js
arr.unshift(element1, element2, /* …, */ elementN);
```

- `elementN`：要添加到数组开头的元素。

将一个或多个元素添加到数组的开头，并返回该数组的新长度。

```js
// 基本用法
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
// 5

console.log(array1);
// [4, 5, 1, 2, 3]

// 在空数组上使用
const empty = [];
console.log(empty.unshift('a'));
// 1
console.log(empty);
// ["a"]

// 使用展开运算符添加数组
const array2 = [4, 5];
const array3 = [1, 2, 3];
array3.unshift(...array2);
console.log(array3);
// [4, 5, 1, 2, 3]

// 在类数组对象上使用
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3
};
Array.prototype.unshift.call(arrayLike, 4, 5);
console.log(arrayLike);
// { '0': 4, '1': 5, '2': 1, '3': 2, '4': 3, length: 5 }

// 实现循环队列
class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.size = size;
  }
  
  enqueue(item) {
    if (this.queue.length >= this.size) {
      this.queue.pop();
    }
    this.queue.unshift(item);
    return this.queue;
  }
}

const cq = new CircularQueue(3);
console.log(cq.enqueue('a')); // ["a"]
console.log(cq.enqueue('b')); // ["b", "a"]
console.log(cq.enqueue('c')); // ["c", "b", "a"]
console.log(cq.enqueue('d')); // ["d", "c", "b"]
```

### Array.prototype.values()

```js
arr.values();
```

返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值。

```js
// 基本用法
const array1 = ['a', 'b', 'c'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}
// "a"
// "b"
// "c"

// 将迭代器转换为数组
const array2 = ['a', 'b', 'c'];
const values = [...array2.values()];
console.log(values);
// ["a", "b", "c"]

// 手动迭代
const array3 = ['a', 'b', 'c'];
const iterator3 = array3.values();

console.log(iterator3.next().value); // "a"
console.log(iterator3.next().value); // "b"
console.log(iterator3.next().value); // "c"
console.log(iterator3.next().done);  // true

// 处理稀疏数组（空槽被视为undefined）
const sparse = ['a', , 'c'];
for (const value of sparse.values()) {
  console.log(value);
}
// "a"
// undefined
// "c"

// 与其他迭代器方法比较
const array4 = ['a', 'b', 'c'];

// values() - 返回值
const valuesIterator = array4.values();
for (const value of valuesIterator) {
  console.log(value);
}
// "a", "b", "c"

// keys() - 返回索引
const keysIterator = array4.keys();
for (const key of keysIterator) {
  console.log(key);
}
// 0, 1, 2

// entries() - 返回[索引, 值]对
const entriesIterator = array4.entries();
for (const entry of entriesIterator) {
  console.log(entry);
}
// [0, "a"], [1, "b"], [2, "c"]
```

### Array.prototype.with()

```js
arr.with(index, value);
```

- `index`：要替换的元素的索引。如果是负数，则从数组末尾开始计算。
- `value`：要在指定索引处插入的新值。

返回一个新数组，其中一个元素被新值替换。原数组不会被修改。

```js
// 基本用法
const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5] - 原数组不变

// 使用负索引
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2.with(-1, 10)); // [1, 2, 3, 4, 10]

// 与直接赋值比较
const arr3 = [1, 2, 3, 4, 5];
arr3[2] = 6;
console.log(arr3); // [1, 2, 6, 4, 5] - 原数组被修改

// 链式调用
const result = [1, 2, 3, 4, 5]
  .filter(x => x % 2 === 1)
  .with(1, 10);
console.log(result); // [1, 10, 5]

// 创建不可变更新
function updateItem(array, index, value) {
  return array.with(index, value);
}
const original = [1, 2, 3];
const updated = updateItem(original, 1, 42);
console.log(updated); // [1, 42, 3]
console.log(original); // [1, 2, 3]

// 索引超出范围
try {
  console.log([1, 2, 3].with(10, 5));
} catch (e) {
  console.log(e.name); // RangeError
}

// 在类数组对象上使用
const arrayLike = {
  length: 3,
  0: 1,
  1: 2,
  2: 3
};
const result2 = Array.prototype.with.call(arrayLike, 1, 42);
console.log(result2); // [1, 42, 3]
```
