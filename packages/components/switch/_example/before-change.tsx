import React, { useState } from "react";
import { Switch } from "@tendaui/react";

const BeforeChangeExample = () => {
  const [checked, setChecked] = useState(false);

  const beforeChange = () => {
    return new Promise<boolean>((resolve) => {
      const confirmed = window.confirm("确定要切换状态吗？");
      resolve(confirmed);
    });
  };

  return (
    <div>
      <Switch value={checked} beforeChange={beforeChange} onChange={(val) => setChecked(val as boolean)} />
      <div style={{ color: "#666", fontSize: "12px" }}>切换前会弹出确认框，确认后才会切换</div>
    </div>
  );
};

export default BeforeChangeExample;
