import React, { useState } from "react";
import { Slider } from "@tendaui/react";

const RangeExample = () => {
  const [value, setValue] = useState<number[]>([20, 70]);
  return (
    <div style={{ width: "400px", padding: "20px 0" }}>
      <Slider value={value} onChange={(val) => setValue(val as number[])} range />
      <div style={{ marginTop: "16px", color: "#666" }}>
        当前范围：{value[0]} - {value[1]}
      </div>
    </div>
  );
};

export default RangeExample;
