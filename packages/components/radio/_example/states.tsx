import React from "react";
import { Radio } from "@tendaui/react";

const StatesDemo = () => {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Radio>未选中</Radio>
      <Radio defaultChecked>选中</Radio>
      <Radio disabled>禁用未选中</Radio>
      <Radio disabled defaultChecked>
        禁用选中
      </Radio>
      <Radio readonly defaultChecked>
        只读选中
      </Radio>
    </div>
  );
};

export default StatesDemo;