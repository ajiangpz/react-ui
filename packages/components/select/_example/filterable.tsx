import React, { useState } from "react";
import { Select } from "@tendaui/react";

const basicOptions = [
  { label: "架构云", value: "1", title: "架构云选项" },
  { label: "大数据", value: "2" },
  { label: "区块链", value: "3" },
  { label: "物联网", value: "4", disabled: true },
  { label: "人工智能", value: "5" }
];

const FilterableExample = () => {
  const [value, setValue] = useState("");
  return (
    <Select
      value={value}
      onChange={(val) => setValue(val as string)}
      options={basicOptions}
      placeholder="请输入关键词搜索"
      filterable
      clearable
      style={{ width: "300px" }}
    />
  );
};

export default FilterableExample;
