import { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "tendaui-react/es/index";

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
    loading: false
  }
};



