import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { Bell } from "lucide-react";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "danger", "warning", "success", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Badge>;

// 基础示例
export const Default: Story = {
  args: {
    variant: "success",
    children: "成功徽章",
  },
};

// 次要样式
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "次要徽章",
  },
};

// 危险/警告样式
export const Destructive: Story = {
  args: {
    variant: "danger",
    children: "危险徽章",
  },
};

// 轮廓样式
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "轮廓徽章",
  },
};

// 实际使用场景示例
export const StatusBadges: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="success">在线</Badge>
      <Badge variant="secondary">待处理</Badge>
      <Badge variant="danger">错误</Badge>
      <Badge variant="warning">草稿</Badge>
      <Badge variant="outline">草稿</Badge>
    </div>
  ),
};

// 带有图标的徽章
export const WithIcon: Story = {
  render: () => (
    <Badge variant="success"  className="gap-1">
      <Bell className="w-4 h-4" />
      新消息
    </Badge>
  ),
};





