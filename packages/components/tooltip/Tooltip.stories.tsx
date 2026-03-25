import React from "react";
import { Tooltip } from "./index";
import { PopupPlacement } from "../popup";

const placement: PopupPlacement[] = [
  "top",
  "left",
  "right",
  "bottom",
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "left-top",
  "left-bottom",
  "right-top",
  "right-bottom"
];
export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    content: {
      control: "text",
      description: "提示内容"
    },
    placement: {
      control: {
        type: "select",
        options: [
          "top",
          "left",
          "right",
          "bottom",
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
          "left-top",
          "left-bottom",
          "right-top",
          "right-bottom"
        ]
      },
      description: "提示位置"
    },
    theme: {
      control: {
        type: "select",
        options: ["dark", "light"]
      },
      description: "主题"
    },
    trigger: {
      control: {
        type: "select",
        options: ["hover", "click", "focus", "context-menu"]
      },
      description: "触发方式"
    },
    duration: {
      control: "number",
      description: "自动隐藏延时（毫秒）"
    },
    showArrow: {
      control: "boolean",
      description: "是否显示箭头"
    }
  }
};

const Template = (args) => (
  <Tooltip {...args}>
    <button style={{ padding: "8px 16px" }}>Hover me</button>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  content: "这是一个提示信息",
  placement: "top",
  theme: "dark",
  trigger: "hover",
  duration: 0,
  showArrow: true
};

export const LightTheme = Template.bind({});
LightTheme.args = {
  ...Default.args,
  theme: "light",
  content: "这是一个浅色主题提示"
};

export const ClickTrigger = Template.bind({});
ClickTrigger.args = {
  ...Default.args,
  trigger: "click",
  content: "点击触发的提示"
};

export const AutoHide = Template.bind({});
AutoHide.args = {
  ...Default.args,
  duration: 3000,
  content: "3秒后自动消失"
};

export const DifferentPlacements = () => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", padding: "24px" }}>
    {placement.map((placement) => (
      <Tooltip key={placement} content={`位置: ${placement}`} placement={placement}>
        <button style={{ padding: "8px 16px" }}>{placement}</button>
      </Tooltip>
    ))}
  </div>
);

export const WithCustomContent = () => (
  <Tooltip
    content={
      <div style={{ padding: "4px" }}>
        <div>自定义提示内容</div>
        <div style={{ fontSize: "12px", color: "#999", marginTop: "4px" }}>这是详细信息</div>
      </div>
    }
  >
    <button style={{ padding: "8px 16px" }}>自定义内容</button>
  </Tooltip>
);
