import React from "react";
import { Input } from "../index";

const LabelSuffixInput = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "500px" }}>
    <Input label="http://" placeholder="请输入网址" />
    <Input suffix=".com" placeholder="请输入域名" />
    <Input label="http://" suffix=".com" placeholder="请输入域名" />
  </div>
);

export default LabelSuffixInput;
