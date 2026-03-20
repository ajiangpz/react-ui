import React from "react";
import { TagInput } from "@tendaui/react";

const DisabledReadonlyExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>正常</div>
      <TagInput defaultValue={["Vue", "React"]} placeholder="正常" style={{ width: "400px" }} />
    </div>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>禁用</div>
      <TagInput defaultValue={["Vue", "React"]} disabled placeholder="禁用" style={{ width: "400px" }} />
    </div>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>只读</div>
      <TagInput defaultValue={["Vue", "React"]} readonly placeholder="只读" style={{ width: "400px" }} />
    </div>
  </div>
);

export default DisabledReadonlyExample;
