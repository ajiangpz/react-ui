import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, type DialogProps } from "../../components";
import { Dialog } from "./index";
import { DialogPlugin } from "./plugin";
import { useState } from "react";
import React from "react";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "对话框组件用于在浮层中显示内容，可用于确认信息、提示信息、表单输入等场景。"
      }
    }
  },
  argTypes: {
    visible: {
      control: "boolean",
      description: "控制对话框是否显示"
    },
    header: {
      control: "text",
      description: "头部内容"
    },
    body: {
      control: "text",
      description: "对话框内容"
    },
    footer: {
      control: "boolean",
      description: "底部操作栏"
    },
    closeBtn: {
      control: "boolean",
      description: "关闭按钮"
    },
    closeOnEscKeydown: {
      control: "boolean",
      description: "按下 ESC 时是否触发对话框关闭事件"
    },
    closeOnOverlayClick: {
      control: "boolean",
      description: "点击蒙层时是否触发关闭事件"
    },
    confirmLoading: {
      control: "boolean",
      description: "确认按钮加载状态"
    },
    confirmOnEnter: {
      control: "boolean",
      description: "是否在按下回车键时，触发确认事件"
    },
    destroyOnClose: {
      control: "boolean",
      description: "是否在关闭弹框的时候销毁子元素"
    },
    draggable: {
      control: "boolean",
      description: "对话框是否可以拖拽（仅在非模态对话框时有效）"
    },
    mode: {
      control: "select",
      options: ["modal", "modeless", "full-screen"],
      description: "对话框类型"
    },
    placement: {
      control: "select",
      options: ["top", "center"],
      description: "对话框位置"
    },
    preventScrollThrough: {
      control: "boolean",
      description: "防止滚动穿透"
    },
    showOverlay: {
      control: "boolean",
      description: "是否显示遮罩层"
    },
    theme: {
      control: "select",
      options: ["default", "info", "warning", "danger", "success"],
      description: "对话框风格"
    },
    width: {
      control: "text",
      description: "对话框宽度"
    },
    zIndex: {
      control: "number",
      description: "对话框层级"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Dialog>;

/** 基础对话框 */
export const Default: Story = {
  name: "基础对话框",
  render: () => {
    const BaseExample = () => {
  const [visible, setVisible] = useState(false);

  const onConfirm: DialogProps["onConfirm"] = (context) => {
    console.log("点击了确认按钮", context);
    setVisible(false);
  };

      const onClose: DialogProps["onClose"] = (context) => {
        console.log("关闭弹窗", context);
        setVisible(false);
      };

      return (
        <>
          <Button theme="primary" onClick={() => setVisible(true)}>
            打开对话框
          </Button>
          <Dialog header="基础对话框" visible={visible} onClose={onClose} onConfirm={onConfirm}>
            <p>这是一个基础对话框示例。</p>
          </Dialog>
        </>
      );
    };
    return <BaseExample />;
  }
};

/** 不同主题风格 */
export const Themes: Story = {
  name: "不同主题风格",
  render: () => {
    const ThemeExample = () => {
      const [visible, setVisible] = useState(false);
      const [theme, setTheme] = useState<DialogProps["theme"]>("default");

      const openDialog = (t: DialogProps["theme"]) => {
        setTheme(t);
        setVisible(true);
  };

      return (
        <>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Button onClick={() => openDialog("default")}>默认</Button>
            <Button theme="primary" onClick={() => openDialog("info")}>
              信息
            </Button>
            <Button theme="success" onClick={() => openDialog("success")}>
              成功
            </Button>
            <Button theme="warning" onClick={() => openDialog("warning")}>
              警告
            </Button>
            <Button theme="danger" onClick={() => openDialog("danger")}>
              危险
            </Button>
          </div>
          <Dialog
            header={`${theme} 主题对话框`}
            theme={theme}
            visible={visible}
            onClose={() => setVisible(false)}
            onConfirm={() => setVisible(false)}
          >
            <p>这是 {theme} 主题的对话框。</p>
          </Dialog>
        </>
      );
    };
    return <ThemeExample />;
  }
};

/** 对话框位置 */
export const Placement: Story = {
  name: "对话框位置",
  render: () => {
    const PlacementExample = () => {
      const [topVisible, setTopVisible] = useState(false);
      const [centerVisible, setCenterVisible] = useState(false);

      return (
        <>
          <div style={{ display: "flex", gap: "12px" }}>
            <Button theme="primary" onClick={() => setTopVisible(true)}>
              顶部对话框
            </Button>
            <Button theme="primary" onClick={() => setCenterVisible(true)}>
              居中对话框
            </Button>
          </div>

          <Dialog
            header="顶部对话框"
            placement="top"
            visible={topVisible}
            onClose={() => setTopVisible(false)}
            onConfirm={() => setTopVisible(false)}
          >
            <p>这是一个显示在顶部的对话框。</p>
          </Dialog>

          <Dialog
            header="居中对话框"
            placement="center"
            visible={centerVisible}
            onClose={() => setCenterVisible(false)}
            onConfirm={() => setCenterVisible(false)}
          >
            <p>这是一个垂直居中的对话框。</p>
          </Dialog>
        </>
      );
    };
    return <PlacementExample />;
  }
};

/** 自定义按钮 */
export const CustomButtons: Story = {
  name: "自定义按钮",
  render: () => {
    const CustomButtonsExample = () => {
      const [visible, setVisible] = useState(false);

      return (
        <>
          <Button theme="primary" onClick={() => setVisible(true)}>
            自定义按钮
          </Button>
          <Dialog
            header="自定义按钮"
            visible={visible}
            confirmBtn={{ content: "我知道了", theme: "primary" }}
            cancelBtn={{ content: "稍后再说", variant: "outline" }}
            onClose={() => setVisible(false)}
            onConfirm={() => setVisible(false)}
          >
            <p>这是一个带自定义按钮文字的对话框。</p>
          </Dialog>
        </>
      );
    };
    return <CustomButtonsExample />;
  }
};

/** 隐藏按钮 */
export const HideButtons: Story = {
  name: "隐藏按钮",
  render: () => {
    const HideButtonsExample = () => {
      const [noCancelVisible, setNoCancelVisible] = useState(false);
      const [noFooterVisible, setNoFooterVisible] = useState(false);

      return (
        <>
          <div style={{ display: "flex", gap: "12px" }}>
            <Button theme="primary" onClick={() => setNoCancelVisible(true)}>
              无取消按钮
            </Button>
            <Button theme="primary" onClick={() => setNoFooterVisible(true)}>
              无底部操作栏
            </Button>
          </div>

          <Dialog
            header="无取消按钮"
            visible={noCancelVisible}
            cancelBtn={null}
            onClose={() => setNoCancelVisible(false)}
            onConfirm={() => setNoCancelVisible(false)}
          >
            <p>这是一个只有确认按钮的对话框。</p>
          </Dialog>

          <Dialog
            header="无底部操作栏"
            visible={noFooterVisible}
            footer={false}
            onClose={() => setNoFooterVisible(false)}
          >
            <p>这是一个没有底部操作栏的对话框，点击右上角关闭按钮关闭。</p>
          </Dialog>
        </>
      );
    };
    return <HideButtonsExample />;
  }
};

/** 确认按钮加载状态 */
export const ConfirmLoading: Story = {
  name: "确认按钮加载状态",
  render: () => {
    const LoadingExample = () => {
      const [visible, setVisible] = useState(false);
      const [loading, setLoading] = useState(false);

      const handleConfirm = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
    setVisible(false);
        }, 2000);
      };

      return (
        <>
          <Button theme="primary" onClick={() => setVisible(true)}>
            异步确认
          </Button>
          <Dialog
            header="异步确认"
            visible={visible}
            confirmLoading={loading}
            onClose={() => setVisible(false)}
            onConfirm={handleConfirm}
          >
            <p>点击确认按钮后会显示加载状态，2秒后自动关闭。</p>
          </Dialog>
        </>
      );
    };
    return <LoadingExample />;
  }
};

/** 全屏对话框 */
export const FullScreen: Story = {
  name: "全屏对话框",
  render: () => {
    const FullScreenExample = () => {
      const [visible, setVisible] = useState(false);

  return (
    <>
          <Button theme="primary" onClick={() => setVisible(true)}>
            全屏对话框
      </Button>
      <Dialog
            header="全屏对话框"
            mode="full-screen"
        visible={visible}
            onClose={() => setVisible(false)}
            onConfirm={() => setVisible(false)}
          >
            <div style={{ padding: "20px" }}>
              <p>这是一个全屏对话框，适合展示大量内容。</p>
              <p>可以在这里放置复杂的表单、数据展示等。</p>
            </div>
      </Dialog>
    </>
  );
};
    return <FullScreenExample />;
  }
};

/** 非模态对话框 */
export const Modeless: Story = {
  name: "非模态对话框",
  render: () => {
    const ModelessExample = () => {
      const [visible, setVisible] = useState(false);

      return (
        <>
          <Button theme="primary" onClick={() => setVisible(true)}>
            非模态对话框
          </Button>
          <Dialog
            header="非模态对话框"
            mode="modeless"
            draggable
            visible={visible}
            onClose={() => setVisible(false)}
            onConfirm={() => setVisible(false)}
          >
            <p>这是一个非模态对话框，可以拖拽移动。</p>
            <p>可以同时操作页面上的其他内容。</p>
          </Dialog>
        </>
      );
    };
    return <ModelessExample />;
  }
};

/** 命令式调用 - DialogPlugin */
export const PluginExample: Story = {
  name: "命令式调用 - DialogPlugin",
  render: () => {
    const buttonStyle: React.CSSProperties = { marginRight: 16 };

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
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => {
    const AllVariantsExample = () => {
      const [visibleDefault, setVisibleDefault] = useState(false);
      const [visibleInfo, setVisibleInfo] = useState(false);
      const [visibleSuccess, setVisibleSuccess] = useState(false);
      const [visibleWarning, setVisibleWarning] = useState(false);
      const [visibleDanger, setVisibleDanger] = useState(false);

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div>
            <h4 style={{ marginBottom: "12px", color: "#666" }}>对话框主题</h4>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button onClick={() => setVisibleDefault(true)}>默认</Button>
              <Button theme="primary" onClick={() => setVisibleInfo(true)}>
                信息
              </Button>
              <Button theme="success" onClick={() => setVisibleSuccess(true)}>
                成功
              </Button>
              <Button theme="warning" onClick={() => setVisibleWarning(true)}>
                警告
              </Button>
              <Button theme="danger" onClick={() => setVisibleDanger(true)}>
                危险
              </Button>
            </div>

            <Dialog
              header="默认主题"
              theme="default"
              visible={visibleDefault}
              onClose={() => setVisibleDefault(false)}
              onConfirm={() => setVisibleDefault(false)}
            >
              <p>默认主题对话框内容</p>
            </Dialog>

            <Dialog
              header="信息主题"
              theme="info"
              visible={visibleInfo}
              onClose={() => setVisibleInfo(false)}
              onConfirm={() => setVisibleInfo(false)}
            >
              <p>信息主题对话框内容</p>
            </Dialog>

            <Dialog
              header="成功主题"
              theme="success"
              visible={visibleSuccess}
              onClose={() => setVisibleSuccess(false)}
              onConfirm={() => setVisibleSuccess(false)}
            >
              <p>成功主题对话框内容</p>
            </Dialog>

            <Dialog
              header="警告主题"
              theme="warning"
              visible={visibleWarning}
              onClose={() => setVisibleWarning(false)}
              onConfirm={() => setVisibleWarning(false)}
            >
              <p>警告主题对话框内容</p>
            </Dialog>

            <Dialog
              header="危险主题"
              theme="danger"
              visible={visibleDanger}
              onClose={() => setVisibleDanger(false)}
              onConfirm={() => setVisibleDanger(false)}
            >
              <p>危险主题对话框内容</p>
            </Dialog>
      </div>
    </div>
  );
};
    return <AllVariantsExample />;
  }
};
