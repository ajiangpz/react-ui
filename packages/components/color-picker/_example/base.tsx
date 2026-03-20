import React, { useState } from "react";
import { ColorPicker } from "@tendaui/react";

export default function Base() {
  const [color, setColor] = useState("#0052d9");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <ColorPicker format="HEX" value={color} onChange={(v) => setColor(v)} />
      <div>当前颜色值：{color}</div>
    </div>
  );
}