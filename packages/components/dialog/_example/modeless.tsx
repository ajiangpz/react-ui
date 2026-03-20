import React, { useState } from "react";
import { Button, Dialog } from "@tendaui/react";

export default function Modeless() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button theme="primary" onClick={() => setVisible(true)}>
        非模态对话框
      </Button>
      <Dialog
        header="非模态对话框"
        mode="modeless"
        draggable
        visible={visible}
        onClose={() => setVisible(false)}
        onConfirm={() => setVisible(false)}
      >
        <p>这是一个非模态对话框，可以拖拽移动。</p>
        <p>可以同时操作页面上的其他内容。</p>
      </Dialog>
    </>
  );
}