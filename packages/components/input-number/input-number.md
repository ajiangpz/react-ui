---
title: InputNumber 数字输入框
description: 数字输入框用于输入数字，支持步进、最大最小值限制、格式化等功能。
isComponent: false
---

### 基础用法

最简单的数字输入框用法，展示默认的数字输入功能。

{{ default }}

### 不同布局主题

展示不同布局主题的数字输入框，包括默认、行式和列式布局。

{{ themes }}

### 不同尺寸

展示不同尺寸的数字输入框，包括小、中、大三种尺寸。

{{ sizes }}

### 步长与小数

展示带步长和小数的数字输入框，可以设置步进值和小数位数。

{{ step-and-decimal }}

### 最大最小值限制

展示带最大最小值限制的数字输入框，可以限制输入的数值范围。

{{ min-max }}

### 文本对齐

展示不同文本对齐方式的数字输入框，包括左对齐、居中对齐和右对齐。

{{ align }}

### 状态

展示不同状态的数字输入框，包括默认、成功、警告和错误状态。

{{ status }}

### 格式化展示

展示带格式化功能的数字输入框，可以自定义显示格式。

{{ format }}

### 带后缀

展示带后缀的数字输入框，可以在输入框后添加单位等后缀。

{{ with-suffix }}

### 大数支持

展示支持大数的数字输入框，可以处理超出 JavaScript 安全整数范围的大数字。

{{ large-number }}

### 自适应宽度

展示宽度随内容自适应的数字输入框。

{{ auto-width }}

### 事件回调

展示数字输入框的各种事件回调，包括值变化、聚焦、失焦、回车等事件。

{{ events }}

<!-- API_DOC -->

## API

### InputNumber

| 属性                | 类型                                                                    | 默认值      | 说明                                  |
| ------------------- | ----------------------------------------------------------------------- | ----------- | ------------------------------------- |
| align               | `'left' \| 'center' \| 'right'`                                         | `'left'`    | 文本内容位置                          |
| allowInputOverLimit | `boolean`                                                               | `false`     | 是否允许输入超过 max/min 范围外的数字 |
| autoWidth           | `boolean`                                                               | `false`     | 宽度随内容自适应                      |
| decimalPlaces       | `number`                                                                | -           | 小数位数                              |
| disabled            | `boolean`                                                               | `false`     | 禁用组件                              |
| format              | `(value: string \| number, context: { fixedNumber: string }) => string` | -           | 格式化显示内容                        |
| inputProps          | `object`                                                                | -           | 输入框属性，支持 tips 等              |
| largeNumber         | `boolean`                                                               | `false`     | 是否作为大数使用                      |
| max                 | `number`                                                                | -           | 最大值                                |
| min                 | `number`                                                                | -           | 最小值                                |
| placeholder         | `string`                                                                | -           | 占位符                                |
| readonly            | `boolean`                                                               | `false`     | 只读状态                              |
| size                | `'small' \| 'medium' \| 'large'`                                        | `'medium'`  | 组件尺寸                              |
| status              | `'default' \| 'success' \| 'warning' \| 'error'`                        | `'default'` | 文本框状态                            |
| step                | `number`                                                                | `1`         | 数值改变步数                          |
| suffix              | `React.ReactNode`                                                       | -           | 后缀内容                              |
| theme               | `'column' \| 'row' \| 'normal'`                                         | `'row'`     | 按钮布局                              |
| value               | `string \| number`                                                      | -           | 输入值                                |
| defaultValue        | `string \| number`                                                      | -           | 默认值                                |
| onChange            | `(value: string \| number, context: object) => void`                    | -           | 值变化时的回调                        |
| onBlur              | `(value: string \| number, context: object) => void`                    | -           | 失焦时的回调                          |
| onFocus             | `(value: string \| number, context: object) => void`                    | -           | 聚焦时的回调                          |
| onEnter             | `(value: string \| number, context: object) => void`                    | -           | 按下回车键时的回调                    |
| onValidate          | `(context: { error: 'exceed-maximum' \| 'below-minimum' }) => void`     | -           | 验证时的回调                          |
