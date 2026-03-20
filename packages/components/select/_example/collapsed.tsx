import React, { useState } from "react";
import { Select } from "@tendaui/react";

const basicOptions = [
  { label: "架构云", value: "1", title: "架构云选项" },
  { label: "大数据", value: "2" },
  { label: "区块链", value: "3" },
  { label: "物联网", value: "4", disabled: true },
  { label: "人工智能", value: "5" }
];

const CollapsedExample = () => {
  const [value, setValue] = useState<string[]>(["1", "2", "3", "5"]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Select
        value={value}
        onChange={(val) => setValue(val as string[])}
        options={basicOptions}
        placeholder="请选择"
        multiple
        minCollapsedNum={2}
        style={{ width: "400px" }}
      />
      <div style={{ color: "#666", fontSize: "12px" }}>超过 2 个选项时会折叠显示</div>
    </div>
  );
};

export default CollapsedExample;
