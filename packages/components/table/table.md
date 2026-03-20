# Table 表格

表格组件用于展示结构化数据，支持多种样式和交互方式。

## 基础用法

基本的表格用法，通过 `columns` 和 `data` 属性设置表格的列和数据。

{{ default }}

## 带边框

通过 `bordered` 属性显示表格边框。

{{ bordered }}

## 斑马纹

通过 `stripe` 属性显示斑马纹效果。

{{ stripe }}

## 悬浮效果

通过 `hover` 属性显示鼠标悬浮效果。

{{ hover }}

## 边框 + 斑马纹 + 悬浮

组合使用 `bordered`、`stripe` 和 `hover` 属性。

{{ bordered-stripe-hover }}

## 不同尺寸

通过 `size` 属性设置表格的尺寸，支持 small、medium（默认）和 large。

{{ sizes }}

## 自定义单元格

通过 `cell` 属性自定义单元格的渲染内容。

{{ custom-cell }}

## 文本省略

通过 `ellipsis` 属性实现文本过长时的省略效果。

{{ ellipsis }}

## 对齐方式

通过 `align` 属性设置单元格的对齐方式，支持 left、center、right。

{{ alignment }}

## 空数据

通过 `empty` 属性自定义空数据时的显示内容。

{{ empty }}

## 自定义空数据

自定义更复杂的空数据显示内容。

{{ custom-empty }}

## 行点击事件

通过 `onRowClick` 属性监听行点击事件。

{{ row-click }}

## 单元格点击事件

通过 `onCellClick` 属性监听单元格点击事件。

{{ cell-click }}

## 自定义行类名

通过 `rowClassName` 属性自定义行的类名。

{{ custom-row-class-name }}

## 固定列宽

通过 `width` 属性设置列的固定宽度，并使用 `tableLayout="fixed"` 固定表格布局。

{{ fixed-width }}

## 自动列宽

使用 `tableLayout="auto"` 实现列宽的自动调整。

{{ auto-width }}

## 垂直对齐

通过 `verticalAlign` 属性设置单元格的垂直对齐方式，支持 top、middle（默认）、bottom。

{{ vertical-align }}

## 复杂示例

综合使用多种属性和自定义渲染的复杂示例。

{{ complex }}

<!-- API_DOC -->

## API

| 属性          | 类型                                                                                      | 默认值      | 说明               |
| ------------- | ----------------------------------------------------------------------------------------- | ----------- | ------------------ |
| columns       | `BaseTableCol<T>[]`                                                                       | `[]`        | 表格列配置         |
| data          | `T[]`                                                                                     | `[]`        | 表格数据           |
| bordered      | `boolean`                                                                                 | `false`     | 是否显示边框       |
| stripe        | `boolean`                                                                                 | `false`     | 是否显示斑马纹     |
| hover         | `boolean`                                                                                 | `false`     | 是否显示悬浮效果   |
| size          | `"small" \| "medium" \| "large"`                                                          | `"medium"`  | 表格尺寸           |
| tableLayout   | `"auto" \| "fixed"`                                                                       | `"auto"`    | 表格布局方式       |
| verticalAlign | `"top" \| "middle" \| "bottom"`                                                           | `"middle"`  | 垂直对齐方式       |
| showHeader    | `boolean`                                                                                 | `true`      | 是否显示表头       |
| empty         | `React.ReactNode`                                                                         | `undefined` | 空数据时的显示内容 |
| onRowClick    | `(context: { row: T; rowIndex: number }) => void`                                         | `undefined` | 行点击事件         |
| onCellClick   | `(context: { row: T; col: BaseTableCol<T>; rowIndex: number; colIndex: number }) => void` | `undefined` | 单元格点击事件     |
| rowClassName  | `(context: { row: T; rowIndex: number }) => string`                                       | `undefined` | 行类名回调         |

### BaseTableCol

| 属性     | 类型                                                                                                 | 默认值      | 说明             |
| -------- | ---------------------------------------------------------------------------------------------------- | ----------- | ---------------- |
| colKey   | `keyof T`                                                                                            | -           | 列的键值         |
| title    | `React.ReactNode`                                                                                    | -           | 列标题           |
| width    | `number \| string`                                                                                   | -           | 列宽度           |
| align    | `"left" \| "center" \| "right"`                                                                      | `"left"`    | 对齐方式         |
| ellipsis | `boolean`                                                                                            | `false`     | 是否省略文本     |
| cell     | `(context: { row: T; col: BaseTableCol<T>; rowIndex: number; colIndex: number }) => React.ReactNode` | `undefined` | 自定义单元格渲染 |

## 注意事项

1. 当表格数据量较大时，建议使用 `tableLayout="fixed"` 固定表格布局，以提高渲染性能
2. 当单元格内容较长时，可以使用 `ellipsis` 属性实现文本省略
3. 当需要自定义单元格渲染时，可以使用 `cell` 属性
4. 当需要处理行或单元格的点击事件时，可以使用 `onRowClick` 或 `onCellClick` 属性

## 样式定制

Table 组件的样式可以通过 CSS 变量进行定制，主要包括：

- `--td-table-border-color`：边框颜色
- `--td-table-header-bg-color`：表头背景颜色
- `--td-table-header-text-color`：表头文本颜色
- `--td-table-row-hover-bg-color`：行悬浮背景颜色
- `--td-table-stripe-bg-color`：斑马纹背景颜色

通过自定义这些变量，可以实现不同风格的表格效果。
