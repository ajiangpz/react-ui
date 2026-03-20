---
title: Dialog 对话框
description: 对话框组件用于在浮层中显示内容，可用于确认信息、提示信息、表单输入等场景。
isComponent: true
---

### 基础对话框

最简单的对话框用法，展示默认的对话框功能。

{{ base }}

### 不同主题风格

展示不同主题风格的对话框，包括默认、信息、成功、警告和危险。

{{ themes }}

### 对话框位置

展示不同位置的对话框，包括顶部和居中。

{{ placement }}

### 自定义按钮

自定义对话框的按钮文字和样式。

{{ custom-buttons }}

### 隐藏按钮

展示如何隐藏对话框的取消按钮或底部操作栏。

{{ hide-buttons }}

### 确认按钮加载状态

展示确认按钮的加载状态，用于异步操作场景。

{{ confirm-loading }}

### 全屏对话框

展示全屏模式的对话框，适合展示大量内容。

{{ full-screen }}

### 非模态对话框

展示非模态对话框，允许用户同时操作页面上的其他内容。

{{ modeless }}

### 命令式调用 - DialogPlugin

使用 DialogPlugin 函数进行命令式调用，包括基本调用、确认对话框和提示对话框。

{{ plugin-example }}

<!-- API_DOC -->

## API

### Dialog Props

| 属性 | 说明 | 类型 | 默认值 |
| -------- | ------------------------------------------------------- | ------------------------------------------------------------ | ----------- |
| attach | 对话框挂载的节点。数据类型为 String 时，会被当作选择器处理，进行节点查询。示例：'body' 或 () => document.body | AttachNode | - |
| body | 对话框内容 | ReactNode | - |
| cancelBtn | 取消按钮，可自定义。值为 null 则不显示取消按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制取消事件 | ButtonProps \| ReactNode \| null | - |
| children | 对话框内容，同 body | ReactNode | - |
| closeBtn | 关闭按钮，可以自定义。值为 true 显示默认关闭按钮，值为 false 不显示关闭按钮。值类型为 string 则直接显示值，如：“关闭”。值类型为 TNode，则表示呈现自定义按钮示例 | ReactNode | true |
| closeOnEscKeydown | 按下 ESC 时是否触发对话框关闭事件 | boolean | - |
| closeOnOverlayClick | 点击蒙层时是否触发关闭事件 | boolean | - |
| confirmBtn | 确认按钮。值为 null 则不显示确认按钮。值类型为字符串，则表示自定义按钮文本，值类型为 Object 则表示透传 Button 组件属性。使用 TNode 自定义按钮时，需自行控制确认事件 | ButtonProps \| ReactNode \| null | - |
| confirmLoading | 确认按钮加载状态 | boolean | - |
| confirmOnEnter | 是否在按下回车键时，触发确认事件 | boolean | - |
| destroyOnClose | 是否在关闭弹框的时候销毁子元素 | boolean | false |
| dialogClassName | 弹框元素类名，示例：'t-class-dialog-first t-class-dialog-second' | string | '' |
| draggable | 对话框是否可以拖拽（仅在非模态对话框时有效） | boolean | false |
| footer | 底部操作栏，默认会有“确认”和“取消”两个按钮。值为 true 显示默认操作按钮，值为 false 不显示任何内容，值类型为 Function 表示自定义底部内容 | ReactNode | true |
| forceRender | 是否强制渲染 Dialog，请使用 lazy 代替 | boolean | false |
| header | 头部内容。值为 true 显示空白头部，值为 false 不显示任何内容，值类型为 string 则直接显示值，值类型为 Function 表示自定义头部内容 | ReactNode | true |
| lazy | 是否启用对话框懒加载，启用时对话框内的内容不渲染 | boolean | true |
| mode | 对话框类型，有 3 种：模态对话框、非模态对话框、全屏对话框。弹出「模态对话框」时，只能操作对话框里面的内容，不能操作其他内容。弹出「非模态对话框」时，则可以操作页面内所有内容。「普通对话框」是指没有脱离文档流的对话框，可以在这个基础上开发更多的插件 | `modal` \| `modeless` \| `full-screen` | modal |
| placement | 对话框位置，内置两种：垂直水平居中显示 和 靠近顶部（top:20%）显示。默认情况，为避免贴顶或贴底，顶部和底部距离最小为 `48px`，可通过调整 `top` 覆盖默认大小 | `top` \| `center` | top |
| preventScrollThrough | 防止滚动穿透 | boolean | true |
| showInAttachedElement | 仅在挂载元素中显示抽屉，默认在浏览器可视区域显示。父元素需要有定位属性，如：position: relative | boolean | false |
| showOverlay | 是否显示遮罩层 | boolean | true |
| theme | 对话框风格 | `default` \| `info` \| `warning` \| `danger` \| `success` | default |
| top | 用于弹框具体窗口顶部的距离，优先级大于 placement | string \| number | - |
| visible | 控制对话框是否显示 | boolean | - |
| width | 对话框宽度，示例：320, '500px', '80%' | string \| number | - |
| zIndex | 对话框层级，Web 侧样式默认为 2500，移动端和小程序样式默认为 1500 | number | - |
| onBeforeClose | 对话框执行消失动画效果前触发 | () => void | - |
| onBeforeOpen | 对话框执行弹出动画效果前触发 | () => void | - |
| onCancel | 如果“取消”按钮存在，则点击“取消”按钮时触发，同时触发关闭事件 | (context: { e: MouseEvent<HTMLButtonElement> }) => void | - |
| onClose | 关闭事件，点击取消按钮、点击关闭按钮、点击蒙层、按下 ESC 等场景下触发 | (context: { trigger: 'esc' \| 'close-btn' \| 'cancel' \| 'overlay', e: MouseEvent<HTMLElement> \| KeyboardEvent }) => void | - |
| onCloseBtnClick | 点击右上角关闭按钮时触发 | (context: { e: MouseEvent<HTMLDivElement> }) => void | - |
| onClosed | 对话框消失动画效果结束后触发 | () => void | - |
| onConfirm | 如果“确认”按钮存在，则点击“确认”按钮时触发，或者键盘按下回车键时触发 | (context: { e: MouseEvent<HTMLButtonElement> \| KeyboardEvent<HTMLDivElement> }) => void | - |
| onEscKeydown | 按下 ESC 时触发事件 | (context: { e: KeyboardEvent<HTMLDivElement> }) => void | - |
| onOpened | 对话框弹出动画效果结束后触发 | () => void | - |
| onOverlayClick | 如果蒙层存在，点击蒙层时触发 | (context: { e: MouseEvent<HTMLDivElement> }) => void | - |

### DialogInstance

| 方法 | 说明 | 参数 | 返回值 |
| -------- | ------------------------------------------------------- | ------------------------------------------------------------ | ----------- |
| destroy | 销毁弹框 | - | - |
| hide | 隐藏弹框 | - | - |
| setConfirmLoading | 设置确认按钮加载状态 | loading: boolean | - |
| show | 显示弹框 | - | - |
| update | 更新弹框内容 | props: DialogOptions | - |

### DialogPlugin

| 方法 | 说明 | 参数 | 返回值 |
| -------- | ------------------------------------------------------- | ------------------------------------------------------------ | ----------- |
| DialogPlugin | 创建一个自定义对话框 | options: DialogOptions | DialogInstance |
| DialogPlugin.confirm | 创建一个确认对话框 | options: DialogOptions | DialogInstance |
| DialogPlugin.alert | 创建一个提示对话框 | options: Omit<DialogOptions, "cancelBtn"> | DialogInstance |