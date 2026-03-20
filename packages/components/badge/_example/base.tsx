import React from "react";
import { Badge, Button } from "@tendaui/react";

export default function Base() {
  return (
    <Badge count={2}>
      <Button>按钮</Button>
    </Badge>
  );
}