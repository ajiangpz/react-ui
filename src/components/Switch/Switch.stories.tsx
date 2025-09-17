import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./index";
import "@/style";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"]
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};
