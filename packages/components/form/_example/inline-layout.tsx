import React from "react";
import { Form, Input, Button } from "@tendaui/react";

const { FormItem } = Form;

const InlineLayoutForm = () => (
  <Form layout="inline" labelWidth={60}>
    <FormItem label="用户名" name="username">
      <Input placeholder="用户名" style={{ width: "150px" }} />
    </FormItem>
    <FormItem label="密码" name="password">
      <Input type="password" placeholder="密码" style={{ width: "150px" }} />
    </FormItem>
    <FormItem>
      <Button theme="primary" type="submit">
        登录
      </Button>
    </FormItem>
  </Form>
);

export default InlineLayoutForm;
