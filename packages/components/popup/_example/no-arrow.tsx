import React from "react";
import { Popup, Button } from "@tendaui/react";

const NoArrowDemo = () => {
  return (
    <div style={{ padding: "40px", display: "flex", gap: "16px", justifyContent: "center" }}>
      <Popup trigger="hover" content={<div style={{ padding: "12px" }}>有箭头</div>} showArrow>
        <Button>有箭头</Button>
      </Popup>
      <Popup trigger="hover" content={<div style={{ padding: "12px" }}>无箭头</div>} showArrow={false}>
        <Button>无箭头</Button>
      </Popup>
    </div>
  );
};

export default NoArrowDemo;