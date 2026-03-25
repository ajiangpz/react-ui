---
title: Layout 布局
description: 用于页面布局的基础组件，包含 Header、Content、Footer、Aside 子组件。
isComponent: false
---

### 顶部导航布局

使用顶部导航的布局方式，适合内容较少的页面。

{{ top-navigation }}

### 侧边导航布局

使用左侧侧边导航的布局方式，适合内容较多的管理系统。

{{ side-navigation }}

### 侧边导航布局（右侧）

使用右侧侧边导航的布局方式，适合特殊场景的页面。

{{ side-navigation-right }}

### 组合导航布局（侧边在左）

结合顶部导航和左侧侧边导航的布局方式，适合复杂的管理系统。

{{ combine-left }}

### 组合导航布局（侧边在右）

结合顶部导航和右侧侧边导航的布局方式，适合特殊场景的管理系统。

{{ combine-right }}

### 自定义侧边栏宽度

自定义侧边栏宽度的布局方式，可以根据需要调整侧边栏的宽度。

{{ custom-aside-width }}

### 自定义头部和底部高度

自定义头部和底部高度的布局方式，可以根据需要调整头部和底部的高度。

{{ custom-height }}

### 双侧边栏布局

使用双侧边栏的布局方式，适合需要更多导航空间的页面。

{{ double-sidebar }}

<!-- API_DOC -->

## API

### Layout

| 属性      | 类型                         | 默认值         | 说明     |
| --------- | ---------------------------- | -------------- | -------- |
| direction | `'vertical' \| 'horizontal'` | `'horizontal'` | 布局方向 |
| children  | `React.ReactNode`            | -              | 子元素   |

### Header

| 属性     | 类型               | 默认值 | 说明     |
| -------- | ------------------ | ------ | -------- |
| height   | `string \| number` | `64px` | 头部高度 |
| children | `React.ReactNode`  | -      | 子元素   |

### Content

| 属性     | 类型              | 默认值 | 说明   |
| -------- | ----------------- | ------ | ------ |
| children | `React.ReactNode` | -      | 子元素 |

### Footer

| 属性     | 类型               | 默认值 | 说明     |
| -------- | ------------------ | ------ | -------- |
| height   | `string \| number` | `48px` | 底部高度 |
| children | `React.ReactNode`  | -      | 子元素   |

### Aside

| 属性     | 类型               | 默认值  | 说明       |
| -------- | ------------------ | ------- | ---------- |
| width    | `string \| number` | `200px` | 侧边栏宽度 |
| children | `React.ReactNode`  | -       | 子元素     |
