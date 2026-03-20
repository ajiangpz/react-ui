import React from "react";
import { Button, DialogPlugin } from "@tendaui/react";

export default function PluginExample() {
  const buttonStyle = { marginRight: 16 };

  const showDialog = () => {
    const myDialog = DialogPlugin({
      header: "DialogPlugin 调用",
      body: "这是通过 DialogPlugin 函数调用的对话框",
      onConfirm: ({ e }) => {
        console.log("confirm clicked", e);
        myDialog.hide();
      },
      onClose: ({ trigger }) => {
        console.log("trigger:", trigger);
        myDialog.hide();
      }
    });
  };

  const showConfirm = () => {
    const confirmDialog = DialogPlugin.confirm({
      header: "确认操作",
      body: "确定要执行此操作吗？",
      confirmBtn: "确定",
      cancelBtn: "取消",
      onConfirm: () => {
        confirmDialog.hide();
      },
      onClose: () => {
        confirmDialog.hide();
      }
    });
  };

  const showAlert = () => {
    const alertDialog = DialogPlugin.alert({
      header: "提示",
      body: "这是一条重要提示信息。",
      confirmBtn: { content: "我知道了", theme: "primary" },
      onConfirm: () => {
        alertDialog.hide();
      },
      onClose: () => {
        alertDialog.hide();
      }
    });
  };

  return (
    <div>
      <p style={{ marginBottom: "16px", color: "#666" }}>
        函数调用方式：DialogPlugin(options) / DialogPlugin.confirm(options) / DialogPlugin.alert(options)
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
        <Button theme="primary" onClick={showDialog} style={buttonStyle}>
          DialogPlugin
        </Button>
        <Button theme="primary" onClick={showConfirm} style={buttonStyle}>
          DialogPlugin.confirm
        </Button>
        <Button theme="primary" onClick={showAlert} style={buttonStyle}>
          DialogPlugin.alert
        </Button>
      </div>
    </div>
  );
}