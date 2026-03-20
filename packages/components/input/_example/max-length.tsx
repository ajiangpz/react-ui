import React from "react";
import { Input } from "../index";

const MaxLengthInput = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <Input maxlength={10} placeholder="最多输入10个字符" />
    <Input maxcharacter={20} placeholder="最多输入20个字符（中文算2个）" />
  </div>
);

export default MaxLengthInput;
