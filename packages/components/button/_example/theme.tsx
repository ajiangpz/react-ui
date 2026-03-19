import React from "react";
import { Button } from "@tendaui/react";

export default function Theme() {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button theme="default">默认</Button>
      <Button theme="primary">主要</Button>
      <Button theme="success">成功</Button>
      <Button theme="warning">警告</Button>
      <Button theme="danger">危险</Button>
    </div>
  );
}