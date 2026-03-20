import React, { useState } from "react";
import Drawer from "../index";
import { Button } from "../../button";

const BaseDrawer = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button theme="primary" onClick={() => setVisible(true)}>
        打开抽屉
      </Button>
      <Drawer header="基础抽屉" visible={visible} onClose={() => setVisible(false)}>
        <p>这是抽屉内容。</p>
        <p>点击遮罩层或右上角关闭按钮可关闭抽屉。</p>
      </Drawer>
    </>
  );
};

export default BaseDrawer;
