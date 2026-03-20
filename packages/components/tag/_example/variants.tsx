import React from "react";
import { Tag } from "@tendaui/react";

const VariantExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
    <div style={{ display: "flex", gap: "8px" }}>
      <Tag theme="primary" variant="light">
        浅色标签
      </Tag>
      <Tag theme="warning" variant="light">
        浅色标签
      </Tag>
      <Tag theme="danger" variant="light">
        浅色标签
      </Tag>
      <Tag theme="success" variant="light">
        浅色标签
      </Tag>
    </div>
    <div style={{ display: "flex", gap: "8px" }}>
      <Tag theme="primary" variant="dark">
        深色标签
      </Tag>
      <Tag theme="warning" variant="dark">
        深色标签
      </Tag>
      <Tag theme="danger" variant="dark">
        深色标签
      </Tag>
      <Tag theme="success" variant="dark">
        深色标签
      </Tag>
    </div>
  </div>
);

export default VariantExample;
