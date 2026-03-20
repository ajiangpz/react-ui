import React, { useState } from "react";
import { Input } from "../index";

const EventsInput = () => {
  const [log, setLog] = useState<string[]>([]);

  const addLog = (msg: string) => {
    setLog((prev) => [...prev.slice(-4), msg]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input
        placeholder="触发各种事件（查看下方日志）"
        clearable
        onChange={(val) => addLog(`onChange: ${val}`)}
        onFocus={() => addLog("onFocus")}
        onBlur={() => addLog("onBlur")}
        onEnter={(val) => addLog(`onEnter: ${val}`)}
        onClear={() => addLog("onClear")}
      />
      <div
        style={{
          padding: "12px",
          background: "#f5f5f5",
          borderRadius: "4px",
          fontSize: "12px",
          fontFamily: "monospace"
        }}
      >
        <div style={{ marginBottom: "8px", fontWeight: "bold" }}>事件日志：</div>
        {log.length === 0 ? (
          <div style={{ color: "#999" }}>暂无事件触发</div>
        ) : (
          log.map((item, index) => <div key={index}>{item}</div>)
        )}
      </div>
    </div>
  );
};

export default EventsInput;
