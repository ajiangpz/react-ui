import React from "react";
import { Badge } from "@tendaui/react";

const badgeBlockStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  background: "#EEEEEE",
  border: "1px solid #DCDCDC",
  borderRadius: "3px"
};

export default function MaxCount() {
  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count={100} maxCount={99}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={1000} maxCount={999}>
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count={50} maxCount={20}>
        <div style={badgeBlockStyle}></div>
      </Badge>
    </div>
  );
}