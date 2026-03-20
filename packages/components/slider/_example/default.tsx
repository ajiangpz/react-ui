import React, { useState } from "react";
import { Slider } from "@tendaui/react";

const BasicExample = () => {
  const [value, setValue] = useState<number>(30);
  return (
    <div style={{ width: "400px", padding: "20px 0" }}>
      <Slider value={value} onChange={(val) => setValue(val as number)} label={({ value }) => `${value}%`} />
      <div style={{ marginTop: "16px", color: "#666" }}>当前值：{value}</div>
    </div>
  );
};

export default BasicExample;
