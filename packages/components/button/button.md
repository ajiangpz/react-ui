---
title: Button 按钮
description: 按钮用于触发一个操作，如提交表单、打开对话框、取消操作等。
isComponent: true
---

### 基础按钮

最简单的按钮用法。

{{ base }}

### 图标按钮

按钮内可以嵌套图标。

{{ icon }}

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
