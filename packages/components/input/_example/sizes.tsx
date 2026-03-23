import React from "react";
import { Input } from "../index";

const SizesInput = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "500px" }}>
    <Input size="small" placeholder="小尺寸" />
    <Input size="medium" placeholder="中尺寸（默认）" />
    <Input size="large" placeholder="大尺寸" />
  </div>
);

export default SizesInput;
