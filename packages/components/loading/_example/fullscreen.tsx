import React, { useState } from "react";
import { Loading, Button } from "@tendaui/react";

const FullscreenLoading = () => {
  const [loading, setLoading] = useState(false);

  const showLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Loading loading={loading} fullscreen preventScrollThrough={true} text="全屏加载中..." />
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ color: "#666" }}>点击按钮显示全屏加载，2秒后自动关闭</div>
        <div>
          <Button theme="primary" onClick={showLoading}>
            显示全屏加载
          </Button>
        </div>
      </div>
    </>
  );
};

export default FullscreenLoading;
