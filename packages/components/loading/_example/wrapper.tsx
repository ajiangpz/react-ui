import React, { useState } from "react";
import { Loading, Switch } from "@tendaui/react";

const WrapperLoading = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <span>加载状态：</span>
        <Switch value={loading} onChange={(val) => setLoading(val as boolean)} />
      </div>
      <Loading loading={loading} showOverlay>
        <div
          style={{
            padding: "40px",
            background: "#f5f5f5",
            borderRadius: "8px",
            textAlign: "center"
          }}
        >
          <h3>内容区域</h3>
          <p>这是被 Loading 包裹的内容</p>
          <p>当 loading 为 true 时会显示遮罩层和加载指示符</p>
        </div>
      </Loading>
    </div>
  );
};

export default WrapperLoading;
