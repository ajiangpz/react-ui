import { Meta, StoryObj } from "@storybook/react-vite";
import Drawer from "./index";
import React, { useState } from "react";
import { Button } from "../button";
import type { TdDrawerProps } from "./type";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "抽屉组件用于在屏幕边缘显示一个面板，可从上、下、左、右四个方向滑出，常用于展示详情、表单等内容。"
      }
    }
  },
  argTypes: {
    visible: {
      control: "boolean",
      description: "组件是否可见"
    },
    header: {
      control: "text",
      description: "头部内容"
    },
    body: {
      control: "text",
      description: "抽屉内容"
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
      description: "按下 ESC 时是否触发抽屉关闭事件"
    },
    closeOnOverlayClick: {
      control: "boolean",
      description: "点击蒙层时是否触发关闭事件"
    },
    destroyOnClose: {
      control: "boolean",
      description: "抽屉关闭时是否销毁节点"
    },
    mode: {
      control: "select",
      options: ["overlay", "push"],
      description: "展开方式"
    },
    placement: {
      control: "select",
      options: ["left", "right", "top", "bottom"],
      description: "抽屉方向"
    },
    preventScrollThrough: {
      control: "boolean",
      description: "防止滚动穿透"
    },
    showOverlay: {
      control: "boolean",
      description: "是否显示遮罩层"
    },
    size: {
      control: "text",
      description: "尺寸"
    },
    sizeDraggable: {
      control: "boolean",
      description: "抽屉大小可拖拽调整"
    },
    zIndex: {
      control: "number",
      description: "抽屉层级"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Drawer>;

/** 基础抽屉 */
export const Default: Story = {
  name: "基础抽屉",
  render: () => {
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
    return <BaseDrawer />;
  }
};

/** 不同方向 */
export const Placements: Story = {
  name: "不同方向",
  render: () => {
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
    return <PlacementDrawer />;
  }
};

/** 不同尺寸 */
export const Sizes: Story = {
  name: "不同尺寸",
  render: () => {
    const SizeDrawer = () => {
      const [visible, setVisible] = useState(false);
      const [size, setSize] = useState("small");

      const openDrawer = (s: string) => {
        setSize(s);
        setVisible(true);
      };

      return (
        <>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Button theme="primary" onClick={() => openDrawer("small")}>
              小尺寸
            </Button>
            <Button theme="primary" onClick={() => openDrawer("medium")}>
              中尺寸
            </Button>
            <Button theme="primary" onClick={() => openDrawer("large")}>
              大尺寸
            </Button>
            <Button theme="primary" onClick={() => openDrawer("60%")}>
              60% 宽度
            </Button>
            <Button theme="primary" onClick={() => openDrawer("500px")}>
              500px 宽度
            </Button>
          </div>
          <Drawer header={`尺寸: ${size}`} size={size} visible={visible} onClose={() => setVisible(false)}>
            <p>当前抽屉尺寸: {size}</p>
          </Drawer>
        </>
      );
};
    return <SizeDrawer />;
  }
};

/** 可拖拽调整大小 */
export const SizeDraggable: Story = {
  name: "可拖拽调整大小",
  render: () => {
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
    return <DraggableDrawer />;
  }
};

/** 无遮罩层 */
export const NoOverlay: Story = {
  name: "无遮罩层",
  render: () => {
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
    return <NoOverlayDrawer />;
  }
};

/** 自定义头部和底部 */
export const CustomHeaderFooter: Story = {
  name: "自定义头部和底部",
  render: () => {
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
    return <CustomDrawer />;
  }
};

/** 无底部操作栏 */
export const NoFooter: Story = {
  name: "无底部操作栏",
  render: () => {
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
    return <NoFooterDrawer />;
  }
};

/** 事件回调 */
export const Events: Story = {
  name: "事件回调",
  render: () => {
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
    return <EventsDrawer />;
  }
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => {
    const AllVariantsDrawer = () => {
      const [leftVisible, setLeftVisible] = useState(false);
      const [rightVisible, setRightVisible] = useState(false);
      const [topVisible, setTopVisible] = useState(false);
      const [bottomVisible, setBottomVisible] = useState(false);

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div>
            <h4 style={{ marginBottom: "12px", color: "#666" }}>不同方向</h4>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button theme="primary" onClick={() => setLeftVisible(true)}>
                左侧
              </Button>
              <Button theme="primary" onClick={() => setRightVisible(true)}>
                右侧
              </Button>
              <Button theme="primary" onClick={() => setTopVisible(true)}>
                顶部
              </Button>
              <Button theme="primary" onClick={() => setBottomVisible(true)}>
                底部
              </Button>
        </div>
          </div>

          <Drawer header="左侧抽屉" placement="left" visible={leftVisible} onClose={() => setLeftVisible(false)}>
            <p>从左侧滑出的抽屉</p>
          </Drawer>

          <Drawer header="右侧抽屉" placement="right" visible={rightVisible} onClose={() => setRightVisible(false)}>
            <p>从右侧滑出的抽屉</p>
          </Drawer>

          <Drawer header="顶部抽屉" placement="top" visible={topVisible} onClose={() => setTopVisible(false)}>
            <p>从顶部滑出的抽屉</p>
          </Drawer>

          <Drawer header="底部抽屉" placement="bottom" visible={bottomVisible} onClose={() => setBottomVisible(false)}>
            <p>从底部滑出的抽屉</p>
          </Drawer>
    </div>
  );
};
    return <AllVariantsDrawer />;
  }
};
