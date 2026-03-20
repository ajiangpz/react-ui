import React, { useState } from "react";
import { Button, Dialog } from "@tendaui/react";

export default function CustomButtons() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button theme="primary" onClick={() => setVisible(true)}>
        自定义按钮
      </Button>
      <Dialog
        header="自定义按钮"
        visible={visible}
        confirmBtn={{ content: "我知道了", theme: "primary" }}
        cancelBtn={{ content: "稍后再说", variant: "outline" }}
        onClose={() => setVisible(false)}
        onConfirm={() => setVisible(false)}
      >
        <p>这是一个带自定义按钮文字的对话框。</p>
      </Dialog>
    </>
  );
}