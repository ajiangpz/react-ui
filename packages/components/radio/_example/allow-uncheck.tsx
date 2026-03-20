import React, { useState } from "react";
import { Radio } from "@tendaui/react";

const AllowUncheckDemo = () => {
  const [value, setValue] = useState<string | undefined>("a");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>当前选中：{value || "(无)"}</div>
      <Radio.Group allowUncheck value={value} onChange={(val) => setValue(val as string)}>
        <Radio value="a">选项 A</Radio>
        <Radio value="b">选项 B</Radio>
        <Radio value="c">选项 C</Radio>
      </Radio.Group>
      <div style={{ color: "#666", fontSize: "12px" }}>提示：再次点击已选中的选项可以取消选中</div>
    </div>
  );
};

export default AllowUncheckDemo;