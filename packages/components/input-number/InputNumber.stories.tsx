import React, { useMemo, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import InputNumber from "./index";
import type { InputNumberProps } from "./InputNumber";
import type { InputNumberValue } from "./type";
import Form from "../form";
import FormItem from "../form/FormItem";
import { Radio } from "../radio";

const meta: Meta<typeof InputNumber> = {
  title: "Components/InputNumber",
  component: InputNumber,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "数字输入框用于输入数字，支持步进、最大最小值限制、格式化等功能。"
      }
    }
  },
  argTypes: {
    align: {
      control: "select",
      options: ["left", "center", "right"],
      description: "文本内容位置"
    },
    allowInputOverLimit: {
      control: "boolean",
      description: "是否允许输入超过 max/min 范围外的数字"
    },
    autoWidth: {
      control: "boolean",
      description: "宽度随内容自适应"
    },
    decimalPlaces: {
      control: "number",
      description: "小数位数"
    },
    disabled: {
      control: "boolean",
      description: "禁用组件"
    },
    largeNumber: {
      control: "boolean",
      description: "是否作为大数使用"
    },
    max: {
      control: "number",
      description: "最大值"
    },
    min: {
      control: "number",
      description: "最小值"
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
      description: "组件尺寸"
    },
    status: {
      control: "select",
      options: ["default", "success", "warning", "error"],
      description: "文本框状态"
    },
    step: {
      control: "number",
      description: "数值改变步数"
    },
    theme: {
      control: "select",
      options: ["column", "row", "normal"],
      description: "按钮布局"
    }
  }
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

/** 基础用法 */
export const Default: Story = {
  name: "基础用法",
  args: {
    min: -5,
    max: 15,
    defaultValue: 1,
    placeholder: "请输入数字"
  }
};

/** 不同布局主题 */
export const Themes: Story = {
  name: "不同布局主题",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>row - 横向按钮（默认）</div>
        <InputNumber theme="row" defaultValue={5} />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>column - 纵向按钮</div>
        <InputNumber theme="column" defaultValue={5} />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>normal - 无按钮</div>
        <InputNumber theme="normal" defaultValue={5} />
      </div>
    </div>
  )
};

/** 不同尺寸 */
export const Sizes: Story = {
  name: "不同尺寸",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
        <div>
          <div style={{ marginBottom: "8px", color: "#666" }}>row 主题</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <InputNumber size="small" defaultValue={3} />
            <InputNumber size="medium" defaultValue={6} />
            <InputNumber size="large" defaultValue={9} />
          </div>
        </div>
        <div>
          <div style={{ marginBottom: "8px", color: "#666" }}>column 主题</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <InputNumber theme="column" size="small" defaultValue={3} />
            <InputNumber theme="column" size="medium" defaultValue={6} />
            <InputNumber theme="column" size="large" defaultValue={9} />
          </div>
        </div>
        <div>
          <div style={{ marginBottom: "8px", color: "#666" }}>normal 主题</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <InputNumber theme="normal" size="small" defaultValue={3} />
            <InputNumber theme="normal" size="medium" defaultValue={6} />
            <InputNumber theme="normal" size="large" defaultValue={9} />
          </div>
        </div>
      </div>
    </div>
  )
};

/** 步长与小数 */
export const StepAndDecimal: Story = {
  name: "步长与小数",
  render: () => {
    const StepDemo = () => {
      const [value, setValue] = useState<InputNumberValue>(3.2);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <InputNumber step={1.2} decimalPlaces={2} value={value} onChange={setValue} />
          <div style={{ color: "#666", fontSize: "12px" }}>步长: 1.2, 保留2位小数, 当前值: {value}</div>
        </div>
      );
    };
    return <StepDemo />;
  }
};

/** 最大最小值限制 */
export const MinMax: Story = {
  name: "最大最小值限制",
  render: () => {
    const MinMaxDemo = () => {
      const [value, setValue] = useState<InputNumberValue>(5);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <InputNumber min={0} max={10} value={value} onChange={setValue} />
          <div style={{ color: "#666", fontSize: "12px" }}>范围: 0 ~ 10, 当前值: {value}</div>
        </div>
      );
    };
    return <MinMaxDemo />;
  }
};

/** 文本对齐 */
export const Align: Story = {
  name: "文本对齐",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "16px" }}>
        <div>
          <div style={{ marginBottom: "4px", fontSize: "12px", color: "#999" }}>左对齐</div>
        <InputNumber align="left" defaultValue={100} />
        </div>
        <div>
          <div style={{ marginBottom: "4px", fontSize: "12px", color: "#999" }}>居中对齐</div>
        <InputNumber align="center" defaultValue={200} />
        </div>
        <div>
          <div style={{ marginBottom: "4px", fontSize: "12px", color: "#999" }}>右对齐</div>
        <InputNumber align="right" defaultValue={300} />
      </div>
      </div>
    </div>
  )
};

/** 状态 */
export const Status: Story = {
  name: "状态",
  render: () => {
    type AlignType = "hide" | "align-left" | "align-input";
    const StatusDemo = () => {
      const [type, setType] = useState<AlignType>("align-input");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Radio.Group value={type} onChange={(val: AlignType) => setType(val)} variant="default-filled">
            <Radio.Button value="hide">隐藏文本提示</Radio.Button>
            <Radio.Button value="align-left">文本提示左对齐</Radio.Button>
            <Radio.Button value="align-input">文本提示对齐输入框</Radio.Button>
          </Radio.Group>

          <Form>
            {type === "hide" && (
              <>
                <FormItem label="禁用">
                  <InputNumber style={{ width: 300 }} disabled />
                </FormItem>
                <FormItem label="只读">
                  <InputNumber style={{ width: 300 }} readonly />
                </FormItem>
                <FormItem label="正常">
                  <InputNumber style={{ width: 300 }} />
                </FormItem>
                <FormItem label="成功">
                  <InputNumber style={{ width: 300 }} status="success" />
                </FormItem>
                <FormItem label="警告">
                  <InputNumber style={{ width: 300 }} status="warning" />
                </FormItem>
                <FormItem label="错误">
                  <InputNumber style={{ width: 300 }} status="error" />
                </FormItem>
              </>
            )}

            {(type === "align-left" || type === "align-input") && (
              <>
                <FormItem label="正常提示">
                  <InputNumber style={{ width: 300 }} tips="这是普通文本提示" />
                </FormItem>
                <FormItem label="成功提示">
                  <InputNumber style={{ width: 300 }} status="success" tips="校验通过文本提示" />
                </FormItem>
                <FormItem label="警告提示">
                  <InputNumber style={{ width: 300 }} status="warning" tips="校验不通过文本提示" />
                </FormItem>
                <FormItem label="错误提示">
                  <InputNumber style={{ width: 300 }} status="error" tips="校验存在严重问题文本提示" />
                </FormItem>
              </>
            )}
          </Form>
        </div>
      );
    };
    return <StatusDemo />;
  }
};

/** 格式化展示 */
export const Format: Story = {
  name: "格式化展示",
  render: () => {
    const FormatDemo = () => {
      const [value, setValue] = useState<InputNumberValue>(50);
      const [value2, setValue2] = useState<InputNumberValue>(1000);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <div style={{ marginBottom: "8px", color: "#666" }}>百分比格式</div>
          <InputNumber
            format={(val) => `${val} %`}
            value={value}
            onChange={setValue}
            style={{ width: 250 }}
          />
          </div>
          <div>
            <div style={{ marginBottom: "8px", color: "#666" }}>货币格式（保留2位小数）</div>
          <InputNumber
            decimalPlaces={2}
              format={(_, { fixedNumber }) => `¥ ${fixedNumber}`}
              value={value2}
              onChange={setValue2}
            style={{ width: 250 }}
          />
          </div>
        </div>
      );
    };
    return <FormatDemo />;
  }
};

/** 带后缀 */
export const WithSuffix: Story = {
  name: "带后缀",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <InputNumber suffix="个" defaultValue={10} style={{ width: 200 }} />
      <InputNumber suffix="元" defaultValue={100} style={{ width: 200 }} />
      <InputNumber suffix="kg" defaultValue={50} style={{ width: 200 }} />
    </div>
  )
};

/** 大数支持 */
export const LargeNumber: Story = {
  name: "大数支持",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>大整数</div>
        <InputNumber defaultValue="19999999999999999" largeNumber decimalPlaces={2} step={1} style={{ width: 350 }} />
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>大小数</div>
        <InputNumber defaultValue="0.8975527383412673418" largeNumber step={0.888} style={{ width: 350 }} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "JS 支持的最大数字位数是 16 位，超过 16 位的数字需作为字符串大数处理。"
      }
    }
  }
};

/** 自适应宽度 */
export const AutoWidth: Story = {
  name: "自适应宽度",
  args: {
    autoWidth: true,
    min: -5,
    defaultValue: 1
  }
};

/** 事件回调 */
export const Events: Story = {
  name: "事件回调",
  render: () => {
    const EventsDemo = () => {
      const [value, setValue] = useState<InputNumberValue>(100);
      const [error, setError] = useState<"exceed-maximum" | "below-minimum">();

      const tips = useMemo(() => {
        if (error === "exceed-maximum") return "数值不能超过最大值";
        if (error === "below-minimum") return "数值不能小于最小值";
        return undefined;
      }, [error]);

      const handleChange: InputNumberProps["onChange"] = (v, ctx) => {
        console.info("change", v, ctx);
        setValue(v);
      };
      const onValidate: InputNumberProps["onValidate"] = ({ error }) => {
        setError(error);
      };

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <InputNumber
            value={value}
            max={15}
            min={-2}
            inputProps={{ tips }}
            suffix="个"
            style={{ width: 300 }}
            onChange={handleChange}
            onValidate={onValidate}
            onBlur={(v, ctx) => console.info("blur", v, ctx)}
            onFocus={(v, ctx) => console.info("focus", v, ctx)}
            onEnter={(v, ctx) => console.info("enter", v, ctx)}
          />
          <div style={{ color: "#666", fontSize: "12px" }}>范围: -2 ~ 15, 查看控制台输出</div>
        </div>
      );
    };
    return <EventsDemo />;
  }
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>布局主题</h4>
        <div style={{ display: "flex", gap: "24px" }}>
          <InputNumber theme="row" defaultValue={5} />
          <InputNumber theme="column" defaultValue={5} />
          <InputNumber theme="normal" defaultValue={5} />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>尺寸</h4>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <InputNumber size="small" defaultValue={1} />
          <InputNumber size="medium" defaultValue={2} />
          <InputNumber size="large" defaultValue={3} />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>状态</h4>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <InputNumber defaultValue={1} />
          <InputNumber disabled defaultValue={2} />
          <InputNumber readonly defaultValue={3} />
          <InputNumber status="success" defaultValue={4} />
          <InputNumber status="warning" defaultValue={5} />
          <InputNumber status="error" defaultValue={6} />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>文本对齐</h4>
        <div style={{ display: "flex", gap: "16px" }}>
          <InputNumber align="left" defaultValue={100} theme="normal" />
          <InputNumber align="center" defaultValue={200} theme="normal" />
          <InputNumber align="right" defaultValue={300} theme="normal" />
        </div>
      </div>
    </div>
  )
};
