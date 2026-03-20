import React, { useState } from "react";
import { TagInput, TagInputValue } from "@tendaui/react";

const DefaultExample = () => {
  const [tags, setTags] = useState<TagInputValue>(["Vue", "React", "Angular"]);

  return (
    <div style={{ width: "400px" }}>
      <TagInput value={tags} onChange={(val) => setTags(val)} clearable placeholder="请输入标签，按回车添加" />
      <div style={{ marginTop: "8px", color: "#666", fontSize: "12px" }}>当前标签：{tags.join(", ")}</div>
    </div>
  );
};

export default DefaultExample;
