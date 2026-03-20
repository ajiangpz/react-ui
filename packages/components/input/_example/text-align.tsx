import React from "react";
import { Input } from "../index";

const TextAlignInput = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <Input align="left" placeholder="左对齐" defaultValue="左对齐内容" />
    <Input align="center" placeholder="居中对齐" defaultValue="居中对齐内容" />
    <Input align="right" placeholder="右对齐" defaultValue="右对齐内容" />
  </div>
);

export default TextAlignInput;
