import React from "react";
import { Tag } from "@tendaui/react";

const SizeExample = () => (
  <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
    <Tag size="small" theme="primary">
      小标签
    </Tag>
    <Tag size="medium" theme="primary">
      中标签
    </Tag>
    <Tag size="large" theme="primary">
      大标签
    </Tag>
  </div>
);

export default SizeExample;
