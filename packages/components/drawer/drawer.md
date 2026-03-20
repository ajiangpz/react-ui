---
title: Drawer 抽屉
description: 抽屉组件用于在屏幕边缘显示一个面板，可从上、下、左、右四个方向滑出，常用于展示详情、表单等内容。
isComponent: true
---

### 基础抽屉

最简单的抽屉用法。

{{ default }}

### 不同方向

抽屉支持从不同方向滑出，包括左、右、上、下。

{{ placement }}

### 不同尺寸

抽屉支持多种尺寸，包括小、中、大。

{{ size }}

### 可拖拽调整大小

抽屉大小可拖拽调整。

{{ size-draggable }}

### 无遮罩层

抽屉可以设置为无遮罩层模式。

{{ no-overlay }}

### 自定义头部和底部

可以自定义抽屉的头部和底部内容。

{{ custom-header-footer }}

### 无底部操作栏

抽屉可以设置为无底部操作栏。

{{ no-footer }}

### 事件回调

抽屉支持多种事件回调。

{{ events }}

<!-- API_DOC -->

## API

### Drawer

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| visible | `boolean` | `false` | 组件是否可见 |
| header | `React.ReactNode` | - | 头部内容 |
| body | `React.ReactNode` | - | 抽屉内容 |
| footer | `boolean` | `true` | 底部操作栏 |
| closeBtn | `boolean` | `true` | 关闭按钮 |
| closeOnEscKeydown | `boolean` | `true` | 按下 ESC 时是否触发抽屉关闭事件 |
| closeOnOverlayClick | `boolean` | `true` | 点击蒙层时是否触发关闭事件 |
| destroyOnClose | `boolean` | `false` | 抽屉关闭时是否销毁节点 |
| mode | `'overlay' \| 'push'` | `'overlay'` | 展开方式 |
| placement | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | 抽屉方向 |
| preventScrollThrough | `boolean` | `true` | 防止滚动穿透 |
| showOverlay | `boolean` | `true` | 是否显示遮罩层 |
| size | `string` | `'medium'` | 尺寸 |
| sizeDraggable | `boolean \| { min: number; max: number }` | `false` | 抽屉大小可拖拽调整 |
| zIndex | `number` | - | 抽屉层级 |
| onBeforeOpen | `() => void` | - | 抽屉打开前的回调 |
| onBeforeClose | `() => void` | - | 抽屉关闭前的回调 |
| onClose | `(context: { trigger: string }) => void` | - | 抽屉关闭时的回调 |
| onConfirm | `() => void` | - | 点击确认按钮时的回调 |
| onCancel | `() => void` | - | 点击取消按钮时的回调 |