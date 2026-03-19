import React from "react";
import { Button } from "@tendaui/react";

export default function Link() {
  return (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button href="https://www.example.com" target="_blank" theme="primary">
        跳转链接
      </Button>
      <Button href="https://www.example.com" target="_blank" variant="text" theme="primary">
        文字链接
      </Button>
    </div>
  );
}