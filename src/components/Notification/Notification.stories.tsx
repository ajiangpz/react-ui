import { Meta, StoryObj } from "@storybook/react";
import { NotificationProvider, useNotification } from "./index";
import './style/index';
import '@/components/style';
import { Button } from "../button";
import { useRef } from "react";

// 创建一个演示组件
const NotificationDemo = () => {
  const { success, error, warning, info } = useNotification();
  const index = useRef(1);
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          variant="solid"
          className="bg-success hover:bg-success/80"
          onClick={() =>
            success(
              {message:Array.from(
                { length: Math.floor(Math.random() * 10) + 1 },
                () => "操作成功完成！" + index.current++
              ).join("\n"),title:"成功提示"}
            )
          }
        >
          显示成功通知
        </Button>
        <Button
          variant="solid"
          className="bg-danger hover:bg-danger/80"
          onClick={() => error({message:"操作发生错误！",title:"错误提示错误提示错误提示错误提示错误提示错误提示"})}
        >
          显示错误通知
        </Button>
        <Button
          variant="solid"
          className="bg-warning hover:bg-warning/80"
          onClick={() => warning({message:"请注意这个警告！",title:"警告提示"})}
        >
          显示警告通知
        </Button>
        <Button
          variant="solid"
          className="bg-info hover:bg-info/80"
          onClick={() => info({message:"请注意这个信息！",title:"信息提示"})}
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
      defaultValue: 300000
    },
    position: {
      control: "select",
      options: ["top-right", "top-center", "top-left"],
      description: "显示位置",
      defaultValue: "top-right"
    }
  },
  decorators: [
    // 修改装饰器，使用从控制台传入的参数
    (Story, context) => (
      <NotificationProvider 
        position={context.args.position}
        maxStack={context.args.maxStack}
        displayDuration={context.args.displayDuration}
      >
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
