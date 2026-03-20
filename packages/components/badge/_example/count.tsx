import React from "react";
import { Badge } from "@tendaui/react";

const badgeBlockStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  background: "#EEEEEE",
  border: "1px solid #DCDCDC",
  borderRadius: "3px"
};

export default function Count() {
  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count={1}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={16}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={99}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={100}>
        <div style={badgeBlockStyle}></div>
      </Badge>
    </div>
  );
}