import React from "react";
import { Badge, Button } from "@tendaui/react";

const badgeBlockStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  background: "#EEEEEE",
  border: "1px solid #DCDCDC",
  borderRadius: "3px"
};

export default function TextCount() {
  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <Badge count="new">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count="hot">
        <div style={badgeBlockStyle}></div>
      </Badge>
      <Badge count="NEW">
        <Button>新品</Button>
      </Badge>
    </div>
  );
}