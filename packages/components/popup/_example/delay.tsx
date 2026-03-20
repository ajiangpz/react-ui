import React from "react";
import { Popup, Button } from "@tendaui/react";

const DelayDemo = () => {
  return (
    <div style={{ padding: "40px", display: "flex", gap: "16px", justifyContent: "center" }}>
      <Popup
        trigger="hover"
        content={<div style={{ padding: "12px" }}>延迟 500ms 显示</div>}
        delay={[500, 0]}
        showArrow
      >
        <Button>延迟显示</Button>
      </Popup>
      <Popup
        trigger="hover"
        content={<div style={{ padding: "12px" }}>延迟 500ms 隐藏</div>}
        delay={[0, 500]}
        showArrow
      >
        <Button>延迟隐藏</Button>
      </Popup>
      <Popup
        trigger="hover"
        content={<div style={{ padding: "12px" }}>延迟 300ms 显示和隐藏</div>}
        delay={300}
        showArrow
      >
        <Button>统一延迟</Button>
      </Popup>
    </div>
  );
};

export default DelayDemo;