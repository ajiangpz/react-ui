import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { NotificationProvider } from "./NotifyContext";
import { notification } from "./Notify";
import { FancyButton } from "@/components/Button/Button";

const meta = {
  title: "Components/Notification",
  component: NotificationProvider,
  tags: ["autodocs"],
  decorators: [
    Story => (
      <NotificationProvider>
        <Story />
      </NotificationProvider>
    )
  ]
} satisfies Meta<typeof NotificationProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

// 展示组件
const NotificationDemo = ({
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
          notification(message + count, type);
          setCount(count + 1);
        }}
      >
        显示 {type} Notification
      </FancyButton>
    </div>
  );
};

// 基础示例
export const Default: Story = {
  args: {
    children: <NotificationDemo message="这是一条默认提示" type="default" />
  }
};

// 成功提示
export const Success: Story = {
  args: {
    children: <NotificationDemo message="操作成功！操作成功！操作成功！操作成功！操作成功！" type="success" />
  }
};

// 错误提示
export const Error: Story = {
  args: {
    children: <NotificationDemo message="发生错误！" type="error" />
  }
};

// 信息提示
export const Info: Story = {
  args: {
    children: <NotificationDemo message="这是一条信息提示" type="info" />
  }
};

// 警告提示
export const Warning: Story = {
  args: {
    children: <NotificationDemo message="请注意！" type="warning" />
  }
};

// 自定义示例
export const CustomMessage: Story = {
  args: {
    children: <NotificationDemo message="这是一条自定义消息" type="default" />
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
        story: "你可以通过 `notification()` 函数显示自定义消息。"
      }
    }
  }
};

// 多个 Notification 示例
export const MultipleNotifications: Story = {
  args: {
    children: (
      <div className="p-4">
        <FancyButton
          variant="solid"
          size="sm"
          onClick={() => {
            notification("默认提示", "default");
            setTimeout(() => notification("成功提示", "success"), 500);
            setTimeout(() => notification("错误提示", "error"), 1000);
            setTimeout(() => notification("信息提示", "info"), 1500);
            setTimeout(() => notification("警告提示", "warning"), 2000);
          }}
        >
          显示多个 Notification
        </FancyButton>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "展示多个不同类型的 Notification 消息。注意：默认最多显示5条消息。"
      }
    }
  }
};
