import { Meta, StoryObj } from "@storybook/react-vite";
import ColorPicker from "./index";
import React, { useState } from "react";

const meta: Meta<typeof ColorPicker> = {
  title: "Components/ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "颜色选择器用于让用户选择颜色，支持多种颜色格式、透明度调节、预设色板等功能。"
      }
    }
  },
  argTypes: {
    borderless: {
      control: "boolean",
      description: "无边框模式"
    },
    clearable: {
      control: "boolean",
      description: "是否可清空"
    },
    disabled: {
      control: "boolean",
      description: "是否禁用组件"
    },
    enableAlpha: {
      control: "boolean",
      description: "是否开启透明通道"
    },
    format: {
      control: "select",
      options: ["HEX", "HEX8", "RGB", "RGBA", "HSL", "HSLA", "HSV", "HSVA", "CMYK", "CSS"],
      description: "格式化色值"
    },
    showPrimaryColorPreview: {
      control: "boolean",
      description: "是否展示颜色选择条右侧的颜色预览区域"
    },
    value: {
      control: "color",
      description: "色值"
    }
  }
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

/** 基础用法 */
export const Default: Story = {
  name: "基础用法",
  render: () => {
    const DefaultExample = () => {
      const [color, setColor] = useState("#0052d9");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <ColorPicker format="HEX" value={color} onChange={(v) => setColor(v)} />
          <div>当前颜色值：{color}</div>
        </div>
      );
    };
    return <DefaultExample />;
  }
};

/** 不同颜色格式 */
export const Formats: Story = {
  name: "不同颜色格式",
  render: () => {
    const FormatsExample = () => {
      const [hexColor, setHexColor] = useState("#0052d9");
      const [rgbColor, setRgbColor] = useState("rgb(0, 82, 217)");
      const [hslColor, setHslColor] = useState("hsl(217, 100%, 43%)");

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <div style={{ marginBottom: "8px", color: "#666" }}>HEX 格式</div>
            <ColorPicker format="HEX" value={hexColor} onChange={(v) => setHexColor(v)} />
            <div style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>值：{hexColor}</div>
          </div>

          <div>
            <div style={{ marginBottom: "8px", color: "#666" }}>RGB 格式</div>
            <ColorPicker format="RGB" value={rgbColor} onChange={(v) => setRgbColor(v)} />
            <div style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>值：{rgbColor}</div>
          </div>

          <div>
            <div style={{ marginBottom: "8px", color: "#666" }}>HSL 格式</div>
            <ColorPicker format="HSL" value={hslColor} onChange={(v) => setHslColor(v)} />
            <div style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>值：{hslColor}</div>
          </div>
        </div>
      );
    };
    return <FormatsExample />;
  }
};

/** 开启透明度通道 */
export const WithAlpha: Story = {
  name: "开启透明度通道",
  render: () => {
    const AlphaExample = () => {
      const [color, setColor] = useState("rgba(0, 82, 217, 0.8)");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <ColorPicker format="RGBA" enableAlpha value={color} onChange={(v) => setColor(v)} />
          <div>当前颜色值：{color}</div>
          <div
            style={{
              width: "100px",
              height: "40px",
              backgroundColor: color,
              borderRadius: "4px",
              border: "1px solid #ddd"
            }}
          />
        </div>
      );
    };
    return <AlphaExample />;
  }
};

/** 可清空 */
export const Clearable: Story = {
  name: "可清空",
  render: () => {
    const ClearableExample = () => {
      const [color, setColor] = useState("#0052d9");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <ColorPicker clearable value={color} onChange={(v) => setColor(v)} onClear={() => setColor("")} />
          <div>当前颜色值：{color || "(空)"}</div>
        </div>
      );
    };
    return <ClearableExample />;
  }
};

/** 禁用状态 */
export const Disabled: Story = {
  name: "禁用状态",
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>正常状态</div>
        <ColorPicker defaultValue="#0052d9" />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>禁用状态</div>
        <ColorPicker disabled defaultValue="#0052d9" />
      </div>
    </div>
  )
};

/** 预设颜色 */
export const SwatchColors: Story = {
  name: "预设颜色",
  render: () => {
    const SwatchExample = () => {
      const [color, setColor] = useState("#0052d9");
      const customSwatchColors = [
        "#ff0000",
        "#ff7800",
        "#ffff00",
        "#00ff00",
        "#00ffff",
        "#0000ff",
        "#8b00ff",
        "#ff00ff",
        "#000000",
        "#333333",
        "#666666",
        "#999999",
        "#cccccc",
        "#ffffff"
      ];
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <ColorPicker swatchColors={customSwatchColors} value={color} onChange={(v) => setColor(v)} />
          <div>当前颜色值：{color}</div>
        </div>
      );
    };
    return <SwatchExample />;
  }
};

/** 最近使用的颜色 */
export const RecentColors: Story = {
  name: "最近使用的颜色",
  render: () => {
    const RecentExample = () => {
      const [color, setColor] = useState("#0052d9");
      const [recentColors, setRecentColors] = useState<string[]>(["#ff0000", "#00ff00", "#0000ff"]);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <ColorPicker
            recentColors={recentColors}
            onRecentColorsChange={setRecentColors}
            value={color}
            onChange={(v) => setColor(v)}
          />
          <div>当前颜色值：{color}</div>
          <div>最近使用：{recentColors.join(", ")}</div>
        </div>
      );
    };
    return <RecentExample />;
  }
};

/** 手动输入颜色值 */
export const ManualInput: Story = {
  name: "手动输入颜色值",
  render: () => {
    const ManualInputExample = () => {
      const [color, setColor] = useState("#0052d9");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ color: "#666", fontSize: "14px" }}>
            <p style={{ margin: "0 0 8px 0" }}>
              <strong>触发器输入框：</strong>在触发器中直接输入任意格式的颜色值，按回车或失焦后会自动转换为指定格式。
            </p>
            <p style={{ margin: "0" }}>
              <strong>面板格式输入：</strong>
              打开颜色选择面板，可以通过格式选择器切换不同的输入格式（HEX/RGB/HSL/HSV/CMYK），并通过数值输入框精确调整颜色各分量的值。
            </p>
          </div>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <div>
              <div style={{ marginBottom: "8px", color: "#666" }}>HEX 格式</div>
              <ColorPicker format="HEX" value={color} onChange={(v) => setColor(v)} />
              <div style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>
                触发器支持输入: rgb(255, 0, 0) 或 red
              </div>
            </div>
            <div>
              <div style={{ marginBottom: "8px", color: "#666" }}>RGB 格式（面板内可切换格式）</div>
              <ColorPicker format="RGB" value={color} onChange={(v) => setColor(v)} />
              <div style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>面板内支持 R/G/B 分量精确输入</div>
            </div>
            <div>
              <div style={{ marginBottom: "8px", color: "#666" }}>带透明度（RGBA）</div>
              <ColorPicker format="RGBA" enableAlpha value={color} onChange={(v) => setColor(v)} />
              <div style={{ marginTop: "8px", fontSize: "12px", color: "#999" }}>面板内可调整透明度百分比</div>
            </div>
          </div>
          <div>当前颜色值：{color}</div>
        </div>
      );
    };
    return <ManualInputExample />;
  }
};

/** 无边框模式 */
export const Borderless: Story = {
  name: "无边框模式",
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>有边框</div>
        <ColorPicker defaultValue="#0052d9" />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>无边框</div>
        <ColorPicker borderless defaultValue="#0052d9" />
      </div>
    </div>
  )
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>基础用法</h4>
        <ColorPicker defaultValue="#0052d9" />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>不同格式</h4>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <div>
            <div style={{ marginBottom: "4px", fontSize: "12px", color: "#999" }}>HEX</div>
            <ColorPicker format="HEX" defaultValue="#0052d9" />
          </div>
          <div>
            <div style={{ marginBottom: "4px", fontSize: "12px", color: "#999" }}>RGB</div>
            <ColorPicker format="RGB" defaultValue="rgb(0, 82, 217)" />
          </div>
          <div>
            <div style={{ marginBottom: "4px", fontSize: "12px", color: "#999" }}>HSL</div>
            <ColorPicker format="HSL" defaultValue="hsl(217, 100%, 43%)" />
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>开启透明度</h4>
        <ColorPicker format="RGBA" enableAlpha defaultValue="rgba(0, 82, 217, 0.8)" />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>状态</h4>
        <div style={{ display: "flex", gap: "16px" }}>
          <div>
            <div style={{ marginBottom: "4px", fontSize: "12px", color: "#999" }}>正常</div>
            <ColorPicker defaultValue="#0052d9" />
          </div>
          <div>
            <div style={{ marginBottom: "4px", fontSize: "12px", color: "#999" }}>禁用</div>
            <ColorPicker disabled defaultValue="#0052d9" />
          </div>
          <div>
            <div style={{ marginBottom: "4px", fontSize: "12px", color: "#999" }}>可清空</div>
            <ColorPicker clearable defaultValue="#0052d9" />
          </div>
        </div>
      </div>
    </div>
  )
};
