import React, { useState } from "react";
import { Slider, SliderValue } from "@tendaui/react";

const VerticalExample = () => {
  const [value, setValue] = useState<SliderValue>(40);
  const [rangeValue, setRangeValue] = useState<SliderValue>([20, 70]);

  return (
    <div style={{ display: "flex", gap: "80px", padding: "20px" }}>
      <div style={{ height: "250px" }}>
        <div style={{ marginBottom: "8px", color: "#666" }}>单滑块</div>
        <Slider value={value} onChange={setValue} layout="vertical" />
      </div>
      <div style={{ height: "250px" }}>
        <div style={{ marginBottom: "8px", color: "#666" }}>范围滑块</div>
        <Slider value={rangeValue} onChange={setRangeValue} layout="vertical" range />
      </div>
      <div style={{ height: "250px" }}>
        <div style={{ marginBottom: "8px", color: "#666" }}>带输入框</div>
        <Slider value={value} onChange={setValue} layout="vertical" inputNumberProps={{ theme: "row" }} />
      </div>
    </div>
  );
};

export default VerticalExample;
