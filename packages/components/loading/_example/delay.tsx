import React, { useEffect, useState } from "react";
import { Loading, Button } from "@tendaui/react";

const DelayLoading = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);

  const loadData = (time?: number) => {
    setLoading(true);
    setData("");
    const timer = setTimeout(() => {
      setLoading(false);
      setData("数据加载完成，短时间的数据加载并未出现 loading");
      clearTimeout(timer);
    }, time || 100);
  };

  useEffect(() => {
    setTimeout(() => {
      loadData();
    }, 0);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ color: "#666", fontSize: "12px" }}>
        设置 delay=500ms，当加载时间小于 500ms 时不显示 loading，避免闪烁
      </div>
      <Loading loading={loading} delay={500} size="small" showOverlay>
        <div
          style={{
            padding: "20px",
            background: "#f5f5f5",
            borderRadius: "4px",
            minHeight: "60px"
          }}
        >
          {data || "等待加载..."}
        </div>
      </Loading>
      <div style={{ display: "flex", gap: "8px" }}>
        <Button size="small" onClick={() => loadData()}>
          快速加载（无 loading）
        </Button>
        <Button size="small" onClick={() => loadData(1000)}>
          慢速加载（显示 loading）
        </Button>
      </div>
    </div>
  );
};

export default DelayLoading;
