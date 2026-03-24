---
title: List 列表
description: 列表组件用于展示一组数据，支持基础列表、带图片列表、虚拟滚动、加载更多等功能。
isComponent: true
---

## 基础用法

基本的列表组件用法，使用 `List` 和 `ListItem` 组件组合展示数据。

{{ default }}

## 不同尺寸

List 组件支持三种尺寸：small、medium（默认）和 large。

{{ sizes }}

## 分割线

通过 `split` 属性控制是否显示分割线，默认为 true。

{{ split }}

## 斑马纹

通过 `stripe` 属性启用斑马纹效果，使列表更加美观易读。

{{ stripe }}

## 带图片列表

使用 `ListItemMeta` 组件可以创建带图片的列表项，支持图片、标题和描述。

{{ with-image }}

## 多行文本

`ListItemMeta` 组件支持多行文本的显示，标题和描述都会自动换行。

{{ multiline }}

## 头部和底部

通过 `header` 和 `footer` 属性为列表添加头部和底部内容。

{{ header-footer }}

## 滚动加载

通过 `onLoadMore` 属性实现滚动到底部时加载更多数据的功能。

{{ scroll-loading }}

## 虚拟滚动

通过 `scroll` 属性配置虚拟滚动，适用于长列表的性能优化。

{{ virtual-scroll }}

## 异步加载状态

通过 `asyncLoading` 属性设置异步加载时的提示信息。

{{ async-loading }}

<!-- API_DOC -->

## API

### List

| 属性         | 类型                                                                              | 默认值       | 说明             |
| ------------ | --------------------------------------------------------------------------------- | ------------ | ---------------- |
| asyncLoading | `string \| React.ReactNode`                                                       | `''`         | 自定义加载中状态 |
| footer       | `string \| React.ReactNode`                                                       | -            | 底部内容         |
| header       | `string \| React.ReactNode`                                                       | -            | 头部内容         |
| layout       | `'horizontal' \| 'vertical'`                                                      | `'vertical'` | 排列方式         |
| size         | `'small' \| 'medium' \| 'large'`                                                  | `'medium'`   | 尺寸             |
| split        | `boolean`                                                                         | `true`       | 是否展示分割线   |
| stripe       | `boolean`                                                                         | `false`      | 是否展示斑马纹   |
| scroll       | `{ type: 'virtual', rowHeight: number, bufferSize?: number, threshold?: number }` | -            | 虚拟滚动配置     |
| onScroll     | `(context: { scrollTop: number; scrollBottom: number }) => void`                  | -            | 滚动时的回调     |
| onLoadMore   | `() => void`                                                                      | -            | 加载更多时的回调 |

### ListItem

| 属性     | 类型              | 默认值 | 说明         |
| -------- | ----------------- | ------ | ------------ |
| children | `React.ReactNode` | -      | 子元素       |
| onClick  | `() => void`      | -      | 点击时的回调 |

### ListItemMeta

| 属性        | 类型                        | 默认值 | 说明     |
| ----------- | --------------------------- | ------ | -------- |
| description | `React.ReactNode`           | -      | 描述内容 |
| image       | `string \| React.ReactNode` | -      | 图片     |
| title       | `React.ReactNode`           | -      | 标题     |
