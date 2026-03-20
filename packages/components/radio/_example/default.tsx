import React from "react";
import { Radio } from "@tendaui/react";

const DefaultDemo = () => {
  return (
    <div>
      <Radio>未选中</Radio>
      <Radio defaultChecked>选中</Radio>
    </div>
  );
};

export default DefaultDemo;