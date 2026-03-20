import React from "react";
import { Popup, Button } from "@tendaui/react";

const DisabledDemo = () => {
  return (
    <div style={{ padding: "40px", display: "flex", gap: "16px", justifyContent: "center" }}>
      <Popup trigger="click" content={<div style={{ padding: "12px" }}>正常状态</div>} showArrow>
        <Button>正常</Button>
      </Popup>
      <Popup trigger="click" content={<div style={{ padding: "12px" }}>禁用状态</div>} showArrow disabled>
        <Button disabled>禁用</Button>
      </Popup>
    </div>
  );
};

export default DisabledDemo;