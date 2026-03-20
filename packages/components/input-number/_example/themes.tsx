import React from "react";
import InputNumber from "../index";

const ThemesInputNumber = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>row - 横向按钮（默认）</div>
      <InputNumber theme="row" defaultValue={5} />
    </div>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>column - 纵向按钮</div>
      <InputNumber theme="column" defaultValue={5} />
    </div>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>normal - 无按钮</div>
      <InputNumber theme="normal" defaultValue={5} />
    </div>
  </div>
);

export default ThemesInputNumber;
