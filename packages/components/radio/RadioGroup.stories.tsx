import { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, Radio } from "./index";
import React, { useState } from "react";
const meta: Meta<typeof RadioGroup> = {
  tags: ["autodocs"],
  title: "Components/RadioGroup",
  component: RadioGroup,
  args: {}
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const BaseComponent = (args) => {
  const [value, setValue] = useState("bj");
  return (
    <RadioGroup {...args} theme="button" value={value} onChange={(value) => setValue(value.toString())}>
      <Radio value="bj">北京</Radio>
      <Radio value="sh">上海</Radio>
      <Radio value="gz">广州</Radio>
      <Radio value="sz">深圳</Radio>
    </RadioGroup>
  );
};

export const Default: Story = {
  args: {},
  render: ({ ...args }) => {
    return <BaseComponent {...args}></BaseComponent>;
  }
};

let itemOptions = ["北京", "上海", "广州", "深圳"];

type ValueType = "北京" | "上海" | "广州" | "深圳";

const RadioButtonComponent = () => {
  const [city3, setCity3] = useState<ValueType>("深圳");
  return (
    <Radio.Group
      variant="primary-filled"
      theme="button"
      value={city3}
      options={itemOptions}
      onChange={(val: ValueType) => setCity3(val)}
    />
  );
};

export const ButtonExample: Story = {
  args: {},
  render: () => <RadioButtonComponent></RadioButtonComponent>
};
