import React from "react";
import { Button } from "@tendaui/react";

export default function Loading() {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button loading>加载中</Button>
      <Button loading theme="primary">
        加载中
      </Button>
      <Button loading variant="outline" theme="primary">
        加载中
      </Button>
      <Button loading variant="dashed" theme="success">
        加载中
      </Button>
    </div>
  );
}