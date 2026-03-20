import React, { useState } from "react";
import { Slider } from "@tendaui/react";

const CustomLabelExample = () => {
  const [value, setValue] = useState<number>(50);
  return (
    <div style={{ width: "400px", padding: "20px 0" }}>
      <Slider
        value={value}
        onChange={(val) => setValue(val as number)}
        label={({ value, position }) => (
          <span style={{ color: position === "start" ? "blue" : "green" }}>{value}%</span>
        )}
      />
    </div>
  );
};

export default CustomLabelExample;
