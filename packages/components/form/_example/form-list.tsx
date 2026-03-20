import React from "react";
import { Form, Input, Button, Select } from "@tendaui/react";

const { FormItem, FormList } = Form;

const FormListExample = () => {
  const [form] = Form.useForm();

  const onSubmit = () => {
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

export default FormListExample;
