import React from "react";
import { Switch } from "@tendaui/react";

const SizesExample = () => (
  <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <Switch size="small" defaultValue={true} />
      <span style={{ color: "#666", fontSize: "12px" }}>小</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <Switch size="medium" defaultValue={true} />
      <span style={{ color: "#666", fontSize: "12px" }}>中（默认）</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
      <Switch size="large" defaultValue={true} />
      <span style={{ color: "#666", fontSize: "12px" }}>大</span>
    </div>
  </div>
);

export default SizesExample;
