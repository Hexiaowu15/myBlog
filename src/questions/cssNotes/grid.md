---
# 文章类型
article: false
# 这是文章的标题
title: CSS grid布局
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
  - css
# 一个页面可以有多个标签
tag:
  - css基础
  - grid布局
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在星标文章中
star: false
# 面包屑
breadcrumb: false
# 评论
comment: true
---

# CSS Grid 布局详解

## Grid 布局基础概念

CSS Grid 布局是一个二维的布局系统，它可以同时处理行和列，是目前最强大的 CSS 布局方案之一。与传统的布局方式和 Flexbox（一维布局）相比，Grid 布局可以轻松创建复杂的网格结构。

### 基本术语

- **Grid 容器（Grid Container）**：设置了 `display: grid` 的元素
- **Grid 项目（Grid Item）**：Grid 容器的直接子元素
- **Grid 线（Grid Line）**：构成网格结构的分界线
- **Grid 单元格（Grid Cell）**：网格中的最小单位
- **Grid 区域（Grid Area）**：由多个 Grid 单元格组成的矩形区域

### 创建一个基本的 Grid 布局

```html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px;
  gap: 10px;
}

.item {
  background-color: #8ca0ff;
  padding: 20px;
  text-align: center;
}
```

上面的代码创建了一个 3×2 的网格，每个单元格的宽高为 100px，单元格之间的间距为 10px。

## Grid 容器属性

### grid-template-columns 和 grid-template-rows

这两个属性定义了网格的列和行的大小。

#### 固定大小

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: 50px 100px;
}
```

#### 使用 fr 单位（fraction 分数）

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr; /* 按 1:2:1 的比例分配空间 */
  grid-template-rows: 1fr 2fr;
}
```

#### 使用 repeat() 函数

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 相当于 1fr 1fr 1fr */
  grid-template-rows: repeat(2, 100px);
}
```

#### 混合使用不同单位

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 1fr 2fr;
  grid-template-rows: auto 100px 1fr;
}
```

#### minmax() 函数

```css
.grid-container {
  display: grid;
  grid-template-columns: minmax(100px, 1fr) 2fr 1fr;
  /* 第一列最小宽度为 100px，最大为 1fr */
}
```

### grid-template-areas

通过命名网格区域来定义布局结构。

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
}

.header {
  grid-area: header;
}
.sidebar {
  grid-area: sidebar;
}
.content {
  grid-area: content;
}
.footer {
  grid-area: footer;
}
```

### gap, row-gap, column-gap

设置网格单元格之间的间距。

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 10px; /* 行间距 */
  column-gap: 20px; /* 列间距 */
  /* 或者使用简写 */
  gap: 10px 20px; /* 行间距 列间距 */
}
```

### justify-items 和 align-items

控制网格项目在单元格内的水平和垂直对齐方式。

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center; /* 水平居中，可选值：start, end, center, stretch */
  align-items: center; /* 垂直居中，可选值：start, end, center, stretch */
}
```

### justify-content 和 align-content

控制整个网格在容器内的对齐方式（当网格总大小小于容器时）。

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  height: 500px;
  justify-content: center; /* 水平居中，可选值：start, end, center, stretch, space-around, space-between, space-evenly */
  align-content: center; /* 垂直居中，可选值同上 */
}
```

### grid-auto-columns 和 grid-auto-rows

设置自动生成的网格轨道的大小。

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 100px);
  grid-auto-rows: 100px; /* 自动生成的行高为 100px */
}
```

### grid-auto-flow

控制自动放置的网格项目的排列方式。

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row; /* 默认值，先行后列排列 */
  /* grid-auto-flow: column; 先列后行排列 */
  /* grid-auto-flow: dense; 尝试填充网格中的空隙 */
}
```

## Grid 项目属性

### grid-column 和 grid-row

指定网格项目的位置和跨度。

```css
.item1 {
  grid-column: 1 / 3; /* 从第1条列线到第3条列线，跨越2列 */
  grid-row: 1 / 2; /* 从第1条行线到第2条行线，跨越1行 */
}

.item2 {
  grid-column: 1 / span 2; /* 从第1条列线开始，跨越2列 */
  grid-row: 2 / span 2; /* 从第2条行线开始，跨越2行 */
}
```

### grid-area

指定网格项目放置在哪个命名的网格区域，或者直接指定位置。

```css
.item1 {
  grid-area: header; /* 放置在名为 header 的区域 */
}

.item2 {
  grid-area: 2 / 1 / 4 / 3; /* 简写：grid-row-start / grid-column-start / grid-row-end / grid-column-end */
}
```

### justify-self 和 align-self

控制单个网格项目在单元格内的对齐方式，覆盖容器的 justify-items 和 align-items 设置。

```css
.item1 {
  justify-self: end; /* 水平靠右，可选值：start, end, center, stretch */
  align-self: center; /* 垂直居中，可选值同上 */
}
```

## 响应式 Grid 布局技巧

### 使用 auto-fill 和 auto-fit

```css
.grid-container {
  display: grid;
  /* auto-fill：尽可能多地创建列，即使有些列是空的 */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  /* auto-fit：尽可能多地创建列，但会扩展现有列以填充空间 */
  /* grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */
  gap: 20px;
}
```

### 结合媒体查询

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 600px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 使用 CSS 变量实现动态布局

```css
:root {
  --grid-cols: 1;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(var(--grid-cols), 1fr);
  gap: 20px;
}

@media (min-width: 600px) {
  :root {
    --grid-cols: 2;
  }
}

@media (min-width: 900px) {
  :root {
    --grid-cols: 3;
  }
}
```

## Grid 与 Flexbox 的比较

| 特性     | Grid                           | Flexbox                            |
| -------- | ------------------------------ | ---------------------------------- |
| 维度     | 二维（行和列）                 | 一维（行或列）                     |
| 适用场景 | 整体页面布局                   | 组件内部布局                       |
| 对齐方式 | 可以同时控制行和列的对齐       | 只能控制主轴和交叉轴的对齐         |
| 项目排列 | 可以精确控制项目位置           | 主要按照流的方向排列               |
| 响应式   | 通过 fr 单位和 minmax() 等实现 | 通过 flex-grow, flex-shrink 等实现 |

## 实际应用场景

### 网站整体布局

```css
body {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav content sidebar"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

header {
  grid-area: header;
}
nav {
  grid-area: nav;
}
main {
  grid-area: content;
}
aside {
  grid-area: sidebar;
}
footer {
  grid-area: footer;
}
```

### 图片画廊

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
}

.gallery-item {
  height: 250px;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.05);
}
```

### 卡片布局

```css
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.card {
  display: grid;
  grid-template-rows: auto 1fr auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-header {
  grid-row: 1;
}
.card-body {
  grid-row: 2;
}
.card-footer {
  grid-row: 3;
}
```

### 不规则布局（类似 Pinterest）

```css
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 10px;
  gap: 15px;
}
```
