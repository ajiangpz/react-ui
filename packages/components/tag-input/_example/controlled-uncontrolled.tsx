import React, { useState } from "react";
import { TagInput, TagInputValue } from "@tendaui/react";

const Example = () => {
  const [controlledTags, setControlledTags] = useState<TagInputValue>(["Vue", "React"]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>受控模式</div>
        <TagInput
          value={controlledTags}
          onChange={(val) => setControlledTags(val)}
          placeholder="请输入"
          clearable
          style={{ width: "400px" }}
        />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>非受控模式</div>
        <TagInput defaultValue={["Svelte", "Solid"]} placeholder="请输入" clearable style={{ width: "400px" }} />
      </div>
    </div>
  );
};

export default Example;
