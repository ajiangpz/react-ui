// src/components/Notification/Notification.stories.tsx

import { Meta, StoryObj } from "@storybook/react";
import { NotificationProvider, useNotification } from "./NotifyContext";

// 创建一个演示组件
const NotificationDemo = () => {
  const { success, error, warning, info } = useNotification();

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => success("操作成功完成！")}
          style={{
            padding: "8px 16px",
            background: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "4px"
          }}
        >
          显示成功通知
        </button>
        <button
          onClick={() => error("操作发生错误！")}
          style={{
            padding: "8px 16px",
            background: "#f44336",
            color: "white",
            border: "none",
            borderRadius: "4px"
          }}
        >
          显示错误通知
        </button>
        <button
          onClick={() => warning("请注意这个警告！")}
          style={{
            padding: "8px 16px",
            background: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "4px"
          }}
        >
          显示警告通知
        </button>
        <button
          onClick={() => info("这是一条信息通知！")}
          style={{
            padding: "8px 16px",
            background: "#2196f3",
            color: "white",
            border: "none",
            borderRadius: "4px"
          }}
        >
          显示信息通知
        </button>
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
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;

type Story = StoryObj<typeof NotificationProvider>;

// 基础用法
export const Basic: Story = {
  render: args => (
    <NotificationProvider {...args}>
      <NotificationDemo />
    </NotificationProvider>
  )
};

// 自定义配置
export const CustomConfig: Story = {
  args: {
    maxStack: 3,
    displayDuration: 5000
  },
  render: args => (
    <NotificationProvider {...args}>
      <NotificationDemo />
    </NotificationProvider>
  )
};

// 代码示例
export const CodeExample: Story = {
  parameters: {
    docs: {
      source: {
        code: `
// 1. 在应用根组件中包裹 NotificationProvider
import { NotificationProvider } from './components/Notification/NotifyContext';

const App = () => {
  return (
    <NotificationProvider maxStack={5} displayDuration={3000}>
      <YourApp />
    </NotificationProvider>
  );
};

// 2. 在组件中使用
import { useNotification } from './components/Notification/NotifyContext';

const YourComponent = () => {
  const { success, error, warning, info } = useNotification();

  const handleSuccess = () => {
    success('操作成功！');
  };

  return (
    <button onClick={handleSuccess}>
      显示成功通知
    </button>
  );
};
`
      }
    }
  },
  render: args => (
    <NotificationProvider {...args}>
      <NotificationDemo />
    </NotificationProvider>
  )
};

// 快速连续触发示例
export const RapidFire: Story = {
  render: args => {
    const RapidFireDemo = () => {
      const { success, error, warning, info } = useNotification();

      const handleRapidFire = () => {
        success("第一条成功消息");
        setTimeout(() => error("第二条错误消息"), 100);
        setTimeout(() => warning("第三条警告消息"), 200);
        setTimeout(() => info("第四条信息消息"), 300);
      };

      return (
        <div style={{ padding: "20px" }}>
          <button
            onClick={handleRapidFire}
            style={{
              padding: "8px 16px",
              background: "#9c27b0",
              color: "white",
              border: "none",
              borderRadius: "4px"
            }}
          >
            快速连续显示多条通知
          </button>
        </div>
      );
    };

    return (
      <NotificationProvider {...args}>
        <RapidFireDemo />
      </NotificationProvider>
    );
  }
};
