---
title: Select 选择器
description: 选择器组件用于从一组选项中选择一个或多个值，支持搜索、多选、分组等功能。
icComponent: true
---

## 基础用法

基本的选择器用法，通过 `options` 属性设置选项列表，`value` 和 `onChange` 实现受控模式。

{{ default }}

## 可搜索

通过 `filterable` 属性启用搜索功能，用户可以输入关键词搜索选项。

{{ filterable }}

## 多选

通过 `multiple` 属性启用多选功能，用户可以选择多个选项。

{{ multiple }}

## 不同尺寸

Select 组件支持三种尺寸：small、medium（默认）和 large。

{{ sizes }}

## 不同状态

Select 组件支持四种状态：default、success、warning 和 error。

{{ status }}

## 禁用状态

通过 `disabled` 属性禁用组件，通过 `readonly` 属性设置只读状态。

{{ disabled }}

## 分组选项

通过嵌套的 `children` 属性实现选项分组。

{{ group-options }}

## 自定义内容

通过 `content` 属性自定义选项的显示内容。

{{ custom-content }}

## 前后置内容

通过 `label` 和 `suffix` 属性添加前后置内容。

{{ label-suffix }}

## 可创建新选项

通过 `creatable` 属性允许用户创建新选项，并通过 `onCreate` 回调处理创建逻辑。

{{ creatable }}

## 加载状态

通过 `loading` 属性显示加载状态。

{{ loading }}

## 折叠标签

通过 `minCollapsedNum` 属性设置最小折叠数量，当选中项超过该数量时会折叠显示。

{{ collapsed }}

<!-- API_DOC -->

## API

| 属性            | 类型                                                                                                                                           | 默认值      | 说明                   |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ---------------------- |
| value           | `string \| number \| string[] \| number[]`                                                                                                     | `undefined` | 选中值                 |
| defaultValue    | `string \| number \| string[] \| number[]`                                                                                                     | `undefined` | 默认选中值             |
| options         | `Array<{ label: string, value: any, disabled?: boolean, content?: React.ReactNode, checkAll?: boolean, group?: string, children?: Option[] }>` | `[]`        | 选项列表               |
| placeholder     | `string`                                                                                                                                       | `undefined` | 占位符                 |
| disabled        | `boolean`                                                                                                                                      | `false`     | 是否禁用组件           |
| clearable       | `boolean`                                                                                                                                      | `false`     | 是否可以清空选项       |
| filterable      | `boolean`                                                                                                                                      | `false`     | 是否可搜索             |
| multiple        | `boolean`                                                                                                                                      | `false`     | 是否允许多选           |
| loading         | `boolean`                                                                                                                                      | `false`     | 是否为加载状态         |
| readonly        | `boolean`                                                                                                                                      | `false`     | 只读状态               |
| size            | `"small" \| "medium" \| "large"`                                                                                                               | `"medium"`  | 组件尺寸               |
| status          | `"default" \| "success" \| "warning" \| "error"`                                                                                               | `"default"` | 输入框状态             |
| borderless      | `boolean`                                                                                                                                      | `false`     | 无边框模式             |
| autoWidth       | `boolean`                                                                                                                                      | `false`     | 宽度随内容自适应       |
| creatable       | `boolean`                                                                                                                                      | `false`     | 是否允许用户创建新条目 |
| max             | `number`                                                                                                                                       | `undefined` | 多选时最大选择数量     |
| minCollapsedNum | `number`                                                                                                                                       | `0`         | 最小折叠数量           |
| label           | `React.ReactNode`                                                                                                                              | `undefined` | 前置标签               |
| suffix          | `React.ReactNode`                                                                                                                              | `undefined` | 后置内容               |
| tips            | `string`                                                                                                                                       | `undefined` | 提示信息               |
| onChange        | `(value: any) => void`                                                                                                                         | `undefined` | 选中值变化时的回调     |
| onCreate        | `(value: string \| number) => void`                                                                                                            | `undefined` | 创建新选项时的回调     |
