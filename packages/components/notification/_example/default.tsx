import React from "react";
import { NotificationProvider, useNotification, Button } from "@tendaui/react";

const DefaultDemo = () => {
  const NotificationDemo = () => {
    const { success, error, warning, info } = useNotification();
    return (
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Button theme="success" onClick={() => success({ title: "成功提示", message: "操作成功完成！" })}>
          成功通知
        </Button>
        <Button theme="danger" onClick={() => error({ title: "错误提示", message: "操作发生错误！" })}>
          错误通知
        </Button>
        <Button theme="warning" onClick={() => warning({ title: "警告提示", message: "请注意这个警告！" })}>
          警告通知
        </Button>
        <Button theme="primary" onClick={() => info({ title: "信息提示", message: "这是一条信息通知" })}>
          信息通知
        </Button>
      </div>
    );
  };
  return (
    <NotificationProvider>
      <NotificationDemo />
    </NotificationProvider>
  );
};

export default DefaultDemo;