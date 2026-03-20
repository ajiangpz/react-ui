import React, { useState } from "react";
import Drawer from "../index";
import { Button } from "../../button";

const CustomDrawer = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button theme="primary" onClick={() => setVisible(true)}>
        自定义头部和底部
      </Button>
      <Drawer
        header={<h3 style={{ color: "var(--td-brand-color)", margin: 0 }}>自定义标题</h3>}
        visible={visible}
        onClose={() => setVisible(false)}
        confirmBtn={{ content: "保存", theme: "primary" }}
        cancelBtn={{ content: "取消", variant: "outline" }}
        onConfirm={() => {
          console.log("保存");
          setVisible(false);
        }}
      >
        <p>抽屉内容区域</p>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
