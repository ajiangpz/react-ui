import React from "react";
import { Popup, Button } from "@tendaui/react";

const TriggersDemo = () => {
  return (
    <div style={{ padding: "40px", display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
      <Popup trigger="click" content={<div style={{ padding: "12px" }}>点击触发</div>} showArrow>
        <Button>Click 触发</Button>
      </Popup>

      <Popup trigger="hover" content={<div style={{ padding: "12px" }}>悬停触发</div>} showArrow>
        <Button>Hover 触发</Button>
      </Popup>

      <Popup trigger="focus" content={<div style={{ padding: "12px" }}>聚焦触发</div>} showArrow>
        <Button>Focus 触发</Button>
      </Popup>

      <Popup trigger="context-menu" content={<div style={{ padding: "12px" }}>右键触发</div>} showArrow>
        <Button>右键触发</Button>
      </Popup>
    </div>
  );
};

export default TriggersDemo;