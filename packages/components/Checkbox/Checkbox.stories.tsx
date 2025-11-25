import { Meta, StoryObj } from "@storybook/react-vite";
import { CheckProps } from "../common/Check";
import { Checkbox } from "@tendaui/react/es/index";
import { useState } from "react";
import React from "react";

const meta: Meta<CheckProps> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<CheckProps>;

const CheckboxExample = ({ ...args }) => {
  const [value, setValue] = useState(true);

  return (
    <div className="flex gap-2">
      <Checkbox {...args}>未选中项</Checkbox>
      <Checkbox indeterminate {...args}>
        半选状态
      </Checkbox>
      <Checkbox {...args} checked={value} onChange={setValue}>
        选中项
      </Checkbox>
      <Checkbox {...args} disabled>
        未选禁用项
      </Checkbox>
      <Checkbox {...args} disabled defaultChecked>
        选中禁用项
      </Checkbox>
    </div>
  );
};

// 基础示例
export const Default: Story = {
  render: ({ ...args }) => <CheckboxExample {...args}></CheckboxExample>
};

export const CheckRadio: Story = {
  render: () => (
    <Checkbox.Group<string[]>>
      <Checkbox checkAll>全选</Checkbox>
      <Checkbox value="北京">北京</Checkbox>
      <Checkbox value="上海">上海</Checkbox>
      <Checkbox value="广州" disabled>
        广州
      </Checkbox>
    </Checkbox.Group>
  )
};
