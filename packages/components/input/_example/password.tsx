import React, { useState } from "react";
import { Input } from "../index";
import { IconLock, IconEyeOpened, IconEyeClosed } from "@tendaui/icons";

const PasswordInput = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ width: 500 }}>
      <Input type={visible ? "text" : "password"} prefixIcon={<IconLock />} placeholder="请输入密码" />
    </div>
  );
};

export default PasswordInput;
