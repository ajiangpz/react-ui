import React, { useState } from "react";
import Drawer from "../index";
import { Button } from "../../button";
import type { TdDrawerProps } from "../type";

const EventsDrawer = () => {
  const [visible, setVisible] = useState(false);

  const handleBeforeOpen = () => {
    console.log("抽屉打开前");
  };

  const handleBeforeClose = () => {
    console.log("抽屉关闭前");
  };

  const handleClose: TdDrawerProps["onClose"] = (context) => {
    console.log("抽屉关闭，触发来源:", context.trigger);
    setVisible(false);
  };

  const handleConfirm = () => {
    console.log("点击确认按钮");
    setVisible(false);
  };

  const handleCancel = () => {
    console.log("点击取消按钮");
    setVisible(false);
  };

  return (
    <>
      <Button theme="primary" onClick={() => setVisible(true)}>
        打开抽屉（查看控制台）
      </Button>
      <Drawer
        header="事件回调"
        visible={visible}
        onBeforeOpen={handleBeforeOpen}
        onBeforeClose={handleBeforeClose}
        onClose={handleClose}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      >
        <p>打开控制台查看各种事件的回调日志。</p>
        <p>支持的事件：onBeforeOpen、onBeforeClose、onClose、onConfirm、onCancel 等</p>
      </Drawer>
    </>
  );
};

export default EventsDrawer;
