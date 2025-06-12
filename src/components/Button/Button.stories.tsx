import { Meta, StoryObj } from "@storybook/react";
import { FancyButton } from "./Button";
import { Mail, Loader2 } from "lucide-react";

const meta: Meta<typeof FancyButton> = {
  title: "Components/Button",
  component: FancyButton,
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
    colorScheme: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      description: '按钮颜色变体',
      defaultValue: 'primary',
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

type Story = StoryObj<typeof FancyButton>;

export const Default: Story = {
  args: {
    children: "默认按钮",
    variant: "solid"
  }
};

export const Outline: Story = {
  args: {
    children: "描边按钮",
    variant: "outline"
  }
};

export const Ghost: Story = {
  args: {
    children: "幽灵按钮",
    variant: "ghost",
  }
};

export const Link: Story = {
  args: {
    children: "链接按钮",
    variant: "link"
  }
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2 h-4 w-4" />
      </>
    ),
    variant: "solid"
  }
};

export const Loading: Story = {
  args: {
    children: (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      </>
    ),
    disabled: true
  }
};



