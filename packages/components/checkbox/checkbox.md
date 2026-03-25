---
title: Checkbox 复选框
description: 多选框用于在一组备选项中进行多选，允许用户选中一个或多个选项。
isComponent: false
---

### 基础复选框

最简单的复选框用法。

{{ base }}

### 受控复选框

通过受控方式控制复选框的选中状态。

{{ controlled }}

### 复选框状态

展示复选框的不同状态，包括未选中、选中、半选、禁用和只读。

{{ states }}

### 复选框组 - 基础用法

通过 Checkbox.Group 组件创建复选框组，实现多选功能。

{{ group }}

### 复选框组 - 全选功能

在复选框组中添加全选选项，实现一键全选和取消全选。

{{ group-with-check-all }}

### 复选框组 - options 配置方式

通过 options 属性配置复选框组的选项。

{{ group-with-options }}

### 复选框组 - 最大选中数量

限制复选框组的最大选中数量。

{{ group-with-max }}

### 复选框组 - 禁用整组

禁用整个复选框组。

{{ group-disabled }}

<!-- API_DOC -->

## API

### Checkbox Props

| 属性           | 说明                                                                                                                                  | 类型                                                                      | 默认值 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------ |
| checkAll       | 用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用                                                                   | boolean                                                                   | false  |
| checked        | 是否选中                                                                                                                              | boolean                                                                   | false  |
| defaultChecked | 是否选中，非受控属性                                                                                                                  | boolean                                                                   | false  |
| children       | 多选框内容，同 label                                                                                                                  | ReactNode                                                                 | -      |
| disabled       | 是否禁用组件。如果父组件存在 CheckboxGroup，默认值由 CheckboxGroup.disabled 控制。Checkbox.disabled 优先级高于 CheckboxGroup.disabled | boolean                                                                   | false  |
| indeterminate  | 是否为半选                                                                                                                            | boolean                                                                   | false  |
| label          | 主文案                                                                                                                                | ReactNode                                                                 | -      |
| name           | HTML 元素原生属性                                                                                                                     | string                                                                    | ''     |
| readonly       | 只读状态                                                                                                                              | boolean                                                                   | false  |
| title          | HTML 原生属性                                                                                                                         | string                                                                    | ''     |
| value          | 多选框的值                                                                                                                            | string number boolean                                                     | -      |
| onChange       | 值变化时触发                                                                                                                          | (checked: boolean, context: { e: ChangeEvent<HTMLInputElement> }) => void | -      |
| onClick        | 点击时触发，一般用于外层阻止冒泡场景                                                                                                  | (context: { e: MouseEvent<HTMLLabelElement> }) => void                    | -      |

### CheckboxGroup Props

| 属性         | 说明                                                                                                                                                                                | 类型                                                                                                                                                                                                   | 默认值 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| disabled     | 是否禁用组件，默认为 false。CheckboxGroup.disabled 优先级低于 Checkbox.disabled                                                                                                     | boolean                                                                                                                                                                                                | false  |
| max          | 支持最多选中的数量                                                                                                                                                                  | number                                                                                                                                                                                                 | -      |
| name         | 统一设置内部复选框 HTML 属性                                                                                                                                                        | string                                                                                                                                                                                                 | ''     |
| options      | 以配置形式设置子元素。示例1：`['北京', '上海']` ，示例2: `[{ label: '全选', checkAll: true }, { label: '上海', value: 'shanghai' }]`。checkAll 值为 true 表示当前选项为「全选选项」 | Array<string number { label: string ReactNode, value: string number, disabled?: boolean, name?: string, checkAll?: true }>                                                                             | []     |
| value        | 选中值                                                                                                                                                                              | Array<string  number  boolean>                                                                                                                                                                         | []     |
| defaultValue | 选中值，非受控属性                                                                                                                                                                  | Array<string  number  boolean>                                                                                                                                                                         | []     |
| onChange     | 值变化时触发，`context.current` 表示当前变化的数据值，如果是全选则为空；`context.type` 表示引起选中数据变化的是选中或是取消选中；`context.option` 表示当前变化的数据项              | (value: Array<string  number  boolean>, context: { e: ChangeEvent<HTMLDivElement>, current: CheckboxOption TdCheckboxProps, option: CheckboxOption TdCheckboxProps, type: 'check' 'uncheck' }) => void | -      |
