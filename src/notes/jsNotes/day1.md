---
# 文章类型
type: note
# 这是文章的标题
title: JavaScript ES6+新增语法
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: emojione-v1:memo
# 这是侧边栏的顺序
order: 1
# 设置写作时间
date: 2025-03-11
# 一个页面可以有多个分类
category:
  - js
# 一个页面可以有多个标签
tag:
  - js基础
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在星标文章中
star: false
# 面包屑
breadcrumb: false
# 评论
comment: true
---

### ES6 (ECMAScript 2015)
```js
// 1. 箭头函数
const add = (a, b) => a + b; 

// 2. 解构赋值
const [x, y] = [1, 2];
const {name, age} = {name: 'John', age: 30};

// 3. Promise
new Promise((resolve) => setTimeout(resolve, 1000));

// 4. 类语法
class Person {
  constructor(name) {
    this.name = name;
  }
}

// 5. 模板字符串
const greeting = `Hello ${name}!`;
```

### ES7 (ECMAScript 2016)
```js
// 1. 数组includes方法
[1, 2, 3].includes(2); // true

// 2. 指数运算符
2 ** 3; // 8
```

### ES8 (ECMAScript 2017)
```js
// 1. async/await
async function fetchData() {
  const res = await fetch('/api');
  return res.json();
}

// 2. Object.values/Object.entries
Object.values({a: 1, b: 2}); // [1, 2]
```

### ES9 (ECMAScript 2018)
```js
// 1. Promise.finally
fetch('/api')
  .then(handle)
  .catch(err)
  .finally(() => {});

// 2. 对象展开运算符
const merged = {...obj1, ...obj2};
```

### ES10 (ECMAScript 2019)
```js
// 1. Array.flat
[1, [2, 3]].flat(); // [1, 2, 3]

// 2. Object.fromEntries
Object.fromEntries([['a', 1], ['b', 2]]); // {a:1, b:2}
```

### ES12 (ECMAScript 2021)
```js
// 3. WeakRef & FinalizationRegistry
const objRef = new WeakRef(someObject);
const registry = new FinalizationRegistry(heldValue => {
  // 清理逻辑
});
registry.register(someObject, 'value');
```

### ES13 (ECMAScript 2022)
```js
// 1. 可选链操作符
user?.address?.street;

// 2. 空值合并运算符
const value = input ?? 'default';
```

### ES12 (ECMAScript 2021)
```js
// 1. String.replaceAll
'hello'.replaceAll('l', 'x'); // 'hexxo'

// 2. Promise.any
Promise.any([promise1, promise2]);

// 3. 动态import()
const module = await import('./module.js');
```

### ES13 (ECMAScript 2022)
```js
// 1. 顶层await
const data = await fetchData();

// 2. 类字段声明
class Counter {
  count = 0;
}

// 3. 类静态块
class MyClass {
  static {
    // 初始化逻辑
  }
}
```

### ES14 (ECMAScript 2023)
```js
// 1. Array.findLast
[1, 2, 3].findLast(n => n > 1); // 3

// 2. Hashbang语法
#!/usr/bin/env node

// 3. Array.prototype.with
const arr = [1, 2, 3];
arr.with(1, 99); // [1,99,3]
```

### ES15 (ECMAScript 2024)
```js
// 1. Array.groupBy
[1, 2, 3].groupBy(n => n % 2);

// 2. 装饰器语法
@log
class MyComponent {}
```

