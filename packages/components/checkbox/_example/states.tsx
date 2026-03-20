import React from "react";
import { Checkbox } from "@tendaui/react";

export default function States() {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Checkbox>未选中项</Checkbox>
      <Checkbox defaultChecked>选中项</Checkbox>
      <Checkbox indeterminate>半选状态</Checkbox>
      <Checkbox disabled>未选禁用项</Checkbox>
      <Checkbox disabled defaultChecked>
        选中禁用项
      </Checkbox>
      <Checkbox readonly defaultChecked>
        只读选中项
      </Checkbox>
    </div>
  );
}