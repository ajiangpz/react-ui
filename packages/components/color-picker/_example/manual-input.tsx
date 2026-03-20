import React, { useState } from "react";
import { ColorPicker } from "@tendaui/react";

export default function ManualInput() {
  const [color, setColor] = useState("#0052d9");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ color: "#666", fontSize: "14px" }}>
        <p style={{ margin: "0 0 8px 0" }}>
          <strong>触发器输入框：</strong>在触发器中直接输入任意格式的颜色值，按回车或失焦后会自动转换为指定格式。
        </p>
        <p style={{ margin: "0" }}>
          <strong>面板格式输入：</strong>
          打开颜色选择面板，可以通过格式选择器切换不同的输入格式（HEX/RGB/HSL/HSV/CMYK），并通过数值输入框精确调整颜色各分量的值。
        </p>
      </div>
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        <div>
          <div style={{ marginBottom: "8px", color: "#666" }}>HEX 格式</div>
          <ColorPicker format="HEX" value={color} onChange={(v) => setColor(v)} />
          <div style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>
            触发器支持输入: rgb(255, 0, 0) 或 red
          </div>
        </div>
        <div>
          <div style={{ marginBottom: "8px", color: "#666" }}>RGB 格式（面板内可切换格式）</div>
          <ColorPicker format="RGB" value={color} onChange={(v) => setColor(v)} />
          <div style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>面板内支持 R/G/B 分量精确输入</div>
        </div>
        <div>
          <div style={{ marginBottom: "8px", color: "#666" }}>带透明度（RGBA）</div>
          <ColorPicker format="RGBA" enableAlpha value={color} onChange={(v) => setColor(v)} />
          <div style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>面板内可调整透明度百分比</div>
        </div>
      </div>
      <div>当前颜色值：{color}</div>
    </div>
  );
}