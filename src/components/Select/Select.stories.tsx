import { Meta, StoryObj } from '@storybook/react';
import { Select } from './index';
import './style/index';
import '@/components/style';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  args: {},
  tags: ['autodocs'],
};

export default meta;

const SingleSelect = ({ ...args }) => {
  const [value, setValue] = useState('');
  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Select
      value={value}
      onChange={onChange}
      style={{ width: '40%' }}
      clearable
      options={[
        { label: '架构云', value: '1', title: '架构云选项' },
        { label: '大数据', value: '2' },
        { label: '区块链', value: '3' },
        { label: '物联网', value: '4', disabled: true },
        {
          label: '人工智能',
          value: '5',
        },
      ]}
      {...args}
    />
  );
};
type Story = StoryObj<typeof Select>;
export const Default: Story = {
  args: {},
  render: ({ ...args }) => <SingleSelect {...args}></SingleSelect>,
};
