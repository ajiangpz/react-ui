import React from "react";
import { Input } from "../index";
import { IconSearch, IconUser } from "@tendaui/icons";

const WithIconInput = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "500px" }}>
    <Input prefixIcon={<IconSearch />} placeholder="前置图标" />
    <Input suffixIcon={<IconSearch />} placeholder="后置图标" />
    <Input prefixIcon={<IconUser />} suffixIcon={<IconSearch />} placeholder="前后图标" />
  </div>
);

export default WithIconInput;
