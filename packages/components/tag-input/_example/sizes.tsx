import React from "react";
import { TagInput } from "@tendaui/react";

const SizesExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>小尺寸</div>
      <TagInput size="small" defaultValue={["标签一", "标签二"]} placeholder="小尺寸" style={{ width: "400px" }} />
    </div>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>中尺寸（默认）</div>
      <TagInput size="medium" defaultValue={["标签一", "标签二"]} placeholder="中尺寸" style={{ width: "400px" }} />
    </div>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>大尺寸</div>
      <TagInput size="large" defaultValue={["标签一", "标签二"]} placeholder="大尺寸" style={{ width: "400px" }} />
    </div>
  </div>
);

export default SizesExample;
