import React, { useState } from "react";
import { Checkbox } from "@tendaui/react";

export default function Controlled() {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox checked={checked} onChange={(val) => setChecked(val)}>
      受控复选框（点击切换）
    </Checkbox>
  );
}