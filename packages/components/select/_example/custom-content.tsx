import { Select } from "@tendaui/react";
import React from "react";

const customOptions = [
  { label: "架构云", value: "1", content: <span style={{ color: "var(--td-brand-color)" }}>架构云（推荐）</span> },
  {
    label: "大数据",
    value: "2",
    content: (
      <span>
        大数据 <span style={{ color: "#999", fontSize: "12px" }}>- 企业版</span>
      </span>
    )
  },
  {
    label: "人工智能",
    value: "3",
    content: <span style={{ color: "var(--td-success-color)" }}>人工智能（新）</span>
  }
];

const CustomContentExample = () => (
  <Select options={customOptions} placeholder="选项支持自定义内容" style={{ width: "300px" }} />
);

export default CustomContentExample;
