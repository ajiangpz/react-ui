# Notification 通知

通知组件用于向用户显示全局提示信息，支持成功、错误、警告、信息等多种类型，以及堆叠显示、自动关闭等功能。

## 基础用法

通过 `NotificationProvider` 包裹应用，并使用 `useNotification` 钩子获取通知方法来显示不同类型的通知。

{{ default }}

## 不同类型

通知组件支持四种类型：成功、错误、警告和信息，每种类型都有相应的图标和颜色。

{{ types }}

## 多条通知堆叠

通知组件支持多条通知堆叠显示，可以通过 `maxStack` 属性设置最大堆叠数量。

{{ stacking }}

## 长内容通知

通知组件支持长标题和长内容的显示，会自动进行换行处理。

{{ long-content }}

## 使用示例

模拟真实业务场景中的通知使用，如表单提交、数据删除、保存更改等操作的反馈。

{{ usage-example }}

<!-- API_DOC -->

## API

### NotificationProvider

| 属性            | 类型                                        | 默认值        | 说明                 |
| --------------- | ------------------------------------------- | ------------- | -------------------- |
| position        | `"top-right" \| "top-center" \| "top-left"` | `"top-right"` | 通知显示位置         |
| maxStack        | `number`                                    | `5`           | 最大通知堆叠数量     |
| displayDuration | `number`                                    | `3000`        | 通知显示时间（毫秒） |

### useNotification

返回一个对象，包含以下方法：

| 方法    | 参数                                 | 返回值 | 说明         |
| ------- | ------------------------------------ | ------ | ------------ |
| success | `{ title: string, message: string }` | `void` | 显示成功通知 |
| error   | `{ title: string, message: string }` | `void` | 显示错误通知 |
| warning | `{ title: string, message: string }` | `void` | 显示警告通知 |
| info    | `{ title: string, message: string }` | `void` | 显示信息通知 |

## 注意事项

1. 必须使用 `NotificationProvider` 包裹应用根组件，否则 `useNotification` 钩子将无法正常工作
2. 通知组件会自动管理通知的显示和关闭，无需手动处理
3. 当通知数量超过 `maxStack` 时，新的通知会替换最早的通知
4. 通知的显示时间可以通过 `displayDuration` 属性设置，默认 3 秒

## 样式定制

通知组件的样式可以通过 CSS 变量进行定制，主要包括：

- `--td-notification-bg-color`：通知背景色
- `--td-notification-text-color`：通知文本色
- `--td-notification-border-radius`：通知圆角
- `--td-notification-shadow`：通知阴影

通过自定义这些变量，可以实现不同风格的通知效果。
