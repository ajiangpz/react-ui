import React from "react";
import { Switch } from "@tendaui/react";

const DisabledExample = () => (
  <div style={{ display: "flex", gap: "24px" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <Switch defaultValue={false} />
      <span style={{ color: "#666", fontSize: "12px" }}>正常关闭</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <Switch defaultValue={true} />
      <span style={{ color: "#666", fontSize: "12px" }}>正常开启</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <Switch disabled defaultValue={false} />
      <span style={{ color: "#666", fontSize: "12px" }}>禁用关闭</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <Switch disabled defaultValue={true} />
      <span style={{ color: "#666", fontSize: "12px" }}>禁用开启</span>
    </div>
  </div>
);

export default DisabledExample;
