import React from "react";
import { Form, Input } from "@tendaui/react";

const { FormItem } = Form;

const LabelAlignForm = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
    <div>
      <h4 style={{ marginBottom: "12px", color: "#666" }}>左对齐</h4>
      <Form labelAlign="left" labelWidth={100}>
        <FormItem label="用户名" name="username1">
          <Input placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="密码" name="password1">
          <Input type="password" placeholder="请输入密码" />
        </FormItem>
      </Form>
    </div>

    <div>
      <h4 style={{ marginBottom: "12px", color: "#666" }}>右对齐</h4>
      <Form labelAlign="right" labelWidth={100}>
        <FormItem label="用户名" name="username2">
          <Input placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="密码" name="password2">
          <Input type="password" placeholder="请输入密码" />
        </FormItem>
      </Form>
    </div>

    <div>
      <h4 style={{ marginBottom: "12px", color: "#666" }}>顶部对齐</h4>
      <Form labelAlign="top">
        <FormItem label="用户名" name="username3">
          <Input placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="密码" name="password3">
          <Input type="password" placeholder="请输入密码" />
        </FormItem>
      </Form>
    </div>
  </div>
);

export default LabelAlignForm;
