import React from "react";
import InputNumber from "../index";

const LargeNumberInputNumber = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>大整数</div>
      <InputNumber defaultValue="19999999999999999" largeNumber decimalPlaces={2} step={1} style={{ width: 350 }} />
    </div>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>大小数</div>
      <InputNumber defaultValue="0.8975527383412673418" largeNumber step={0.888} style={{ width: 350 }} />
    </div>
  </div>
);

export default LargeNumberInputNumber;
