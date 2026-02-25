import type { Meta, StoryObj } from "@storybook/react-vite";
import IPInput from "./IPInput";
import React from "react";
import { useState } from "react";
import Form from "../form";
import FormItem from "../form/FormItem";
import { Input } from "../input";
import { Button } from "../button";
import { NotificationProvider, useNotification } from "../notification";
import type { SubmitContext } from "../form/type";
import type { FormProps } from "../form/Form";
import { isValidIPv4, isValidIPv6, isValidCIDRMask } from "./utils";

const meta: Meta<typeof IPInput> = {
  title: "Components/IPInput",
  component: IPInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "IP 输入框用于输入 IPv4、IPv6 地址，支持 CIDR 格式、智能粘贴解析等功能。"
      }
    }
  },
  argTypes: {
    value: {
      control: "text",
      description: "受控值"
    },
    defaultValue: {
      control: "text",
      description: "非受控初始值"
    },
    allowIPv6: {
      control: "boolean",
      description: "是否允许 IPv6"
    },
    allowCIDR: {
      control: "boolean",
      description: "是否允许 CIDR 格式（带掩码）"
    },
    placeholder: {
      control: "text",
      description: "占位符"
    },
    disabled: {
      control: "boolean",
      description: "是否禁用"
    },
    readOnly: {
      control: "boolean",
      description: "是否只读"
    },
    showClear: {
      control: "boolean",
      description: "是否显示清空按钮"
    },
    autoFocus: {
      control: "boolean",
      description: "是否自动聚焦第一个输入框"
    },
    showSegmentSeparators: {
      control: "boolean",
      description: "是否显示分隔符"
    },
    tips: {
      control: "text",
      description: "提示文本"
    }
  }
};

export default meta;
type Story = StoryObj<typeof IPInput>;

/** 基础 IPv4 输入 */
export const Default: Story = {
  name: "基础 IPv4 输入",
  args: {
    placeholder: "192.168.0.1",
    allowIPv6: false,
    allowCIDR: false
  }
};

/** 支持 CIDR */
export const WithCIDR: Story = {
  name: "支持 CIDR",
  render: () => {
    const Component = () => {
      const [value, setValue] = useState("");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <IPInput
            value={value}
            onChange={(val) => {
              setValue(val);
              console.log("值:", val);
            }}
            allowCIDR={true}
            showClear={true}
            placeholder="192.168.0.1/24"
          />
          <div style={{ color: "#666", fontSize: "12px" }}>当前值: {value || "(空)"}</div>
        </div>
      );
    };
    return <Component />;
  }
};

/** 支持 IPv6 */
export const IPv6: Story = {
  name: "支持 IPv6",
  render: () => {
    const Component = () => {
      const [value, setValue] = useState("");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <IPInput
            value={value}
            onChange={(val) => {
              setValue(val);
              console.log("值:", val);
            }}
            allowIPv6={true}
            allowCIDR={true}
            placeholder="2001:db8::1"
          />
          <div style={{ color: "#666", fontSize: "12px" }}>当前值: {value || "(空)"}</div>
        </div>
      );
    };
    return <Component />;
  }
};

/** 受控组件 */
export const Controlled: Story = {
  name: "受控组件",
  render: () => {
    const Component = () => {
      const [value, setValue] = useState("192.168.1.1");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <IPInput value={value} onChange={setValue} allowCIDR={true} showClear={true} />
          <div style={{ color: "#666", fontSize: "12px" }}>当前值: {value || "(空)"}</div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Button size="small" onClick={() => setValue("10.0.0.1")}>
              设为 10.0.0.1
            </Button>
            <Button size="small" onClick={() => setValue("172.16.0.1/24")}>
              设为 172.16.0.1/24
            </Button>
            <Button size="small" onClick={() => setValue("")}>
              清空
            </Button>
          </div>
        </div>
      );
    };
    return <Component />;
  }
};

/** 禁用和只读状态 */
export const States: Story = {
  name: "禁用和只读状态",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>正常状态</div>
        <IPInput defaultValue="192.168.0.1" />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>禁用状态</div>
        <IPInput defaultValue="192.168.0.1" disabled />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>只读状态</div>
        <IPInput defaultValue="192.168.0.1" readOnly />
      </div>
    </div>
  )
};

/** 粘贴功能 */
export const PasteDemo: Story = {
  name: "粘贴功能",
  render: () => {
    const Component = () => {
      const [value, setValue] = useState("");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ color: "#666", fontSize: "12px" }}>
            尝试粘贴以下内容：
            <ul style={{ margin: "8px 0", paddingLeft: "20px" }}>
              <li>192.168.0.1</li>
              <li>192.168.0.1/24</li>
              <li>abc 10.0.0.1 xyz（会自动提取 IP）</li>
              <li>2001:db8::1（需要开启 IPv6）</li>
            </ul>
          </div>
          <IPInput value={value} onChange={setValue} allowCIDR={true} allowIPv6={true} showClear={true} />
          <div style={{ color: "#666", fontSize: "12px" }}>当前值: {value || "(空)"}</div>
        </div>
      );
    };
    return <Component />;
  }
};

/** 键盘导航 */
export const KeyboardNavigation: Story = {
  name: "键盘导航",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ color: "#666", fontSize: "12px" }}>
        <p style={{ fontWeight: "bold" }}>键盘操作说明：</p>
        <ul style={{ margin: "8px 0", paddingLeft: "20px" }}>
            <li>输入 3 位数字自动跳转到下一段</li>
            <li>输入 . 或空格跳转到下一段</li>
            <li>左/右箭头键在段之间移动</li>
            <li>在段开头按 Backspace 跳转到上一段</li>
          </ul>
        </div>
        <IPInput placeholder="192.168.0.1" autoFocus />
      </div>
  )
};

/** 完整功能示例 */
export const FullFeatured: Story = {
  name: "完整功能示例",
  render: () => {
    const Component = () => {
      const [value, setValue] = useState("");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <IPInput
            value={value}
            onChange={setValue}
            allowIPv6={true}
            allowCIDR={true}
            showClear={true}
            placeholder="输入 IPv4 或 IPv6 地址"
            tips="支持 IPv4、IPv6 和 CIDR 格式"
          />
          <div
            style={{
              padding: "12px",
              background: "#f5f5f5",
              borderRadius: "4px",
              fontSize: "12px"
            }}
          >
              <strong>当前值：</strong>
              {value || "(空)"}
          </div>
        </div>
      );
    };
    return <Component />;
  }
};

/** 表单使用示例 */
export const InForm: Story = {
  name: "表单使用示例",
  render: () => {
    const Component = () => {
      const [form] = (Form as any).useForm();
      const { success, error: showError } = useNotification();

      const handleSubmit = (e: SubmitContext) => {
        if (e.validateResult === true) {
          success({ title: "提交成功", message: `表单数据: ${JSON.stringify(e.fields, null, 2)}` });
          console.log("表单数据:", e.fields);
        } else {
          showError({ title: "校验失败", message: "请检查表单输入" });
        }
      };

      const onReset: FormProps["onReset"] = () => {
        success({ title: "成功提示", message: "重置成功" });
      };

      return (
        <Form form={form} onSubmit={handleSubmit} onReset={onReset} colon labelWidth={120}>
          <FormItem
            label="服务器 IP"
            name="serverIp"
            requiredMark
            rules={[
              { required: true, message: "请输入服务器 IP 地址" },
              {
                validator: (val: string) => {
                  if (!val) return true;
                  if (val.includes("/")) {
                    const [ip, mask] = val.split("/");
                    if (!isValidIPv4(ip)) {
                      return { result: false, message: "IP 地址格式不正确" };
                    }
                    if (!isValidCIDRMask(mask, false)) {
                      return { result: false, message: "掩码必须是 0-32 之间的整数" };
                    }
                    return true;
                  }
                  if (!isValidIPv4(val)) {
                    return { result: false, message: "请输入有效的 IP 地址" };
                  }
                  return true;
                }
              }
            ]}
          >
            <IPInput placeholder="192.168.0.1" allowCIDR={true} />
          </FormItem>

          <FormItem
            label="网关地址"
            name="gateway"
            rules={[
              {
                validator: (val: string) => {
                  if (!val) return true;
                  if (!isValidIPv4(val)) {
                    return { result: false, message: "请输入有效的 IP 地址" };
                  }
                  return true;
                }
              }
            ]}
          >
            <IPInput placeholder="192.168.0.1" />
          </FormItem>

          <FormItem
            label="DNS 服务器"
            name="dns"
            rules={[
              {
                validator: (val: string) => {
                  if (!val) return true;
                  if (!isValidIPv4(val)) {
                    return { result: false, message: "请输入有效的 IP 地址" };
                  }
                  return true;
                }
              }
            ]}
          >
            <IPInput placeholder="8.8.8.8" />
          </FormItem>

          <FormItem label="服务器名称" name="serverName">
            <Input placeholder="请输入服务器名称" />
          </FormItem>

          <FormItem>
            <div style={{ display: "flex", gap: "8px" }}>
              <Button type="submit" theme="primary">
                提交
              </Button>
              <Button type="reset">重置</Button>
              <Button
                onClick={() => {
                  form.setFieldsValue({
                    serverIp: "192.168.1.100/24",
                    gateway: "192.168.1.1",
                    dns: "8.8.8.8",
                    serverName: "主服务器"
                  });
                }}
              >
                填充示例数据
              </Button>
            </div>
          </FormItem>
        </Form>
      );
    };
    return (
      <NotificationProvider>
        <Component />
      </NotificationProvider>
    );
  }
};

/** 表单验证示例 */
export const FormValidation: Story = {
  name: "表单验证示例",
  render: () => {
    const Component = () => {
      const [form] = (Form as any).useForm();
      const { success, error: showError } = useNotification();

      const handleSubmit = (e: SubmitContext) => {
        if (e.validateResult === true) {
          success({ title: "验证通过", message: "所有 IP 地址格式正确" });
        } else {
          showError({ title: "验证失败", message: "请检查 IP 地址格式" });
        }
      };

      return (
        <Form form={form} onSubmit={handleSubmit} colon labelWidth={140}>
          <FormItem
            label="IPv4 地址（必填）"
            name="ipv4"
            requiredMark
            rules={[
              { required: true, message: "请输入 IPv4 地址" },
              {
                validator: (val: string) => {
                  if (!val) return true;
                  if (!isValidIPv4(val)) {
                    return { result: false, message: "请输入有效的 IPv4 地址" };
                  }
                  return true;
                }
              }
            ]}
          >
            <IPInput placeholder="192.168.0.1" />
          </FormItem>

          <FormItem
            label="IPv4/CIDR（可选）"
            name="ipv4Cidr"
            rules={[
              {
                validator: (val: string) => {
                  if (!val) return true;
                  if (!val.includes("/")) {
                    return { result: false, message: "CIDR 格式必须包含掩码" };
                  }
                  const [ip, mask] = val.split("/");
                  if (!isValidIPv4(ip)) {
                    return { result: false, message: "IP 地址格式不正确" };
                  }
                  if (!isValidCIDRMask(mask, false)) {
                    return { result: false, message: "掩码必须是 0-32 之间的整数" };
                  }
                  return true;
                }
              }
            ]}
          >
            <IPInput placeholder="192.168.0.1/24" allowCIDR={true} />
          </FormItem>

          <FormItem
            label="IPv6 地址（可选）"
            name="ipv6"
            rules={[
              {
                validator: (val: string) => {
                  if (!val) return true;
                  if (val.includes("/")) {
                    const [ip, mask] = val.split("/");
                    if (!isValidIPv6(ip)) {
                      return { result: false, message: "IPv6 地址格式不正确" };
                    }
                    if (!isValidCIDRMask(mask, true)) {
                      return { result: false, message: "掩码必须是 0-128 之间的整数" };
                    }
                    return true;
                  }
                  if (!isValidIPv6(val)) {
                    return { result: false, message: "请输入有效的 IPv6 地址" };
                  }
                  return true;
                }
              }
            ]}
          >
            <IPInput placeholder="2001:db8::1" allowIPv6={true} allowCIDR={true} />
          </FormItem>

          <FormItem>
            <Button type="submit" theme="primary">
              验证
            </Button>
          </FormItem>
        </Form>
      );
    };
    return (
      <NotificationProvider>
        <Component />
      </NotificationProvider>
    );
  }
};
