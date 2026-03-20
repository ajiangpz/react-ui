import React, { useState } from "react";
import { Popup, Button } from "@tendaui/react";

const ControlledDemo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
      <div style={{ display: "flex", gap: "8px" }}>
        <Button onClick={() => setVisible(true)}>打开</Button>
        <Button onClick={() => setVisible(false)}>关闭</Button>
        <Button onClick={() => setVisible(!visible)}>切换</Button>
      </div>
      <Popup
        visible={visible}
        onVisibleChange={(v) => setVisible(v)}
        content={
          <div style={{ padding: "12px" }}>
            <p>这是受控的弹出层</p>
            <Button size="small" onClick={() => setVisible(false)}>
              关闭
            </Button>
          </div>
        }
        showArrow
      >
        <Button>触发元素</Button>
      </Popup>
    </div>
  );
};

export default ControlledDemo;