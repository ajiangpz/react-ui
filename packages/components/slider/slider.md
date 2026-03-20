# Slider 滑块

滑块组件用于在一定范围内选择特定值，支持单滑块和双滑块（范围选择）模式。

## 基础用法

基本的滑块用法，通过 `value` 和 `onChange` 实现受控模式。

{{ default }}

## 范围选择

通过 `range` 属性启用范围选择模式，使用双滑块来选择一个范围。

{{ range }}

## 带数字输入框

通过 `inputNumberProps` 属性添加数字输入框，方便精确输入值。

{{ with-input-number }}

## 步长设置

通过 `step` 属性设置滑块的步长，控制每次拖动的增量。

{{ step }}

## 刻度标记

通过 `marks` 属性添加刻度标记，支持数组和对象两种形式。

{{ marks }}

## 垂直布局

通过 `layout` 属性设置为 "vertical" 实现垂直布局。

{{ vertical }}

## 禁用状态

通过 `disabled` 属性禁用滑块组件。

{{ disabled }}

## 自定义标签

通过 `label` 属性自定义滑块的标签显示。

{{ custom-label }}

<!-- API_DOC -->

## API

| 属性             | 类型                                                                                      | 默认值         | 说明                         |
| ---------------- | ----------------------------------------------------------------------------------------- | -------------- | ---------------------------- |
| value            | `number \| number[]`                                                                      | `undefined`    | 滑块值                       |
| defaultValue     | `number \| number[]`                                                                      | `0`            | 默认值                       |
| min              | `number`                                                                                  | `0`            | 滑块范围最小值               |
| max              | `number`                                                                                  | `100`          | 滑块范围最大值               |
| step             | `number`                                                                                  | `1`            | 步长                         |
| disabled         | `boolean`                                                                                 | `false`        | 是否禁用组件                 |
| range            | `boolean`                                                                                 | `false`        | 是否为双游标滑块（范围选择） |
| layout           | `"horizontal" \| "vertical"`                                                              | `"horizontal"` | 滑块布局方向                 |
| label            | `boolean \| ((params: { value: number, position: "start" \| "end" }) => React.ReactNode)` | `false`        | 滑块当前值文本               |
| inputNumberProps | `boolean \| object`                                                                       | `false`        | 数字输入框组件配置           |
| marks            | `number[] \| Record<number, string>`                                                      | `undefined`    | 刻度标记                     |
| onChange         | `(value: number \| number[]) => void`                                                     | `undefined`    | 值变化时的回调               |

## 注意事项

1. 当使用 `range` 属性时，`value` 和 `defaultValue` 应该是一个包含两个数字的数组
2. 当使用 `marks` 属性时，可以通过数组形式简单设置刻度位置，或通过对象形式设置自定义文案
3. 当使用 `inputNumberProps` 时，可以传入配置对象来自定义输入框的行为
4. 当使用垂直布局时，需要为父容器设置适当的高度

## 样式定制

Slider 组件的样式可以通过 CSS 变量进行定制，主要包括：

- `--td-slider-track-bg-color`：轨道背景颜色
- `--td-slider-track-active-bg-color`：激活轨道背景颜色
- `--td-slider-handle-bg-color`：滑块背景颜色
- `--td-slider-handle-border-color`：滑块边框颜色
- `--td-slider-handle-shadow`：滑块阴影
- `--td-slider-mark-color`：刻度颜色
- `--td-slider-mark-text-color`：刻度文本颜色

通过自定义这些变量，可以实现不同风格的滑块效果。
