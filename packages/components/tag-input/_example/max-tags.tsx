import React, { useState } from "react";
import { TagInput, TagInputValue } from "@tendaui/react";

const MaxTagsExample = () => {
  const [tags, setTags] = useState<TagInputValue>(["Vue", "React"]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <TagInput
        value={tags}
        onChange={(val) => setTags(val)}
        max={5}
        placeholder="最多输入 5 个标签"
        clearable
        style={{ width: "400px" }}
      />
      <div style={{ color: "#666", fontSize: "12px" }}>已输入 {tags.length}/5 个标签</div>
    </div>
  );
};

export default MaxTagsExample;
