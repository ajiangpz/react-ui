import React, { useState } from "react";
import { Button, Dialog } from "@tendaui/react";

export default function Placement() {
  const [topVisible, setTopVisible] = useState(false);
  const [centerVisible, setCenterVisible] = useState(false);

  return (
    <>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button theme="primary" onClick={() => setTopVisible(true)}>
          顶部对话框
        </Button>
        <Button theme="primary" onClick={() => setCenterVisible(true)}>
          居中对话框
        </Button>
      </div>

      <Dialog
        header="顶部对话框"
        placement="top"
        visible={topVisible}
        onClose={() => setTopVisible(false)}
        onConfirm={() => setTopVisible(false)}
      >
        <p>这是一个显示在顶部的对话框。</p>
      </Dialog>

      <Dialog
        header="居中对话框"
        placement="center"
        visible={centerVisible}
        onClose={() => setCenterVisible(false)}
        onConfirm={() => setCenterVisible(false)}
      >
        <p>这是一个垂直居中的对话框。</p>
      </Dialog>
    </>
  );
}