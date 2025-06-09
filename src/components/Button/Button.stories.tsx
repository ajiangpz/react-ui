import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
      block: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '默认按钮',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: '描边按钮',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: '幽灵按钮',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: '加载中',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '禁用状态',
  },
};

export const Block: Story = {
  args: {
    block: true,
    children: '块级按钮',
  },
  parameters: {
    layout: 'padded',
  },
}; 