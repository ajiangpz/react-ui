import React, { useState } from "react";
import { Slider } from "@tendaui/react";

const MarksExample = () => {
  const [value1, setValue1] = useState<number>(30);
  const [value2, setValue2] = useState<number>(50);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "60px", margin: "8px 0 16px 0" }}>
      <div style={{ width: "400px" }}>
        <div style={{ marginBottom: "8px", color: "#666" }}>数组形式刻度</div>
        <Slider value={value1} onChange={(val) => setValue1(val as number)} marks={[0, 25, 50, 75, 100]} />
      </div>
      <div style={{ width: "400px" }}>
        <div style={{ marginBottom: "8px", color: "#666" }}>对象形式刻度（自定义文案）</div>
        <Slider
          value={value2}
          onChange={(val) => setValue2(val as number)}
          marks={{
            0: "低",
            25: "中低",
            50: "中",
            75: "中高",
            100: "高"
          }}
        />
      </div>
    </div>
  );
};

export default MarksExample;
