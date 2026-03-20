import React, { useState } from "react";
import InputNumber from "../index";
import { Form } from "../../form";
import { Radio } from "../../radio";

const { FormItem } = Form;

type AlignType = "hide" | "align-left" | "align-input";

const StatusInputNumber = () => {
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

export default StatusInputNumber;
