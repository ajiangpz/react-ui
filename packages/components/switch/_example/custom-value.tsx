import React, { useState } from "react";
import { Switch } from "@tendaui/react";

const CustomValueExample = () => {
  const [value1, setValue1] = useState<string | number | boolean>(1);
  const [value2, setValue2] = useState<string | number | boolean>("open");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Switch customValue={[1, 0]} value={value1} onChange={(val) => setValue1(val)} />
        <span style={{ color: "#666" }}>数字值: {String(value1)}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Switch customValue={["open", "close"]} value={value2} onChange={(val) => setValue2(val)} />
        <span style={{ color: "#666" }}>字符串值: {String(value2)}</span>
      </div>
    </div>
  );
};

export default CustomValueExample;
