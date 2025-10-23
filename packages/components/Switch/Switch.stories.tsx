import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "tendaui-react/es";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"]
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {}
};
