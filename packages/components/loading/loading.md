---
title: Loading 加载
description: 加载组件用于在数据加载过程中显示加载状态，支持全屏加载、包裹元素加载、延迟加载等功能。
isComponent: false
---

## 基础用法

基本的加载组件用法。

{{ default }}

## 不同尺寸

Loading 组件支持多种尺寸，可以通过 `size` 属性设置。

{{ sizes }}

## 带文字

通过 `text` 属性添加加载提示文字。

{{ with-text }}

## 包裹元素

将 `Loading` 组件作为父元素包裹其他内容，实现内容加载效果。

{{ wrapper }}

## 全屏加载

通过 `fullscreen` 属性实现全屏加载效果。

{{ fullscreen }}

## 延迟加载

通过 `delay` 属性设置延迟显示加载效果的时间，避免短时间内频繁显示加载动画。

{{ delay }}

## 继承颜色

通过 `inheritColor` 属性使加载动画继承父元素的颜色。

{{ inherit-color }}

## 无遮罩层

通过 `showOverlay={false}` 移除加载时的遮罩层。

{{ no-overlay }}

<!-- API_DOC -->

## API

### Loading

| 属性                 | 类型                    | 默认值     | 说明                             |
| -------------------- | ----------------------- | ---------- | -------------------------------- |
| attach               | `string \| HTMLElement` | -          | 挂载元素                         |
| delay                | `number`                | -          | 延迟显示加载效果的时间（毫秒）   |
| fullscreen           | `boolean`               | `false`    | 是否显示为全屏加载               |
| indicator            | `boolean`               | `true`     | 加载指示符                       |
| inheritColor         | `boolean`               | `false`    | 是否继承父元素颜色               |
| loading              | `boolean`               | `true`     | 是否处于加载状态                 |
| preventScrollThrough | `boolean`               | `false`    | 防止滚动穿透（全屏加载模式有效） |
| showOverlay          | `boolean`               | `false`    | 是否需要遮罩层                   |
| size                 | `string \| number`      | `'medium'` | 尺寸                             |
| text                 | `React.ReactNode`       | -          | 加载提示文案                     |
| zIndex               | `number`                | -          | 层级                             |
| children             | `React.ReactNode`       | -          | 子元素（用于包裹模式）           |
