import React from "react";
import { NotificationProvider, useNotification, Button } from "@tendaui/react";

const UsageExampleDemo = () => {
  const UsageNotificationDemo = () => {
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
        <div style={{ color: "#666", fontSize: "12px" }}>模拟真实业务场景中的通知使用</div>
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
  return (
    <NotificationProvider>
      <UsageNotificationDemo />
    </NotificationProvider>
  );
};

export default UsageExampleDemo;