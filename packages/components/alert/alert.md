---
title: Alert 警告框
description: 警告框用于向用户显示重要的提示信息，包括成功、信息、警告和错误四种类型。
isComponent: false
---

### 基础用法

最简单的警告框用法，展示不同主题的警告信息。

{{ base }}

### 可折叠警告框

当警告信息较长时，可以设置 maxLine 属性来限制显示行数，超出的内容会折叠收起。

{{ collapse }}

<!-- API_DOC -->

## API

### Alert Props

| 属性      | 说明                                                                                                                              | 类型                                                 | 默认值 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------ |
| closeBtn  | 关闭按钮。值为 true 则显示默认关闭按钮；值为 false 则不显示按钮；值类型为 string 则直接显示；值类型为 Function 则可以自定关闭按钮 | ReactNode                                            | false  |
| icon      | 图标                                                                                                                              | ReactNode                                            | -      |
| maxLine   | 内容显示最大行数，超出的内容会折叠收起，用户点击后再展开。值为 0 表示不折叠                                                       | number                                               | 0      |
| message   | 内容（子元素）                                                                                                                    | ReactNode                                            | -      |
| operation | 跟在告警内容后面的操作区                                                                                                          | ReactNode                                            | -      |
| theme     | 组件风格                                                                                                                          | `success` \| `info` \| `warning` \| `error`          | info   |
| title     | 标题                                                                                                                              | ReactNode                                            | -      |
| onClose   | 关闭按钮点击时触发                                                                                                                | (context: { e: MouseEvent<HTMLDivElement> }) => void | -      |
| onClosed  | 告警提示框关闭动画结束后触发                                                                                                      | () => void                                           | -      |
