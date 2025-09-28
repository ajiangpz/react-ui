import { Meta, StoryObj } from "@storybook/react"
import { Alert } from "../../tendaui-react/es/alert";
const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"]
}

export default meta
type Story = StoryObj<typeof Alert>
const Base = () =>
  <div >
    <Alert theme="success" message="这是一条成功的消息提示" />
    <Alert theme="info" message="这是一条普通的消息提示" />
    <Alert theme="warning" message="这是一条警示消息" />
    <Alert theme="error" message="高危操作/出错信息提示" />
  </div>
export const Default: Story = {
  args: {},
  render: () => <Base></Base>
}

const Collapse = () => {
  const message = [
    '1.这是一条普通的消息提示描述，',
    '2.这是一条普通的消息提示描述，',
    '3.这是一条普通的消息提示描述，',
    '4.这是一条普通的消息提示描述，',
    '5.这是一条普通的消息提示描述，',
  ];
  return <Alert message={message} maxLine={2} closeBtn />;
}

export const CollapseExample = () => <Collapse></Collapse>