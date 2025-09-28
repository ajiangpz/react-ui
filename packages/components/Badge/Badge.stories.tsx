import { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, Button } from "tendaui-react/es/index";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Badge>;


function BadgeExample() {
  return (
    <>
      <Badge
        count={100}
        shape="circle"
        size="medium"
      >
        <Button>
          按钮
        </Button>
      </Badge>
    </>
  );
}

// 基础示例
export const Default: Story = {
  args: {
    children: <Button size="large">aa</Button>,
    dot: true,
    count: 2
  },
  render: () => <BadgeExample></BadgeExample>
};


function CustomExample() {
  const badgeBlockStyle = {
    width: '40px',
    height: '40px',
    background: '#EEEEEE',
    border: '1px solid #DCDCDC',
    borderRadius: '3px',
  };

  return (<div className="flex gap-8">

    <Badge count="2" dot>
      <div style={badgeBlockStyle}></div>
    </Badge>
    <Badge count="hot">
      <div style={badgeBlockStyle}></div>
    </Badge>
    <Badge count="new" color="var(--td-success-color)">
      <div style={badgeBlockStyle}></div>
    </Badge>
    <Badge count="100" color="var(--td-warning-color)" shape="round">
      <div style={badgeBlockStyle}></div>
    </Badge>
  </div>)
}

// 基础示例
export const Custom: Story = {

  render: () => <CustomExample></CustomExample>
};
