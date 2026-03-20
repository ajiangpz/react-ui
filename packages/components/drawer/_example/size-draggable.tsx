import React, { useState } from "react";
import Drawer from "../index";
import { Button } from "../../button";

const DraggableDrawer = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button theme="primary" onClick={() => setVisible(true)}>
        可拖拽大小的抽屉
      </Button>
      <Drawer
        header="可拖拽调整大小"
        visible={visible}
        sizeDraggable={{ min: 200, max: 800 }}
        onClose={() => setVisible(false)}
      >
        <p>拖动抽屉边缘可以调整宽度。</p>
        <p>最小宽度: 200px</p>
        <p>最大宽度: 800px</p>
      </Drawer>
    </>
  );
};

export default DraggableDrawer;
