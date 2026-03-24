import React from "react";
import { Form, Input, Switch, Select, FormItem } from "@tendaui/react";

const DisabledForm = () => (
  <div style={{ width: 500 }}>
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
  </div>
);

export default DisabledForm;
