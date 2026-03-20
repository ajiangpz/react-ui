---
title: Form 表单
description: 表单组件用于收集用户输入的数据，支持表单验证、表单布局、表单联动等功能。
isComponent: true
---

### 基础表单

最简单的表单用法，展示默认的表单功能。

{{ default }}

### 标签对齐方式

展示不同的标签对齐方式，包括左对齐、右对齐和顶部对齐。

{{ label-align }}

### 行内布局

使用行内布局的表单，适合空间有限的场景。

{{ inline-layout }}

### 表单验证

展示表单验证功能，包括必填验证、长度验证等。

{{ validation }}

### 复杂表单

展示包含多种表单项的复杂表单。

{{ complex }}

### 动态表单项 - FormList

使用 FormList 组件创建动态表单项，支持添加和删除操作。

{{ form-list }}

### 禁用表单

展示禁用状态的表单。

{{ disabled }}

### 表单方法调用

展示如何通过 ref 调用表单的方法，如验证、重置等。

{{ methods }}

<!-- API_DOC -->

## API

### Form

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| colon | `boolean` | `false` | 是否在表单标签字段右侧显示冒号 |
| disabled | `boolean` | `false` | 是否禁用整个表单 |
| labelAlign | `'left' \| 'right' \| 'top'` | `'left'` | 表单字段标签对齐方式 |
| labelWidth | `string \| number` | - | 标签宽度 |
| layout | `'vertical' \| 'inline'` | `'vertical'` | 表单布局 |
| preventSubmitDefault | `boolean` | `true` | 是否阻止表单提交默认事件 |
| requiredMark | `boolean` | `true` | 是否显示必填符号（*） |
| resetType | `'empty' \| 'initial'` | `'empty'` | 重置表单的方式 |
| scrollToFirstError | `'' \| 'smooth' \| 'auto'` | `''` | 表单校验不通过时，是否自动滚动到第一个校验不通过的字段 |
| showErrorMessage | `boolean` | `true` | 校验不通过时，是否显示错误提示信息 |
| initialData | `Record<string, any>` | - | 表单初始数据 |
| onSubmit | `(e: { validateResult: boolean; fields: Record<string, any> }) => void` | - | 表单提交时的回调 |
| onReset | `() => void` | - | 表单重置时的回调 |

### FormItem

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| label | `React.ReactNode` | - | 表单项标签 |
| name | `string \| string[]` | - | 表单项名称 |
| requiredMark | `boolean` | `false` | 是否显示必填符号（*） |
| rules | `Array<{ required?: boolean; min?: number; max?: number; email?: boolean; telnumber?: boolean; url?: boolean; message?: string }>` | - | 表单项验证规则 |
| disabled | `boolean` | `false` | 是否禁用表单项 |
| showErrorMessage | `boolean` | `true` | 校验不通过时，是否显示错误提示信息 |

### FormList

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | `string` | - | 列表名称 |
| children | `(fields: any[], { add: (defaultValue?: any) => void; remove: (index: number) => void }) => React.ReactNode` | - | 列表渲染函数 |

### 表单方法

| 方法 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| validate | 验证表单 | - | `Promise<boolean>` |
| setFieldsValue | 设置表单值 | `values: Record<string, any>` | `void` |
| getFieldsValue | 获取表单值 | `getAll?: boolean` | `Record<string, any>` |
| reset | 重置表单 | - | `void` |