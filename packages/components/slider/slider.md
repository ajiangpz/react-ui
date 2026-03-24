---
title: Slider 滑块
description: 滑块组件用于在一定范围内选择特定值，支持单滑块和双滑块（范围选择）模式。
icComponent: true
---

## 基础用法

基本的滑块用法，通过 `value` 和 `onChange` 实现受控模式。

{{ default }}

## 范围选择

通过 `range` 属性启用范围选择模式，使用双滑块来选择一个范围。

{{ range }}

## 带数字输入框

通过 `inputNumberProps` 属性添加数字输入框，方便精确输入值。

{{ with-input-number }}

## 步长设置

通过 `step` 属性设置滑块的步长，控制每次拖动的增量。

{{ step }}

## 刻度标记

通过 `marks` 属性添加刻度标记，支持数组和对象两种形式。

{{ marks }}

## 垂直布局

通过 `layout` 属性设置为 "vertical" 实现垂直布局。

{{ vertical }}

## 禁用状态

通过 `disabled` 属性禁用滑块组件。

{{ disabled }}

## 自定义标签

通过 `label` 属性自定义滑块的标签显示。

{{ custom-label }}

<!-- API_DOC -->

## API

| 属性             | 类型                                                                                      | 默认值         | 说明                         |
| ---------------- | ----------------------------------------------------------------------------------------- | -------------- | ---------------------------- |
| value            | `number \| number[]`                                                                      | `undefined`    | 滑块值                       |
| defaultValue     | `number \| number[]`                                                                      | `0`            | 默认值                       |
| min              | `number`                                                                                  | `0`            | 滑块范围最小值               |
| max              | `number`                                                                                  | `100`          | 滑块范围最大值               |
| step             | `number`                                                                                  | `1`            | 步长                         |
| disabled         | `boolean`                                                                                 | `false`        | 是否禁用组件                 |
| range            | `boolean`                                                                                 | `false`        | 是否为双游标滑块（范围选择） |
| layout           | `"horizontal" \| "vertical"`                                                              | `"horizontal"` | 滑块布局方向                 |
| label            | `boolean \| ((params: { value: number, position: "start" \| "end" }) => React.ReactNode)` | `false`        | 滑块当前值文本               |
| inputNumberProps | `boolean \| object`                                                                       | `false`        | 数字输入框组件配置           |
| marks            | `number[] \| Record<number, string>`                                                      | `undefined`    | 刻度标记                     |
| onChange         | `(value: number \| number[]) => void`                                                     | `undefined`    | 值变化时的回调               |
