import React from "react";
import { Badge } from "@tendaui/react";

const badgeBlockStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  background: "#EEEEEE",
  border: "1px solid #DCDCDC",
  borderRadius: "3px"
};

export default function CustomColor() {
  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count={8} color="var(--td-success-color)">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={8} color="var(--td-warning-color)">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={8} color="var(--td-brand-color)">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count="new" color="#6366f1">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge dot count={1} color="var(--td-success-color)">
        <div style={badgeBlockStyle}></div>
      </Badge>
    </div>
  );
}