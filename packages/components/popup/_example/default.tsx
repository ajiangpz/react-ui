import React from "react";
import { Popup, Button } from "@tendaui/react";

const DefaultDemo = () => {
  return (
    <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
      <Popup 
        trigger="click" 
        placement="top" 
        content={<div style={{ padding: "12px" }}>这是弹出层内容</div>}
        showArrow
      >
        <Button>点击显示 Popup</Button>
      </Popup>
    </div>
  );
};

export default DefaultDemo;