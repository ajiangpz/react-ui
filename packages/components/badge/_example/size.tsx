import React from "react";
import { Badge } from "@tendaui/react";

const badgeBlockStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  background: "#EEEEEE",
  border: "1px solid #DCDCDC",
  borderRadius: "3px"
};

export default function Size() {
  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count={8} size="medium">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={8} size="small">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={88} size="medium">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={88} size="small">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge dot count={1} size="medium">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge dot count={1} size="small">
        <div style={badgeBlockStyle}></div>
      </Badge>
    </div>
  );
}