# Switch 开关

开关组件用于表示开/关两种状态之间的切换，是一种即时生效的选择控件。

## 基础用法

基本的开关用法，通过 `defaultValue` 设置默认状态。

{{ default }}

## 受控用法

通过 `value` 和 `onChange` 实现受控模式。

{{ controlled }}

## 不同尺寸

Switch 组件支持三种尺寸：small、medium（默认）和 large。

{{ sizes }}

## 带文字描述

通过 `label` 属性添加开关状态的文字描述。

{{ with-label }}

## 禁用状态

通过 `disabled` 属性禁用开关组件。

{{ disabled }}

## 加载状态

通过 `loading` 属性显示加载状态。

{{ loading }}

## 自定义值

通过 `customValue` 属性自定义开关的值。

{{ custom-value }}

## 异步切换

结合 `loading` 属性实现异步切换效果。

{{ async-change }}

## beforeChange 拦截

通过 `beforeChange` 属性在切换前进行拦截，可用于确认操作。

{{ before-change }}

<!-- API_DOC -->

## API

| 属性         | 类型                                | 默认值          | 说明                                     |
| ------------ | ----------------------------------- | --------------- | ---------------------------------------- |
| value        | `boolean \| string \| number`       | `undefined`     | 开关值（受控）                           |
| defaultValue | `boolean \| string \| number`       | `false`         | 默认值（非受控）                         |
| disabled     | `boolean`                           | `false`         | 是否禁用组件                             |
| loading      | `boolean`                           | `false`         | 是否处于加载中状态                       |
| size         | `"small" \| "medium" \| "large"`    | `"medium"`      | 开关尺寸                                 |
| label        | `[string, string]`                  | `undefined`     | 开关内容，[开启时内容，关闭时内容]       |
| customValue  | `[any, any]`                        | `[true, false]` | 自定义开关的值，[打开时的值，关闭时的值] |
| beforeChange | `() => boolean \| Promise<boolean>` | `undefined`     | 切换前的拦截函数                         |
| onChange     | `(value: any) => void`              | `undefined`     | 值变化时的回调                           |

## 注意事项

1. 当使用 `customValue` 时，`value` 和 `defaultValue` 应该与自定义值的类型一致
2. 当使用 `beforeChange` 时，如果返回 `false` 或 Promise 解析为 `false`，则不会执行切换操作
3. 当使用 `loading` 属性时，开关会显示加载状态且不可操作
4. 开关组件的状态切换是即时生效的，适合用于不需要用户确认的场景

## 样式定制

Switch 组件的样式可以通过 CSS 变量进行定制，主要包括：

- `--td-switch-bg-color`：关闭状态的背景颜色
- `--td-switch-active-bg-color`：开启状态的背景颜色
- `--td-switch-handle-bg-color`：滑块背景颜色
- `--td-switch-handle-shadow`：滑块阴影
- `--td-switch-disabled-bg-color`：禁用状态的背景颜色
- `--td-switch-disabled-handle-bg-color`：禁用状态的滑块背景颜色

通过自定义这些变量，可以实现不同风格的开关效果。
