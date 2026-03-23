import React from "react";
import { Input, InputGroup } from "../index";
import { IconUser, IconLock } from "@tendaui/icons";

const InputGroupExample = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "500px" }}>
    <InputGroup separate>
      <Input placeholder="用户名" prefixIcon={<IconUser />} />
      <Input type="password" placeholder="密码" prefixIcon={<IconLock />} />
    </InputGroup>
  </div>
);

export default InputGroupExample;
