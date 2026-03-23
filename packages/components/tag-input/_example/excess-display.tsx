import React from "react";
import { TagInput } from "@tendaui/react";

const ExcessDisplayExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "500px" }}>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>换行显示（默认）</div>
      <TagInput
        defaultValue={["标签一", "标签二", "标签三", "标签四", "标签五", "标签六"]}
        excessTagsDisplayType="break-line"
        placeholder="请输入"
        style={{ width: "300px" }}
      />
    </div>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>横向滚动</div>
      <TagInput
        defaultValue={["标签一", "标签二", "标签三", "标签四", "标签五", "标签六"]}
        excessTagsDisplayType="scroll"
        placeholder="请输入"
        style={{ width: "300px" }}
      />
    </div>
  </div>
);

export default ExcessDisplayExample;
