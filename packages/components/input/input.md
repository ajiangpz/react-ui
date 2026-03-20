---
title: Input 输入框
description: 输入框用于接收用户输入的文本信息，支持多种类型、状态和功能配置。
isComponent: true
---

### 基础输入框

最简单的输入框用法，展示默认的输入框功能。

{{ default }}

### 不同尺寸

展示不同尺寸的输入框，包括小、中、大三种尺寸。

{{ sizes }}

### 不同状态

展示不同状态的输入框，包括默认、成功、警告和错误状态。

{{ status }}

### 禁用和只读

展示禁用和只读状态的输入框。

{{ disabled-readonly }}

### 可清空

展示可清空的输入框，点击右侧的清除按钮可以快速清空输入内容。

{{ clearable }}

### 带图标

展示带图标的输入框，可以在输入框前后添加图标。

{{ with-icon }}

### 前后置内容

展示带前后置内容的输入框，可以在输入框前后添加文本或其他元素。

{{ label-suffix }}

### 密码输入框

展示密码输入框，支持显示/隐藏密码功能。

{{ password }}

### 长度限制

展示带长度限制的输入框，可以限制最大输入长度。

{{ max-length }}

### 文本对齐

展示不同文本对齐方式的输入框，包括左对齐、居中对齐和右对齐。

{{ text-align }}

### 自适应宽度

展示宽度随内容自适应的输入框。

{{ auto-width }}

### 无边框模式

展示无边框模式的输入框。

{{ borderless }}

### 输入框组合

使用 InputGroup 组件创建输入框组合。

{{ group }}

### 事件回调

展示输入框的各种事件回调，包括输入变化、聚焦、失焦、回车等事件。

{{ events }}

<!-- API_DOC -->

## API

### Input

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| align | `'left' \| 'center' \| 'right'` | `'left'` | 文本内容位置 |
| autoWidth | `boolean` | `false` | 宽度随内容自适应 |
| autofocus | `boolean` | `false` | 自动聚焦 |
| borderless | `boolean` | `false` | 是否开启无边框模式 |
| clearable | `boolean` | `false` | 是否可清空 |
| disabled | `boolean` | `false` | 是否禁用输入框 |
| label | `React.ReactNode` | - | 前置内容 |
| maxlength | `number` | - | 最大输入长度 |
| maxcharacter | `number` | - | 最大字符数（中文算2个字符） |
| placeholder | `string` | - | 占位符 |
| prefixIcon | `React.ReactNode` | - | 前置图标 |
| readonly | `boolean` | `false` | 只读状态 |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | 输入框尺寸 |
| status | `'default' \| 'success' \| 'warning' \| 'error'` | `'default'` | 输入框状态 |
| suffix | `React.ReactNode` | - | 后置内容 |
| suffixIcon | `React.ReactNode` | - | 后置图标 |
| tips | `React.ReactNode` | - | 提示信息 |
| type | `'text' \| 'password' \| 'number' \| 'tel' \| 'url' \| 'search' \| 'hidden'` | `'text'` | 输入框类型 |
| value | `string` | - | 输入框值 |
| onChange | `(value: string) => void` | - | 输入值变化时的回调 |
| onFocus | `() => void` | - | 聚焦时的回调 |
| onBlur | `() => void` | - | 失焦时的回调 |
| onEnter | `(value: string) => void` | - | 按下回车键时的回调 |
| onClear | `() => void` | - | 点击清空按钮时的回调 |

### InputGroup

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| separate | `boolean` | `false` | 是否显示分隔线 |
| children | `React.ReactNode` | - | 子元素 |