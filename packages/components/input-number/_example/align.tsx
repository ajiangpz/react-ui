import React from "react";
import InputNumber from "../index";

const AlignInputNumber = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <div style={{ display: "flex", gap: "16px" }}>
      <div>
        <div style={{ marginBottom: "4px", fontSize: "12px", color: "#999" }}>左对齐</div>
        <InputNumber align="left" defaultValue={100} />
      </div>
      <div>
        <div style={{ marginBottom: "4px", fontSize: "12px", color: "#999" }}>居中对齐</div>
        <InputNumber align="center" defaultValue={200} />
      </div>
      <div>
        <div style={{ marginBottom: "4px", fontSize: "12px", color: "#999" }}>右对齐</div>
        <InputNumber align="right" defaultValue={300} />
      </div>
    </div>
  </div>
);

export default AlignInputNumber;
