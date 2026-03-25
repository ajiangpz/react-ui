---
title: TagInput 标签输入框
description: 标签输入框组件用于输入多个标签，支持回车添加、删除标签等操作。
isComponent: false
---

## 基础用法

基本的标签输入框用法，通过 `value` 和 `onChange` 实现受控模式。

{{ default }}

## 受控与非受控

TagInput 组件支持受控和非受控两种模式。

{{ controlled-uncontrolled }}

## 带前置标签

通过 `label` 属性添加前置标签。

{{ with-label }}

## 不同尺寸

TagInput 组件支持三种尺寸：small、medium（默认）和 large。

{{ sizes }}

## 不同状态

TagInput 组件支持四种状态：default、success、warning 和 error。

{{ status }}

## 禁用和只读

通过 `disabled` 属性禁用组件，通过 `readonly` 属性设置只读状态。

{{ disabled-readonly }}

## 限制标签数量

通过 `max` 属性限制最大标签数量。

{{ max-tags }}

## 折叠标签

通过 `minCollapsedNum` 属性设置最小折叠数量，当标签数量超过该值时会折叠显示。

{{ collapsed }}

## 标签超出处理

通过 `excessTagsDisplayType` 属性设置标签超出时的处理方式，支持 "break-line"（换行显示）和 "scroll"（横向滚动）。

{{ excess-display }}

## 事件演示

TagInput 组件支持多种事件，如 onChange、onEnter、onRemove、onClear、onPaste 等。

{{ events }}

<!-- API_DOC -->

## API

| 属性                  | 类型                                                              | 默认值         | 说明                   |
| --------------------- | ----------------------------------------------------------------- | -------------- | ---------------------- |
| value                 | `TagInputValue`                                                   | `undefined`    | 标签值（受控）         |
| defaultValue          | `TagInputValue`                                                   | `[]`           | 默认值（非受控）       |
| placeholder           | `string`                                                          | `undefined`    | 占位符                 |
| disabled              | `boolean`                                                         | `false`        | 是否禁用标签输入框     |
| readonly              | `boolean`                                                         | `false`        | 只读状态               |
| clearable             | `boolean`                                                         | `false`        | 是否可清空             |
| autoWidth             | `boolean`                                                         | `false`        | 宽度随内容自适应       |
| borderless            | `boolean`                                                         | `false`        | 无边框模式             |
| dragSort              | `boolean`                                                         | `false`        | 拖拽调整标签顺序       |
| excessTagsDisplayType | `"scroll" \| "break-line"`                                        | `"break-line"` | 标签超出时的呈现方式   |
| label                 | `React.ReactNode`                                                 | `undefined`    | 左侧文本               |
| max                   | `number`                                                          | `undefined`    | 最大允许输入的标签数量 |
| minCollapsedNum       | `number`                                                          | `0`            | 最小折叠数量           |
| size                  | `"small" \| "medium" \| "large"`                                  | `"medium"`     | 组件尺寸               |
| status                | `"default" \| "success" \| "warning" \| "error"`                  | `"default"`    | 输入框状态             |
| tips                  | `string`                                                          | `undefined`    | 提示信息               |
| onChange              | `(value: TagInputValue, context: { trigger: string }) => void`    | `undefined`    | 值变化时的回调         |
| onEnter               | `(value: TagInputValue, context: { inputValue: string }) => void` | `undefined`    | 按回车添加标签时的回调 |
| onRemove              | `(context: { item: string, index: number }) => void`              | `undefined`    | 删除标签时的回调       |
| onClear               | `() => void`                                                      | `undefined`    | 清空所有标签时的回调   |
| onPaste               | `(context: { pasteValue: string }) => void`                       | `undefined`    | 粘贴内容时的回调       |

##
