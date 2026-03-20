import React, { useState } from "react";
import { ColorPicker } from "@tendaui/react";

export default function WithAlpha() {
  const [color, setColor] = useState("rgba(0, 82, 217, 0.8)");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <ColorPicker format="RGBA" enableAlpha value={color} onChange={(v) => setColor(v)} />
      <div>当前颜色值：{color}</div>
      <div
        style={{
          width: "100px",
          height: "40px",
          backgroundColor: color,
          borderRadius: "4px",
          border: "1px solid #ddd"
        }}
      />
    </div>
  );
}