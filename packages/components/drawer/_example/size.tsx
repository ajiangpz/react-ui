import React, { useState } from "react";
import Drawer from "../index";
import { Button } from "../../button";

const SizeDrawer = () => {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState("small");

  const openDrawer = (s: string) => {
    setSize(s);
    setVisible(true);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Button theme="primary" onClick={() => openDrawer("small")}>
          小尺寸
        </Button>
        <Button theme="primary" onClick={() => openDrawer("medium")}>
          中尺寸
        </Button>
        <Button theme="primary" onClick={() => openDrawer("large")}>
          大尺寸
        </Button>
        <Button theme="primary" onClick={() => openDrawer("60%")}>
          60% 宽度
        </Button>
        <Button theme="primary" onClick={() => openDrawer("500px")}>
          500px 宽度
        </Button>
      </div>
      <Drawer header={`尺寸: ${size}`} size={size} visible={visible} onClose={() => setVisible(false)}>
        <p>当前抽屉尺寸: {size}</p>
      </Drawer>
    </>
  );
};

export default SizeDrawer;
