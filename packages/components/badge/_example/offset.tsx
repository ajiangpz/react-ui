import React from "react";
import { Badge } from "@tendaui/react";

const badgeBlockStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  background: "#EEEEEE",
  border: "1px solid #DCDCDC",
  borderRadius: "3px"
};

export default function Offset() {
  return (
    <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
      <Badge count={8}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={8} offset={[-5, 5]}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={8} offset={[5, -5]}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={8} offset={[-10, 10]}>
        <div style={badgeBlockStyle}></div>
      </Badge>
    </div>
  );
}