import React from "react";
import { Input } from "../index";

const StatusInput = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "500px", margin: "8px 0" }}>
    <Input status="default" placeholder="默认状态" tips="这是一条提示信息" />
    <Input status="success" placeholder="成功状态" tips="校验通过" />
    <Input status="warning" placeholder="警告状态" tips="请注意输入内容" />
    <Input status="error" placeholder="错误状态" tips="输入内容有误" />
  </div>
);

export default StatusInput;
