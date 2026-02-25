import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider, SliderProps, SliderValue } from "./index";
import React, { useState } from "react";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "滑块组件用于在一定范围内选择特定值，支持单滑块和双滑块（范围选择）模式。"
      }
    }
  },
  argTypes: {
    value: {
      control: "number",
      description: "滑块值"
    },
    min: {
      control: "number",
      description: "滑块范围最小值"
    },
    max: {
      control: "number",
      description: "滑块范围最大值"
    },
    step: {
      control: "number",
      description: "步长"
    },
    disabled: {
      control: "boolean",
      description: "是否禁用组件"
    },
    range: {
      control: "boolean",
      description: "双游标滑块"
    },
    layout: {
      control: "select",
      options: ["horizontal", "vertical"],
      description: "滑块布局方向"
    },
    label: {
      control: "boolean",
      description: "滑块当前值文本"
    },
    inputNumberProps: {
      control: "boolean",
      description: "数字输入框组件"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Slider>;

/** 基础用法 */
export const Basic: Story = {
  name: "基础用法",
  render: (args) => {
    const BasicExample = () => {
      const [value, setValue] = useState<number>(30);
  return (
        <div style={{ width: "400px", padding: "20px 0" }}>
          <Slider
        {...args}
            value={value}
            onChange={(val) => setValue(val as number)}
        label={({ value }) => `${value}%`}
          />
          <div style={{ marginTop: "16px", color: "#666" }}>当前值：{value}</div>
        </div>
      );
    };
    return <BasicExample />;
  }
};

/** 范围选择 */
export const Range: Story = {
  name: "范围选择",
  render: () => {
    const RangeExample = () => {
      const [value, setValue] = useState<number[]>([20, 70]);
      return (
        <div style={{ width: "400px", padding: "20px 0" }}>
          <Slider value={value} onChange={(val) => setValue(val as number[])} range />
          <div style={{ marginTop: "16px", color: "#666" }}>
            当前范围：{value[0]} - {value[1]}
          </div>
        </div>
  );
};
    return <RangeExample />;
  }
};

/** 带数字输入框 */
export const WithInputNumber: Story = {
  name: "带数字输入框",
  render: () => {
    const WithInputExample = () => {
      const [value1, setValue1] = useState<number>(50);
      const [value2, setValue2] = useState<number[]>([20, 80]);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          <div style={{ width: "500px" }}>
            <div style={{ marginBottom: "8px", color: "#666" }}>单滑块 + 数字输入框</div>
            <Slider value={value1} onChange={(val) => setValue1(val as number)} inputNumberProps={true} />
          </div>
          <div style={{ width: "500px" }}>
            <div style={{ marginBottom: "8px", color: "#666" }}>范围滑块 + 数字输入框</div>
            <Slider value={value2} onChange={(val) => setValue2(val as number[])} range inputNumberProps={true} />
          </div>
        </div>
      );
    };
    return <WithInputExample />;
  }
};

/** 步长设置 */
export const Step: Story = {
  name: "步长设置",
  render: () => {
    const StepExample = () => {
      const [value, setValue] = useState<number>(30);
      return (
        <div style={{ width: "400px", padding: "20px 0" }}>
          <Slider value={value} onChange={(val) => setValue(val as number)} step={10} label />
          <div style={{ marginTop: "16px", color: "#666" }}>步长为 10，当前值：{value}</div>
        </div>
      );
    };
    return <StepExample />;
  }
};

/** 刻度标记 */
export const Marks: Story = {
  name: "刻度标记",
  render: () => {
    const MarksExample = () => {
      const [value1, setValue1] = useState<number>(30);
      const [value2, setValue2] = useState<number>(50);
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          <div style={{ width: "400px" }}>
            <div style={{ marginBottom: "8px", color: "#666" }}>数组形式刻度</div>
            <Slider value={value1} onChange={(val) => setValue1(val as number)} marks={[0, 25, 50, 75, 100]} />
          </div>
          <div style={{ width: "400px" }}>
            <div style={{ marginBottom: "8px", color: "#666" }}>对象形式刻度（自定义文案）</div>
            <Slider
              value={value2}
              onChange={(val) => setValue2(val as number)}
              marks={{
                0: "低",
                25: "中低",
                50: "中",
                75: "中高",
                100: "高"
              }}
            />
          </div>
        </div>
      );
    };
    return <MarksExample />;
  }
};

/** 垂直布局 */
export const Vertical: Story = {
  name: "垂直布局",
  render: () => {
    const VerticalExample = () => {
      const [value, setValue] = useState<SliderValue>(40);
      const [rangeValue, setRangeValue] = useState<SliderValue>([20, 70]);

  return (
        <div style={{ display: "flex", gap: "80px", padding: "20px" }}>
          <div style={{ height: "250px" }}>
            <div style={{ marginBottom: "8px", color: "#666" }}>单滑块</div>
            <Slider value={value} onChange={setValue} layout="vertical" />
          </div>
          <div style={{ height: "250px" }}>
            <div style={{ marginBottom: "8px", color: "#666" }}>范围滑块</div>
            <Slider value={rangeValue} onChange={setRangeValue} layout="vertical" range />
          </div>
          <div style={{ height: "250px" }}>
            <div style={{ marginBottom: "8px", color: "#666" }}>带输入框</div>
        <Slider
          value={value}
          onChange={setValue}
              layout="vertical"
              inputNumberProps={{ theme: "row" }}
            />
          </div>
        </div>
      );
    };
    return <VerticalExample />;
  }
};

/** 禁用状态 */
export const Disabled: Story = {
  name: "禁用状态",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <div style={{ width: "400px" }}>
        <div style={{ marginBottom: "8px", color: "#666" }}>正常</div>
        <Slider defaultValue={50} />
      </div>
      <div style={{ width: "400px" }}>
        <div style={{ marginBottom: "8px", color: "#666" }}>禁用</div>
        <Slider defaultValue={50} disabled />
      </div>
    </div>
  )
};

/** 自定义标签 */
export const CustomLabel: Story = {
  name: "自定义标签",
  render: () => {
    const CustomLabelExample = () => {
      const [value, setValue] = useState<number>(50);
      return (
        <div style={{ width: "400px", padding: "20px 0" }}>
          <Slider
            value={value}
            onChange={(val) => setValue(val as number)}
            label={({ value, position }) => (
              <span style={{ color: position === "start" ? "blue" : "green" }}>{value}%</span>
            )}
          />
    </div>
  );
};
    return <CustomLabelExample />;
  }
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
      <div style={{ width: "400px" }}>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>基础滑块</h4>
        <Slider defaultValue={30} />
      </div>

      <div style={{ width: "400px" }}>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>范围选择</h4>
        <Slider defaultValue={[20, 60]} range />
      </div>

      <div style={{ width: "500px" }}>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>带数字输入框</h4>
        <Slider defaultValue={50} inputNumberProps={true} />
      </div>

      <div style={{ width: "400px" }}>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>刻度标记</h4>
        <Slider defaultValue={50} marks={[0, 25, 50, 75, 100]} />
      </div>

      <div style={{ width: "400px" }}>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>禁用状态</h4>
        <Slider defaultValue={50} disabled />
      </div>

      <div style={{ display: "flex", gap: "60px" }}>
        <div style={{ height: "200px" }}>
          <h4 style={{ marginBottom: "12px", color: "#666" }}>垂直布局</h4>
          <Slider defaultValue={50} layout="vertical" />
        </div>
        <div style={{ height: "200px" }}>
          <h4 style={{ marginBottom: "12px", color: "#666" }}>垂直范围</h4>
          <Slider defaultValue={[30, 70]} layout="vertical" range />
        </div>
      </div>
    </div>
  )
};
