import React from "react";
import { Button } from "@tendaui/react";

export default function VariantOutline() {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button variant="outline" theme="default">
        默认
      </Button>
      <Button variant="outline" theme="primary">
        主要
      </Button>
      <Button variant="outline" theme="success">
        成功
      </Button>
      <Button variant="outline" theme="warning">
        警告
      </Button>
      <Button variant="outline" theme="danger">
        危险
      </Button>
    </div>
  );
}