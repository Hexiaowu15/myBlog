---
text: JS23
title: Js面试题第三天
icon: circle-info
lastUpdated: true
prev: true
next: true
article: false
breadcrumb: false
comment: true
---

## JS 面试题第三天

### 1. 请解释一下什么是闭包？

闭包是指一个函数能够记住并访问它的词法作用域，即使这个函数在其词法作用域之外执行。

```javascript
function createClosure() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const closure = createClosure();
closure(); // 输出 1
closure(); // 输出 2
```

### 2. 请解释一下什么是作用域？

作用域是指变量和函数的可访问性区域，决定了代码中变量和函数的可见性。
```javascript let globalVar = "全局变量";
function myFunction() {
let localVar = "局部变量";
console.log(globalVar); // 可以访问全局变量
console.log(localVar); // 可以访问局部变量
}
myFunction();
console.log(globalVar); // 可以访问全局变量
// console.log(localVar); // 这行代码会报错，无法访问局部变量
```

### 3. 请解释一下什么是 this 关键字？

this 关键字在 JavaScript 中是一个特殊的关键字，它代表着当前执行代码的对象的引用。

在函数中，this 关键字可以有四种不同的使用方式：

1. 作为函数调用时，this 指向全局对象。

```javascript
console.log(this); // 输出 window
```

2. 作为对象的方法调用时，this 指向该对象。

```javascript
const person = {
  name: "John",
  sayName: function () {
    console.log(this.name);
  },
};
person.sayName(); // 输出 John
```

3. 作为构造函数调用时，this 指向新创建的对象。

```javascript
function Person(name) {
  this.name = name;
}
const john = new Person("John");  
console.log(john.name); // 输出 John
```

4. 作为 apply、call、bind 方法的调用时，this 指向指定的对象。

5. 在严格模式下，this 不能指向全局对象，否则会报错。

```javascript
"use strict";
console.log(this); // 输出 undefined
```

6. 在箭头函数中，this 指向词法作用域的 this。

```javascript
const person = {
  name: "John",
  sayName: () => {
    console.log(this.name);
  },
};
person.sayName(); // 输出 John
```