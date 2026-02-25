import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@tendaui/react/es";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "开关组件用于表示开/关两种状态之间的切换，是一种即时生效的选择控件。"
      }
    }
  },
  argTypes: {
    value: {
      control: "boolean",
      description: "开关值"
    },
    defaultValue: {
      control: "boolean",
      description: "开关值，非受控属性"
    },
    disabled: {
      control: "boolean",
      description: "是否禁用组件"
    },
    loading: {
      control: "boolean",
      description: "是否处于加载中状态"
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "开关尺寸"
    },
    label: {
      control: "object",
      description: "开关内容，[开启时内容，关闭时内容]"
    },
    customValue: {
      control: "object",
      description: "自定义开关的值，[打开时的值，关闭时的值]"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Switch>;

/** 基础用法 */
export const Default: Story = {
  name: "基础用法",
  args: {
    defaultValue: true
  }
};

/** 受控用法 */
export const Controlled: Story = {
  name: "受控用法",
  render: () => {
    const ControlledExample = () => {
      const [checked, setChecked] = useState(true);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Switch value={checked} onChange={(val) => setChecked(val as boolean)} />
          <div style={{ color: "#666" }}>当前状态：{checked ? "开启" : "关闭"}</div>
        </div>
      );
    };
    return <ControlledExample />;
  }
};

/** 不同尺寸 */
export const Sizes: Story = {
  name: "不同尺寸",
  render: () => (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Switch size="small" defaultValue={true} />
        <span style={{ color: "#666", fontSize: "12px" }}>小</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Switch size="medium" defaultValue={true} />
        <span style={{ color: "#666", fontSize: "12px" }}>中（默认）</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Switch size="large" defaultValue={true} />
        <span style={{ color: "#666", fontSize: "12px" }}>大</span>
      </div>
    </div>
  )
};

/** 带文字描述 */
export const WithLabel: Story = {
  name: "带文字描述",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Switch label={["开", "关"]} defaultValue={true} />
        <span style={{ color: "#666" }}>数组形式</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Switch label={["ON", "OFF"]} defaultValue={false} />
        <span style={{ color: "#666" }}>英文标签</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Switch label={["1", "0"]} defaultValue={true} />
        <span style={{ color: "#666" }}>数字标签</span>
      </div>
    </div>
  )
};

/** 禁用状态 */
export const Disabled: Story = {
  name: "禁用状态",
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Switch defaultValue={false} />
        <span style={{ color: "#666", fontSize: "12px" }}>正常关闭</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Switch defaultValue={true} />
        <span style={{ color: "#666", fontSize: "12px" }}>正常开启</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Switch disabled defaultValue={false} />
        <span style={{ color: "#666", fontSize: "12px" }}>禁用关闭</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Switch disabled defaultValue={true} />
        <span style={{ color: "#666", fontSize: "12px" }}>禁用开启</span>
      </div>
    </div>
  )
};

/** 加载状态 */
export const Loading: Story = {
  name: "加载状态",
  render: () => (
    <div style={{ display: "flex", gap: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Switch loading defaultValue={false} />
        <span style={{ color: "#666", fontSize: "12px" }}>加载中（关）</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
        <Switch loading defaultValue={true} />
        <span style={{ color: "#666", fontSize: "12px" }}>加载中（开）</span>
      </div>
    </div>
  )
};

/** 自定义值 */
export const CustomValue: Story = {
  name: "自定义值",
  render: () => {
    const CustomValueExample = () => {
      const [value1, setValue1] = useState<string | number | boolean>(1);
      const [value2, setValue2] = useState<string | number | boolean>("open");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Switch
              customValue={[1, 0]}
              value={value1}
              onChange={(val) => setValue1(val)}
            />
            <span style={{ color: "#666" }}>数字值: {String(value1)}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Switch
              customValue={["open", "close"]}
              value={value2}
              onChange={(val) => setValue2(val)}
            />
            <span style={{ color: "#666" }}>字符串值: {String(value2)}</span>
          </div>
        </div>
      );
    };
    return <CustomValueExample />;
  }
};

/** 异步切换 */
export const AsyncChange: Story = {
  name: "异步切换",
  render: () => {
    const AsyncExample = () => {
      const [checked, setChecked] = useState(false);
      const [loading, setLoading] = useState(false);

      const handleChange = (val: boolean) => {
        setLoading(true);
        // 模拟异步请求
        setTimeout(() => {
          setChecked(val);
          setLoading(false);
        }, 1000);
      };

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Switch
            value={checked}
            loading={loading}
            onChange={(val) => handleChange(val as boolean)}
          />
          <div style={{ color: "#666", fontSize: "12px" }}>
            点击切换，模拟 1 秒异步请求
          </div>
        </div>
      );
    };
    return <AsyncExample />;
  }
};

/** beforeChange 拦截 */
export const BeforeChange: Story = {
  name: "beforeChange 拦截",
  render: () => {
    const BeforeChangeExample = () => {
      const [checked, setChecked] = useState(false);

      const beforeChange = () => {
        return new Promise<boolean>((resolve) => {
          const confirmed = window.confirm("确定要切换状态吗？");
          resolve(confirmed);
        });
      };

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Switch
            value={checked}
            beforeChange={beforeChange}
            onChange={(val) => setChecked(val as boolean)}
          />
          <div style={{ color: "#666", fontSize: "12px" }}>
            切换前会弹出确认框，确认后才会切换
          </div>
        </div>
      );
    };
    return <BeforeChangeExample />;
  }
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>基础状态</h4>
        <div style={{ display: "flex", gap: "24px" }}>
          <Switch defaultValue={false} />
          <Switch defaultValue={true} />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>尺寸</h4>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Switch size="small" defaultValue={true} />
          <Switch size="medium" defaultValue={true} />
          <Switch size="large" defaultValue={true} />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>带文字</h4>
        <div style={{ display: "flex", gap: "24px" }}>
          <Switch label={["开", "关"]} defaultValue={true} />
          <Switch label={["ON", "OFF"]} defaultValue={false} />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>禁用</h4>
        <div style={{ display: "flex", gap: "24px" }}>
          <Switch disabled defaultValue={false} />
          <Switch disabled defaultValue={true} />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>加载中</h4>
        <div style={{ display: "flex", gap: "24px" }}>
          <Switch loading defaultValue={false} />
          <Switch loading defaultValue={true} />
        </div>
      </div>
    </div>
  )
};
