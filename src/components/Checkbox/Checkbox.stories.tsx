import { Meta, StoryObj } from "@storybook/react";
import { CheckProps } from '../common/Check';
import { Checkbox } from "./index";
import { useState } from "react";
import '@/components/style';

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
      <Checkbox indeterminate {...args}>半选状态</Checkbox>
      <Checkbox {...args} checked={value} onChange={setValue}>
        选中项
      </Checkbox>
      <Checkbox {...args} disabled>未选禁用项</Checkbox>
      <Checkbox {...args} disabled defaultChecked>
        选中禁用项
      </Checkbox>
    </div>
  );
}

// 基础示例
export const Default: Story = {
  render: ({ ...args }) => <CheckboxExample {...args}></CheckboxExample>
};
