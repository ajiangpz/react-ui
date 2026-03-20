import React from "react";
import { Select } from "@tendaui/react";

const basicOptions = [
  { label: "架构云", value: "1", title: "架构云选项" },
  { label: "大数据", value: "2" },
  { label: "区块链", value: "3" },
  { label: "物联网", value: "4", disabled: true },
  { label: "人工智能", value: "5" }
];

const DisabledExample = () => (
  <div style={{ display: "flex", gap: "16px" }}>
    <Select options={basicOptions} placeholder="正常状态" style={{ width: "200px" }} />
    <Select options={basicOptions} placeholder="禁用状态" disabled defaultValue="1" style={{ width: "200px" }} />
    <Select options={basicOptions} placeholder="只读状态" readonly defaultValue="2" style={{ width: "200px" }} />
  </div>
);

export default DisabledExample;
