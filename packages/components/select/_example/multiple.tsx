import React, { useState } from "react";
import { Select } from "@tendaui/react";

const MultipleExample = () => {
  const [value, setValue] = useState<string[]>(["1", "3"]);
  const options = [
    { label: "全选", checkAll: true },
    { label: "架构云", value: "1" },
    { label: "大数据", value: "2" },
    { label: "区块链", value: "3" },
    { label: "物联网", value: "4", disabled: true },
    { label: "人工智能", value: "5" }
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Select
        value={value}
        onChange={(val) => setValue(val as string[])}
        options={options}
        placeholder="请选择多个选项"
        multiple
        filterable
        clearable
        style={{ width: "400px" }}
      />
      <div style={{ color: "#666", fontSize: "12px" }}>选中值：{JSON.stringify(value)}</div>
    </div>
  );
};

export default MultipleExample;
