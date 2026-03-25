---
title: Tooltip 文字提示
description: 文字提示组件用于向用户显示提示信息，支持多种主题、位置和触发方式。
icComponent: true
---

## 基础用法

文字提示组件的基本使用方式，通过鼠标悬停触发。

{{ base }}

## 不同主题

文字提示组件支持多种主题，包括深色、浅色、主色、成功、错误和警告主题。

{{ theme }}

## 不同位置

文字提示组件支持 12 种不同的位置选项。

{{ placement }}

## 自定义内容

文字提示组件支持自定义内容，包括复杂的 React 组件。

{{ custom-content }}

<!-- API_DOC -->

## API

### Tooltip Props

| 名称               | 类型                     | 默认值 | 描述                                                                                                                            | 必传 |
| ------------------ | ------------------------ | ------ | ------------------------------------------------------------------------------------------------------------------------------- | ---- |
| content            | String / React.ReactNode | -      | 提示内容                                                                                                                        | Y    |
| trigger            | String                   | hover  | 触发方式，可选项：hover/click/focus/context-menu                                                                                | N    |
| theme              | String                   | dark   | 主题，可选项：dark/light/primary/success/error/warning                                                                          | N    |
| placement          | String                   | top    | 提示位置，可选项：top/left/right/bottom/top-left/top-right/bottom-left/bottom-right/left-top/left-bottom/right-top/right-bottom | N    |
| duration           | Number                   | 0      | 自动隐藏延时，单位：毫秒                                                                                                        | N    |
| showArrow          | Boolean                  | true   | 是否显示箭头                                                                                                                    | N    |
| overlayClassName   | String / Array           | -      | 自定义提示框类名                                                                                                                | N    |
| destroyOnClose     | Boolean                  | true   | 浮层隐藏时是否销毁浮层                                                                                                          | N    |
| popupContent       | String / React.ReactNode | -      | 自定义弹出层内容                                                                                                                | N    |
| onVisibleChange    | Function                 | -      | 显示/隐藏时的回调函数                                                                                                           | N    |
| arrowPointAtCenter | Boolean                  | true   | 箭头是否指向目标元素中心                                                                                                        | N    |
| visible            | Boolean                  | -      | 手动控制浮层显隐                                                                                                                | N    |
| autoAdjustOverflow | Boolean                  | true   | 当浮层无法完全显示时，是否自动调整位置                                                                                          | N    |
| offset             | Array / Function         | -      | 浮层偏移量，示例：[10, 20] 或 (placement) => [10, 20]                                                                           | N    |
| popperOptions      | Object                   | -      | 透传 Popper.js 的配置项                                                                                                         | N    |
| triggerElement     | React.ReactNode          | -      | 触发元素                                                                                                                        | N    |
| delay              | Number / Object          | -      | 延迟显示，单位：毫秒                                                                                                            | N    |
| attach             | HTMLElement / Function   | -      | 用于定位的参照元素                                                                                                              | N    |
| zIndex             | Number                   | -      | 层级                                                                                                                            | N    |
| mouseEnterPopup    | Boolean                  | false  | 鼠标是否可进入浮层                                                                                                              | N    |
| disabled           | Boolean                  | false  | 是否禁用                                                                                                                        | N    |
