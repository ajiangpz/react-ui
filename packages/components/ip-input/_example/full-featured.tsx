import React, { useState } from "react";
import IPInput from "../IPInput";

const FullFeaturedExample = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <IPInput
        value={value}
        onChange={setValue}
        allowIPv6={true}
        allowCIDR={true}
        showClear={true}
        placeholder="输入 IPv4 或 IPv6 地址"
        tips="支持 IPv4、IPv6 和 CIDR 格式"
      />
      <div
        style={{
          padding: "12px",
          background: "#f5f5f5",
          borderRadius: "4px",
          fontSize: "12px"
        }}
      >
        <strong>当前值：</strong>
        {value || "(空)"}
      </div>
    </div>
  );
};

export default FullFeaturedExample;