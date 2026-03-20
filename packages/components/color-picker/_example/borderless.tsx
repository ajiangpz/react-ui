import React from "react";
import { ColorPicker } from "@tendaui/react";

export default function Borderless() {
  return (
    <div style={{ display: "flex", gap: "24px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>有边框</div>
        <ColorPicker defaultValue="#0052d9" />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>无边框</div>
        <ColorPicker borderless defaultValue="#0052d9" />
      </div>
    </div>
  );
}