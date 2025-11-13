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
  argTypes: {
    allowIPv6: {
      control: "boolean",
      description: "是否允许 IPv6"
    },
    allowCIDR: {
      control: "boolean",
      description: "是否允许 CIDR 格式"
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
      description: "是否自动聚焦"
    }
  }
};

export default meta;

type Story = StoryObj<typeof IPInput>;

// 基础 IPv4 输入
export const Basic: Story = {
  args: {
    placeholder: "192.168.0.1",
    allowIPv6: false,
    allowCIDR: false
  }
};

// 支持 CIDR
export const WithCIDR: Story = {
  args: {
    placeholder: "192.168.0.1/24",
    allowCIDR: true,
    showClear: true
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState("");
      return (
        <div>
          <IPInput
            {...args}
            value={value}
            onChange={(val) => {
              setValue(val);
              console.log("值:", val);
            }}
          />
          <div style={{ marginTop: 16, color: "#666" }}>当前值: {value || "(空)"}</div>
        </div>
      );
    };
    return <Component />;
  }
};

// 支持 IPv6
export const IPv6: Story = {
  args: {
    allowIPv6: true,
    allowCIDR: true,
    placeholder: "2001:db8::1"
  },
  render: (args) => {
    const Component = () => {
      const [value, setValue] = useState("");
      return (
        <div>
          <IPInput
            {...args}
            value={value}
            onChange={(val) => {
              setValue(val);
              console.log("值:", val);
            }}
          />
          <div style={{ marginTop: 16, color: "#666" }}>当前值: {value || "(空)"}</div>
        </div>
      );
    };
    return <Component />;
  }
};

// 受控组件示例
export const Controlled: Story = {
  render: () => {
    const Component = () => {
      const [value, setValue] = useState("192.168.1.1");

      return (
        <div>
          <IPInput
            value={value}
            onChange={(val) => {
              setValue(val);
            }}
            allowCIDR={true}
            showClear={true}
          />
          <div style={{ marginTop: 16 }}>
            <div>当前值: {value || "(空)"}</div>
          </div>
          <div style={{ marginTop: 16 }}>
            <button onClick={() => setValue("10.0.0.1")}>设置为 10.0.0.1</button>
            <button onClick={() => setValue("172.16.0.1/24")} style={{ marginLeft: 8 }}>
              设置为 172.16.0.1/24
            </button>
          </div>
        </div>
      );
    };
    return <Component />;
  }
};

// 粘贴功能演示
export const PasteDemo: Story = {
  render: () => {
    const Component = () => {
      const [value, setValue] = useState("");
      return (
        <div>
          <div style={{ marginBottom: 16, color: "#666" }}>
            尝试粘贴以下内容：
            <ul>
              <li>192.168.0.1</li>
              <li>192.168.0.1/24</li>
              <li>abc 10.0.0.1 xyz（会自动提取 IP）</li>
              <li>2001:db8::1（需要开启 IPv6）</li>
            </ul>
          </div>
          <IPInput value={value} onChange={(val) => setValue(val)} allowCIDR={true} allowIPv6={true} showClear={true} />
          <div style={{ marginTop: 16, color: "#666" }}>当前值: {value || "(空)"}</div>
        </div>
      );
    };
    return <Component />;
  }
};

// 键盘导航演示
export const KeyboardNavigation: Story = {
  render: () => {
    return (
      <div>
        <div style={{ marginBottom: 16, color: "#666" }}>
          <p>键盘操作说明：</p>
          <ul>
            <li>输入 3 位数字自动跳转到下一段</li>
            <li>输入 . 或空格跳转到下一段</li>
            <li>左/右箭头键在段之间移动</li>
            <li>在段开头按 Backspace 跳转到上一段</li>
          </ul>
        </div>
        <IPInput placeholder="192.168.0.1" autoFocus />
      </div>
    );
  }
};

// 禁用和只读状态
export const States: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <div style={{ marginBottom: 8 }}>正常状态：</div>
          <IPInput defaultValue="192.168.0.1" />
        </div>
        <div>
          <div style={{ marginBottom: 8 }}>禁用状态：</div>
          <IPInput defaultValue="192.168.0.1" disabled />
        </div>
        <div>
          <div style={{ marginBottom: 8 }}>只读状态：</div>
          <IPInput defaultValue="192.168.0.1" readOnly />
        </div>
      </div>
    );
  }
};

// 错误状态
export const ErrorState: Story = {
  render: () => {
    const Component = () => {
      const [value, setValue] = useState("256.1.1.1");
      return (
        <div>
          <IPInput value={value} onChange={(val) => setValue(val)} allowCIDR={true} />
          <div style={{ marginTop: 16 }}>
            <button onClick={() => setValue("256.1.1.1")}>设置无效值</button>
            <button onClick={() => setValue("192.168.0.1")} style={{ marginLeft: 8 }}>
              设置有效值
            </button>
          </div>
        </div>
      );
    };
    return <Component />;
  }
};

// 前导零控制
export const LeadingZeros: Story = {
  render: () => {
    return <div style={{ display: "flex", flexDirection: "column", gap: 16 }}></div>;
  }
};

// 完整功能演示
export const FullFeatured: Story = {
  render: () => {
    const Component = () => {
      const [value, setValue] = useState("");

      return (
        <div>
          <IPInput
            value={value}
            onChange={(val) => {
              setValue(val);
            }}
            allowIPv6={true}
            allowCIDR={true}
            showClear={true}
            placeholder="输入 IPv4 或 IPv6 地址"
            tips="支持 IPv4、IPv6 和 CIDR 格式"
          />
          <div style={{ marginTop: 16, padding: 12, background: "#f5f5f5", borderRadius: 4 }}>
            <div>
              <strong>当前值：</strong>
              {value || "(空)"}
            </div>
          </div>
        </div>
      );
    };
    return <Component />;
  }
};

// 表单使用示例
export const InForm: Story = {
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
          console.log("校验错误:", e.validateResult);
        }
      };

      const onReset: FormProps["onReset"] = (e) => {
        console.log(e);
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
                  // 支持 IPv4 和 CIDR 格式
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
                },
                message: "请输入有效的 IP 地址"
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
                },
                message: "请输入有效的 IP 地址"
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
                },
                message: "请输入有效的 IP 地址"
              }
            ]}
          >
            <IPInput placeholder="8.8.8.8" />
          </FormItem>

          <FormItem label="服务器名称" name="serverName">
            <Input placeholder="请输入服务器名称" />
          </FormItem>

          <FormItem>
            <div style={{ display: "flex", gap: 8 }}>
              <Button type="submit" theme="primary">
                提交
              </Button>
              <Button type="reset" theme="default">
                重置
              </Button>
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

// 表单验证示例
export const FormValidation: Story = {
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
                pattern: /^(\d{1,3}\.){3}\d{1,3}$/,
                message: "请输入有效的 IPv4 地址（格式：192.168.0.1）"
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
                    return { result: false, message: "CIDR 格式必须包含掩码（如：192.168.0.1/24）" };
                  }
                  const [ip, mask] = val.split("/");
                  if (!isValidIPv4(ip)) {
                    return { result: false, message: "IP 地址格式不正确" };
                  }
                  if (!isValidCIDRMask(mask, false)) {
                    return { result: false, message: "掩码必须是 0-32 之间的整数" };
                  }
                  return true;
                },
                message: "请输入有效的 CIDR 格式"
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
                  // 支持 IPv6 和 CIDR 格式
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
                },
                message: "请输入有效的 IPv6 地址"
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
