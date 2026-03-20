import React, { useState } from "react";
import IPInput from "../IPInput";

const WithCIDRExample = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <IPInput
        value={value}
        onChange={(val) => {
          setValue(val);
          console.log("值:", val);
        }}
        allowCIDR={true}
        showClear={true}
        placeholder="192.168.0.1/24"
      />
      <div style={{ color: "#666", fontSize: "12px" }}>当前值: {value || "(空)"}</div>
    </div>
  );
};

export default WithCIDRExample;