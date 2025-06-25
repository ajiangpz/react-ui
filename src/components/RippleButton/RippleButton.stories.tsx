import { Meta, StoryObj } from "@storybook/react";
import { RippleButton } from "./RippleButton";

const meta: Meta<typeof RippleButton> = {
  title: "Components/RippleButton",
  component: RippleButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "outline", "ghost", "link"],
      description: "按钮样式变体",
      defaultValue: "solid"
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "按钮尺寸",
      defaultValue: "md",
      type: "string"
    },
    colorScheme: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger"],
      description: "按钮颜色变体",
      defaultValue: "primary",
      type: "string"
    },
    loading: {
      control: "boolean",
      description: "是否显示加载状态",
      defaultValue: false,
      type: "boolean"
    },
    disabled: {
      control: "boolean",
      description: "是否禁用按钮",
      defaultValue: false,
      type: "boolean"
    },
    block: {
      control: "boolean",
      description: "是否块级显示",
      defaultValue: false,
      type: "boolean"
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "solid",
    colorScheme: "default",
    size: "md",
    block: false,
    loading: false,
    disabled: false
  }
};
