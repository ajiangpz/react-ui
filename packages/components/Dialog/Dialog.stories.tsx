import type { Meta, StoryObj } from "@storybook/react";
import {
  Dialog, type DialogProps
} from "./index";

import { DialogPlugin } from './plugin';
import { Button } from "../button";
import { useState } from "react";
import "@/style";


const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"]
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

const Base = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(true);
  };

  const onConfirm: DialogProps['onConfirm'] = (context) => {
    console.log('点击了确认按钮', context);
    setVisible(false);
  };

  const onCancel: DialogProps['onCancel'] = (context) => {
    console.log('点击了取消按钮', context);
  };
  const onClickCloseBtn: DialogProps['onCloseBtnClick'] = (context) => {
    console.log('点击了关闭按钮', context);
  };
  const onKeydownEsc: DialogProps['onEscKeydown'] = (context) => {
    console.log('按下了ESC', context);
  };
  const onClickOverlay: DialogProps['onOverlayClick'] = (context) => {
    console.log('点击了蒙层', context);
  };

  const handleClose: DialogProps['onClose'] = (context) => {
    console.log('关闭弹窗，点击关闭按钮、按下ESC、点击蒙层等触发', context);
    setVisible(false);
  };
  return (
    <>
      <Button theme="primary" onClick={handleClick}>
        Open Modal
      </Button>
      <Dialog
        header="Basic Modal"
        visible={visible}
        confirmOnEnter
        onClose={handleClose}
        onConfirm={onConfirm}
        onCancel={onCancel}
        onEscKeydown={onKeydownEsc}
        onCloseBtnClick={onClickCloseBtn}
        onOverlayClick={onClickOverlay}
      >
        <p>This is a dialog</p>
      </Dialog>
    </>
  );
}



export const Default: Story = {
  args: {},
  render: () => <Base></Base>
};


const Plugin = () => {
  const buttonStyle = { marginRight: 16 };
  const showDialog = () => {
    const myDialog = DialogPlugin({
      header: 'Dialog-Plugin',
      body: 'Hi, darling! Do you want to be my lover?',
      onConfirm: ({ e }) => {
        console.log('confirm clicked', e);
        myDialog.hide();
      },
      onClose: ({ e, trigger }) => {
        console.log('e: ', e);
        console.log('trigger: ', trigger);
        myDialog.hide();
      },
      onCloseBtnClick: ({ e }) => {
        console.log('close btn: ', e);
      },
    });
  };
  const handleDN = () => {
    const dialogNode = DialogPlugin({
      header: 'Dialog-Plugin',
      body: 'Hi, darling! Do you want to be my lover?',
    });
    dialogNode.update({
      header: 'Updated-Dialog-Plugin',
      cancelBtn: null,
      onConfirm: ({ e }) => {
        console.log('confirm button has been clicked!');
        console.log('e: ', e);
        dialogNode.hide();
        dialogNode.destroy();
      },
      onClose: ({ e, trigger }) => {
        console.log('e: ', e);
        console.log('trigger: ', trigger);
        dialogNode.hide();
      },
    });
  };
  const onConfirm = () => {
    const confirmDia = DialogPlugin.confirm({
      header: 'Dialog-Confirm-Plugin',
      body: 'Are you sure to delete it?',
      confirmBtn: 'ok',
      cancelBtn: 'cancel',
      onConfirm: ({ e }) => {
        console.log('confirm button has been clicked!');
        console.log('e: ', e);
        confirmDia.hide();
      },
      onClose: ({ e, trigger }) => {
        console.log('e: ', e);
        console.log('trigger: ', trigger);
        confirmDia.hide();
      },
    });
  };
  const onAlert = () => {
    const alertDia = DialogPlugin.alert({
      header: 'Dialog-Alert-Plugin',
      body: 'Notice: Your balance is going to be empty.',
      confirmBtn: {
        content: 'Got it!',
        variant: 'base',
        theme: 'danger',
      },
      onConfirm: ({ e }) => {
        console.log('confirm e: ', e);
        alertDia.hide();
      },
      onClose: ({ e, trigger }) => {
        console.log('close e: ', e);
        console.log('trigger: ', trigger);
        alertDia.hide();
      },
    });
  };
  const onDialogPluginConfirm = () => {
    const confirmDia = DialogPlugin.confirm({
      header: 'Dialog-Confirm-Plugin',
      body: 'Are you sure to delete it?',
      confirmBtn: 'ok',
      cancelBtn: 'cancel',
      onConfirm: ({ e }) => {
        console.log('confirm button has been clicked!');
        console.log('e: ', e);
        confirmDia.hide();
      },
      onClose: ({ e, trigger }) => {
        console.log('e: ', e);
        console.log('trigger: ', trigger);
        confirmDia.hide();
      },
    });
  };
  return (
    <div >
      <p>函数调用方式一：DialogPlugin(options)</p>
      <p>函数调用方式二：DialogPlugin.confirm(options)</p>
      <p>函数调用方式三：DialogPlugin.alert(options)</p>
      <div className="flex gap-2 mt-2">
        <Button theme="primary" onClick={showDialog} style={buttonStyle}>
          dialog
        </Button>
        <Button theme="primary" onClick={handleDN} style={buttonStyle}>
          handleDialogNode
        </Button>
        <Button theme="primary" onClick={onConfirm} style={buttonStyle}>
          confirm
        </Button>
        <Button theme="primary" onClick={onAlert} style={buttonStyle}>
          alert
        </Button>
        <Button theme="primary" onClick={onDialogPluginConfirm} style={buttonStyle}>
          DialogPlugin.confirm
        </Button>
      </div>
    </div>
  );
}

export const PluginExample: Story = {
  args: {},
  render: () => <Plugin></Plugin>
}