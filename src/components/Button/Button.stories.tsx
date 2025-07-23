import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'link'],
      description: '按钮样式变体',
      defaultValue: 'solid'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '按钮尺寸',
      defaultValue: 'md',
      type: 'string'
    },

    loading: {
      control: 'boolean',
      description: '是否显示加载状态',
      defaultValue: false,
      type: 'boolean'
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用按钮',
      defaultValue: false,
      type: 'boolean'
    },
    block: {
      control: 'boolean',
      description: '是否块级显示',
      defaultValue: false,
      type: 'boolean'
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "按钮",
    variant: "solid",
    loading: false
  }
};




