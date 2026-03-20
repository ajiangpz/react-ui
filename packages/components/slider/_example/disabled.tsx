import React from "react";
import { Slider } from "@tendaui/react";

const DisabledExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
    <div style={{ width: "400px" }}>
      <div style={{ marginBottom: "8px", color: "#666" }}>正常</div>
      <Slider defaultValue={50} />
    </div>
    <div style={{ width: "400px" }}>
      <div style={{ marginBottom: "8px", color: "#666" }}>禁用</div>
      <Slider defaultValue={50} disabled />
    </div>
  </div>
);

export default DisabledExample;
