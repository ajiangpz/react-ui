import React from "react";
import { Loading } from "../index";

const WithTextLoading = () => (
  <div style={{ display: "flex", gap: "32px" }}>
    <Loading text="加载中..." />
    <Loading text="数据处理中..." />
    <Loading text="请稍候..." />
  </div>
);

export default WithTextLoading;
