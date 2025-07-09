import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  argTypes: {
    checked: { control: "boolean", description: "受控模式，开关状态" },
    required: { control: "boolean", description: "是否为必填" },
    disabled: { control: "boolean", description: "是否禁用" },
    onCheckedChange: { action: "checked changed", description: "切换时回调" },
    name: { control: "text", description: "表单 name 属性" },
    value: { control: "text", description: "表单 value 属性" },
    id: { control: "text", description: "id 属性" },
    tabIndex: { control: "number", description: "tabIndex 属性" },
    className: { control: "text", description: "自定义 class" },
    style: { control: "object", description: "自定义 style" },
    // 其他 button 原生属性可按需补充
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    required: false,
    name: "switch-demo",
    value: "on",
    id: "switch-demo",
    tabIndex: 0,
    className: "",
    style: {},
    defaultChecked: false,
  },
};
