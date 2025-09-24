import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";
import { GridItem } from "./GridItem";

const meta: Meta<typeof GridItem> = {
  title: "Layout/GridItem",
  component: GridItem,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <Grid cols={12} gap={4}>
        <Story />
      </Grid>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof GridItem>;

// 基础用法
export const Basic: Story = {
  args: {
    span: 6,
    children: (
      <div className="bg-blue-500 h-20 text-center flex items-center justify-center text-white">
        占据 6 列
      </div>
    )
  }
};

// 不同列宽
export const DifferentSpans: Story = {
  render: () => (
    <>
      <GridItem span={12}>
        <div className="bg-blue-500 h-20 text-center flex items-center justify-center text-white">
          span: 12 (占满)
        </div>
      </GridItem>
      <GridItem span={6}>
        <div className="bg-blue-500 h-20 text-center flex items-center justify-center text-white">
          span: 6 (一半)
        </div>
      </GridItem>
      <GridItem span={6}>
        <div className="bg-blue-500 h-20 text-center flex items-center justify-center text-white">
          span: 6 (一半)
        </div>
      </GridItem>
      <GridItem span={4}>
        <div className="bg-blue-500 h-20 text-center flex items-center justify-center text-white">
          span: 4 (三分之一)
        </div>
      </GridItem>
      <GridItem span={4}>
        <div className="bg-blue-500 h-20 text-center flex items-center justify-center text-white">
          span: 4 (三分之一)
        </div>
      </GridItem>
      <GridItem span={4}>
        <div className="bg-blue-500 h-20 text-center flex items-center justify-center text-white">
          span: 4 (三分之一)
        </div>
      </GridItem>
    </>
  )
};

// 响应式布局
export const ResponsiveLayout: Story = {
  render: () => (
    <>
      <GridItem
        span={{
          base: 12, // 移动端占满
          sm: 6, // 平板占一半
          lg: 4 // 桌面占三分之一
        }}
      >
        <div className="bg-blue-500 h-20 text-center flex items-center justify-center text-white">
          响应式布局 1
        </div>
      </GridItem>
      <GridItem
        span={{
          base: 12,
          sm: 6,
          lg: 4
        }}
      >
        <div className="bg-blue-500 h-20 text-center flex items-center justify-center text-white">
          响应式布局 2
        </div>
      </GridItem>
      <GridItem
        span={{
          base: 12,
          sm: 6,
          lg: 4
        }}
      >
        <div className="bg-blue-500 h-20 text-center flex items-center justify-center text-white">
          响应式布局 3
        </div>
      </GridItem>
    </>
  )
};

// 移动端优先设计
export const MobileFirstDesign: Story = {
  render: () => (
    <>
      <GridItem
        span={{
          base: 12,
          md: 4
        }}
      >
        <div className="bg-green-500 h-96 text-center flex items-center justify-center text-white">
          侧边栏
        </div>
      </GridItem>
      <GridItem
        span={{
          base: 12,
          md: 8
        }}
      >
        <div className="bg-blue-500 h-96 text-center flex items-center justify-center text-white">
          主内容区
        </div>
      </GridItem>
    </>
  )
};

// 复杂布局示例
export const ComplexLayout: Story = {
  render: () => (
    <>
      {/* 头部横幅 */}
      <GridItem span={12}>
        <div className="bg-blue-500 h-20 text-center flex items-center justify-center text-white">
          头部横幅
        </div>
      </GridItem>
      {/* 侧边栏 */}
      <GridItem
        span={{
          base: 12,
          lg: 4
        }}
      >
        <div className="space-y-4">
          <div className="bg-green-500 h-24 text-center flex items-center justify-center text-white">
            侧边栏部件 1
          </div>
          <div className="bg-green-500 h-24 text-center flex items-center justify-center text-white">
            侧边栏部件 2
          </div>
          <div className="bg-green-500 h-24 text-center flex items-center justify-center text-white">
            侧边栏部件 3
          </div>
        </div>
      </GridItem>
      {/* 主要内容区 */}
      <GridItem
        span={{
          base: 12,
          lg: 8
        }}
      >
        <div className="bg-blue-500 h-96 text-center flex items-center justify-center text-white">
          主要内容区
        </div>
      </GridItem>

      {/* 底部卡片 */}
      <GridItem
        span={{
          base: 12,
          sm: 6,
          lg: 3
        }}
      >
        <div className="bg-blue-500 h-32 text-center flex items-center justify-center text-white">
          底部卡片 1
        </div>
      </GridItem>
      <GridItem
        span={{
          base: 12,
          sm: 6,
          lg: 3
        }}
      >
        <div className="bg-blue-500 h-32 text-center flex items-center justify-center text-white">
          底部卡片 2
        </div>
      </GridItem>
      <GridItem
        span={{
          base: 12,
          sm: 6,
          lg: 3
        }}
      >
        <div className="bg-blue-500 h-32 text-center flex items-center justify-center text-white">
          底部卡片 3
        </div>
      </GridItem>
      <GridItem
        span={{
          base: 12,
          sm: 6,
          lg: 3
        }}
      >
        <div className="bg-blue-500 h-32 text-center flex items-center justify-center text-white">
          底部卡片 4
        </div>
      </GridItem>
    </>
  )
};
