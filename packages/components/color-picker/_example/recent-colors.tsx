import React, { useState } from "react";
import { ColorPicker } from "@tendaui/react";

export default function RecentColors() {
  const [color, setColor] = useState("#0052d9");
  const [recentColors, setRecentColors] = useState<string[]>(["#ff0000", "#00ff00", "#0000ff"]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <ColorPicker
        recentColors={recentColors}
        onRecentColorsChange={setRecentColors}
        value={color}
        onChange={(v) => setColor(v)}
      />
      <div>当前颜色值：{color}</div>
      <div>最近使用：{recentColors.join(", ")}</div>
    </div>
  );
}