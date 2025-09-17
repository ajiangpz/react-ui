import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";
import { Button as TButton } from "tdesign-react";
import '@/style';

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

export const TButtonExample: Story = {
  args: {},
  render: () => <TButton variant="outline">TButton</TButton>
}



