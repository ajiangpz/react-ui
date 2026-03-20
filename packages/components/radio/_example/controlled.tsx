import React, { useState } from "react";
import { Radio } from "@tendaui/react";

const ControlledDemo = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Radio checked={checked} onChange={(val) => setChecked(val)}>
      受控单选框（点击切换）
    </Radio>
  );
};

export default ControlledDemo;