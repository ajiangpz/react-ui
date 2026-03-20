import React from "react";
import { Radio } from "@tendaui/react";

const GroupDisabledDemo = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Radio.Group disabled defaultValue="b">
        <Radio value="a">选项 A</Radio>
        <Radio value="b">选项 B</Radio>
        <Radio value="c">选项 C</Radio>
      </Radio.Group>

      <Radio.Group disabled defaultValue="b" variant="primary-filled">
        <Radio.Button value="a">选项 A</Radio.Button>
        <Radio.Button value="b">选项 B</Radio.Button>
        <Radio.Button value="c">选项 C</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default GroupDisabledDemo;