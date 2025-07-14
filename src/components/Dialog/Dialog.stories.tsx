import type { Meta, StoryObj } from "@storybook/react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
} from "./Dialog";
import { button } from "../Button/Button";

interface DialogStoryProps {
  variant?: "default" | "warning" | "confirmation";
  title?: string;
  description?: string;
  triggerText?: string;
  confirmText?: string;
  cancelText?: string;
}

const meta = {
  title: "Components/Dialog",
  component: AlertDialog,
  tags: ["autodocs"]
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<DialogStoryProps>;

export const Default: Story = {
  args: {
    variant: "default",
    title: "确认操作",
    description: "请确认是否要执行此操作？",
    triggerText: "打开对话框",
    confirmText: "确认",
    cancelText: "取消"
  },
  render: args => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className={button({ variant: "solid" })}>
          {args.triggerText}
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{args.title}</AlertDialogTitle>
          <AlertDialogDescription>{args.description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{args.cancelText}</AlertDialogCancel>
          <AlertDialogAction>
            {args.confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
};
