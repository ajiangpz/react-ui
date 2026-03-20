import React from "react";
import { Badge, Button } from "@tendaui/react";

export default function WithButton() {
  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count={5}>
        <Button>消息</Button>
      </Badge>
      <Badge count={12}>
        <Button theme="primary">通知</Button>
      </Badge>
      <Badge dot count={1}>
        <Button variant="outline">提醒</Button>
      </Badge>
      <Badge count="new" shape="round" color="var(--td-success-color)">
        <Button theme="success" variant="outline">
          新功能
        </Button>
      </Badge>
    </div>
  );
}