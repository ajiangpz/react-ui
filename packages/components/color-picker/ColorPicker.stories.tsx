import { Meta, StoryObj } from "@storybook/react-vite";
import ColorPicker from "./index";
import React, { useState } from "react";
const meta: Meta<typeof ColorPicker> = {
  tags: ["autodocs"],
  title: "Components/ColorPicker",
  component: ColorPicker
};
export default meta;

function ColorMode(...args) {
  const [color, setColor] = useState("red");
  return (
    <>
      <div>
        <ColorPicker
          format="HSLA"
          {...args}
          value={color}
          onChange={(v) => {
            console.log(v);
            setColor(v);
          }}
        />
      </div>
    </>
  );
}

export const Default: StoryObj<typeof ColorPicker> = {
  render: (...args) => <ColorMode {...args}></ColorMode>
};
