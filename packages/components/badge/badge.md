---
title: Badge 徽标
description: 徽标组件用于在右上角展示数字或状态点，常用于消息提醒、状态标记等场景。
isComponent: true
---

### 基础徽标

最简单的徽标用法，展示数字徽标。

{{ base }}

### 红点样式

使用 dot 属性创建红点样式的徽标。

{{ dot }}

### 数字徽标

展示不同数字的徽标。

{{ count }}

### 文字徽标

使用文字作为徽标的内容。

{{ text-count }}

### 封顶数字

使用 maxCount 属性设置数字的封顶值。

{{ max-count }}

### 徽标形状

通过 shape 属性设置徽标的形状，支持圆形和圆角矩形。

{{ shape }}

### 徽标尺寸

通过 size 属性设置徽标的尺寸。

{{ size }}

### 自定义颜色

通过 color 属性自定义徽标的颜色。

{{ custom-color }}

### 位置偏移

通过 offset 属性设置徽标的位置偏移。

{{ offset }}

### 零值展示

通过 showZero 属性控制当数值为 0 时是否展示徽标。

{{ show-zero }}

### 独立使用

不包裹子元素时，徽标将独立显示。

{{ standalone }}

### 结合按钮使用

将徽标与按钮结合使用，展示消息提醒等场景。

{{ with-button }}

<!-- API_DOC -->

## API

### Badge Props

| 属性 | 说明 | 类型 | 默认值 |
| -------- | ------------------------------------------------------- | ------------------------------------------------------------ | ----------- |
| children | 徽标内容，同 content | ReactNode | - |
| color | 颜色 | string | '' |
| content | 徽标内容 | ReactNode | - |
| count | 徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+ | ReactNode | 0 |
| dot | 是否为红点 | boolean | false |
| maxCount | 封顶的数字值 | number | 99 |
| offset | 设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem'] | Array<string  number> | - |
| shape | 形状 | `circle` \| `round` | circle |
| showZero | 当数值为 0 时，是否展示徽标 | boolean | false |
| size | 尺寸 | `small` \| `medium` | medium |