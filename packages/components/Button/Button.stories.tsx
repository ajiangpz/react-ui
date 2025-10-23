import { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "tendaui-react/es/index";
import { IconBackward, IconFastFoward, IconPlay } from "tendaui-react-icons";
import React from "react";
const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "按钮",
    loading: false,
  },
};
const IconBackwardinCmp = <IconBackward></IconBackward>;
const IconFastFowardCmp = <IconFastFoward></IconFastFoward>;
const IconPlayCmp = <IconPlay></IconPlay>;
export const ButtonWithIcon: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Button icon={IconBackwardinCmp}></Button>
      <Button icon={IconPlayCmp}></Button>
      <Button icon={IconFastFowardCmp}></Button>
    </div>
  ),
};
