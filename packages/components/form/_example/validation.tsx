import React from "react";
import { Form, Input, Button } from "@tendaui/react";
import { NotificationProvider, useNotification } from "@tendaui/react/notification";

const { FormItem } = Form;

const ValidationForm = () => {
  const [form] = Form.useForm();
  const { success, error } = useNotification();

  const onSubmit = (e: any) => {
    if (e.validateResult === true) {
      success({ title: "验证通过", message: "表单提交成功" });
    } else {
      error({ title: "验证失败", message: "请检查表单输入" });
    }
  };

  return (
    <div style={{ width: 500 }}>
      <Form form={form} onSubmit={onSubmit} colon labelWidth={100}>
        <FormItem
          label="用户名"
          name="username"
          requiredMark
          rules={[
            { required: true, message: "请输入用户名" },
            { min: 3, message: "用户名至少3个字符" },
            { max: 20, message: "用户名最多20个字符" }
          ]}
        >
          <Input placeholder="请输入用户名" />
        </FormItem>

        <FormItem
          label="邮箱"
          name="email"
          requiredMark
          rules={[
            { required: true, message: "请输入邮箱" },
            { email: true, message: "请输入正确的邮箱格式" }
          ]}
        >
          <Input placeholder="请输入邮箱" />
        </FormItem>

        <FormItem label="手机号" name="phone" rules={[{ telnumber: true, message: "请输入正确的手机号" }]}>
          <Input placeholder="请输入手机号" />
        </FormItem>

        <FormItem label="网址" name="url" rules={[{ url: true, message: "请输入正确的网址" }]}>
          <Input placeholder="请输入网址" />
        </FormItem>

        <FormItem style={{ marginInlineStart: 100 }}>
          <Button type="submit" theme="primary">
            提交
          </Button>
        </FormItem>
      </Form>
    </div>
  );
};

const FormExample = () => (
  <NotificationProvider>
    <ValidationForm />
  </NotificationProvider>
);

export default FormExample;
