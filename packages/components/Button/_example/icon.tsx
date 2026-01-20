import React from "react";
import { Button } from "@tendaui/react";
import { IconArrowLeft, IconDelete, IconAlertTriangle, IconCheckCircleStroked } from "@tendaui/icons";

export default function Icon() {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Button icon={<IconArrowLeft />}>默认按钮</Button>
      <Button icon={<IconAlertTriangle />} theme="warning">
        警告按钮
      </Button>
      <Button icon={<IconDelete />} theme="danger">
        危险按钮
      </Button>
      <Button theme="success" icon={<IconCheckCircleStroked />}>
        成功按钮
      </Button>
    </div>
  );
}
