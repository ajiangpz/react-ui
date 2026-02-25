import { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "../../components";
import React, { useState } from "react";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "单选框用于在一组互斥的选项中进行单选，用户只能选择其中一个选项。"
      }
    }
  },
  argTypes: {
    allowUncheck: {
      control: "boolean",
      description: "是否允许取消选中"
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
      description: "是否为禁用态"
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
      description: "单选按钮的值"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Radio>;

/** 基础单选框 */
export const Default: Story = {
  name: "基础单选框",
  args: {
    children: "单选框"
  }
};

/** 受控单选框 */
export const Controlled: Story = {
  name: "受控单选框",
  render: () => {
    const ControlledExample = () => {
      const [checked, setChecked] = useState(true);
      return (
        <Radio checked={checked} onChange={(val) => setChecked(val)}>
          受控单选框（点击切换）
        </Radio>
      );
    };
    return <ControlledExample />;
  }
};

/** 单选框状态 */
export const States: Story = {
  name: "单选框状态",
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Radio>未选中</Radio>
      <Radio defaultChecked>选中</Radio>
      <Radio disabled>禁用未选中</Radio>
      <Radio disabled defaultChecked>
        禁用选中
      </Radio>
      <Radio readonly defaultChecked>
        只读选中
      </Radio>
    </div>
  )
};

/** 单选框组 - 基础用法 */
export const Group: Story = {
  name: "单选框组 - 基础用法",
  render: () => {
    const GroupExample = () => {
      const [value, setValue] = useState("beijing");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>当前选中：{value}</div>
          <Radio.Group value={value} onChange={(val) => setValue(val as string)}>
            <Radio value="beijing">北京</Radio>
            <Radio value="shanghai">上海</Radio>
            <Radio value="guangzhou">广州</Radio>
            <Radio value="shenzhen">深圳</Radio>
          </Radio.Group>
        </div>
      );
    };
    return <GroupExample />;
  }
};

/** 单选框组 - options 配置 */
export const GroupWithOptions: Story = {
  name: "单选框组 - options 配置",
  render: () => {
    const OptionsExample = () => {
      const [value, setValue] = useState("2");
      const options = [
        { label: "选项一", value: "1" },
        { label: "选项二", value: "2" },
        { label: "选项三", value: "3", disabled: true },
        { label: "选项四", value: "4" }
      ];
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>当前选中值：{value}</div>
          <Radio.Group options={options} value={value} onChange={(val) => setValue(val as string)} />
        </div>
      );
    };
    return <OptionsExample />;
  }
};

/** 按钮样式 */
export const ButtonStyle: Story = {
  name: "按钮样式",
  render: () => {
    const ButtonStyleExample = () => {
      const [value1, setValue1] = useState("a");
      const [value2, setValue2] = useState("a");
      const [value3, setValue3] = useState("a");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <div style={{ marginBottom: "8px", color: "#666" }}>outline 样式（默认）</div>
            <Radio.Group value={value1} onChange={(val) => setValue1(val as string)} variant="outline">
              <Radio.Button value="a">选项 A</Radio.Button>
              <Radio.Button value="b">选项 B</Radio.Button>
              <Radio.Button value="c">选项 C</Radio.Button>
            </Radio.Group>
          </div>

          <div>
            <div style={{ marginBottom: "8px", color: "#666" }}>primary-filled 样式</div>
            <Radio.Group value={value2} onChange={(val) => setValue2(val as string)} variant="primary-filled">
              <Radio.Button value="a">选项 A</Radio.Button>
              <Radio.Button value="b">选项 B</Radio.Button>
              <Radio.Button value="c">选项 C</Radio.Button>
            </Radio.Group>
          </div>

          <div>
            <div style={{ marginBottom: "8px", color: "#666" }}>default-filled 样式</div>
            <Radio.Group value={value3} onChange={(val) => setValue3(val as string)} variant="default-filled">
              <Radio.Button value="a">选项 A</Radio.Button>
              <Radio.Button value="b">选项 B</Radio.Button>
              <Radio.Button value="c">选项 C</Radio.Button>
            </Radio.Group>
          </div>
        </div>
      );
    };
    return <ButtonStyleExample />;
  }
};

/** 不同尺寸 */
export const Sizes: Story = {
  name: "不同尺寸",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>小尺寸</div>
        <Radio.Group size="small" defaultValue="a">
          <Radio.Button value="a">选项 A</Radio.Button>
          <Radio.Button value="b">选项 B</Radio.Button>
          <Radio.Button value="c">选项 C</Radio.Button>
        </Radio.Group>
      </div>

      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>中尺寸（默认）</div>
        <Radio.Group size="medium" defaultValue="a">
          <Radio.Button value="a">选项 A</Radio.Button>
          <Radio.Button value="b">选项 B</Radio.Button>
          <Radio.Button value="c">选项 C</Radio.Button>
        </Radio.Group>
      </div>

      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>大尺寸</div>
        <Radio.Group size="large" defaultValue="a">
          <Radio.Button value="a">选项 A</Radio.Button>
          <Radio.Button value="b">选项 B</Radio.Button>
          <Radio.Button value="c">选项 C</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  )
};

/** 允许取消选中 */
export const AllowUncheck: Story = {
  name: "允许取消选中",
  render: () => {
    const AllowUncheckExample = () => {
      const [value, setValue] = useState<string | undefined>("a");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>当前选中：{value || "(无)"}</div>
          <Radio.Group allowUncheck value={value} onChange={(val) => setValue(val as string)}>
            <Radio value="a">选项 A</Radio>
            <Radio value="b">选项 B</Radio>
            <Radio value="c">选项 C</Radio>
          </Radio.Group>
          <div style={{ color: "#666", fontSize: "12px" }}>提示：再次点击已选中的选项可以取消选中</div>
        </div>
      );
    };
    return <AllowUncheckExample />;
  }
};

/** 禁用整组 */
export const GroupDisabled: Story = {
  name: "禁用整组",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Radio.Group disabled defaultValue="b">
        <Radio value="a">选项 A</Radio>
        <Radio value="b">选项 B</Radio>
        <Radio value="c">选项 C</Radio>
      </Radio.Group>

      <Radio.Group disabled defaultValue="b" variant="primary-filled">
        <Radio.Button value="a">选项 A</Radio.Button>
        <Radio.Button value="b">选项 B</Radio.Button>
        <Radio.Button value="c">选项 C</Radio.Button>
      </Radio.Group>
    </div>
  )
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>单选框状态</h4>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Radio>默认</Radio>
          <Radio defaultChecked>选中</Radio>
          <Radio disabled>禁用</Radio>
          <Radio disabled defaultChecked>
            禁用选中
          </Radio>
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>单选框组</h4>
        <Radio.Group defaultValue="b">
          <Radio value="a">选项 A</Radio>
          <Radio value="b">选项 B</Radio>
          <Radio value="c">选项 C</Radio>
        </Radio.Group>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>按钮样式 - outline</h4>
        <Radio.Group defaultValue="a" variant="outline">
          <Radio.Button value="a">选项 A</Radio.Button>
          <Radio.Button value="b">选项 B</Radio.Button>
          <Radio.Button value="c">选项 C</Radio.Button>
        </Radio.Group>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>按钮样式 - primary-filled</h4>
        <Radio.Group defaultValue="a" variant="primary-filled">
          <Radio.Button value="a">选项 A</Radio.Button>
          <Radio.Button value="b">选项 B</Radio.Button>
          <Radio.Button value="c">选项 C</Radio.Button>
        </Radio.Group>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>按钮样式 - default-filled</h4>
        <Radio.Group defaultValue="a" variant="default-filled">
          <Radio.Button value="a">选项 A</Radio.Button>
          <Radio.Button value="b">选项 B</Radio.Button>
          <Radio.Button value="c">选项 C</Radio.Button>
        </Radio.Group>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>尺寸</h4>
        <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
          <Radio.Group size="small" defaultValue="a" variant="outline">
            <Radio.Button value="a">小</Radio.Button>
            <Radio.Button value="b">尺寸</Radio.Button>
          </Radio.Group>
          <Radio.Group size="medium" defaultValue="a" variant="outline">
            <Radio.Button value="a">中</Radio.Button>
            <Radio.Button value="b">尺寸</Radio.Button>
          </Radio.Group>
          <Radio.Group size="large" defaultValue="a" variant="outline">
            <Radio.Button value="a">大</Radio.Button>
            <Radio.Button value="b">尺寸</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    </div>
  )
};
