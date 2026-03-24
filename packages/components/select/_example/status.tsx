import React from "react";
import { Select } from "@tendaui/react";

const basicOptions = [
  { label: "架构云", value: "1", title: "架构云选项" },
  { label: "大数据", value: "2" },
  { label: "区块链", value: "3" },
  { label: "物联网", value: "4", disabled: true },
  { label: "人工智能", value: "5" }
];

const StatusExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "24px", margin: "8px 0" }}>
    <Select
      status="default"
      options={basicOptions}
      placeholder="默认状态"
      tips="这是一条提示"
      style={{ width: "300px" }}
    />
    <Select status="success" options={basicOptions} placeholder="成功状态" tips="校验通过" style={{ width: "300px" }} />
    <Select status="warning" options={basicOptions} placeholder="警告状态" tips="请注意" style={{ width: "300px" }} />
    <Select status="error" options={basicOptions} placeholder="错误状态" tips="输入有误" style={{ width: "300px" }} />
  </div>
);

export default StatusExample;
