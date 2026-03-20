import React from 'react';
import { TagInput } from "@tendaui/react";

const CollapsedExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>超过 2 个折叠</div>
      <TagInput
        defaultValue={["标签一", "标签二", "标签三", "标签四", "标签五"]}
        minCollapsedNum={2}
        placeholder="请输入"
        style={{ width: "400px" }}
      />
    </div>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>超过 3 个折叠</div>
      <TagInput
        defaultValue={["标签一", "标签二", "标签三", "标签四", "标签五"]}
        minCollapsedNum={3}
        placeholder="请输入"
        style={{ width: "400px" }}
      />
    </div>
  </div>
);

export default CollapsedExample;
