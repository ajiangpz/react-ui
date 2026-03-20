import React, { useState } from "react";
import { Switch } from "@tendaui/react";

const AsyncExample = () => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (val: boolean) => {
    setLoading(true);
    // 模拟异步请求
    setTimeout(() => {
      setChecked(val);
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Switch value={checked} loading={loading} onChange={(val) => handleChange(val as boolean)} />
      <div style={{ color: "#666", fontSize: "12px" }}>点击切换，模拟 1 秒异步请求</div>
    </div>
  );
};

export default AsyncExample;
