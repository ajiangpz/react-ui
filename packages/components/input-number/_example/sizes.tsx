import React from "react";
import InputNumber from "../index";

const SizesInputNumber = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>row 主题</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <InputNumber size="small" defaultValue={3} />
          <InputNumber size="medium" defaultValue={6} />
          <InputNumber size="large" defaultValue={9} />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>column 主题</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <InputNumber theme="column" size="small" defaultValue={3} />
          <InputNumber theme="column" size="medium" defaultValue={6} />
          <InputNumber theme="column" size="large" defaultValue={9} />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>normal 主题</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <InputNumber theme="normal" size="small" defaultValue={3} />
          <InputNumber theme="normal" size="medium" defaultValue={6} />
          <InputNumber theme="normal" size="large" defaultValue={9} />
        </div>
      </div>
    </div>
  </div>
);

export default SizesInputNumber;
