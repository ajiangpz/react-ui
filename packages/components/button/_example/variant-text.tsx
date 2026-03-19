import React from "react";
import { Button } from "@tendaui/react";

export default function VariantText() {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="text" theme="default">
        默认
      </Button>
      <Button variant="text" theme="primary">
        主要
      </Button>
      <Button variant="text" theme="success">
        成功
      </Button>
      <Button variant="text" theme="warning">
        警告
      </Button>
      <Button variant="text" theme="danger">
        危险
      </Button>
    </div>
  );
}