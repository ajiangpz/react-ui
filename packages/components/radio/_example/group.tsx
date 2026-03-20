import React, { useState } from "react";
import { Radio } from "@tendaui/react";

const GroupDemo = () => {
  const [value, setValue] = useState("beijing");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>当前选中：{value}</div>
      <Radio.Group value={value} onChange={(val) => setValue(val as string)}>
        <Radio value="beijing">北京</Radio>
        <Radio value="shanghai">上海</Radio>
        <Radio value="guangzhou">广州</Radio>
        <Radio value="shenzhen">深圳</Radio>
      </Radio.Group>
    </div>
  );
};

export default GroupDemo;