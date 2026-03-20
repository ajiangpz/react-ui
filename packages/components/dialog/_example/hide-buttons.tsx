import React, { useState } from "react";
import { Button, Dialog } from "@tendaui/react";

export default function HideButtons() {
  const [noCancelVisible, setNoCancelVisible] = useState(false);
  const [noFooterVisible, setNoFooterVisible] = useState(false);

  return (
    <>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button theme="primary" onClick={() => setNoCancelVisible(true)}>
          无取消按钮
        </Button>
        <Button theme="primary" onClick={() => setNoFooterVisible(true)}>
          无底部操作栏
        </Button>
      </div>

      <Dialog
        header="无取消按钮"
        visible={noCancelVisible}
        cancelBtn={null}
        onClose={() => setNoCancelVisible(false)}
        onConfirm={() => setNoCancelVisible(false)}
      >
        <p>这是一个只有确认按钮的对话框。</p>
      </Dialog>

      <Dialog
        header="无底部操作栏"
        visible={noFooterVisible}
        footer={false}
        onClose={() => setNoFooterVisible(false)}
      >
        <p>这是一个没有底部操作栏的对话框，点击右上角关闭按钮关闭。</p>
      </Dialog>
    </>
  );
}