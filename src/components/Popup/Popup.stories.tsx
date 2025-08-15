import { Meta, StoryObj } from '@storybook/react';
import Popup from './Popup';
import { Button } from '../Button';
import { right } from '@popperjs/core';
const meta: Meta = {
  title: '组件/Popup',
  component: Popup,
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: { type: 'select' },
      options: ['click', 'hover', 'focus', 'mousedown'],
    },
    placement: {
      control: { type: 'select' },
      options: [
        'top',
        'top-start',
        'top-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
        'bottom',
        'bottom-start',
        'bottom-end',
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  args: {
    trigger: 'click',
    placement: 'top',
    content: '这是一个弹出层',
    showArrow: true,
  },
  render: (args) => (
    <div style={{ padding: '100px' }}>
      <Popup {...args}>
        <Button>点击或悬停显示 Popup</Button>
      </Popup>
    </div>
  ),
};
