import type { Meta, StoryObj } from "@storybook/react-vite";
import Input, { InputGroup } from "@tendaui/react/es/input";
import React from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: [
        "text",
        "file",
        "password",
        "number",
        "tel",
        "url",
        "search",
        "date",
        "time",
        "datetime-local",
        "month",
        "week"
      ],
      defaultValue: "text"
    },
    disabled: {
      control: "boolean",
      defaultValue: false
    }
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "请输入内容",
    disabled: false,
    name: "input"
  }
};

// 新增 InputGroup 的 story
export const Group: StoryObj<typeof InputGroup> = {
  render: (args) => (
    <InputGroup {...args} separate>
      <Input type="text" placeholder="用户名" />
      <Input type="password" placeholder="密码" />
    </InputGroup>
  ),
  name: "InputGroup 示例"
};
