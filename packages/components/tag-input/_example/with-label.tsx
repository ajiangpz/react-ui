import React from "react";
import { TagInput } from "@tendaui/react";

const WithLabelExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <TagInput
      label="技术栈："
      defaultValue={["React", "TypeScript"]}
      placeholder="请输入"
      clearable
      style={{ width: "450px" }}
    />
    <TagInput
      label="城市："
      defaultValue={["北京", "上海"]}
      placeholder="请输入"
      clearable
      style={{ width: "450px" }}
    />
  </div>
);

export default WithLabelExample;
