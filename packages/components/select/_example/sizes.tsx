import React from "react";
import { Select } from "@tendaui/react";

const basicOptions = [
  { label: "架构云", value: "1", title: "架构云选项" },
  { label: "大数据", value: "2" },
  { label: "区块链", value: "3" },
  { label: "物联网", value: "4", disabled: true },
  { label: "人工智能", value: "5" }
];

const SizesExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <Select size="small" options={basicOptions} placeholder="小尺寸" style={{ width: "300px" }} />
    <Select size="medium" options={basicOptions} placeholder="中尺寸（默认）" style={{ width: "300px" }} />
    <Select size="large" options={basicOptions} placeholder="大尺寸" style={{ width: "300px" }} />
  </div>
);

export default SizesExample;
