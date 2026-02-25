import { Meta, StoryObj } from "@storybook/react-vite";
import { Popup, Button } from "@tendaui/react/es";
import React, { useState } from "react";

const meta: Meta<typeof Popup> = {
  title: "Components/Popup",
  component: Popup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "弹出层组件用于在指定位置弹出浮层内容，支持多种触发方式和弹出位置。"
      }
    }
  },
  argTypes: {
    trigger: {
      control: "select",
      options: ["click", "hover", "focus", "mousedown", "context-menu"],
      description: "触发浮层出现的方式"
    },
    placement: {
      control: "select",
      options: [
        "top",
        "top-left",
        "top-right",
        "left",
        "left-top",
        "left-bottom",
        "right",
        "right-top",
        "right-bottom",
        "bottom",
        "bottom-left",
        "bottom-right"
      ],
      description: "浮层出现位置"
    },
    visible: {
      control: "boolean",
      description: "是否显示浮层"
    },
    showArrow: {
      control: "boolean",
      description: "是否显示浮层箭头"
    },
    destroyOnClose: {
      control: "boolean",
      description: "是否在关闭浮层时销毁浮层"
    },
    disabled: {
      control: "boolean",
      description: "是否禁用组件"
    },
    hideEmptyPopup: {
      control: "boolean",
      description: "浮层是否隐藏空内容"
    },
    zIndex: {
      control: "number",
      description: "组件层级"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Popup>;

/** 基础用法 */
export const Default: Story = {
  name: "基础用法",
  args: {
    trigger: "click",
    placement: "top",
    content: <div style={{ padding: "12px" }}>这是弹出层内容</div>,
    showArrow: true
  },
  render: (args) => (
    <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
      <Popup {...args}>
        <Button>点击显示 Popup</Button>
      </Popup>
    </div>
  )
};

/** 不同触发方式 */
export const Triggers: Story = {
  name: "不同触发方式",
  render: () => (
    <div style={{ padding: "40px", display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
      <Popup trigger="click" content={<div style={{ padding: "12px" }}>点击触发</div>} showArrow>
        <Button>Click 触发</Button>
      </Popup>

      <Popup trigger="hover" content={<div style={{ padding: "12px" }}>悬停触发</div>} showArrow>
        <Button>Hover 触发</Button>
      </Popup>

      <Popup trigger="focus" content={<div style={{ padding: "12px" }}>聚焦触发</div>} showArrow>
        <Button>Focus 触发</Button>
      </Popup>

      <Popup trigger="context-menu" content={<div style={{ padding: "12px" }}>右键触发</div>} showArrow>
        <Button>右键触发</Button>
      </Popup>
    </div>
  )
};

/** 不同弹出位置 */
export const Placements: Story = {
  name: "不同弹出位置",
  render: () => {
    const popupContent = (text: string) => (
      <div style={{ padding: "8px 12px", fontSize: "12px" }}>{text}</div>
    );

    return (
      <div style={{ padding: "80px 120px" }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginBottom: "8px" }}>
          <Popup placement="top-left" content={popupContent("top-left")} showArrow trigger="hover">
            <Button size="small">TL</Button>
          </Popup>
          <Popup placement="top" content={popupContent("top")} showArrow trigger="hover">
            <Button size="small">Top</Button>
          </Popup>
          <Popup placement="top-right" content={popupContent("top-right")} showArrow trigger="hover">
            <Button size="small">TR</Button>
          </Popup>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", width: "280px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Popup placement="left-top" content={popupContent("left-top")} showArrow trigger="hover">
              <Button size="small">LT</Button>
            </Popup>
            <Popup placement="left" content={popupContent("left")} showArrow trigger="hover">
              <Button size="small">Left</Button>
            </Popup>
            <Popup placement="left-bottom" content={popupContent("left-bottom")} showArrow trigger="hover">
              <Button size="small">LB</Button>
            </Popup>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Popup placement="right-top" content={popupContent("right-top")} showArrow trigger="hover">
              <Button size="small">RT</Button>
            </Popup>
            <Popup placement="right" content={popupContent("right")} showArrow trigger="hover">
              <Button size="small">Right</Button>
            </Popup>
            <Popup placement="right-bottom" content={popupContent("right-bottom")} showArrow trigger="hover">
              <Button size="small">RB</Button>
            </Popup>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "8px" }}>
          <Popup placement="bottom-left" content={popupContent("bottom-left")} showArrow trigger="hover">
            <Button size="small">BL</Button>
          </Popup>
          <Popup placement="bottom" content={popupContent("bottom")} showArrow trigger="hover">
            <Button size="small">Bottom</Button>
          </Popup>
          <Popup placement="bottom-right" content={popupContent("bottom-right")} showArrow trigger="hover">
            <Button size="small">BR</Button>
          </Popup>
        </div>
      </div>
    );
  }
};

/** 受控模式 */
export const Controlled: Story = {
  name: "受控模式",
  render: () => {
    const ControlledExample = () => {
      const [visible, setVisible] = useState(false);
      return (
        <div style={{ padding: "40px", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button onClick={() => setVisible(true)}>打开</Button>
            <Button onClick={() => setVisible(false)}>关闭</Button>
            <Button onClick={() => setVisible(!visible)}>切换</Button>
          </div>
          <Popup
            visible={visible}
            onVisibleChange={(v) => setVisible(v)}
            content={
              <div style={{ padding: "12px" }}>
                <p>这是受控的弹出层</p>
                <Button size="small" onClick={() => setVisible(false)}>
                  关闭
                </Button>
              </div>
            }
            showArrow
          >
            <Button>触发元素</Button>
          </Popup>
        </div>
      );
    };
    return <ControlledExample />;
  }
};

/** 无箭头 */
export const NoArrow: Story = {
  name: "无箭头",
  render: () => (
    <div style={{ padding: "40px", display: "flex", gap: "16px", justifyContent: "center" }}>
      <Popup trigger="hover" content={<div style={{ padding: "12px" }}>有箭头</div>} showArrow>
        <Button>有箭头</Button>
      </Popup>
      <Popup trigger="hover" content={<div style={{ padding: "12px" }}>无箭头</div>} showArrow={false}>
        <Button>无箭头</Button>
      </Popup>
    </div>
  )
};

/** 延迟显示/隐藏 */
export const Delay: Story = {
  name: "延迟显示/隐藏",
  render: () => (
    <div style={{ padding: "40px", display: "flex", gap: "16px", justifyContent: "center" }}>
      <Popup
        trigger="hover"
        content={<div style={{ padding: "12px" }}>延迟 500ms 显示</div>}
        delay={[500, 0]}
        showArrow
      >
        <Button>延迟显示</Button>
      </Popup>
      <Popup
        trigger="hover"
        content={<div style={{ padding: "12px" }}>延迟 500ms 隐藏</div>}
        delay={[0, 500]}
        showArrow
      >
        <Button>延迟隐藏</Button>
      </Popup>
      <Popup
        trigger="hover"
        content={<div style={{ padding: "12px" }}>延迟 300ms 显示和隐藏</div>}
        delay={300}
        showArrow
      >
        <Button>统一延迟</Button>
      </Popup>
    </div>
  )
};

/** 禁用状态 */
export const Disabled: Story = {
  name: "禁用状态",
  render: () => (
    <div style={{ padding: "40px", display: "flex", gap: "16px", justifyContent: "center" }}>
      <Popup trigger="click" content={<div style={{ padding: "12px" }}>正常状态</div>} showArrow>
        <Button>正常</Button>
      </Popup>
      <Popup trigger="click" content={<div style={{ padding: "12px" }}>禁用状态</div>} showArrow disabled>
        <Button disabled>禁用</Button>
      </Popup>
    </div>
  )
};

/** 自定义内容 */
export const CustomContent: Story = {
  name: "自定义内容",
  render: () => (
    <div style={{ padding: "40px", display: "flex", gap: "16px", justifyContent: "center" }}>
      <Popup
        trigger="click"
        content={
          <div style={{ padding: "16px", width: "200px" }}>
            <h4 style={{ margin: "0 0 8px 0" }}>标题</h4>
            <p style={{ margin: "0 0 12px 0", color: "#666", fontSize: "12px" }}>
              这是一段描述文字，可以放置更多内容。
            </p>
            <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
              <Button size="small" variant="outline">
                取消
              </Button>
              <Button size="small" theme="primary">
                确定
              </Button>
            </div>
          </div>
        }
        showArrow
      >
        <Button>自定义内容</Button>
      </Popup>

      <Popup
        trigger="hover"
        content={
          <div style={{ padding: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "var(--td-brand-color)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff"
                }}
              >
                A
              </div>
              <div>
                <div style={{ fontWeight: "bold" }}>用户名</div>
                <div style={{ fontSize: "12px", color: "#999" }}>user@example.com</div>
              </div>
            </div>
          </div>
        }
        showArrow
      >
        <Button>用户卡片</Button>
      </Popup>
    </div>
  )
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px", padding: "40px" }}>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>触发方式</h4>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Popup trigger="click" content={<div style={{ padding: "8px" }}>Click</div>} showArrow>
            <Button>Click</Button>
          </Popup>
          <Popup trigger="hover" content={<div style={{ padding: "8px" }}>Hover</div>} showArrow>
            <Button>Hover</Button>
          </Popup>
          <Popup trigger="focus" content={<div style={{ padding: "8px" }}>Focus</div>} showArrow>
            <Button>Focus</Button>
          </Popup>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>弹出位置</h4>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Popup trigger="hover" placement="top" content={<div style={{ padding: "8px" }}>Top</div>} showArrow>
            <Button>Top</Button>
          </Popup>
          <Popup trigger="hover" placement="bottom" content={<div style={{ padding: "8px" }}>Bottom</div>} showArrow>
            <Button>Bottom</Button>
          </Popup>
          <Popup trigger="hover" placement="left" content={<div style={{ padding: "8px" }}>Left</div>} showArrow>
            <Button>Left</Button>
          </Popup>
          <Popup trigger="hover" placement="right" content={<div style={{ padding: "8px" }}>Right</div>} showArrow>
            <Button>Right</Button>
          </Popup>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>箭头显示</h4>
        <div style={{ display: "flex", gap: "12px" }}>
          <Popup trigger="hover" content={<div style={{ padding: "8px" }}>有箭头</div>} showArrow>
            <Button>有箭头</Button>
          </Popup>
          <Popup trigger="hover" content={<div style={{ padding: "8px" }}>无箭头</div>} showArrow={false}>
            <Button>无箭头</Button>
          </Popup>
        </div>
      </div>
    </div>
  )
};
