import React, { useState } from "react";
import InputNumber from "../index";

const FormatInputNumber = () => {
  const [value, setValue] = useState(50);
  const [value2, setValue2] = useState(1000);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>百分比格式</div>
        <InputNumber format={(val) => `${val} %`} value={value} onChange={setValue} style={{ width: 250 }} />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>货币格式（保留2位小数）</div>
        <InputNumber
          decimalPlaces={2}
          format={(_, { fixedNumber }) => `¥ ${fixedNumber}`}
          value={value2}
          onChange={setValue2}
          style={{ width: 250 }}
        />
      </div>
    </div>
  );
};

export default FormatInputNumber;
