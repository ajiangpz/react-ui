import React, { useState } from "react";
import { Button, Dialog } from "@tendaui/react";

export default function Base() {
  const [visible, setVisible] = useState(false);

  const onConfirm = (context) => {
    console.log("点击了确认按钮", context);
    setVisible(false);
  };

  const onClose = (context) => {
    console.log("关闭弹窗", context);
    setVisible(false);
  };

  return (
    <>
      <Button theme="primary" onClick={() => setVisible(true)}>
        打开对话框
      </Button>
      <Dialog header="基础对话框" visible={visible} onClose={onClose} onConfirm={onConfirm}>
        <p>这是一个基础对话框示例。</p>
      </Dialog>
    </>
  );
}