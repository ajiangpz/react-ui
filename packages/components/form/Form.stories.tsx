import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

import { Form, Input, Switch, Checkbox, Button, Select, Radio, InputNumber } from "../../components";

import { NotificationProvider, useNotification } from "@tendaui/react/es/notification";
import type { FormProps } from "./index";

const { FormItem, FormList } = Form;

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "表单组件用于收集用户输入的数据，支持表单验证、表单布局、表单联动等功能。"
      }
    }
  },
  argTypes: {
    colon: {
      control: "boolean",
      description: "是否在表单标签字段右侧显示冒号"
    },
    disabled: {
      control: "boolean",
      description: "是否禁用整个表单"
    },
    labelAlign: {
      control: "select",
      options: ["left", "right", "top"],
      description: "表单字段标签对齐方式"
    },
    labelWidth: {
      control: "text",
      description: "标签宽度"
    },
    layout: {
      control: "select",
      options: ["vertical", "inline"],
      description: "表单布局"
    },
    preventSubmitDefault: {
      control: "boolean",
      description: "是否阻止表单提交默认事件"
    },
    requiredMark: {
      control: "boolean",
      description: "是否显示必填符号（*）"
    },
    resetType: {
      control: "select",
      options: ["empty", "initial"],
      description: "重置表单的方式"
    },
    scrollToFirstError: {
      control: "select",
      options: ["", "smooth", "auto"],
      description: "表单校验不通过时，是否自动滚动到第一个校验不通过的字段"
    },
    showErrorMessage: {
      control: "boolean",
      description: "校验不通过时，是否显示错误提示信息"
    }
  },
  decorators: [
    (Story, context) => (
      <NotificationProvider
        position={context.args.position}
        maxStack={context.args.maxStack}
        displayDuration={context.args.displayDuration}
      >
        <Story />
      </NotificationProvider>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Form>;

/** 基础表单 */
export const Default: Story = {
  name: "基础表单",
  render: () => {
    const BaseForm = () => {
      const [form] = Form.useForm();
      const { success } = useNotification();

      const onSubmit: FormProps["onSubmit"] = (e) => {
        if (e.validateResult === true) {
          success({ title: "成功提示", message: "提交成功" });
          console.log("表单数据:", e.fields);
        }
      };

      const onReset: FormProps["onReset"] = () => {
        success({ title: "成功提示", message: "重置成功" });
      };

      return (
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
      );
    };
    return <BaseForm />;
  }
};

/** 标签对齐方式 */
export const LabelAlign: Story = {
  name: "标签对齐方式",
  render: () => (
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
  )
};

/** 行内布局 */
export const InlineLayout: Story = {
  name: "行内布局",
  render: () => (
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
  )
};

/** 表单验证 */
export const Validation: Story = {
  name: "表单验证",
  render: () => {
    const ValidationForm = () => {
      const [form] = Form.useForm();
      const { success, error } = useNotification();

      const onSubmit: FormProps["onSubmit"] = (e) => {
        if (e.validateResult === true) {
          success({ title: "验证通过", message: "表单提交成功" });
        } else {
          error({ title: "验证失败", message: "请检查表单输入" });
        }
      };

      return (
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

          <FormItem
            label="手机号"
            name="phone"
            rules={[{ telnumber: true, message: "请输入正确的手机号" }]}
          >
            <Input placeholder="请输入手机号" />
          </FormItem>

          <FormItem
            label="网址"
            name="url"
            rules={[{ url: true, message: "请输入正确的网址" }]}
          >
            <Input placeholder="请输入网址" />
          </FormItem>

          <FormItem style={{ marginInlineStart: 100 }}>
            <Button type="submit" theme="primary">
              提交
            </Button>
          </FormItem>
        </Form>
      );
    };
    return <ValidationForm />;
  }
};

/** 复杂表单 */
export const ComplexForm: Story = {
  name: "复杂表单",
  render: () => {
    const ComplexFormExample = () => {
      const [form] = Form.useForm();
      const { success } = useNotification();

      const onSubmit: FormProps["onSubmit"] = (e) => {
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
    return <ComplexFormExample />;
  }
};

/** 动态表单项 - FormList */
export const FormListDemo: Story = {
  name: "动态表单项 - FormList",
  render: () => {
    const FormListExample = () => {
      const [form] = Form.useForm();

      const onSubmit: FormProps["onSubmit"] = (e) => {
        const allFields = form.getFieldsValue(true);
        console.log("表单数据:", allFields);
};

const cityOptions = [
  { label: "北京", value: "bj" },
  { label: "上海", value: "sh" },
  { label: "广州", value: "gz" },
  { label: "深圳", value: "sz" }
];

  return (
    <Form
      form={form}
      colon
      onSubmit={onSubmit}
      labelWidth={100}
      initialData={{
        address: [
          { city: "bj", area: "海淀" },
          { city: "sh", area: "浦东" }
        ]
      }}
    >
      <FormList name="address">
            {(fields, { add, remove }) => (
          <>
                {fields.map(({ key, name, ...restField }, index) => (
                  <FormItem key={key} label={`地址 ${index + 1}`}>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <FormItem
                  name={[name, "city"]}
                  rules={[{ required: true, message: "请选择城市" }]}
                        {...restField}
                        style={{ marginBottom: 0 }}
                >
                        <Select options={cityOptions} placeholder="选择城市" style={{ width: "120px" }} />
                      </FormItem>
                      <FormItem name={[name, "area"]} {...restField} style={{ marginBottom: 0 }}>
                        <Input placeholder="详细地址" style={{ width: "200px" }} />
                </FormItem>
                      {fields.length > 1 && (
                        <Button variant="text" theme="danger" onClick={() => remove(index)}>
                          删除
                        </Button>
                      )}
                    </div>
              </FormItem>
            ))}
            <FormItem style={{ marginLeft: 100 }}>
                  <Button variant="dashed" onClick={() => add({ city: "", area: "" })}>
                    + 添加地址
              </Button>
            </FormItem>
          </>
        )}
      </FormList>
          <FormItem style={{ marginLeft: 100 }}>
            <Button type="submit" theme="primary">
              提交
            </Button>
          </FormItem>
        </Form>
      );
    };
    return <FormListExample />;
  }
};

/** 禁用表单 */
export const DisabledForm: Story = {
  name: "禁用表单",
  render: () => (
    <Form disabled labelWidth={100} colon>
      <FormItem label="用户名" name="username">
        <Input placeholder="请输入用户名" defaultValue="admin" />
      </FormItem>
      <FormItem label="角色" name="role">
        <Select
          defaultValue="admin"
          options={[
            { label: "管理员", value: "admin" },
            { label: "用户", value: "user" }
          ]}
        />
      </FormItem>
      <FormItem label="启用" name="enabled">
        <Switch defaultValue={true} />
      </FormItem>
    </Form>
  )
};

/** 表单方法调用 */
export const FormMethods: Story = {
  name: "表单方法调用",
  render: () => {
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
        <Form form={form} labelWidth={100} colon>
          <FormItem
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input placeholder="请输入用户名" />
          </FormItem>
          <FormItem
            label="邮箱"
            name="email"
            rules={[{ email: true, message: "请输入正确的邮箱" }]}
          >
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
  );
};
    return <FormMethodsExample />;
  }
};
