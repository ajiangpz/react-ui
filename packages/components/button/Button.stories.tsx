import { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../components";
import { IconBackward, IconFastFoward, IconPlay, IconSearch, IconDownload, IconPlus } from "@tendaui/icons";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "按钮用于触发一个操作，如提交表单、打开对话框、取消操作等。"
      }
    }
  },
  argTypes: {
    theme: {
      control: "select",
      options: ["default", "primary", "success", "warning", "danger"],
      description: "按钮主题"
    },
    variant: {
      control: "select",
      options: ["base", "outline", "dashed", "text"],
      description: "按钮变体"
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "按钮尺寸"
    },
    shape: {
      control: "select",
      options: ["rectangle", "square", "round", "circle"],
      description: "按钮形状"
    },
    disabled: {
      control: "boolean",
      description: "禁用状态"
    },
    loading: {
      control: "boolean",
      description: "加载中状态"
    },
    block: {
      control: "boolean",
      description: "块级按钮"
    },
    ghost: {
      control: "boolean",
      description: "幽灵按钮"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

/** 基础按钮 */
export const Default: Story = {
  name: "基础按钮",
  args: {
    children: "按钮",
    theme: "default",
    variant: "base"
  }
};

/** 按钮主题 */
export const Theme: Story = {
  name: "按钮主题",
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button theme="default">默认</Button>
      <Button theme="primary">主要</Button>
      <Button theme="success">成功</Button>
      <Button theme="warning">警告</Button>
      <Button theme="danger">危险</Button>
    </div>
  )
};

/** 按钮变体 - base */
export const VariantBase: Story = {
  name: "按钮变体 - 填充 (base)",
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="base" theme="default">
        默认
      </Button>
      <Button variant="base" theme="primary">
        主要
      </Button>
      <Button variant="base" theme="success">
        成功
      </Button>
      <Button variant="base" theme="warning">
        警告
      </Button>
      <Button variant="base" theme="danger">
        危险
      </Button>
    </div>
  )
};

/** 按钮变体 - outline */
export const VariantOutline: Story = {
  name: "按钮变体 - 描边 (outline)",
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="outline" theme="default">
        默认
      </Button>
      <Button variant="outline" theme="primary">
        主要
      </Button>
      <Button variant="outline" theme="success">
        成功
      </Button>
      <Button variant="outline" theme="warning">
        警告
      </Button>
      <Button variant="outline" theme="danger">
        危险
      </Button>
    </div>
  )
};

/** 按钮变体 - dashed */
export const VariantDashed: Story = {
  name: "按钮变体 - 虚线 (dashed)",
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="dashed" theme="default">
        默认
      </Button>
      <Button variant="dashed" theme="primary">
        主要
      </Button>
      <Button variant="dashed" theme="success">
        成功
      </Button>
      <Button variant="dashed" theme="warning">
        警告
      </Button>
      <Button variant="dashed" theme="danger">
        危险
      </Button>
    </div>
  )
};

/** 按钮变体 - text */
export const VariantText: Story = {
  name: "按钮变体 - 文字 (text)",
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="text" theme="default">
        默认
      </Button>
      <Button variant="text" theme="primary">
        主要
      </Button>
      <Button variant="text" theme="success">
        成功
      </Button>
      <Button variant="text" theme="warning">
        警告
      </Button>
      <Button variant="text" theme="danger">
        危险
      </Button>
    </div>
  )
};

/** 按钮尺寸 */
export const Size: Story = {
  name: "按钮尺寸",
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
      <Button size="small" theme="primary">
        小按钮
      </Button>
      <Button size="medium" theme="primary">
        中按钮
      </Button>
      <Button size="large" theme="primary">
        大按钮
      </Button>
    </div>
  )
};

/** 按钮形状 */
export const Shape: Story = {
  name: "按钮形状",
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
      <Button shape="rectangle" theme="primary">
        长方形
      </Button>
      <Button shape="round" theme="primary">
        圆角
      </Button>
      <Button shape="square" theme="primary" icon={<IconPlus />} />
      <Button shape="circle" theme="primary" icon={<IconPlus />} />
    </div>
  )
};

/** 图标按钮 */
export const WithIcon: Story = {
  name: "图标按钮",
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button icon={<IconBackward />}>后退</Button>
      <Button icon={<IconPlay />} theme="primary">
        播放
      </Button>
      <Button icon={<IconFastFoward />} theme="success">
        快进
      </Button>
      <Button icon={<IconSearch />} theme="warning">
        搜索
      </Button>
      <Button icon={<IconDownload />} theme="danger">
        下载
      </Button>
    </div>
  )
};

/** 带后缀图标 */
export const WithSuffix: Story = {
  name: "带后缀图标",
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button suffix={<IconDownload />} theme="primary">
        下载
      </Button>
      <Button icon={<IconSearch />} suffix={<IconDownload />} theme="primary">
        搜索并下载
      </Button>
    </div>
  )
};

/** 禁用状态 */
export const Disabled: Story = {
  name: "禁用状态",
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button disabled>默认禁用</Button>
      <Button disabled theme="primary">
        主要禁用
      </Button>
      <Button disabled variant="outline" theme="primary">
        描边禁用
      </Button>
      <Button disabled variant="dashed" theme="primary">
        虚线禁用
      </Button>
      <Button disabled variant="text" theme="primary">
        文字禁用
      </Button>
    </div>
  )
};

/** 加载状态 */
export const Loading: Story = {
  name: "加载状态",
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button loading>加载中</Button>
      <Button loading theme="primary">
        加载中
      </Button>
      <Button loading variant="outline" theme="primary">
        加载中
      </Button>
      <Button loading variant="dashed" theme="success">
        加载中
      </Button>
    </div>
  )
};

/** 幽灵按钮 */
export const Ghost: Story = {
  name: "幽灵按钮",
  render: () => (
    <div style={{ display: "flex", gap: "12px", padding: "24px", flexWrap: "wrap" }}>
      <Button ghost theme="default">
        默认
      </Button>
      <Button ghost theme="primary">
        主要
      </Button>
      <Button ghost theme="success">
        成功
      </Button>
      <Button ghost theme="warning">
        警告
      </Button>
      <Button ghost theme="danger">
        危险
      </Button>
    </div>
  )
};

/** 块级按钮 */
export const Block: Story = {
  name: "块级按钮",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "300px" }}>
      <Button block theme="primary">
        主要按钮
      </Button>
      <Button block variant="outline" theme="primary">
        描边按钮
      </Button>
      <Button block variant="dashed">
        虚线按钮
      </Button>
    </div>
  )
};

/** 链接按钮 */
export const Link: Story = {
  name: "链接按钮",
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button href="https://www.example.com" target="_blank" theme="primary">
        跳转链接
      </Button>
      <Button href="https://www.example.com" target="_blank" variant="text" theme="primary">
        文字链接
      </Button>
    </div>
  )
};

/** 所有变体汇总 */
export const AllVariants: Story = {
  name: "所有变体汇总",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4 style={{ marginBottom: "12px" }}>填充按钮 (base)</h4>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="base" theme="default">
            默认
          </Button>
          <Button variant="base" theme="primary">
            主要
          </Button>
          <Button variant="base" theme="success">
            成功
          </Button>
          <Button variant="base" theme="warning">
            警告
          </Button>
          <Button variant="base" theme="danger">
            危险
          </Button>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px" }}>描边按钮 (outline)</h4>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="outline" theme="default">
            默认
          </Button>
          <Button variant="outline" theme="primary">
            主要
          </Button>
          <Button variant="outline" theme="success">
            成功
          </Button>
          <Button variant="outline" theme="warning">
            警告
          </Button>
          <Button variant="outline" theme="danger">
            危险
          </Button>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px" }}>虚线按钮 (dashed)</h4>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="dashed" theme="default">
            默认
          </Button>
          <Button variant="dashed" theme="primary">
            主要
          </Button>
          <Button variant="dashed" theme="success">
            成功
          </Button>
          <Button variant="dashed" theme="warning">
            警告
          </Button>
          <Button variant="dashed" theme="danger">
            危险
          </Button>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px" }}>文字按钮 (text)</h4>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button variant="text" theme="default">
            默认
          </Button>
          <Button variant="text" theme="primary">
            主要
          </Button>
          <Button variant="text" theme="success">
            成功
          </Button>
          <Button variant="text" theme="warning">
            警告
          </Button>
          <Button variant="text" theme="danger">
            危险
          </Button>
        </div>
      </div>
    </div>
  )
};
