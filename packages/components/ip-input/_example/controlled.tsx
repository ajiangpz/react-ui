import React, { useState } from "react";
import IPInput from "../IPInput";
import { Button } from "@tendaui/react";

const ControlledExample = () => {
  const [value, setValue] = useState("192.168.1.1");
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <IPInput value={value} onChange={setValue} allowCIDR={true} showClear={true} />
      <div style={{ color: "#666", fontSize: "12px" }}>当前值: {value || "(空)"}</div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <Button size="small" onClick={() => setValue("10.0.0.1")}>
          设为 10.0.0.1
        </Button>
        <Button size="small" onClick={() => setValue("172.16.0.1/24")}>
          设为 172.16.0.1/24
        </Button>
        <Button size="small" onClick={() => setValue("")}>
          清空
        </Button>
      </div>
    </div>
  );
};

export default ControlledExample;
