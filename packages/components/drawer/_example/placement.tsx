import React, { useState } from "react";
import Drawer from "../index";
import { Button } from "../../button";
import type { TdDrawerProps } from "../type";

const PlacementDrawer = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState<TdDrawerProps["placement"]>("right");

  const openDrawer = (p: TdDrawerProps["placement"]) => {
    setPlacement(p);
    setVisible(true);
  };

  return (
    <>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <Button theme="primary" onClick={() => openDrawer("left")}>
          从左侧打开
        </Button>
        <Button theme="primary" onClick={() => openDrawer("right")}>
          从右侧打开
        </Button>
        <Button theme="primary" onClick={() => openDrawer("top")}>
          从顶部打开
        </Button>
        <Button theme="primary" onClick={() => openDrawer("bottom")}>
          从底部打开
        </Button>
      </div>
      <Drawer
        header={`${placement} 方向抽屉`}
        placement={placement}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <p>这是从 {placement} 方向滑出的抽屉。</p>
      </Drawer>
    </>
  );
};

export default PlacementDrawer;
