import React from "react";
import { Form, Input, Switch, Checkbox, Button, Select, Radio } from "@tendaui/react";
import { NotificationProvider, useNotification } from "@tendaui/react/notification";

const { FormItem } = Form;

const ComplexFormExample = () => {
  const [form] = Form.useForm();
  const { success } = useNotification();

  const onSubmit = (e: any) => {
    if (e.validateResult === true) {
      success({ title: "成功", message: "表单提交成功" });
      console.log("表单数据:", e.fields);
    }
  };

  return (
    <Form form={form} onSubmit={onSubmit} colon labelWidth={100}>
      <FormItem label="姓名" name="name" requiredMark rules={[{ required: true, message: "请输入姓名" }]}>
        <Input placeholder="请输入姓名" />
      </FormItem>

      <FormItem label="性别" name="gender">
        <Radio.Group>
          <Radio value="male">男</Radio>
          <Radio value="female">女</Radio>
        </Radio.Group>
      </FormItem>

      <FormItem label="城市" name="city">
        <Select
          placeholder="请选择城市"
          options={[
            { label: "北京", value: "beijing" },
            { label: "上海", value: "shanghai" },
            { label: "广州", value: "guangzhou" },
            { label: "深圳", value: "shenzhen" }
          ]}
        />
      </FormItem>

      <FormItem label="爱好" name="hobbies">
        <Checkbox.Group>
          <Checkbox value="reading">阅读</Checkbox>
          <Checkbox value="music">音乐</Checkbox>
          <Checkbox value="sports">运动</Checkbox>
          <Checkbox value="travel">旅游</Checkbox>
        </Checkbox.Group>
      </FormItem>

      <FormItem label="订阅通知" name="subscribe">
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
  );
};

const FormExample = () => (
  <NotificationProvider>
    <ComplexFormExample />
  </NotificationProvider>
);

export default FormExample;
