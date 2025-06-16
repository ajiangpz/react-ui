import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Layout/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    maxWidth: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div className="bg-gray-200 p-4 text-center">
        这是一个居中的容器内容
      </div>
    ),
    maxWidth: 'xl',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    maxWidth: 'sm',
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    maxWidth: 'md',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    maxWidth: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    ...Default.args,
    maxWidth: '2xl',
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    maxWidth: 'full',
  },
}; 