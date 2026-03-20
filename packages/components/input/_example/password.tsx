import React, { useState } from "react";
import { Input } from "../index";
import { IconLock, IconEyeOpened, IconEyeClosed } from "@tendaui/icons";

const PasswordInput = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Input
      type={visible ? "text" : "password"}
      prefixIcon={<IconLock />}
      suffixIcon={
        <span onClick={() => setVisible(!visible)} style={{ cursor: "pointer" }}>
          {visible ? <IconEyeOpened /> : <IconEyeClosed />}
        </span>
      }
      placeholder="请输入密码"
    />
  );
};

export default PasswordInput;
