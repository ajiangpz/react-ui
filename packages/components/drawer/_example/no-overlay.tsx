import React, { useState } from "react";
import Drawer from "../index";
import { Button } from "../../button";

const NoOverlayDrawer = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button theme="primary" onClick={() => setVisible(true)}>
        无遮罩层抽屉
      </Button>
      <Drawer header="无遮罩层" showOverlay={false} visible={visible} onClose={() => setVisible(false)}>
        <p>这是一个没有遮罩层的抽屉。</p>
        <p>可以与页面其他内容进行交互。</p>
      </Drawer>
    </>
  );
};

export default NoOverlayDrawer;
