---
title: ColorPicker 颜色选择器
description: 颜色选择器用于让用户选择颜色，支持多种颜色格式、透明度调节、预设色板等功能。
isComponent: false
---

### 基础用法

最简单的颜色选择器用法，展示默认的颜色选择功能。

{{ base }}

### 不同颜色格式

展示不同颜色格式的颜色选择器，包括 HEX、RGB 和 HSL 格式。

{{ formats }}

### 开启透明度通道

开启透明通道，允许用户调节颜色的透明度。

{{ with-alpha }}

### 可清空

设置 clearable 属性，允许用户清空选中的颜色。

{{ clearable }}

### 禁用状态

展示颜色选择器的禁用状态。

{{ disabled }}

### 预设颜色

设置自定义的预设颜色，方便用户快速选择常用颜色。

{{ swatch-colors }}

### 最近使用的颜色

展示最近使用的颜色，方便用户重复选择之前使用过的颜色。

{{ recent-colors }}

### 手动输入颜色值

支持手动输入颜色值，包括在触发器中直接输入和在面板中通过格式选择器切换不同的输入格式。

{{ manual-input }}

### 无边框模式

设置 borderless 属性，使用无边框模式的颜色选择器。

{{ borderless }}

<!-- API_DOC -->

## API

### ColorPicker Props

| 属性                    | 说明                                                                                                                                                               | 类型                                                                                        | 默认值 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- | ------ |
| borderless              | 无边框模式                                                                                                                                                         | boolean                                                                                     | false  |
| clearable               | 是否可清空                                                                                                                                                         | boolean                                                                                     | false  |
| disabled                | 是否禁用组件                                                                                                                                                       | boolean                                                                                     | false  |
| enableAlpha             | 是否开启透明通道                                                                                                                                                   | boolean                                                                                     | false  |
| enableMultipleGradient  | 是否允许开启通过点击渐变轴增加渐变梯度，默认开启，关闭时只会存在起始和结束两个颜色                                                                                 | boolean                                                                                     | true   |
| format                  | 格式化色值。`enableAlpha` 为真时，`HEX8/RGBA/HSLA/HSVA` 有效                                                                                                       | `HEX` \| `HEX8` \| `RGB` \| `RGBA` \| `HSL` \| `HSLA` \| `HSV` \| `HSVA` \| `CMYK` \| `CSS` | RGB    |
| inputProps              | 透传 Input 输入框组件全部属性                                                                                                                                      | InputProps                                                                                  | -      |
| popupProps              | 透传 Popup 组件全部属性，如 `placement` `overlayStyle` `overlayClassName` `trigger`等                                                                              | PopupProps                                                                                  | -      |
| recentColors            | 最近使用的颜色。值为 [] 表示以组件内部的“最近使用颜色”为准，值长度大于 0 则以该值为准显示“最近使用颜色”。值为 false 或 null 则完全不显示“最近使用颜色”             | Array<string> \| boolean \| null                                                            | []     |
| defaultRecentColors     | 最近使用的颜色。值为 [] 表示以组件内部的“最近使用颜色”为准，值长度大于 0 则以该值为准显示“最近使用颜色”。值为 false 或 null 则完全不显示“最近使用颜色”，非受控属性 | Array<string> \| boolean \| null                                                            | []     |
| selectInputProps        | 透传 SelectInputProps 筛选器输入框组件全部属性                                                                                                                     | SelectInputProps                                                                            | -      |
| showPrimaryColorPreview | 是否展示颜色选择条右侧的颜色预览区域                                                                                                                               | boolean                                                                                     | true   |
| swatchColors            | 系统预设的颜色样例，值为 `null` 或 `[]` 则不显示系统色，值为 `undefined` 会显示组件内置的系统默认色                                                                | Array<string> \| null \| undefined                                                          | -      |
| value                   | 色值                                                                                                                                                               | string                                                                                      | ''     |
| defaultValue            | 色值，非受控属性                                                                                                                                                   | string                                                                                      | ''     |
| onChange                | 选中的色值发生变化时触发，第一个参数 `value` 表示新色值，`context.color` 表示当前调色板控制器的色值，`context.trigger` 表示触发颜色变化的来源                      | (value: string, context: { color: ColorObject; trigger: ColorPickerChangeTrigger }) => void | -      |
| onClear                 | 清空按钮点击时触发                                                                                                                                                 | (context: { e: MouseEvent<SVGElement> }) => void                                            | -      |
| onPaletteBarChange      | 调色板控制器的值变化时触发，`context.color` 指调色板控制器的值                                                                                                     | (context: { color: ColorObject }) => void                                                   | -      |
| onRecentColorsChange    | 最近使用颜色发生变化时触发                                                                                                                                         | (value: Array<string>) => void                                                              | -      |
