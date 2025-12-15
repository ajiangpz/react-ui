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
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["small", "medium", "large"]
    },
    theme: {
      control: "inline-radio",
      options: ["row", "column", "normal"]
    },
    disabled: { control: "boolean" },
    readonly: { control: "boolean" }
  }
};

export default meta;

type Story = StoryObj<typeof InputNumber>;

// 基础用法
export const Basic: Story = {
  args: {
    min: -5,
    max: 15,
    defaultValue: 1
  }
};

// 步长与小数
export const StepControl: Story = {
  render: (args) => {
    const Demo = () => {
      const [value, setValue] = useState<InputNumberValue>(3.2);
      return <InputNumber {...args} max={15} min={-5} step={1.2} decimalPlaces={2} value={value} onChange={setValue} />;
    };
    return <Demo />;
  }
};

// 尺寸与布局
export const SizeAndTheme: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <InputNumber size="small" max={15} min={-12} defaultValue={3} />
        <InputNumber max={15} min={-12} defaultValue={6} />
        <InputNumber size="large" max={15} min={-12} defaultValue={9} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <InputNumber defaultValue={5} size="small" theme="column" />
        <InputNumber defaultValue={5} theme="column" />
        <InputNumber defaultValue={10} size="large" theme="column" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <InputNumber defaultValue={5} size="small" theme="normal" />
        <InputNumber defaultValue={5} theme="normal" />
        <InputNumber defaultValue={10} size="large" theme="normal" />
      </div>
    </div>
  )
};

// 对齐
export const Align: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <InputNumber align="left" defaultValue={100} />
        <InputNumber align="center" defaultValue={200} />
        <InputNumber align="right" defaultValue={300} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <InputNumber align="left" theme="normal" defaultValue={100} />
        <InputNumber align="center" theme="normal" defaultValue={200} />
        <InputNumber align="right" theme="normal" defaultValue={300} />
      </div>
    </div>
  )
};

// 状态与提示
export const Status: Story = {
  render: () => {
    type AlignType = "hide" | "align-left" | "align-input";
    const Demo = () => {
      const [type, setType] = useState<AlignType>("align-input");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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

            {type === "align-left" && (
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

            {type === "align-input" && (
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
    return <Demo />;
  }
};

// 格式化展示
export const Format: Story = {
  render: () => {
    const Demo = () => {
      const [value, setValue] = useState<InputNumberValue>(0);
      const [value1, setValue1] = useState<InputNumberValue>(0);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <InputNumber
            max={15}
            min={-12}
            step={1.2}
            format={(val) => `${val} %`}
            value={value}
            onChange={setValue}
            style={{ width: 250 }}
          />
          <InputNumber
            decimalPlaces={2}
            format={(_, { fixedNumber }) => `${fixedNumber} %`}
            value={value1}
            onChange={setValue1}
            style={{ width: 250 }}
          />
        </div>
      );
    };
    return <Demo />;
  }
};

// 大数
export const LargeNumber: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <InputNumber defaultValue={"19999999999999999"} largeNumber decimalPlaces={2} step={1} style={{ width: 350 }} />
      <InputNumber defaultValue={"0.8975527383412673418"} largeNumber step={0.888} style={{ width: 350 }} />
    </div>
  )
};

// 事件&校验
export const Events: Story = {
  render: () => {
    const Demo = () => {
      const [value2, setValue2] = useState<InputNumberValue>(100);
      const [decimalValue, setDecimalValue] = useState<InputNumberValue>(3.41);
      const [error, setError] = useState<"exceed-maximum" | "below-minimum">();

      const tips = useMemo(() => {
        if (error === "exceed-maximum") return "number can not be exceed maximum";
        if (error === "below-minimum") return "number can not be below minimum";
        return undefined;
      }, [error]);

      const handleChange: InputNumberProps["onChange"] = (v, ctx) => {
        console.info("change", v, ctx);
        setValue2(v);
      };
      const onValidate: InputNumberProps["onValidate"] = ({ error }) => {
        setError(error);
      };
      const handleFocus: InputNumberProps["onFocus"] = (v, ctx) => {
        console.info("focus", v, ctx);
      };
      const handleBlur: InputNumberProps["onBlur"] = (v, ctx) => {
        console.info("blur", v, ctx);
      };
      const handleKeydown: InputNumberProps["onKeydown"] = (v, ctx) => {
        console.info("keydown", v, ctx);
      };
      const handleKeyup: InputNumberProps["onKeyup"] = (v, ctx) => {
        console.info("keyup", v, ctx);
      };
      const handleKeypress: InputNumberProps["onKeypress"] = (v, ctx) => {
        console.info("keypress", v, ctx);
      };
      const handleEnter: InputNumberProps["onEnter"] = (v, ctx) => {
        console.info("enter", v, ctx);
      };

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <InputNumber value={decimalValue} onChange={setDecimalValue} max={5} autoWidth />

          <InputNumber
            value={value2}
            max={15}
            min={-2}
            inputProps={{ tips }}
            suffix="个"
            style={{ width: 300 }}
            onChange={handleChange}
            onValidate={onValidate}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onEnter={handleEnter}
            onKeydown={handleKeydown}
            onKeyup={handleKeyup}
            onKeypress={handleKeypress}
          />
        </div>
      );
    };
    return <Demo />;
  }
};

// 自适应宽度
export const AutoWidth: Story = {
  args: {
    autoWidth: true,
    min: -5,
    defaultValue: 1
  }
};
