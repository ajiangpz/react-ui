import React, { useState } from "react";
import { ColorPicker } from "@tendaui/react";

export default function Formats() {
  const [hexColor, setHexColor] = useState("#0052d9");
  const [rgbColor, setRgbColor] = useState("rgb(0, 82, 217)");
  const [hslColor, setHslColor] = useState("hsl(217, 100%, 43%)");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>HEX 格式</div>
        <ColorPicker format="HEX" value={hexColor} onChange={(v) => setHexColor(v)} />
        <div style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>值：{hexColor}</div>
      </div>

      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>RGB 格式</div>
        <ColorPicker format="RGB" value={rgbColor} onChange={(v) => setRgbColor(v)} />
        <div style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>值：{rgbColor}</div>
      </div>

      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>HSL 格式</div>
        <ColorPicker format="HSL" value={hslColor} onChange={(v) => setHslColor(v)} />
        <div style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>值：{hslColor}</div>
      </div>
    </div>
  );
}