import { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "tendaui-react/es";

import { useState } from "react";
import { Select as TSelect } from "tdesign-react";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  args: {},
  tags: ["autodocs"],
};

export default meta;

const SingleSelect = ({ ...args }) => {
  const [value, setValue] = useState("");
  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Select
      value={value}
      onChange={onChange}
      style={{ width: "40%" }}
      clearable
      options={[
        { label: "架构云", value: "1", title: "架构云选项" },
        { label: "大数据", value: "2" },
        { label: "区块链", value: "3" },
        { label: "物联网", value: "4", disabled: true },
        {
          label: "人工智能",
          value: "5",
        },
      ]}
      {...args}
    />
  );
};
type Story = StoryObj<typeof Select>;
export const Default: Story = {
  args: {},
  render: ({ ...args }) => <SingleSelect {...args}></SingleSelect>,
};

const options1 = [
  { label: "全选", checkAll: true },
  { label: "架构云", value: "1" },
  { label: "大数据", value: "2" },
  { label: "区块链", value: "3" },
  { label: "物联网", value: "4", disabled: true },
  { label: "人工智能", value: "5", content: <span>人工智能（新）</span> },
  {
    label: "计算场景",
    value: "6",
  },
];

const MultiSelect = () => {
  const [value, setValue] = useState(["3", "5"]);
  const handleChange = (v: string[]) => {
    setValue(v);
  };
  return (
    <Select
      value={value}
      onChange={handleChange}
      filterable
      multiple
      options={options1}
      onRemove={(options) => {
        console.log("onRemove", options);
      }}
    />
  );
};

const TMultiSelect = () => {
  const [value, setValue] = useState(["3", "5"]);
  const handleChange = (v: string[]) => {
    console.log(v);
    setValue(v);
  };
  return (
    <TSelect
      value={value}
      onChange={handleChange}
      filterable
      multiple
      options={options1}
      onRemove={(options) => {
        console.log("onRemove", options);
      }}
    />
  );
};

export const MultiSelectExample: Story = {
  args: {},
  render: ({ ...args }) => <MultiSelect {...args}></MultiSelect>,
};

export const TMultiSelectExample: Story = {
  args: {},
  render: ({ ...args }) => <TMultiSelect {...args}></TMultiSelect>,
};
