import React from "react";
import { Switch } from "@tendaui/react";

const WithLabelExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Switch label={["开", "关"]} defaultValue={true} />
      <span style={{ color: "#666" }}>数组形式</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Switch label={["ON", "OFF"]} defaultValue={false} />
      <span style={{ color: "#666" }}>英文标签</span>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <Switch label={["1", "0"]} defaultValue={true} />
      <span style={{ color: "#666" }}>数字标签</span>
    </div>
  </div>
);

export default WithLabelExample;
