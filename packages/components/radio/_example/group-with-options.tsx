import React, { useState } from "react";
import { Radio } from "@tendaui/react";

const GroupWithOptionsDemo = () => {
  const [value, setValue] = useState("2");
  const options = [
    { label: "选项一", value: "1" },
    { label: "选项二", value: "2" },
    { label: "选项三", value: "3", disabled: true },
    { label: "选项四", value: "4" }
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>当前选中值：{value}</div>
      <Radio.Group options={options} value={value} onChange={(val) => setValue(val as string)} />
    </div>
  );
};

export default GroupWithOptionsDemo;