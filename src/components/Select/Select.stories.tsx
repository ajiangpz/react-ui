// Select.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './Select';

import MySelect from './MySelect';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const MySelectStory: Story = {
  render: () => (
    <div className="mx-auto w-80 p-4">
      <MySelect
        options={[
          { value: 'option1', label: '选项 1' },
          { value: 'option2', label: '选项 2' },
          { value: 'option3', label: '选项 3' },
        ]}
        placeholder="请选择一个选项"
        onChange={(value) => console.log('Selected:', value)}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '自定义选择器组件示例',
      },
    },
  },
};

export const Basic: Story = {
  render: () => (
    <div className="mx-auto w-80 p-4">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="选择一个选项" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">选项 1</SelectItem>
          <SelectItem value="option-2">选项 2</SelectItem>
          <SelectItem value="option-3">选项 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '基础选择器示例，包含三个简单选项',
      },
    },
  },
};

export const WithGroups: Story = {
  render: () => (
    <div className="mx-auto w-80 p-4">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="选择一个项目" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>第一组</SelectLabel>
            <SelectItem value="group1-1">项目 1-1</SelectItem>
            <SelectItem value="group1-2">项目 1-2</SelectItem>
            <SelectItem value="group1-3">项目 1-3</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>第二组</SelectLabel>
            <SelectItem value="group2-1">项目 2-1</SelectItem>
            <SelectItem value="group2-2">项目 2-2</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '带分组和分隔符的选择器示例',
      },
    },
  },
};

export const WithDisabled: Story = {
  render: () => (
    <div className="mx-auto w-80 p-4">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="选择一个选项" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="active">可用选项</SelectItem>
          <SelectItem value="disabled" disabled>
            禁用选项
          </SelectItem>
          <SelectItem value="another">另一个可用选项</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '包含禁用选项的选择器示例',
      },
    },
  },
};

export const DisabledTrigger: Story = {
  render: () => (
    <div className="mx-auto w-80 p-4">
      <Select>
        <SelectTrigger disabled>
          <SelectValue placeholder="这个选择器被禁用了" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">选项 1</SelectItem>
          <SelectItem value="option-2">选项 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '整个选择器被禁用的示例',
      },
    },
  },
};

export const WithDefaultValue: Story = {
  render: () => (
    <div className="mx-auto w-80 p-4">
      <Select defaultValue="option-2">
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option-1">选项 1</SelectItem>
          <SelectItem value="option-2">选项 2</SelectItem>
          <SelectItem value="option-3">选项 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '带有默认选中值的选择器示例',
      },
    },
  },
};
