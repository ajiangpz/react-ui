import React, { useState } from "react";
import { Input } from "../index";

const ClearableInput = () => {
  const [value, setValue] = useState("可清空的内容");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input clearable value={value} onChange={(val) => setValue(val)} placeholder="输入内容后显示清除按钮" />
      <div style={{ color: "#666", fontSize: "12px" }}>当前值：{value || "(空)"}</div>
    </div>
  );
};

export default ClearableInput;
