---
title: Tag 标签
description: 标签组件用于标记和分类内容，支持多种主题和样式。
isComponent: true
---

## 基础用法

基本的标签用法，通过 `theme` 属性设置不同的主题。

{{ default }}

## 不同变体

通过 `variant` 属性设置不同的变体样式。

{{ variants }}

## 可删除标签

通过 `closable` 属性添加删除按钮，`onClose` 回调处理删除逻辑。

{{ closable }}

## 禁用状态

通过 `disabled` 属性禁用标签。

{{ disabled }}

## 不同尺寸

通过 `size` 属性设置标签的尺寸。

{{ sizes }}

<!-- API_DOC -->

## API

| 属性     | 类型                                              | 默认值      | 说明                 |
| -------- | ------------------------------------------------- | ----------- | -------------------- |
| theme    | `"primary" \| "success" \| "warning" \| "danger"` | `"primary"` | 标签主题             |
| variant  | `"light" \| "dark"`                               | `"light"`   | 标签变体             |
| size     | `"small" \| "medium" \| "large"`                  | `"medium"`  | 标签尺寸             |
| closable | `boolean`                                         | `false`     | 是否可删除           |
| disabled | `boolean`                                         | `false`     | 是否禁用             |
| onClose  | `() => void`                                      | `undefined` | 点击删除按钮时的回调 |
