import React from "react";
import { Tag } from "@tendaui/react";

const DisabledExample = () => (
  <div style={{ display: "flex", gap: "8px" }}>
    <Tag theme="primary">正常标签</Tag>
    <Tag theme="primary" disabled>
      禁用标签
    </Tag>
    <Tag theme="primary" closable>
      可删除标签
    </Tag>
    <Tag theme="primary" closable disabled>
      禁用可删除标签
    </Tag>
  </div>
);

export default DisabledExample;
