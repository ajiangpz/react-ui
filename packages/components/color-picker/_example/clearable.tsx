import React, { useState } from "react";
import { ColorPicker } from "@tendaui/react";

export default function Clearable() {
  const [color, setColor] = useState("#0052d9");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <ColorPicker clearable value={color} onChange={(v) => setColor(v)} onClear={() => setColor("")} />
      <div>当前颜色值：{color || "(空)"}</div>
    </div>
  );
}