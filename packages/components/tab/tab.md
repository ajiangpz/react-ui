---
title: Tab 选项卡
description: 选项卡组件用于内容分类后的展示切换，支持卡片风格、可添加删除等功能。
icComponent: true
---

## 基础用法

基本的选项卡用法，通过 `value` 和 `onChange` 实现受控模式。

{{ default }}

## 卡片风格

通过 `theme="card"` 设置卡片风格的选项卡。

{{ card-theme }}

## 不同位置

通过 `placement` 属性设置选项卡的位置，支持 top、bottom、left、right。

{{ placement }}

## 可删除选项卡

通过 `removable` 属性和 `onRemove` 回调实现可删除选项卡功能。

{{ removable }}

## 可添加选项卡

通过 `addable` 属性和 `onAdd` 回调实现可添加选项卡功能。

{{ addable }}

## 禁用状态

通过 `disabled` 属性禁用选项卡，支持部分禁用和全部禁用。

{{ disabled }}

## 不同尺寸

通过 `size` 属性设置选项卡的尺寸，支持 medium（默认）和 large。

{{ sizes }}

## 带操作区域

通过 `action` 属性添加选项卡右侧的操作按钮。

{{ with-action }}

## 懒加载

通过 `lazy` 属性实现选项卡内容的懒加载，只有在选项卡被激活时才会渲染内容。

{{ lazy }}

<!-- API_DOC -->

## API

| 属性           | 类型                                                            | 默认值      | 说明                       |
| -------------- | --------------------------------------------------------------- | ----------- | -------------------------- |
| value          | `string \| number`                                              | `undefined` | 激活的选项卡值（受控）     |
| defaultValue   | `string \| number`                                              | `undefined` | 激活的选项卡值（非受控）   |
| disabled       | `boolean`                                                       | `false`     | 是否禁用选项卡             |
| addable        | `boolean`                                                       | `false`     | 选项卡是否可增加           |
| dragSort       | `boolean`                                                       | `false`     | 是否开启拖拽调整顺序       |
| placement      | `"top" \| "bottom" \| "left" \| "right"`                        | `"top"`     | 选项卡位置                 |
| scrollPosition | `"auto" \| "start" \| "center" \| "end"`                        | `"auto"`    | 选中滑块滚动最终停留的位置 |
| size           | `"medium" \| "large"`                                           | `"medium"`  | 组件尺寸                   |
| theme          | `"normal" \| "card"`                                            | `"normal"`  | 选项卡风格                 |
| action         | `React.ReactNode`                                               | `undefined` | 操作区域内容               |
| onChange       | `(value: string \| number) => void`                             | `undefined` | 切换选项卡时的回调         |
| onAdd          | `() => void`                                                    | `undefined` | 点击添加按钮时的回调       |
| onRemove       | `(options: { value: string \| number; index: number }) => void` | `undefined` | 点击删除按钮时的回调       |

### TabPanel

| 属性      | 类型               | 默认值      | 说明               |
| --------- | ------------------ | ----------- | ------------------ |
| label     | `React.ReactNode`  | `undefined` | 选项卡标题         |
| value     | `string \| number` | `undefined` | 选项卡值           |
| disabled  | `boolean`          | `false`     | 是否禁用当前选项卡 |
| removable | `boolean`          | `false`     | 是否可删除         |
| lazy      | `boolean`          | `false`     | 是否懒加载         |
