import React from "react";
import { Button } from "@tendaui/react";

export default function Size() {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
      <Button size="small" theme="primary">
        小按钮
      </Button>
      <Button size="medium" theme="primary">
        中按钮
      </Button>
      <Button size="large" theme="primary">
        大按钮
      </Button>
    </div>
  );
}