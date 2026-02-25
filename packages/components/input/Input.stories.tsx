import type { Meta, StoryObj } from "@storybook/react-vite";
import Input, { InputGroup } from "@tendaui/react/es/input";
import React, { useState } from "react";
import { IconSearch, IconUser, IconLock, IconEye, IconEyeOff } from "@tendaui/icons";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "输入框用于接收用户输入的文本信息，支持多种类型、状态和功能配置。"
      }
    }
  },
  argTypes: {
    align: {
      control: "select",
      options: ["left", "center", "right"],
      description: "文本内容位置"
    },
    autoWidth: {
      control: "boolean",
      description: "宽度随内容自适应"
    },
    autofocus: {
      control: "boolean",
      description: "自动聚焦"
    },
    borderless: {
      control: "boolean",
      description: "是否开启无边框模式"
    },
    clearable: {
      control: "boolean",
      description: "是否可清空"
    },
    disabled: {
      control: "boolean",
      description: "是否禁用输入框"
    },
    maxlength: {
      control: "number",
      description: "最大输入长度"
    },
    maxcharacter: {
      control: "number",
      description: "最大字符数（中文算2个字符）"
    },
    placeholder: {
      control: "text",
      description: "占位符"
    },
    readonly: {
      control: "boolean",
      description: "只读状态"
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "输入框尺寸"
    },
    status: {
      control: "select",
      options: ["default", "success", "warning", "error"],
      description: "输入框状态"
    },
    type: {
      control: "select",
      options: ["text", "password", "number", "tel", "url", "search", "hidden"],
      description: "输入框类型"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>;

/** 基础输入框 */
export const Default: Story = {
  name: "基础输入框",
  args: {
    placeholder: "请输入内容"
  }
};

/** 不同尺寸 */
export const Sizes: Story = {
  name: "不同尺寸",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input size="small" placeholder="小尺寸" />
      <Input size="medium" placeholder="中尺寸（默认）" />
      <Input size="large" placeholder="大尺寸" />
    </div>
  )
};

/** 不同状态 */
export const Status: Story = {
  name: "不同状态",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input status="default" placeholder="默认状态" tips="这是一条提示信息" />
      <Input status="success" placeholder="成功状态" tips="校验通过" />
      <Input status="warning" placeholder="警告状态" tips="请注意输入内容" />
      <Input status="error" placeholder="错误状态" tips="输入内容有误" />
    </div>
  )
};

/** 禁用和只读 */
export const DisabledReadonly: Story = {
  name: "禁用和只读",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input placeholder="正常状态" />
      <Input disabled placeholder="禁用状态" defaultValue="禁用内容" />
      <Input readonly placeholder="只读状态" defaultValue="只读内容" />
    </div>
  )
};

/** 可清空 */
export const Clearable: Story = {
  name: "可清空",
  render: () => {
    const ClearableExample = () => {
      const [value, setValue] = useState("可清空的内容");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Input clearable value={value} onChange={(val) => setValue(val)} placeholder="输入内容后显示清除按钮" />
          <div style={{ color: "#666", fontSize: "12px" }}>当前值：{value || "(空)"}</div>
        </div>
      );
    };
    return <ClearableExample />;
  }
};

/** 带图标 */
export const WithIcon: Story = {
  name: "带图标",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input prefixIcon={<IconSearch />} placeholder="前置图标" />
      <Input suffixIcon={<IconSearch />} placeholder="后置图标" />
      <Input prefixIcon={<IconUser />} suffixIcon={<IconSearch />} placeholder="前后图标" />
    </div>
  )
};

/** 前后置内容 */
export const LabelSuffix: Story = {
  name: "前后置内容",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input label="http://" placeholder="请输入网址" />
      <Input suffix=".com" placeholder="请输入域名" />
      <Input label="http://" suffix=".com" placeholder="请输入域名" />
    </div>
  )
};

/** 密码输入框 */
export const Password: Story = {
  name: "密码输入框",
  render: () => {
    const PasswordExample = () => {
      const [visible, setVisible] = useState(false);
      return (
        <Input
          type={visible ? "text" : "password"}
          prefixIcon={<IconLock />}
          suffixIcon={
            <span onClick={() => setVisible(!visible)} style={{ cursor: "pointer" }}>
              {visible ? <IconEye /> : <IconEyeOff />}
            </span>
          }
          placeholder="请输入密码"
        />
      );
    };
    return <PasswordExample />;
  }
};

/** 长度限制 */
export const MaxLength: Story = {
  name: "长度限制",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input maxlength={10} placeholder="最多输入10个字符" />
      <Input maxcharacter={20} placeholder="最多输入20个字符（中文算2个）" />
    </div>
  )
};

/** 文本对齐 */
export const TextAlign: Story = {
  name: "文本对齐",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Input align="left" placeholder="左对齐" defaultValue="左对齐内容" />
      <Input align="center" placeholder="居中对齐" defaultValue="居中对齐内容" />
      <Input align="right" placeholder="右对齐" defaultValue="右对齐内容" />
    </div>
  )
};

/** 自适应宽度 */
export const AutoWidth: Story = {
  name: "自适应宽度",
  render: () => {
    const AutoWidthExample = () => {
      const [value, setValue] = useState("自适应宽度");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Input autoWidth value={value} onChange={(val) => setValue(val)} placeholder="宽度随内容变化" />
          <div style={{ color: "#666", fontSize: "12px" }}>输入更多内容，输入框会自动变宽</div>
        </div>
      );
    };
    return <AutoWidthExample />;
  }
};

/** 无边框模式 */
export const Borderless: Story = {
  name: "无边框模式",
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>有边框</div>
        <Input placeholder="有边框" />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>无边框</div>
        <Input borderless placeholder="无边框" />
      </div>
    </div>
  )
};

/** 输入框组合 */
export const GroupExample: Story = {
  name: "输入框组合",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <InputGroup separate>
        <Input placeholder="用户名" prefixIcon={<IconUser />} />
        <Input type="password" placeholder="密码" prefixIcon={<IconLock />} />
    </InputGroup>
    </div>
  )
};

/** 事件回调 */
export const Events: Story = {
  name: "事件回调",
  render: () => {
    const EventsExample = () => {
      const [log, setLog] = useState<string[]>([]);

      const addLog = (msg: string) => {
        setLog((prev) => [...prev.slice(-4), msg]);
      };

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Input
            placeholder="触发各种事件（查看下方日志）"
            clearable
            onChange={(val) => addLog(`onChange: ${val}`)}
            onFocus={() => addLog("onFocus")}
            onBlur={() => addLog("onBlur")}
            onEnter={(val) => addLog(`onEnter: ${val}`)}
            onClear={() => addLog("onClear")}
          />
          <div
            style={{
              padding: "12px",
              background: "#f5f5f5",
              borderRadius: "4px",
              fontSize: "12px",
              fontFamily: "monospace"
            }}
          >
            <div style={{ marginBottom: "8px", fontWeight: "bold" }}>事件日志：</div>
            {log.length === 0 ? (
              <div style={{ color: "#999" }}>暂无事件触发</div>
            ) : (
              log.map((item, index) => <div key={index}>{item}</div>)
            )}
          </div>
        </div>
      );
    };
    return <EventsExample />;
  }
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>尺寸</h4>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Input size="small" placeholder="小" style={{ width: "150px" }} />
          <Input size="medium" placeholder="中" style={{ width: "150px" }} />
          <Input size="large" placeholder="大" style={{ width: "150px" }} />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>状态</h4>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Input status="default" placeholder="默认" style={{ width: "150px" }} />
          <Input status="success" placeholder="成功" style={{ width: "150px" }} />
          <Input status="warning" placeholder="警告" style={{ width: "150px" }} />
          <Input status="error" placeholder="错误" style={{ width: "150px" }} />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>禁用/只读</h4>
        <div style={{ display: "flex", gap: "16px" }}>
          <Input placeholder="正常" style={{ width: "150px" }} />
          <Input disabled placeholder="禁用" style={{ width: "150px" }} />
          <Input readonly placeholder="只读" defaultValue="只读" style={{ width: "150px" }} />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>图标</h4>
        <div style={{ display: "flex", gap: "16px" }}>
          <Input prefixIcon={<IconSearch />} placeholder="前置图标" style={{ width: "180px" }} />
          <Input suffixIcon={<IconSearch />} placeholder="后置图标" style={{ width: "180px" }} />
        </div>
      </div>
    </div>
  )
};
