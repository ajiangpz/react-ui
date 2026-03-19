import React from "react";
import { Button } from "@tendaui/react";

export default function Block() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "300px" }}>
      <Button block theme="primary">
        主要按钮
      </Button>
      <Button block variant="outline" theme="primary">
        描边按钮
      </Button>
      <Button block variant="dashed">
        虚线按钮
      </Button>
    </div>
  );
}