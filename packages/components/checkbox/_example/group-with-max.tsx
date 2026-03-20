import React, { useState } from "react";
import { Checkbox } from "@tendaui/react";

export default function GroupWithMax() {
  const [value, setValue] = useState<string[]>(["北京"]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>最多选择 2 项，当前选中：{value.join(", ") || "无"}</div>
      <Checkbox.Group value={value} onChange={(val) => setValue(val as string[])} max={2}>
        <Checkbox value="北京">北京</Checkbox>
        <Checkbox value="上海">上海</Checkbox>
        <Checkbox value="广州">广州</Checkbox>
        <Checkbox value="深圳">深圳</Checkbox>
      </Checkbox.Group>
    </div>
  );
}