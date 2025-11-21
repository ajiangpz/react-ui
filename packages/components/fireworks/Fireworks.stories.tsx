import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Fireworks } from "./index";

const meta: Meta<typeof Fireworks> = {
  title: "Components/Fireworks",
  component: Fireworks,
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Fireworks>;

const Playground = (args: React.ComponentProps<typeof Fireworks>) => (
  <div
    style={{
      background: "radial-gradient(circle at 20% 20%, #0b1c2c, #02060d 80%)",
      padding: "32px",
      borderRadius: "16px"
    }}
  >
    <Fireworks {...args} style={{ minHeight: 280 }} />
  </div>
);

export const Default: Story = {
  args: {
    count: 6,
    particleCount: 12
  },
  render: (args) => <Playground {...args} />
};

export const DenseShowcase: Story = {
  args: {
    count: 10,
    particleCount: 18,
    colors: ["#ff7eb3", "#ff758c", "#ffd200", "#9bf6ff", "#a0ffb9"]
  },
  render: (args) => <Playground {...args} />
};
