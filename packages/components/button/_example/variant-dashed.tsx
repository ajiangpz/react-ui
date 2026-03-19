import React from "react";
import { Button } from "@tendaui/react";

export default function VariantDashed() {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="dashed" theme="default">
        默认
      </Button>
      <Button variant="dashed" theme="primary">
        主要
      </Button>
      <Button variant="dashed" theme="success">
        成功
      </Button>
      <Button variant="dashed" theme="warning">
        警告
      </Button>
      <Button variant="dashed" theme="danger">
        危险
      </Button>
    </div>
  );
}