import React, { useState } from "react";
import { Checkbox } from "@tendaui/react";

export default function GroupWithCheckAll() {
  const [value, setValue] = useState<string[]>(["上海"]);
  const handleValueChange = (val) => {
    console.log(val);
    setValue(val);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>当前选中：{value.filter((item) => item).join(", ")}</div>
      <Checkbox.Group value={value} onChange={(val) => handleValueChange(val)}>
        <Checkbox checkAll>全选</Checkbox>
        <Checkbox value="北京">北京</Checkbox>
        <Checkbox value="上海">上海</Checkbox>
        <Checkbox value="广州">广州</Checkbox>
        <Checkbox value="深圳">深圳</Checkbox>
      </Checkbox.Group>
    </div>
  );
}
