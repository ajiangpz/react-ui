---
title: IPInput 组件
description: 一个功能完整的 React IP 地址输入组件，支持 IPv4、IPv6 和 CIDR 格式。
isComponent: true
---

## 基本使用

基本的 IP 输入框用法，支持 IPv4 地址输入。

{{ default }}

## 支持 CIDR

通过 `allowCIDR` 属性启用 CIDR 格式支持，允许输入带掩码的 IP 地址。

{{ with-cidr }}

## 支持 IPv6

通过 `allowIPv6` 属性启用 IPv6 地址支持。

{{ ipv6 }}

## 受控组件

通过 `value` 和 `onChange` 实现受控模式。

{{ controlled }}

## 禁用和只读状态

通过 `disabled` 和 `readOnly` 属性设置组件状态。

{{ states }}

## 粘贴功能

组件支持智能粘贴解析，自动从粘贴文本中提取 IP 地址。

{{ paste-demo }}

## 键盘导航

支持丰富的键盘操作，提高输入效率。

{{ keyboard-navigation }}

## 完整功能示例

综合使用多种功能的完整示例。

{{ full-featured }}

<br />

<!-- API_DOC -->

## API

### Props

| 属性                  | 类型                                                      | 默认值 | 说明                                |
| --------------------- | --------------------------------------------------------- | ------ | ----------------------------------- |
| value                 | string                                                    | -      | 受控值                              |
| defaultValue          | string                                                    | ""     | 非受控初始值                        |
| onChange              | (value: string, meta: IPInputMeta) => void                | -      | 值变化回调                          |
| onBlur                | (value: string, meta: IPInputMeta) => void                | -      | 失焦回调                            |
| onFocus               | () => void                                                | -      | 聚焦回调                            |
| allowIPv6             | boolean                                                   | false  | 是否允许 IPv6                       |
| allowCIDR             | boolean                                                   | false  | 是否允许 CIDR 格式                  |
| allowLeadingZeros     | boolean                                                   | false  | 是否允许前导零                      |
| allowEmpty            | boolean                                                   | true   | 是否允许空值                        |
| placeholder           | string                                                    | -      | 占位符                              |
| disabled              | boolean                                                   | false  | 是否禁用                            |
| readOnly              | boolean                                                   | false  | 是否只读                            |
| showClear             | boolean                                                   | false  | 是否显示清空按钮                    |
| autoFocus             | boolean                                                   | false  | 是否自动聚焦                        |
| showSegmentSeparators | boolean                                                   | true   | 是否显示分隔符                      |
| strict                | boolean                                                   | false  | 严格模式（不完整值不触发 onChange） |
| validator             | (value: string) => { isValid: boolean; message?: string } | -      | 自定义校验函数                      |
| className             | string                                                    | -      | 自定义类名                          |
| style                 | React.CSSProperties                                       | -      | 自定义样式                          |
