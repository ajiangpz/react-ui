# Radio 单选框

单选框用于在一组互斥的选项中进行单选，用户只能选择其中一个选项。

## 基础用法

基本的单选框用法，通过 `defaultChecked` 属性设置默认选中状态。

{{ default }}

## 受控单选框

通过 `checked` 属性和 `onChange` 回调函数实现受控模式。

{{ controlled }}

## 单选框状态

单选框支持多种状态，包括未选中、选中、禁用未选中、禁用选中和只读选中。

{{ states }}

## 单选框组 - 基础用法

使用 `Radio.Group` 组件创建单选框组，实现互斥选择。

{{ group }}

## 单选框组 - options 配置

通过 `options` 属性配置单选框组，简化代码结构。

{{ group-with-options }}

## 按钮样式

Radio 组件支持按钮样式，提供三种变体：outline（默认）、primary-filled 和 default-filled。

{{ button-style }}

## 不同尺寸

Radio 组件支持三种尺寸：small、medium（默认）和 large。

{{ sizes }}

## 允许取消选中

通过 `allowUncheck` 属性允许取消选中单选框。

{{ allow-uncheck }}

## 禁用整组

通过 `disabled` 属性禁用整个单选框组。

{{ group-disabled }}

<!-- API_DOC -->

## API

### Radio

| 属性           | 类型                         | 默认值      | 说明                   |
| -------------- | ---------------------------- | ----------- | ---------------------- |
| allowUncheck   | `boolean`                    | `false`     | 是否允许取消选中       |
| checked        | `boolean`                    | `undefined` | 是否选中（受控）       |
| defaultChecked | `boolean`                    | `false`     | 是否默认选中（非受控） |
| disabled       | `boolean`                    | `false`     | 是否禁用               |
| label          | `string`                     | `undefined` | 主文案                 |
| name           | `string`                     | `undefined` | HTML 元素原生属性      |
| readonly       | `boolean`                    | `false`     | 只读状态               |
| value          | `any`                        | `undefined` | 单选按钮的值           |
| onChange       | `(checked: boolean) => void` | `undefined` | 选中状态变化时的回调   |

### Radio.Group

| 属性         | 类型                                                       | 默认值      | 说明               |
| ------------ | ---------------------------------------------------------- | ----------- | ------------------ |
| allowUncheck | `boolean`                                                  | `false`     | 是否允许取消选中   |
| defaultValue | `any`                                                      | `undefined` | 默认选中值         |
| disabled     | `boolean`                                                  | `false`     | 是否禁用整组       |
| name         | `string`                                                   | `undefined` | HTML 元素原生属性  |
| options      | `Array<{ label: string, value: any, disabled?: boolean }>` | `undefined` | 选项配置           |
| size         | `"small" \| "medium" \| "large"`                           | `"medium"`  | 组件尺寸           |
| value        | `any`                                                      | `undefined` | 当前选中值（受控） |
| variant      | `"outline" \| "primary-filled" \| "default-filled"`        | `"outline"` | 按钮样式变体       |
| onChange     | `(value: any) => void`                                     | `undefined` | 选中值变化时的回调 |

### Radio.Button

| 属性     | 类型      | 默认值      | 说明     |
| -------- | --------- | ----------- | -------- |
| disabled | `boolean` | `false`     | 是否禁用 |
| value    | `any`     | `undefined` | 按钮的值 |

## 注意事项

1. 当使用 `Radio.Group` 时，内部的 `Radio` 组件会自动继承 `name` 属性，无需单独设置
2. 当使用 `options` 属性时，`Radio.Group` 会自动生成对应的 `Radio` 组件
3. 当 `allowUncheck` 为 `true` 时，再次点击已选中的选项会取消选中
4. 按钮样式的单选框组在视觉上更像按钮组，适合用于选项较少的场景

## 样式定制

Radio 组件的样式可以通过 CSS 变量进行定制，主要包括：

- `--td-radio-size`：单选框大小
- `--td-radio-border-color`：边框颜色
- `--td-radio-bg-color`：背景颜色
- `--td-radio-checked-color`：选中颜色
- `--td-radio-disabled-color`：禁用颜色

通过自定义这些变量，可以实现不同风格的单选框效果。
