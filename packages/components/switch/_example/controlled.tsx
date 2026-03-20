import React, { useState } from "react";
import { Switch } from "@tendaui/react";

const ControlledExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Switch value={checked} onChange={(val) => setChecked(val as boolean)} />
      <div style={{ color: "#666" }}>当前状态：{checked ? "开启" : "关闭"}</div>
    </div>
  );
};

export default ControlledExample;
