// src/components/Notification/Notification.stories.tsx

import { Meta, StoryObj } from "@storybook/react";
import { NotificationProvider, useNotification } from "./NotifyContext";
import { Button } from "../Button";

// 创建一个演示组件
const NotificationDemo = () => {
  const { success, error, warning, info } = useNotification();

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          variant="solid"
          className="bg-success hover:bg-success/80"
          onClick={() => success("操作成功完成！")}
        >
          显示成功通知
        </Button>
        <Button
          variant="solid"
          className="bg-danger hover:bg-danger/80"
          onClick={() => error("操作发生错误！")}
        >
          显示错误通知
        </Button>
        <Button
          variant="solid"
          className="bg-warning hover:bg-warning/80"
          onClick={() => warning("请注意这个警告！")}
        >
          显示警告通知
        </Button>
        <Button
          variant="solid"
          className="bg-info hover:bg-info/80"
          onClick={() =>
            info(
              "wwwwwwwwwwwwww"
            )
          }
        >
          显示信息通知
        </Button>
      </div>
    </div>
  );
};

// Meta 配置
const meta: Meta = {
  title: "组件/Notification",
  component: NotificationProvider,
  tags: ["autodocs"],
  argTypes: {
    maxStack: {
      control: { type: "number", min: 1, max: 10 },
      description: "最大通知堆叠数量",
      defaultValue: 5
    },
    displayDuration: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
      description: "通知显示时间（毫秒）",
      defaultValue: 3000
    }
  },
  decorators: [
    Story => (
      <NotificationProvider maxStack={3} displayDuration={30000}>
        <Story />
      </NotificationProvider>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof NotificationProvider>;

// 基础用法
export const BasicStory: Story = {
  render: () => <NotificationDemo />
};
