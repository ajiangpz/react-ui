import React, { useState } from "react";
import Drawer from "../index";
import { Button } from "../../button";

const NoFooterDrawer = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button theme="primary" onClick={() => setVisible(true)}>
        无底部操作栏
      </Button>
      <Drawer header="无底部操作栏" footer={false} visible={visible} onClose={() => setVisible(false)}>
        <p>这是一个没有底部操作栏的抽屉。</p>
        <p>适合只展示内容的场景。</p>
      </Drawer>
    </>
  );
};

export default NoFooterDrawer;
