import React from "react";
import { Input } from "../index";

const BorderlessInput = () => (
  <div style={{ display: "flex", gap: "24px" }}>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>有边框</div>
      <Input placeholder="有边框" />
    </div>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>无边框</div>
      <Input borderless placeholder="无边框" />
    </div>
  </div>
);

export default BorderlessInput;
