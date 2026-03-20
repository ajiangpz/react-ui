import React, { useState } from "react";
import { Slider } from "@tendaui/react";

const WithInputExample = () => {
  const [value1, setValue1] = useState<number>(50);
  const [value2, setValue2] = useState<number[]>([20, 80]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <div style={{ width: "500px" }}>
        <div style={{ marginBottom: "8px", color: "#666" }}>单滑块 + 数字输入框</div>
        <Slider value={value1} onChange={(val) => setValue1(val as number)} inputNumberProps={true} />
      </div>
      <div style={{ width: "500px" }}>
        <div style={{ marginBottom: "8px", color: "#666" }}>范围滑块 + 数字输入框</div>
        <Slider value={value2} onChange={(val) => setValue2(val as number[])} range inputNumberProps={true} />
      </div>
    </div>
  );
};

export default WithInputExample;
