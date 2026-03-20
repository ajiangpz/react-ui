import React, { useState } from "react";
import { TagInput, TagInputValue } from "@tendaui/react";

const EventsExample = () => {
  const [tags, setTags] = useState<TagInputValue>(["Vue"]);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    setLogs((prev) => [...prev.slice(-4), msg]);
  };

  return (
    <div style={{ display: "flex", gap: "24px" }}>
      <div style={{ flex: 1 }}>
        <TagInput
          value={tags}
          onChange={(val, context) => {
            setTags(val);
            addLog(`onChange: ${JSON.stringify(val)}, trigger: ${context.trigger}`);
          }}
          onEnter={(val, context) => {
            addLog(`onEnter: inputValue=${context.inputValue}`);
          }}
          onRemove={(context) => {
            addLog(`onRemove: removed=${context.item}, index=${context.index}`);
          }}
          onClear={() => {
            addLog("onClear: 清空所有标签");
          }}
          onPaste={(context) => {
            addLog(`onPaste: ${context.pasteValue}`);
          }}
          clearable
          placeholder="请输入标签"
          style={{ width: "350px" }}
        />
      </div>
      <div
        style={{
          flex: 1,
          padding: "12px",
          background: "#f5f5f5",
          borderRadius: "4px",
          fontSize: "12px",
          maxHeight: "150px",
          overflow: "auto"
        }}
      >
        <div style={{ fontWeight: "bold", marginBottom: "8px" }}>事件日志：</div>
        {logs.length === 0 ? (
          <div style={{ color: "#999" }}>暂无日志</div>
        ) : (
          logs.map((log, index) => (
            <div key={index} style={{ marginBottom: "4px", color: "#666" }}>
              {log}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EventsExample;
