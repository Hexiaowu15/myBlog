---
text: JS23
title: Js面试题第二天
icon: circle-info
date: 2025-02-20
lastUpdated: true
prev: true
next: true
article: true
breadcrumb: false
comment: true
---

## JS面试题第二天

### 1. 请解释一下什么是闭包？

闭包是指有权访问另一个函数作用域中的变量的函数。创建闭包的常见方式，就是在一个函数内部创建另一个函数，通过另一个函数访问这个函数的局部变量，从而实现闭包的效果。

```javascript
function outer() {
  let a = 1;
  function inner() {
    console.log(a);
  }
  return inner;
}

let f = outer();
f(); // 1
```

在上面的例子中，`outer` 函数内部创建了一个 `inner` 函数，并通过 `inner` 函数访问了 `outer` 函数的局部变量 `a`。`inner` 函数被返回，并赋值给变量 `f`。当 `f` 被调用时，`inner` 函数中的 `console.log(a)` 语句输出了 `1`。

闭包的作用主要有两个：

1. 它可以读取函数内部的变量，即使函数是在当前作用域之外执行的。
2. 它可以将函数内部的变量保存到内存中，使得这些变量不会被回收，从而在函数执行完毕后一直存在。

### 2. 请解释一下什么是作用域？

作用域是指变量和函数有权访问的范围。在 JavaScript 中，每个函数都有自己的作用域，这个作用域决定了变量的生命周期，以及变量的作用范围。

JavaScript 作用域有两种类型：

1. 全局作用域：全局作用域是最外层的作用域，在任何位置都可以访问。全局作用域中的变量在整个程序中都可以访问。

2. 函数作用域：函数作用域是指函数内部定义的变量，只能在函数内部访问，在函数执行完毕后，函数作用域中的变量也会被销毁。

```javascript
let a = 1;
function outer() {
  let b = 2;
  function inner() {
    console.log(a + b);
  }
  return inner;
}

let f = outer();
f(); // 3
```

在上面的例子中，`outer` 函数内部定义了一个 `inner` 函数，并通过 `inner` 函数访问了 `outer` 函数的局部变量 `a` 和 `b`。`inner` 函数被返回，并赋值给变量 `f`。当 `f` 被调用时，`inner` 函数中的 `console.log(a + b)` 语句输出了 `3`。