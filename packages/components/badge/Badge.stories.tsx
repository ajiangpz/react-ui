import { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Button } from "../../components/index";
import React from "react";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "徽标组件用于在右上角展示数字或状态点，常用于消息提醒、状态标记等场景。"
      }
    }
  },
  argTypes: {
    count: {
      control: "text",
      description: "徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+"
    },
    dot: {
      control: "boolean",
      description: "是否为红点"
    },
    maxCount: {
      control: "number",
      description: "封顶的数字值"
    },
    shape: {
      control: "select",
      options: ["circle", "round"],
      description: "形状"
    },
    size: {
      control: "select",
      options: ["small", "medium"],
      description: "尺寸"
    },
    showZero: {
      control: "boolean",
      description: "当数值为 0 时，是否展示徽标"
    },
    color: {
      control: "color",
      description: "自定义颜色"
    },
    offset: {
      control: "object",
      description: "设置状态点的位置偏移，示例：[-10, 20]"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Badge>;

const badgeBlockStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  background: "#EEEEEE",
  border: "1px solid #DCDCDC",
  borderRadius: "3px"
};

/** 基础徽标 */
export const Default: Story = {
  name: "基础徽标",
  args: {
    count: 2,
    children: <Button>按钮</Button>
  }
};

/** 红点样式 */
export const Dot: Story = {
  name: "红点样式",
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge dot count={1}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge dot count={1}>
        <Button>消息</Button>
      </Badge>
      <Badge dot>
        <span style={{ fontSize: "16px" }}>通知</span>
      </Badge>
    </div>
  )
};

/** 数字徽标 */
export const Count: Story = {
  name: "数字徽标",
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count={1}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={16}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={99}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={100}>
        <div style={badgeBlockStyle}></div>
      </Badge>
    </div>
  )
};

/** 文字徽标 */
export const TextCount: Story = {
  name: "文字徽标",
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count="new">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count="hot">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count="NEW">
        <Button>新品</Button>
      </Badge>
    </div>
  )
};

/** 封顶数字 - maxCount */
export const MaxCount: Story = {
  name: "封顶数字",
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count={100} maxCount={99}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={1000} maxCount={999}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={50} maxCount={20}>
        <div style={badgeBlockStyle}></div>
      </Badge>
    </div>
  )
};

/** 徽标形状 */
export const Shape: Story = {
  name: "徽标形状",
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count={8} shape="circle">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={88} shape="circle">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={8} shape="round">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={88} shape="round">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count="new" shape="round">
        <div style={badgeBlockStyle}></div>
      </Badge>
    </div>
  )
};

/** 徽标尺寸 */
export const Size: Story = {
  name: "徽标尺寸",
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count={8} size="medium">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={8} size="small">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={88} size="medium">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={88} size="small">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge dot count={1} size="medium">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge dot count={1} size="small">
        <div style={badgeBlockStyle}></div>
      </Badge>
    </div>
  )
};

/** 自定义颜色 */
export const CustomColor: Story = {
  name: "自定义颜色",
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count={8} color="var(--td-success-color)">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={8} color="var(--td-warning-color)">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={8} color="var(--td-brand-color)">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count="new" color="#6366f1">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge dot count={1} color="var(--td-success-color)">
        <div style={badgeBlockStyle}></div>
      </Badge>
    </div>
  )
};

/** 位置偏移 - offset */
export const Offset: Story = {
  name: "位置偏移",
  render: () => (
    <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
      <Badge count={8}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={8} offset={[-5, 5]}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={8} offset={[5, -5]}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={8} offset={[-10, 10]}>
        <div style={badgeBlockStyle}></div>
      </Badge>
    </div>
  )
};

/** 零值展示 - showZero */
export const ShowZero: Story = {
  name: "零值展示",
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count={0}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={0} showZero>
        <div style={badgeBlockStyle}></div>
      </Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "默认情况下，count 为 0 时不展示徽标。设置 showZero 为 true 可强制展示。"
      }
    }
  }
};

/** 独立使用 */
export const Standalone: Story = {
  name: "独立使用",
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Badge count={8} />
      <Badge count={88} />
      <Badge count={888} />
      <Badge count="new" shape="round" />
      <Badge dot count={1} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "不包裹子元素时，徽标将独立显示。"
      }
    }
  }
};

/** 结合按钮使用 */
export const WithButton: Story = {
  name: "结合按钮使用",
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count={5}>
        <Button>消息</Button>
      </Badge>
      <Badge count={12}>
        <Button theme="primary">通知</Button>
      </Badge>
      <Badge dot count={1}>
        <Button variant="outline">提醒</Button>
      </Badge>
      <Badge count="new" shape="round" color="var(--td-success-color)">
        <Button theme="success" variant="outline">
          新功能
        </Button>
      </Badge>
    </div>
  )
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>红点样式 (dot)</h4>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Badge dot count={2}>
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge dot count={1} size="small">
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge dot color="var(--td-success-color)">
            <div style={badgeBlockStyle}></div>
          </Badge>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>数字徽标 (count)</h4>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Badge count={1}>
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge count={16}>
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge count={100}>
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge count={100} maxCount={99}>
            <div style={badgeBlockStyle}></div>
          </Badge>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>形状 (shape)</h4>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Badge count={8} shape="circle">
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge count={88} shape="circle">
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge count={8} shape="round">
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge count={88} shape="round">
            <div style={badgeBlockStyle}></div>
          </Badge>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>尺寸 (size)</h4>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Badge count={8} size="medium">
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge count={8} size="small">
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge count={88} size="medium">
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge count={88} size="small">
            <div style={badgeBlockStyle}></div>
          </Badge>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>自定义颜色 (color)</h4>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Badge count={8} color="var(--td-error-color)">
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge count={8} color="var(--td-success-color)">
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge count={8} color="var(--td-warning-color)">
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge count={8} color="var(--td-brand-color)">
            <div style={badgeBlockStyle}></div>
          </Badge>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>文字徽标</h4>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Badge count="new">
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge count="hot" shape="round">
            <div style={badgeBlockStyle}></div>
          </Badge>
          <Badge count="NEW" color="var(--td-brand-color)">
            <div style={badgeBlockStyle}></div>
          </Badge>
        </div>
      </div>
    </div>
  )
};
