import React from "react";
import { TagInput } from "@tendaui/react";

const StatusExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <TagInput
      status="default"
      defaultValue={["默认"]}
      tips="这是提示信息"
      placeholder="默认状态"
      style={{ width: "400px" }}
    />
    <TagInput
      status="success"
      defaultValue={["成功"]}
      tips="校验通过"
      placeholder="成功状态"
      style={{ width: "400px" }}
    />
    <TagInput
      status="warning"
      defaultValue={["警告"]}
      tips="请注意"
      placeholder="警告状态"
      style={{ width: "400px" }}
    />
    <TagInput
      status="error"
      defaultValue={["错误"]}
      tips="输入有误"
      placeholder="错误状态"
      style={{ width: "400px" }}
    />
  </div>
);

export default StatusExample;
