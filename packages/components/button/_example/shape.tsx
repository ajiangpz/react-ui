import React from "react";
import { Button } from "@tendaui/react";
import { IconPlus } from "@tendaui/icons";

export default function Shape() {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
      <Button shape="rectangle" theme="primary">
        长方形
      </Button>
      <Button shape="round" theme="primary">
        圆角
      </Button>
      <Button shape="square" theme="primary" icon={<IconPlus />} />
      <Button shape="circle" theme="primary" icon={<IconPlus />} />
    </div>
  );
}