import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";
import { GridItem } from "./GridItem";

const meta: Meta<typeof Grid> = {
  title: "Layout/Grid",
  component: Grid,
  tags: ["autodocs"],
  argTypes: {
    cols: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    gap: {
      control: "select",
      options: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    cols: 12,
    gap: 2,
    children: (
      <>
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">1</GridItem>
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">2</GridItem>
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">3</GridItem>
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">4</GridItem>
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">5</GridItem>
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">6</GridItem>
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">7</GridItem>
        <GridItem span={2} className="bg-blue-500 h-20 text-center flex items-center justify-center">8</GridItem>
      </>
    )
  }
};

export const Responsive: Story = {
  args: {
    cols: 12,
    gap: 4,
    children: (
      <>
        <GridItem 
          span={{
            base: 12,  // 移动端（<640px）占满宽度
            sm: 6,     // ≥640px 时占一半
            md: 4,     // ≥768px 时占三分之一
            lg: 3      // ≥1024px 时占四分之一
          }} 
          className="bg-blue-500 h-20 text-center flex items-center justify-center"
        >
          响应式卡片 1
        </GridItem>
        <GridItem 
          span={{
            base: 12,
            sm: 6,
            md: 4,
            lg: 3
          }} 
          className="bg-blue-500 h-20 text-center flex items-center justify-center"
        >
          响应式卡片 2
        </GridItem>
        <GridItem 
          span={{
            base: 12,
            sm: 6,
            md: 4,
            lg: 3
          }} 
          className="bg-blue-500 h-20 text-center flex items-center justify-center"
        >
          响应式卡片 3
        </GridItem>
        <GridItem 
          span={{
            base: 12,
            sm: 6,
            md: 4,
            lg: 3
          }} 
          className="bg-blue-500 h-20 text-center flex items-center justify-center"
        >
          响应式卡片 4
        </GridItem>
      </>
    )
  }
};

export const MobileFirst: Story = {
  args: {
    cols: 12,
    gap: 4,
    children: (
      <>
        <GridItem 
          span={{
            base: 12,  // 移动端默认占满
            sm: 6,     // 小屏幕占一半
          }} 
          className="bg-blue-500 h-20 text-center flex items-center justify-center"
        >
          移动端优先 1
        </GridItem>
        <GridItem 
          span={{
            base: 12,
            sm: 6,
          }} 
          className="bg-blue-500 h-20 text-center flex items-center justify-center"
        >
          移动端优先 2
        </GridItem>
        <GridItem 
          span={{
            base: 6,   // 移动端占一半
            md: 4,     // 平板占三分之一
          }} 
          className="bg-blue-500 h-20 text-center flex items-center justify-center"
        >
          移动端优先 3
        </GridItem>
        <GridItem 
          span={{
            base: 6,
            md: 4,
          }} 
          className="bg-blue-500 h-20 text-center flex items-center justify-center"
        >
          移动端优先 4
        </GridItem>
      </>
    )
  }
};
