import React, { useState } from "react";
import { Radio } from "@tendaui/react";

const ButtonStyleDemo = () => {
  const [value1, setValue1] = useState("a");
  const [value2, setValue2] = useState("a");
  const [value3, setValue3] = useState("a");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>outline 样式（默认）</div>
        <Radio.Group value={value1} onChange={(val) => setValue1(val as string)} variant="outline">
          <Radio.Button value="a">选项 A</Radio.Button>
          <Radio.Button value="b">选项 B</Radio.Button>
          <Radio.Button value="c">选项 C</Radio.Button>
        </Radio.Group>
      </div>

      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>primary-filled 样式</div>
        <Radio.Group value={value2} onChange={(val) => setValue2(val as string)} variant="primary-filled">
          <Radio.Button value="a">选项 A</Radio.Button>
          <Radio.Button value="b">选项 B</Radio.Button>
          <Radio.Button value="c">选项 C</Radio.Button>
        </Radio.Group>
      </div>

      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>default-filled 样式</div>
        <Radio.Group value={value3} onChange={(val) => setValue3(val as string)} variant="default-filled">
          <Radio.Button value="a">选项 A</Radio.Button>
          <Radio.Button value="b">选项 B</Radio.Button>
          <Radio.Button value="c">选项 C</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
};

export default ButtonStyleDemo;