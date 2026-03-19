import React from "react";
import { Button } from "@tendaui/react";

export default function Disabled() {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button disabled>默认禁用</Button>
      <Button disabled theme="primary">
        主要禁用
      </Button>
      <Button disabled variant="outline" theme="primary">
        描边禁用
      </Button>
      <Button disabled variant="dashed" theme="primary">
        虚线禁用
      </Button>
      <Button disabled variant="text" theme="primary">
        文字禁用
      </Button>
    </div>
  );
}