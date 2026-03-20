import React from "react";
import IPInput from "../IPInput";

const KeyboardNavigationExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
    <div style={{ color: "#666", fontSize: "12px" }}>
      <p style={{ fontWeight: "bold" }}>键盘操作说明：</p>
      <ul style={{ margin: "8px 0", paddingLeft: "20px" }}>
        <li>输入 3 位数字自动跳转到下一段</li>
        <li>输入 . 或空格跳转到下一段</li>
        <li>左/右箭头键在段之间移动</li>
        <li>在段开头按 Backspace 跳转到上一段</li>
      </ul>
    </div>
    <IPInput placeholder="192.168.0.1" autoFocus />
  </div>
);

export default KeyboardNavigationExample;