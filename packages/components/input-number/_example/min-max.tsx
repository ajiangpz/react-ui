import React, { useState } from "react";
import InputNumber from "../index";

const MinMaxInputNumber = () => {
  const [value, setValue] = useState(5);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <InputNumber min={0} max={10} value={value} onChange={setValue} />
      <div style={{ color: "#666", fontSize: "12px" }}>范围: 0 ~ 10, 当前值: {value}</div>
    </div>
  );
};

export default MinMaxInputNumber;
