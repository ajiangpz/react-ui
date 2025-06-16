import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'Layout/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'col', 'row-reverse', 'col-reverse'],
    },
    justify: {
      control: 'select',
      options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
    },
    align: {
      control: 'select',
      options: ['start', 'end', 'center', 'baseline', 'stretch'],
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    gap: {
      control: 'select',
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const FlexItem = ({ index }: { index: number }) => (
  <div className="bg-green-100 p-4 text-center rounded w-20">
    项目 {index}
  </div>
);

export const Default: Story = {
  args: {
    direction: 'row',
    justify: 'start',
    align: 'center',
    gap: 4,
    children: (
      <>
        <FlexItem index={1} />
        <FlexItem index={2} />
        <FlexItem index={3} />
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    ...Default.args,
    direction: 'col',
  },
};

export const JustifyBetween: Story = {
  args: {
    ...Default.args,
    justify: 'between',
  },
};

export const JustifyCenter: Story = {
  args: {
    ...Default.args,
    justify: 'center',
  },
};

export const AlignStart: Story = {
  args: {
    ...Default.args,
    align: 'start',
  },
};

export const AlignEnd: Story = {
  args: {
    ...Default.args,
    align: 'end',
  },
};

export const Wrap: Story = {
  args: {
    ...Default.args,
    wrap: 'wrap',
    children: (
      <>
        <FlexItem index={1} />
        <FlexItem index={2} />
        <FlexItem index={3} />
        <FlexItem index={4} />
        <FlexItem index={5} />
        <FlexItem index={6} />
      </>
    ),
  },
};

export const LargeGap: Story = {
  args: {
    ...Default.args,
    gap: 8,
  },
}; 