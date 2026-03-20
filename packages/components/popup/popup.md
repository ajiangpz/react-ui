# Popup 弹出层

弹出层组件用于在指定位置弹出浮层内容，支持多种触发方式和弹出位置。

## 基础用法

通过包裹触发元素并设置 `content` 属性来显示弹出层内容。

{{ default }}

## 不同触发方式

Popup 组件支持多种触发方式，包括点击、悬停、聚焦和右键菜单。

{{ triggers }}

## 不同弹出位置

Popup 组件支持多种弹出位置，可以根据需要选择合适的位置。

{{ placements }}

## 受控模式

通过 `visible` 属性和 `onVisibleChange` 回调函数可以实现受控模式。

{{ controlled }}

## 无箭头

通过 `showArrow` 属性可以控制是否显示弹出层的箭头。

{{ no-arrow }}

## 延迟显示/隐藏

通过 `delay` 属性可以设置弹出层的延迟显示和隐藏时间。

{{ delay }}

## 禁用状态

通过 `disabled` 属性可以禁用 Popup 组件，使其不响应触发事件。

{{ disabled }}

## 自定义内容

Popup 组件支持自定义弹出层内容，可以根据需要显示复杂的内容结构。

{{ custom-content }}

<!-- API_DOC -->

## API

| 属性            | 类型                                                                                                                                                                     | 默认值      | 说明                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | ---------------------------------------- |
| trigger         | `"click" \| "hover" \| "focus" \| "mousedown" \| "context-menu"`                                                                                                         | `"click"`   | 触发浮层出现的方式                       |
| placement       | `"top" \| "top-left" \| "top-right" \| "left" \| "left-top" \| "left-bottom" \| "right" \| "right-top" \| "right-bottom" \| "bottom" \| "bottom-left" \| "bottom-right"` | `"top"`     | 浮层出现位置                             |
| visible         | `boolean`                                                                                                                                                                | `undefined` | 是否显示浮层，受控模式                   |
| onVisibleChange | `(visible: boolean) => void`                                                                                                                                             | `undefined` | 浮层显示状态变化时的回调                 |
| content         | `React.ReactNode`                                                                                                                                                        | `undefined` | 浮层内容                                 |
| showArrow       | `boolean`                                                                                                                                                                | `true`      | 是否显示浮层箭头                         |
| destroyOnClose  | `boolean`                                                                                                                                                                | `false`     | 是否在关闭浮层时销毁浮层                 |
| disabled        | `boolean`                                                                                                                                                                | `false`     | 是否禁用组件                             |
| hideEmptyPopup  | `boolean`                                                                                                                                                                | `true`      | 浮层是否隐藏空内容                       |
| zIndex          | `number`                                                                                                                                                                 | `1050`      | 组件层级                                 |
| delay           | `number \| [number, number]`                                                                                                                                             | `[0, 0]`    | 延迟显示/隐藏时间，\[显示延迟, 隐藏延迟] |

## 注意事项

1. 当使用 `trigger="hover"` 时，建议设置适当的 `delay` 来避免频繁触发
2. 当内容为空时，默认会隐藏浮层，可以通过 `hideEmptyPopup={false}` 来显示空内容的浮层
3. 当使用受控模式时，需要自己管理 `visible` 状态
4. 为了获得更好的性能，当浮层内容较复杂时，可以考虑使用 `destroyOnClose={true}`

## 样式定制

Popup 组件的样式可以通过 CSS 变量进行定制，主要包括：

- `--td-popup-bg-color`：浮层背景色
- `--td-popup-text-color`：浮层文本色
- `--td-popup-border-radius`：浮层圆角
- `--td-popup-shadow`：浮层阴影
- `--td-popup-arrow-size`：箭头大小

通过自定义这些变量，可以实现不同风格的弹出层效果。
