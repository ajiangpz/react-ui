import { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "../../components";
import { useState } from "react";
import React from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "多选框用于在一组备选项中进行多选，允许用户选中一个或多个选项。"
      }
    }
  },
  argTypes: {
    checkAll: {
      control: "boolean",
      description: "用于标识是否为「全选选项」。单独使用无效，需在 CheckboxGroup 中使用"
    },
    checked: {
      control: "boolean",
      description: "是否选中"
    },
    defaultChecked: {
      control: "boolean",
      description: "是否选中，非受控属性"
    },
    disabled: {
      control: "boolean",
      description: "是否禁用组件"
    },
    indeterminate: {
      control: "boolean",
      description: "是否为半选"
    },
    label: {
      control: "text",
      description: "主文案"
    },
    name: {
      control: "text",
      description: "HTML 元素原生属性"
    },
    readonly: {
      control: "boolean",
      description: "只读状态"
    },
    value: {
      control: "text",
      description: "多选框的值"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/** 基础复选框 */
export const Default: Story = {
  name: "基础复选框",
  args: {
    children: "复选框"
  }
};

/** 受控复选框 */
export const Controlled: Story = {
  name: "受控复选框",
  render: () => {
    const ControlledExample = () => {
      const [checked, setChecked] = useState(true);
  return (
        <Checkbox checked={checked} onChange={(val) => setChecked(val)}>
          受控复选框（点击切换）
      </Checkbox>
      );
    };
    return <ControlledExample />;
  }
};

/** 复选框状态 */
export const States: Story = {
  name: "复选框状态",
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Checkbox>未选中项</Checkbox>
      <Checkbox defaultChecked>选中项</Checkbox>
      <Checkbox indeterminate>半选状态</Checkbox>
      <Checkbox disabled>未选禁用项</Checkbox>
      <Checkbox disabled defaultChecked>
        选中禁用项
      </Checkbox>
      <Checkbox readonly defaultChecked>
        只读选中项
      </Checkbox>
    </div>
  )
};

/** 复选框组 - 基础用法 */
export const Group: Story = {
  name: "复选框组 - 基础用法",
  render: () => {
    const GroupExample = () => {
      const [value, setValue] = useState<string[]>(["北京"]);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>当前选中：{value.join(", ") || "无"}</div>
          <Checkbox.Group value={value} onChange={(val) => setValue(val as string[])}>
            <Checkbox value="北京">北京</Checkbox>
            <Checkbox value="上海">上海</Checkbox>
            <Checkbox value="广州">广州</Checkbox>
            <Checkbox value="深圳">深圳</Checkbox>
          </Checkbox.Group>
        </div>
      );
    };
    return <GroupExample />;
  }
};

/** 复选框组 - 全选功能 */
export const GroupWithCheckAll: Story = {
  name: "复选框组 - 全选功能",
  render: () => {
    const CheckAllExample = () => {
      const [value, setValue] = useState<string[]>(["上海"]);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>当前选中：{value.join(", ") || "无"}</div>
          <Checkbox.Group value={value} onChange={(val) => setValue(val as string[])}>
            <Checkbox checkAll>全选</Checkbox>
            <Checkbox value="北京">北京</Checkbox>
            <Checkbox value="上海">上海</Checkbox>
            <Checkbox value="广州" disabled>
              广州（禁用）
            </Checkbox>
            <Checkbox value="深圳">深圳</Checkbox>
          </Checkbox.Group>
        </div>
      );
    };
    return <CheckAllExample />;
  }
};

/** 复选框组 - options 配置方式 */
export const GroupWithOptions: Story = {
  name: "复选框组 - options 配置方式",
  render: () => {
    const OptionsExample = () => {
      const [value, setValue] = useState<(string | number)[]>([2]);
      const options = [
        { label: "选项一", value: 1 },
        { label: "选项二", value: 2 },
        { label: "选项三", value: 3, disabled: true },
        { label: "选项四", value: 4 }
      ];
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>当前选中值：{JSON.stringify(value)}</div>
          <Checkbox.Group options={options} value={value} onChange={(val) => setValue(val as (string | number)[])} />
    </div>
  );
};
    return <OptionsExample />;
  }
};

/** 复选框组 - 最大选中数量 */
export const GroupWithMax: Story = {
  name: "复选框组 - 最大选中数量",
  render: () => {
    const MaxExample = () => {
      const [value, setValue] = useState<string[]>(["北京"]);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>最多选择 2 项，当前选中：{value.join(", ") || "无"}</div>
          <Checkbox.Group value={value} onChange={(val) => setValue(val as string[])} max={2}>
            <Checkbox value="北京">北京</Checkbox>
            <Checkbox value="上海">上海</Checkbox>
            <Checkbox value="广州">广州</Checkbox>
            <Checkbox value="深圳">深圳</Checkbox>
          </Checkbox.Group>
        </div>
      );
    };
    return <MaxExample />;
  }
};

/** 复选框组 - 禁用整组 */
export const GroupDisabled: Story = {
  name: "复选框组 - 禁用整组",
  render: () => (
    <Checkbox.Group defaultValue={["北京", "深圳"]} disabled>
      <Checkbox value="北京">北京</Checkbox>
      <Checkbox value="上海">上海</Checkbox>
      <Checkbox value="广州">广州</Checkbox>
      <Checkbox value="深圳">深圳</Checkbox>
    </Checkbox.Group>
  )
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>单个复选框状态</h4>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Checkbox>默认</Checkbox>
          <Checkbox defaultChecked>选中</Checkbox>
          <Checkbox indeterminate>半选</Checkbox>
          <Checkbox disabled>禁用</Checkbox>
          <Checkbox disabled defaultChecked>
            禁用选中
          </Checkbox>
          <Checkbox readonly>只读</Checkbox>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>复选框组 - 基础</h4>
        <Checkbox.Group defaultValue={["1"]}>
          <Checkbox value="1">选项一</Checkbox>
          <Checkbox value="2">选项二</Checkbox>
          <Checkbox value="3">选项三</Checkbox>
        </Checkbox.Group>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>复选框组 - 带全选</h4>
        <Checkbox.Group defaultValue={["2", "3"]}>
          <Checkbox checkAll>全选</Checkbox>
          <Checkbox value="1">选项一</Checkbox>
          <Checkbox value="2">选项二</Checkbox>
          <Checkbox value="3">选项三</Checkbox>
        </Checkbox.Group>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>复选框组 - 部分禁用</h4>
        <Checkbox.Group defaultValue={["1"]}>
          <Checkbox value="1">可选项</Checkbox>
          <Checkbox value="2" disabled>
            禁用项
          </Checkbox>
          <Checkbox value="3">可选项</Checkbox>
        </Checkbox.Group>
      </div>
    </div>
  )
};
