import React from "react";
import { NotificationProvider, useNotification, Button } from "@tendaui/react";

const TypesDemo = () => {
  const TypesNotificationDemo = () => {
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
  return (
    <NotificationProvider>
      <TypesNotificationDemo />
    </NotificationProvider>
  );
};

export default TypesDemo;