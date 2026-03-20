import React, { useState } from "react";
import { Button, Dialog } from "@tendaui/react";

export default function Themes() {
  const [visible, setVisible] = useState(false);
  const [theme, setTheme] = useState("default");

  const openDialog = (t) => {
    setTheme(t);
    setVisible(true);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Button onClick={() => openDialog("default")}>默认</Button>
        <Button theme="primary" onClick={() => openDialog("info")}>
          信息
        </Button>
        <Button theme="success" onClick={() => openDialog("success")}>
          成功
        </Button>
        <Button theme="warning" onClick={() => openDialog("warning")}>
          警告
        </Button>
        <Button theme="danger" onClick={() => openDialog("danger")}>
          危险
        </Button>
      </div>
      <Dialog
        header={`${theme} 主题对话框`}
        theme={theme}
        visible={visible}
        onClose={() => setVisible(false)}
        onConfirm={() => setVisible(false)}
      >
        <p>这是 {theme} 主题的对话框。</p>
      </Dialog>
    </>
  );
}