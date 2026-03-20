import React, { useState } from "react";
import { Button, Dialog } from "@tendaui/react";

export default function ConfirmLoading() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 2000);
  };

  return (
    <>
      <Button theme="primary" onClick={() => setVisible(true)}>
        异步确认
      </Button>
      <Dialog
        header="异步确认"
        visible={visible}
        confirmLoading={loading}
        onClose={() => setVisible(false)}
        onConfirm={handleConfirm}
      >
        <p>点击确认按钮后会显示加载状态，2秒后自动关闭。</p>
      </Dialog>
    </>
  );
}