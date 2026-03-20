import React from "react";
import { Loading } from "@tendaui/react";
const InheritColorExample = () => (
  <div style={{ display: "flex", gap: "24px" }}>
    <div style={{ color: "var(--td-brand-color)" }}>
      <Loading inheritColor />
      <div style={{ marginTop: "8px", fontSize: "12px" }}>继承品牌色</div>
    </div>
    <div style={{ color: "var(--td-success-color)" }}>
      <Loading inheritColor />
      <div style={{ marginTop: "8px", fontSize: "12px" }}>继承成功色</div>
    </div>
    <div style={{ color: "var(--td-warning-color)" }}>
      <Loading inheritColor />
      <div style={{ marginTop: "8px", fontSize: "12px" }}>继承警告色</div>
    </div>
    <div style={{ color: "var(--td-danger-color)" }}>
      <Loading inheritColor />
      <div style={{ marginTop: "8px", fontSize: "12px" }}>继承错误色</div>
    </div>
  </div>
);

export default InheritColorExample;
