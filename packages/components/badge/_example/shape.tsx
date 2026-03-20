import React from "react";
import { Badge } from "@tendaui/react";

const badgeBlockStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  background: "#EEEEEE",
  border: "1px solid #DCDCDC",
  borderRadius: "3px"
};

export default function Shape() {
  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count={8} shape="circle">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={88} shape="circle">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={8} shape="round">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={88} shape="round">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count="new" shape="round">
        <div style={badgeBlockStyle}></div>
      </Badge>
    </div>
  );
}