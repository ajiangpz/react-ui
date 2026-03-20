import React, { useState } from "react";
import InputNumber from "../index";

const StepAndDecimalInputNumber = () => {
  const [value, setValue] = useState(3.2);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <InputNumber step={1.2} decimalPlaces={2} value={value} onChange={setValue} />
      <div style={{ color: "#666", fontSize: "12px" }}>步长: 1.2, 保留2位小数, 当前值: {value}</div>
    </div>
  );
};

export default StepAndDecimalInputNumber;
