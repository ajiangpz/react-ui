import React, { useState } from "react";
import { Select } from "@tendaui/react";

const groupOptions = [
  {
    group: "华北",
    children: [
      { label: "北京", value: "beijing" },
      { label: "天津", value: "tianjin" }
    ]
  },
  {
    group: "华东",
    children: [
      { label: "上海", value: "shanghai" },
      { label: "南京", value: "nanjing" },
      { label: "杭州", value: "hangzhou" }
    ]
  },
  {
    group: "华南",
    children: [
      { label: "广州", value: "guangzhou" },
      { label: "深圳", value: "shenzhen" }
    ]
  }
];

const GroupExample = () => {
  const [value, setValue] = useState("");
  return (
    <Select
      value={value}
      onChange={(val) => setValue(val as string)}
      options={groupOptions}
      placeholder="请选择城市"
      filterable
      clearable
      style={{ width: "300px" }}
    />
  );
};

export default GroupExample;
