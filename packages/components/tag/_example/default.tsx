import React from "react";
import { Tag } from "@tendaui/react";

const DefaultExample = () => (
  <div style={{ display: "flex", gap: "8px" }}>
    <Tag theme="primary">标签一</Tag>
    <Tag theme="warning">标签二</Tag>
    <Tag theme="danger" variant="dark">
      标签三
    </Tag>
    <Tag theme="success" variant="dark">
      标签四
    </Tag>
  </div>
);

export default DefaultExample;
