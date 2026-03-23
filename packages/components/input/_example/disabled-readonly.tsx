import React from "react";
import { Input } from "../index";

const DisabledReadonlyInput = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "500px" }}>
    <Input placeholder="正常状态" />
    <Input disabled placeholder="禁用状态" defaultValue="禁用内容" />
    <Input readonly placeholder="只读状态" defaultValue="只读内容" />
  </div>
);

export default DisabledReadonlyInput;
