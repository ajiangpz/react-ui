---
title: Switch 开关
description: 开关组件用于表示开/关两种状态之间的切换，是一种即时生效的选择控件。
isComponent: false
---

## 基础用法

基本的开关用法，通过 `defaultValue` 设置默认状态。

{{ default }}

## 受控用法

通过 `value` 和 `onChange` 实现受控模式。

{{ controlled }}

## 不同尺寸

Switch 组件支持三种尺寸：small、medium（默认）和 large。

{{ sizes }}

## 带文字描述

通过 `label` 属性添加开关状态的文字描述。

{{ with-label }}

## 禁用状态

通过 `disabled` 属性禁用开关组件。

{{ disabled }}

## 加载状态

通过 `loading` 属性显示加载状态。

{{ loading }}

## 自定义值

通过 `customValue` 属性自定义开关的值。

{{ custom-value }}

## 异步切换

结合 `loading` 属性实现异步切换效果。

{{ async-change }}

## beforeChange 拦截

通过 `beforeChange` 属性在切换前进行拦截，可用于确认操作。

{{ before-change }}

<!-- API_DOC -->

## API

| 属性         | 类型                                | 默认值          | 说明                                     |
| ------------ | ----------------------------------- | --------------- | ---------------------------------------- |
| value        | `boolean \| string \| number`       | `undefined`     | 开关值（受控）                           |
| defaultValue | `boolean \| string \| number`       | `false`         | 默认值（非受控）                         |
| disabled     | `boolean`                           | `false`         | 是否禁用组件                             |
| loading      | `boolean`                           | `false`         | 是否处于加载中状态                       |
| size         | `"small" \| "medium" \| "large"`    | `"medium"`      | 开关尺寸                                 |
| label        | `[string, string]`                  | `undefined`     | 开关内容，[开启时内容，关闭时内容]       |
| customValue  | `[any, any]`                        | `[true, false]` | 自定义开关的值，[打开时的值，关闭时的值] |
| beforeChange | `() => boolean \| Promise<boolean>` | `undefined`     | 切换前的拦截函数                         |
| onChange     | `(value: any) => void`              | `undefined`     | 值变化时的回调                           |
