import React, { useState } from "react";
import { ColorPicker } from "@tendaui/react";

export default function SwatchColors() {
  const [color, setColor] = useState("#0052d9");
  const customSwatchColors = [
    "#ff0000",
    "#ff7800",
    "#ffff00",
    "#00ff00",
    "#00ffff",
    "#0000ff",
    "#8b00ff",
    "#ff00ff",
    "#000000",
    "#333333",
    "#666666",
    "#999999",
    "#cccccc",
    "#ffffff"
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <ColorPicker swatchColors={customSwatchColors} value={color} onChange={(v) => setColor(v)} />
      <div>当前颜色值：{color}</div>
    </div>
  );
}