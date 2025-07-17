import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
import { toast } from "./Notify";
import { ToastProvider } from "./NotifyContext";

import { FancyButton } from "@/components/Button/Button";

const meta = {
  title: "Components/Toast",
  component: ToastProvider,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    )
  ]
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

// 展示组件
const ToastDemo = ({
  message,
  type
}: {
  message: string;
  type: "default" | "success" | "error" | "info" | "warning";
}) => {
  let [count, setCount] = useState(1);
  return (
    <div className="p-4">
      <FancyButton
        variant="solid"
        size="sm"
        onClick={() => {
          toast(message + count, type);
          setCount(count + 1);
        }}
      >
        显示 {type} Toast
      </FancyButton>
    </div>
  );
};

// 基础示例
export const Default: Story = {
  args: {
    children: <ToastDemo message="这是一条默认提示" type="default" />
  }
};

// 成功提示
export const Success: Story = {
  args: {
    children: <ToastDemo message="操作成功！操作成功！操作成功！操作成功！操作成功！" type="success" />
  }
};

// 错误提示
export const Error: Story = {
  args: {
    children: <ToastDemo message="发生错误！" type="error" />
  }
};

// 信息提示
export const Info: Story = {
  args: {
    children: <ToastDemo message="这是一条信息提示" type="info" />
  }
};

// 警告提示
export const Warning: Story = {
  args: {
    children: <ToastDemo message="请注意！" type="warning" />
  }
};

// 自定义示例
export const CustomMessage: Story = {
  args: {
    children: <ToastDemo message="这是一条自定义消息" type="default" />
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: "你可以通过 `toast()` 函数显示自定义消息。"
      }
    }
  }
};

// 多个 Toast 示例
export const MultipleToasts: Story = {
  args: {
    children: (
      <div className="p-4">
        <FancyButton
          variant="solid"
          size="sm"
          onClick={() => {
            toast("默认提示", "default");
            setTimeout(() => toast("成功提示", "success"), 500);
            setTimeout(() => toast("错误提示", "error"), 1000);
            setTimeout(() => toast("信息提示", "info"), 1500);
            setTimeout(() => toast("警告提示", "warning"), 2000);
          }}
        >
          显示多个 Toast
        </FancyButton>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "展示多个不同类型的 Toast 消息。注意：默认最多显示5条消息。"
      }
    }
  }
};
