import React, { useRef } from "react";
import { NotificationProvider, useNotification, Button } from "@tendaui/react";

const StackingDemo = () => {
  const StackingNotificationDemo = () => {
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
        <div style={{ color: "#666", fontSize: "12px" }}>点击按钮快速显示多条通知，观察堆叠效果</div>
        <div>
          <Button theme="primary" onClick={showMultiple}>
            显示多条通知
          </Button>
        </div>
      </div>
    );
  };
  return (
    <NotificationProvider>
      <StackingNotificationDemo />
    </NotificationProvider>
  );
};

export default StackingDemo;