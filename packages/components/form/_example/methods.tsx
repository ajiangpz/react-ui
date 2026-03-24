import React from "react";
import { Form, Input, Button, FormItem } from "@tendaui/react";
import { NotificationProvider, useNotification } from "@tendaui/react/notification";

const FormMethodsExample = () => {
  const [form] = Form.useForm();
  const { success } = useNotification();

  const handleValidate = async () => {
    const result = await form.validate();
    console.log("验证结果:", result);
    if (result === true) {
      success({ title: "验证通过", message: "表单验证成功" });
    }
  };

  const handleSetFields = () => {
    form.setFieldsValue({
      username: "testuser",
      email: "test@example.com"
    });
    success({ title: "设置成功", message: "已填充表单数据" });
  };

  const handleGetFields = () => {
    const values = form.getFieldsValue(true);
    console.log("当前表单值:", values);
    success({ title: "获取成功", message: JSON.stringify(values) });
  };

  const handleReset = () => {
    form.reset();
    success({ title: "重置成功", message: "表单已重置" });
  };

  return (
    <div style={{ width: 500 }}>
      <Form form={form} labelWidth={100} colon>
        <FormItem label="用户名" name="username" rules={[{ required: true, message: "请输入用户名" }]}>
          <Input placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="邮箱" name="email" rules={[{ email: true, message: "请输入正确的邮箱" }]}>
          <Input placeholder="请输入邮箱" />
        </FormItem>
        <FormItem style={{ marginInlineStart: 100 }}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Button theme="primary" onClick={handleValidate}>
              验证表单
            </Button>
            <Button onClick={handleSetFields}>填充数据</Button>
            <Button onClick={handleGetFields}>获取数据</Button>
            <Button onClick={handleReset}>重置表单</Button>
          </div>
        </FormItem>
      </Form>
    </div>
  );
};

const FormExample = () => (
  <NotificationProvider>
    <FormMethodsExample />
  </NotificationProvider>
);

export default FormExample;
