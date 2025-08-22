import { Meta, StoryObj } from '@storybook/react';
import Popup from './Popup';
import { Button } from '../Button';
const meta: Meta = {
  title: '组件/Popup',
  component: Popup,
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: { type: 'select' },
      options: [
        'click',
        'hover',
        'focus',
        'mousedown',
        'context-menu',
        'touch',
      ],
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
    content: <div style={{ fontSize: '20px' }}>content content content</div>,
    showArrow: true,
  },
  render: (args) => (
    <div className="my-4 flex justify-center">
      <Popup {...args}>
        <Button>点击显示Popup</Button>
      </Popup>
    </div>
  ),
};
