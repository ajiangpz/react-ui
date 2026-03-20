import React from "react";
import { Badge } from "@tendaui/react";

export default function Standalone() {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Badge count={8} />
      <Badge count={88} />
      <Badge count={888} />
      <Badge count="new" shape="round" />
      <Badge dot count={1} />
    </div>
  );
}