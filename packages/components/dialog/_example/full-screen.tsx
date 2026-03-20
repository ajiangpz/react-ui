import React, { useState } from "react";
import { Button, Dialog } from "@tendaui/react";

export default function FullScreen() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button theme="primary" onClick={() => setVisible(true)}>
        全屏对话框
      </Button>
      <Dialog
        header="全屏对话框"
        mode="full-screen"
        visible={visible}
        onClose={() => setVisible(false)}
        onConfirm={() => setVisible(false)}
      >
        <div style={{ padding: "20px" }}>
          <p>这是一个全屏对话框，适合展示大量内容。</p>
          <p>可以在这里放置复杂的表单、数据展示等。</p>
        </div>
      </Dialog>
    </>
  );
}