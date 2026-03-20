import React from "react";
import { Radio } from "@tendaui/react";

const SizesDemo = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>小尺寸</div>
        <Radio.Group size="small" defaultValue="a">
          <Radio.Button value="a">选项 A</Radio.Button>
          <Radio.Button value="b">选项 B</Radio.Button>
          <Radio.Button value="c">选项 C</Radio.Button>
        </Radio.Group>
      </div>

      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>中尺寸（默认）</div>
        <Radio.Group size="medium" defaultValue="a">
          <Radio.Button value="a">选项 A</Radio.Button>
          <Radio.Button value="b">选项 B</Radio.Button>
          <Radio.Button value="c">选项 C</Radio.Button>
        </Radio.Group>
      </div>

      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>大尺寸</div>
        <Radio.Group size="large" defaultValue="a">
          <Radio.Button value="a">选项 A</Radio.Button>
          <Radio.Button value="b">选项 B</Radio.Button>
          <Radio.Button value="c">选项 C</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
};

export default SizesDemo;