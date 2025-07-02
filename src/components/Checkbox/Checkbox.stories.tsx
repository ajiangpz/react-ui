import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "复选框是否被选中",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      description: "是否禁用复选框",
      defaultValue: false,
    },
    className: {
      control: "text",
      description: "自定义样式类名",
    },
    "aria-label": {
      control: "text",
      description: "为屏幕阅读器提供的标签文本",
    },
    "aria-labelledby": {
      control: "text",
      description: "引用描述元素的 ID",
    },
    name: {
      control: "text",
      description: "表单提交时的字段名",
    },
    value: {
      control: "text",
      description: "复选框的值",
    },
    id: {
      control: "text",
      description: "元素的唯一标识符",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// 基础示例
export const Default: Story = {
  args: {
    defaultChecked: true
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
    </div>
  ),
};

// 受控组件示例
export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={checked}
        onCheckedChange={(checked) => setChecked(checked as boolean)}
      />
    </div>
  );
};




// 带标签的复选框
export const WithLabel = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        接受服务条款
      </label>
    </div>
  );
};



// 表单示例
export const FormExample = () => {
  const [formData, setFormData] = useState({
    newsletter: false,
    updates: false,
  });

  return (
    <form className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox
          id="newsletter"
          checked={formData.newsletter}
          onCheckedChange={(checked) =>
            setFormData((prev) => ({ ...prev, newsletter: checked as boolean }))
          }
        />
        <label htmlFor="newsletter">订阅新闻通讯</label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="updates"
          checked={formData.updates}
          onCheckedChange={(checked) =>
            setFormData((prev) => ({ ...prev, updates: checked as boolean }))
          }
        />
        <label htmlFor="updates">接收产品更新提醒</label>
      </div>
      <div className="text-sm text-gray-500">
        当前选择：
        {Object.entries(formData)
          .filter(([_, value]) => value)
          .map(([key]) => key)
          .join(", ")}
      </div>
    </form>
  );
}; 