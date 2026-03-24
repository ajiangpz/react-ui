import React from "react";
import { Form, Input, Switch, InputNumber, Button, FormItem } from "@tendaui/react";
import { NotificationProvider, useNotification } from "@tendaui/react/notification";

const BaseForm = () => {
  const [form] = Form.useForm();
  const { success } = useNotification();

  const onSubmit = (e: any) => {
    if (e.validateResult === true) {
      success({ title: "成功提示", message: "提交成功" });
      console.log("表单数据:", e.fields);
    }
  };

  const onReset = () => {
    success({ title: "成功提示", message: "重置成功" });
  };

  return (
    <div style={{ width: 500 }}>
      <Form form={form} onSubmit={onSubmit} onReset={onReset} colon labelWidth={100}>
        <FormItem label="姓名" name="name" requiredMark rules={[{ required: true, message: "请输入姓名" }]}>
          <Input placeholder="请输入姓名" />
        </FormItem>

        <FormItem label="邮箱" name="email" rules={[{ email: true, message: "请输入正确的邮箱" }]}>
          <Input placeholder="请输入邮箱" />
        </FormItem>

        <FormItem label="年龄" name="age">
          <InputNumber placeholder="请输入年龄" min={1} max={120} />
        </FormItem>

        <FormItem label="是否启用" name="enabled">
          <Switch />
        </FormItem>

        <FormItem style={{ marginInlineStart: 100 }}>
          <div style={{ display: "flex", gap: "8px" }}>
            <Button type="submit" theme="primary">
              提交
            </Button>
            <Button type="reset">重置</Button>
          </div>
        </FormItem>
      </Form>
    </div>
  );
};

const FormExample = () => (
  <NotificationProvider>
    <BaseForm />
  </NotificationProvider>
);

export default FormExample;
