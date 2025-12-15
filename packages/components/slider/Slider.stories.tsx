import type { Meta, StoryObj } from "@storybook/react-vite";

import { Slider, SliderProps, SliderValue } from "./index";
import React, { useState } from "react";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  argTypes: {}
};

export default meta;

type Story = StoryObj<typeof Slider>;

const BaseSlider = (args: SliderProps) => {
  const [value, setValue] = useState<number>(10);
  const [rangeValue, setRangeValue] = useState<number[]>([10, 80]);

  return (
    <>
      <Slider<number>
        {...args}
        label={({ value }) => `${value}%`}
        style={{ marginBottom: 50 }}
        value={value}
        onChange={setValue}
      ></Slider>
      <Slider<number[]> {...args} value={rangeValue} onChange={setRangeValue} range></Slider>
    </>
  );
};
// 基础用法
export const Basic: Story = {
  render: (args) => <BaseSlider {...args} />
};

const InputNumberVerticalSlider = (args: SliderProps) => {
  const [value, setValue] = useState<SliderValue>(10);
  const [rangeValue, setRangeValue] = useState<SliderValue>([10, 80]);

  const inputNumberProps: SliderProps["inputNumberProps"] = { theme: "row" };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ height: 300, marginRight: 100 }}>
        <Slider
          {...args}
          inputNumberProps={inputNumberProps}
          layout="vertical"
          style={{ marginBottom: 50 }}
          value={value}
          onChange={setValue}
        ></Slider>
      </div>
      <div style={{ height: 300 }}>
        <Slider
          {...args}
          inputNumberProps={inputNumberProps}
          layout="vertical"
          value={rangeValue}
          onChange={setRangeValue}
          range
        ></Slider>
      </div>
    </div>
  );
};

export const InputNumberVertical: Story = {
  render: (args) => <InputNumberVerticalSlider {...args} />
};
