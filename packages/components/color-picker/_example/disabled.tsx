import React from "react";
import { ColorPicker } from "@tendaui/react";

export default function Disabled() {
  return (
    <div style={{ display: "flex", gap: "24px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>正常状态</div>
        <ColorPicker defaultValue="#0052d9" />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>禁用状态</div>
        <ColorPicker disabled defaultValue="#0052d9" />
      </div>
    </div>
  );
}