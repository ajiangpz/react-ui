
import { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";



import {
    Form, Input, Switch, Checkbox, Button
} from 'tendaui-react/es/index';

import { NotificationProvider, useNotification } from "tendaui-react/es/notification";
import type { FormProps } from './index';


const { FormItem } = Form;

export const BaseForm = () => {
    const [form] = Form.useForm();

    const name = Form.useWatch('name', form);
    const gender = Form.useWatch('gender', form);
    console.log('name', name);
    console.log('gender', gender);
    const { success } = useNotification();
    const onSubmit: FormProps['onSubmit'] = (e) => {
        console.log(e);
        if (e.validateResult === true) {
            success({ title: "成功提示", message: '提交成功' });
        }
    };

    const onReset: FormProps['onReset'] = (e) => {
        console.log(e);
        success({ title: "成功提示", message: '重置成功' });
    };

    const setMessage = () => {
        console.log(form);
        form.setFields([
            { name: 'name', status: 'error', validateMessage: { type: 'error', message: '输入有误' } },
            { name: 'birthday', status: 'warning', validateMessage: { type: 'warning', message: '时间有误' } },
        ]);
    };

    return (
        <Form form={form} onSubmit={onSubmit} onReset={onReset} colon labelWidth={100}>
            <FormItem label="姓名" name="name" requiredMark rules={[{ required: true, message: '请输入姓名' }]}>
                <Input />
            </FormItem>


            <FormItem label="课程" name="course" requiredMark>
                <Checkbox.Group>
                    <Checkbox value="la">加辣</Checkbox>
                    <Checkbox value="ma">加麻</Checkbox>
                    <Checkbox value="nocong">不要葱花</Checkbox>
                </Checkbox.Group>
            </FormItem>
            <FormItem label="状态" name="status" for="status">
                <Switch />
            </FormItem>
            <FormItem label="自定义内容" for="custom">
                <div style={{ display: 'flex', gap: 8 }}>
                    <FormItem name="custom">
                        <Input />
                    </FormItem>

                </div>
            </FormItem>
            <FormItem style={{ marginLeft: 100 }}>
                <div className="flex gap-2">

                    <Button type="submit" theme="primary">
                        提交
                    </Button>
                    <Button onClick={setMessage}>设置信息</Button>
                    <Button type="reset" theme="default">
                        重置
                    </Button>
                </div>

            </FormItem>
        </Form>
    );
}


const meta: Meta = {
    args: {},
    component: Form,
    tags: ['autodocs'],
    decorators: [
        // 修改装饰器，使用从控制台传入的参数
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
}

export default meta;

export const Default: StoryObj<typeof Form> = {
    args: {},
    render: () => <BaseForm></BaseForm>
}