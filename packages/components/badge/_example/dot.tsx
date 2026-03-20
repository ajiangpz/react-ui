import React from "react";
import { Badge, Button } from "@tendaui/react";

const badgeBlockStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  background: "#EEEEEE",
  border: "1px solid #DCDCDC",
  borderRadius: "3px"
};

export default function Dot() {
  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge dot count={1}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge dot count={1}>
        <Button>消息</Button>
      </Badge>
      <Badge dot>
        <span style={{ fontSize: "16px" }}>通知</span>
      </Badge>
    </div>
  );
}