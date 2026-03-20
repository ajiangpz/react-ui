import React, { useState } from "react";
import IPInput from "../IPInput";

const PasteDemoExample = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ color: "#666", fontSize: "12px" }}>
        尝试粘贴以下内容：
        <ul style={{ margin: "8px 0", paddingLeft: "20px" }}>
          <li>192.168.0.1</li>
          <li>192.168.0.1/24</li>
          <li>abc 10.0.0.1 xyz（会自动提取 IP）</li>
          <li>2001:db8::1（需要开启 IPv6）</li>
        </ul>
      </div>
      <IPInput value={value} onChange={setValue} allowCIDR={true} allowIPv6={true} showClear={true} />
      <div style={{ color: "#666", fontSize: "12px" }}>当前值: {value || "(空)"}</div>
    </div>
  );
};

export default PasteDemoExample;
