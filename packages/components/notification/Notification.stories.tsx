import { Meta, StoryObj } from "@storybook/react-vite";
import { NotificationProvider, useNotification, Button } from "@tendaui/react/es";
import React, { useRef } from "react";

const meta: Meta<typeof NotificationProvider> = {
  title: "Components/Notification",
  component: NotificationProvider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "通知组件用于向用户显示全局提示信息，支持成功、错误、警告、信息等多种类型，以及堆叠显示、自动关闭等功能。"
      }
    }
  },
  argTypes: {
    position: {
      control: "select",
      options: ["top-right", "top-center", "top-left"],
      description: "显示位置"
    },
    maxStack: {
      control: { type: "number", min: 1, max: 10 },
      description: "最大通知堆叠数量"
    },
    displayDuration: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
      description: "通知显示时间（毫秒）"
    }
  },
  decorators: [
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

/** 基础用法 */
export const Default: Story = {
  name: "基础用法",
  render: () => {
    const NotificationDemo = () => {
      const { success, error, warning, info } = useNotification();
      return (
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Button
            theme="success"
            onClick={() => success({ title: "成功提示", message: "操作成功完成！" })}
          >
            成功通知
          </Button>
          <Button
            theme="danger"
            onClick={() => error({ title: "错误提示", message: "操作发生错误！" })}
          >
            错误通知
          </Button>
          <Button
            theme="warning"
            onClick={() => warning({ title: "警告提示", message: "请注意这个警告！" })}
          >
            警告通知
          </Button>
          <Button
            theme="primary"
            onClick={() => info({ title: "信息提示", message: "这是一条信息通知" })}
          >
            信息通知
          </Button>
        </div>
      );
    };
    return <NotificationDemo />;
  }
};

/** 不同类型 */
export const Types: Story = {
  name: "不同类型",
  render: () => {
    const TypesDemo = () => {
      const { success, error, warning, info } = useNotification();
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <h4 style={{ marginBottom: "12px", color: "#666" }}>成功通知</h4>
            <Button
              theme="success"
              onClick={() =>
                success({
                  title: "操作成功",
                  message: "您的数据已成功保存到服务器"
                })
              }
            >
              显示成功通知
            </Button>
          </div>

          <div>
            <h4 style={{ marginBottom: "12px", color: "#666" }}>错误通知</h4>
            <Button
              theme="danger"
              onClick={() =>
                error({
                  title: "操作失败",
                  message: "网络连接失败，请检查网络设置后重试"
                })
              }
            >
              显示错误通知
            </Button>
          </div>

          <div>
            <h4 style={{ marginBottom: "12px", color: "#666" }}>警告通知</h4>
            <Button
              theme="warning"
              onClick={() =>
                warning({
                  title: "警告",
                  message: "您的账户余额不足，请及时充值"
                })
              }
            >
              显示警告通知
            </Button>
          </div>

          <div>
            <h4 style={{ marginBottom: "12px", color: "#666" }}>信息通知</h4>
            <Button
              theme="primary"
              onClick={() =>
                info({
                  title: "系统通知",
                  message: "系统将于今晚 22:00 进行维护升级"
                })
              }
            >
              显示信息通知
            </Button>
          </div>
        </div>
      );
    };
    return <TypesDemo />;
  }
};

/** 多条通知堆叠 */
export const Stacking: Story = {
  name: "多条通知堆叠",
  render: () => {
    const StackingDemo = () => {
      const { success, error, warning, info } = useNotification();
      const index = useRef(1);

      const showMultiple = () => {
        success({ title: "成功", message: `第 ${index.current++} 条通知` });
        setTimeout(() => {
          error({ title: "错误", message: `第 ${index.current++} 条通知` });
        }, 200);
        setTimeout(() => {
          warning({ title: "警告", message: `第 ${index.current++} 条通知` });
        }, 400);
        setTimeout(() => {
          info({ title: "信息", message: `第 ${index.current++} 条通知` });
        }, 600);
      };

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ color: "#666", fontSize: "12px" }}>
            点击按钮快速显示多条通知，观察堆叠效果
          </div>
          <div>
            <Button theme="primary" onClick={showMultiple}>
              显示多条通知
            </Button>
          </div>
        </div>
      );
    };
    return <StackingDemo />;
  }
};

/** 长内容通知 */
export const LongContent: Story = {
  name: "长内容通知",
  render: () => {
    const LongContentDemo = () => {
      const { info, success } = useNotification();

      const showLongTitle = () => {
        success({
          title: "这是一个非常长的标题，用于测试标题过长时的显示效果和换行情况",
          message: "通知内容"
        });
      };

      const showLongMessage = () => {
        info({
          title: "系统通知",
          message:
            "这是一段非常长的通知内容，用于测试内容过长时的显示效果。Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        });
      };

      return (
        <div style={{ display: "flex", gap: "12px" }}>
          <Button onClick={showLongTitle}>长标题通知</Button>
          <Button onClick={showLongMessage}>长内容通知</Button>
        </div>
      );
    };
    return <LongContentDemo />;
  }
};

/** 使用示例 */
export const UsageExample: Story = {
  name: "使用示例",
  render: () => {
    const UsageDemo = () => {
      const { success, error } = useNotification();

      const handleSubmit = () => {
        // 模拟异步操作
        setTimeout(() => {
          const isSuccess = Math.random() > 0.5;
          if (isSuccess) {
            success({
              title: "提交成功",
              message: "您的表单已成功提交"
            });
          } else {
            error({
              title: "提交失败",
              message: "网络异常，请稍后重试"
            });
          }
        }, 500);
      };

      const handleDelete = () => {
        success({
          title: "删除成功",
          message: "数据已成功删除"
        });
      };

      const handleSave = () => {
        success({
          title: "保存成功",
          message: "您的更改已保存"
        });
      };

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ color: "#666", fontSize: "12px" }}>
            模拟真实业务场景中的通知使用
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Button theme="primary" onClick={handleSubmit}>
              提交表单（随机结果）
            </Button>
            <Button theme="danger" onClick={handleDelete}>
              删除数据
            </Button>
            <Button onClick={handleSave}>保存更改</Button>
          </div>
        </div>
      );
    };
    return <UsageDemo />;
  }
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => {
    const AllVariantsDemo = () => {
      const { success, error, warning, info } = useNotification();
      const index = useRef(1);

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div>
            <h4 style={{ marginBottom: "12px", color: "#666" }}>通知类型</h4>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button
                theme="success"
                onClick={() =>
                  success({ title: "成功", message: `操作成功 ${index.current++}` })
                }
              >
                成功
              </Button>
              <Button
                theme="danger"
                onClick={() =>
                  error({ title: "错误", message: `操作失败 ${index.current++}` })
                }
              >
                错误
              </Button>
              <Button
                theme="warning"
                onClick={() =>
                  warning({ title: "警告", message: `请注意 ${index.current++}` })
                }
              >
                警告
              </Button>
              <Button
                theme="primary"
                onClick={() =>
                  info({ title: "信息", message: `提示信息 ${index.current++}` })
                }
              >
                信息
              </Button>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: "12px", color: "#666" }}>使用说明</h4>
            <div
              style={{
                padding: "16px",
                background: "#f5f5f5",
                borderRadius: "4px",
                fontSize: "12px",
                lineHeight: 1.8
              }}
            >
              <p>1. 使用 NotificationProvider 包裹应用根组件</p>
              <p>2. 在需要的地方使用 useNotification 钩子获取通知方法</p>
              <p>3. 调用 success/error/warning/info 方法显示对应类型的通知</p>
              <p>4. 可以通过 Provider 的 props 配置位置、最大堆叠数、显示时长等</p>
            </div>
          </div>
        </div>
      );
    };
    return <AllVariantsDemo />;
  }
};
