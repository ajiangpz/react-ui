import React from "react";
import { Select } from "@tendaui/react";

const basicOptions = [
  { label: "架构云", value: "1", title: "架构云选项" },
  { label: "大数据", value: "2" },
  { label: "区块链", value: "3" },
  { label: "物联网", value: "4", disabled: true },
  { label: "人工智能", value: "5" }
];

const LabelSuffixExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <Select label="城市：" options={basicOptions} placeholder="请选择" style={{ width: "350px" }} />
    <Select
      suffix={<span style={{ color: "#999" }}>个</span>}
      options={basicOptions}
      placeholder="请选择"
      style={{ width: "350px" }}
    />
  </div>
);

export default LabelSuffixExample;
