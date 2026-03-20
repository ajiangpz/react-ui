import React, { useState } from "react";
import { Loading, Button } from "@tendaui/react";

const NoOverlayExample = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Button onClick={() => setLoading(!loading)}>{loading ? "停止加载" : "开始加载（无遮罩）"}</Button>
      <Loading loading={loading} showOverlay={false} text="加载中..." />
    </div>
  );
};

export default NoOverlayExample;
