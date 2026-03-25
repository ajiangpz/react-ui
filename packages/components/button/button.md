---
title: Button 按钮
description: 按钮用于触发一个操作，如提交表单、打开对话框、取消操作等。
isComponent: false
---

### 基础按钮

最简单的按钮用法。

{{ base }}

### 按钮主题

按钮支持多种主题，包括默认、主要、成功、警告和危险。

{{ theme }}

### 按钮变体

按钮支持多种变体，包括填充、描边、虚线和文字。

#### 填充按钮 (base)

{{ variant-base }}

#### 描边按钮 (outline)

{{ variant-outline }}

#### 虚线按钮 (dashed)

{{ variant-dashed }}

#### 文字按钮 (text)

{{ variant-text }}

### 按钮尺寸

按钮支持多种尺寸，包括小、中、大。

{{ size }}

### 按钮形状

按钮支持多种形状，包括长方形、圆角、正方形和圆形。

{{ shape }}

### 图标按钮

按钮内可以嵌套图标。

{{ icon }}

### 带后缀图标

按钮内可以同时嵌套前缀和后缀图标。

{{ suffix }}

### 禁用状态

按钮可以设置为禁用状态，禁用状态下按钮不可点击。

{{ disabled }}

### 加载状态

按钮可以设置为加载中状态，加载中状态下按钮不可点击并显示加载动画。

{{ loading }}

### 幽灵按钮

幽灵按钮使按钮背景透明，适用于深色背景。

{{ ghost }}

### 块级按钮

块级按钮将按钮宽度调整为父元素宽度。

{{ block }}

### 链接按钮

链接按钮的行为和 a 链接一致，可以设置 href 属性跳转到指定地址。

{{ link }}

<!-- API_DOC -->

## API

### Button Props

| 属性     | 说明                                                    | 类型                                                         | 默认值      |
| -------- | ------------------------------------------------------- | ------------------------------------------------------------ | ----------- |
| block    | 将按钮宽度调整为父元素宽度                              | boolean                                                      | false       |
| children | 按钮内容，同 content                                    | ReactNode                                                    | -           |
| content  | 按钮内容                                                | ReactNode                                                    | -           |
| disabled | 禁用状态                                                | boolean                                                      | false       |
| ghost    | 幽灵按钮，使按钮背景透明                                | boolean                                                      | false       |
| href     | 点击跳转的地址，指定此属性后 button 的行为和 a 链接一致 | string                                                       | -           |
| icon     | 按钮图标                                                | ReactNode                                                    | -           |
| loading  | 加载中状态                                              | boolean                                                      | false       |
| shape    | 按钮形状                                                | `rectangle` \| `square` \| `round` \| `circle`               | `rectangle` |
| size     | 按钮尺寸                                                | `small` \| `medium` \| `large`                               | `medium`    |
| theme    | 按钮主题                                                | `default` \| `primary` \| `success` \| `warning` \| `danger` | `default`   |
| variant  | 按钮变体                                                | `base` \| `outline` \| `dashed` \| `text`                    | `base`      |
| onClick  | 点击按钮时的回调                                        | (e: MouseEvent) => void                                      | -           |
