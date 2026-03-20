import React, { useState } from "react";
import { Input } from "../index";

const AutoWidthInput = () => {
  const [value, setValue] = useState("自适应宽度");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input autoWidth value={value} onChange={(val) => setValue(val)} placeholder="宽度随内容变化" />
      <div style={{ color: "#666", fontSize: "12px" }}>输入更多内容，输入框会自动变宽</div>
    </div>
  );
};

export default AutoWidthInput;
