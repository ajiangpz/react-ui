import { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertDescription, AlertTitle } from "./Alert"
import { AlertCircle, Info as InfoIcon, CheckCircle, AlertTriangle } from "lucide-react"

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive", "success", "warning", "info"],
      description: "提示框的样式变体",
    },
    size: {
      control: "select",
      options: ["sm", "default", "lg"],
      description: "提示框的大小",
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {
  args: {
    icon: <InfoIcon />,
    children: (
      <>
        <AlertTitle>默认提示</AlertTitle>
        <AlertDescription>
          这是一个默认样式的提示信息。
        </AlertDescription>
      </>
    ),  
  },
}

export const Success: Story = {
  args: {
    variant: "success",
    icon: <CheckCircle />,
    children: (
      <>
        <AlertTitle>成功提示</AlertTitle>
        <AlertDescription>
          操作已成功完成。
        </AlertDescription>
      </>
    ),
  },
}

export const Warning: Story = {
  args: {
    variant: "warning",
    icon: <AlertTriangle />,
    children: (
      <>
        <AlertTitle>警告提示</AlertTitle>
        <AlertDescription>
          请注意，此操作可能有风险。
        </AlertDescription>
      </>
    ),
  },
}

export const InfoAlert: Story = {
  args: {
    variant: "info",
    icon: <InfoIcon />,
    children: (
      <>
        <AlertTitle>信息提示</AlertTitle>
        <AlertDescription>
          这是一条重要信息。
        </AlertDescription>
      </>
    ),
  },
}

export const Destructive: Story = {
  args: {
    variant: "destructive",
    icon: <AlertCircle />,
    children: (
      <>
        <AlertTitle>错误提示</AlertTitle>
        <AlertDescription>
          这是一个错误样式的提示信息。
        </AlertDescription>
      </>
    ),
  },
}

export const Small: Story = {
  args: {
    size: "sm",
    icon: <InfoIcon />,
    children: (
      <>
        <AlertTitle>小尺寸提示</AlertTitle>
        <AlertDescription>
          这是一个小尺寸的提示框。
        </AlertDescription>
      </>
    ),
  },
}

export const Large: Story = {
  args: {
    size: "lg",
    icon: <InfoIcon />,
    children: (
      <>
        <AlertTitle>大尺寸提示</AlertTitle>
        <AlertDescription>
          这是一个大尺寸的提示框，适合展示更多的内容。
        </AlertDescription>
      </>
    ),
  },
}
