import React from "react";
import { Button } from "@tendaui/react";

export default function VariantBase() {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="base" theme="default">
        默认
      </Button>
      <Button variant="base" theme="primary">
        主要
      </Button>
      <Button variant="base" theme="success">
        成功
      </Button>
      <Button variant="base" theme="warning">
        警告
      </Button>
      <Button variant="base" theme="danger">
        危险
      </Button>
    </div>
  );
}