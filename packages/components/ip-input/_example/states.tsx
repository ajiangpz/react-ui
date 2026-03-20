import React from "react";
import IPInput from "../IPInput";

const StatesExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>正常状态</div>
      <IPInput defaultValue="192.168.0.1" />
    </div>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>禁用状态</div>
      <IPInput defaultValue="192.168.0.1" disabled />
    </div>
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>只读状态</div>
      <IPInput defaultValue="192.168.0.1" readOnly />
    </div>
  </div>
);

export default StatesExample;