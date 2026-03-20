import React from "react";
import { NotificationProvider, useNotification, Button } from "@tendaui/react";

const LongContentDemo = () => {
  const LongContentNotificationDemo = () => {
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
  return (
    <NotificationProvider>
      <LongContentNotificationDemo />
    </NotificationProvider>
  );
};

export default LongContentDemo;
