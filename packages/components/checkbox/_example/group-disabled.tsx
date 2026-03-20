import React from "react";
import { Checkbox } from "@tendaui/react";

export default function GroupDisabled() {
  return (
    <Checkbox.Group defaultValue={["北京", "深圳"]} disabled>
      <Checkbox value="北京">北京</Checkbox>
      <Checkbox value="上海">上海</Checkbox>
      <Checkbox value="广州">广州</Checkbox>
      <Checkbox value="深圳">深圳</Checkbox>
    </Checkbox.Group>
  );
}