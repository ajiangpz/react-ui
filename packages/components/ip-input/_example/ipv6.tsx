import React, { useState } from "react";
import IPInput from "../IPInput";

const IPv6Example = () => {
  const [value, setValue] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <IPInput
        value={value}
        onChange={(val) => {
          setValue(val);
          console.log("值:", val);
        }}
        allowIPv6={true}
        allowCIDR={true}
        placeholder="2001:db8::1"
      />
      <div style={{ color: "#666", fontSize: "12px" }}>当前值: {value || "(空)"}</div>
    </div>
  );
};

export default IPv6Example;