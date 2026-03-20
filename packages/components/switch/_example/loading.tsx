import React from "react";
import { Switch } from "@tendaui/react";

const LoadingExample = () => (
  <div style={{ display: "flex", gap: "24px" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <Switch loading defaultValue={false} />
      <span style={{ color: "#666", fontSize: "12px" }}>加载中（关）</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <Switch loading defaultValue={true} />
      <span style={{ color: "#666", fontSize: "12px" }}>加载中（开）</span>
    </div>
  </div>
);

export default LoadingExample;
