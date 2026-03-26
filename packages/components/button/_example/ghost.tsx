import React from "react";
import { Button } from "@tendaui/react";

export default function Ghost() {
  return (
    <div style={{ display: "flex", gap: "12px", padding: "24px", flexWrap: "wrap" }}>
      <Button ghost theme="primary">
        主要
      </Button>
      <Button ghost theme="success">
        成功
      </Button>
      <Button ghost theme="warning">
        警告
      </Button>
      <Button ghost theme="danger">
        危险
      </Button>
    </div>
  );
}
