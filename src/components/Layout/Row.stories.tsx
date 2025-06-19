import type { Meta, StoryObj } from "@storybook/react";
import { Row } from "./Row";
import { Col } from "./Col";

const meta: Meta<typeof Row> = {
  title: "Layout/Row",
  component: Row,
  tags: ["autodocs"],
  decorators: [Story => <Story />]
};

export default meta;
type Story = StoryObj<typeof Row>;

export const Basic: Story = {
  args: {
    gutter: [16, 16],
    children: [
      <Col span={24} sm={12} md={6} lg={3}>
        <div className="bg-blue-500 p-4 text-center h-16"></div>
      </Col>,
      <Col span={24} sm={12} md={6} lg={3}>
        <div className="bg-green-500 p-4 text-center h-16"></div>
      </Col>,
      <Col span={24} sm={12} md={6} lg={3}>
        <div className="bg-yellow-500 p-4 text-center h-16"></div>
      </Col>,
      <Col span={24} sm={12} md={6} lg={3}>
        <div className="bg-red-500 p-4 text-center h-16"></div>
      </Col>,
      <Col span={24} sm={12} md={6} lg={3}>
        <div className="bg-blue-500 p-4 text-center h-16"></div>
      </Col>,
      <Col span={24} sm={12} md={6} lg={3}>
        <div className="bg-green-500 p-4 text-center h-16"></div>
      </Col>,
      <Col span={24} sm={12} md={6} lg={3}>
        <div className="bg-yellow-500 p-4 text-center h-16"></div>
      </Col>,
      <Col span={24} sm={12} md={6} lg={3}>
        <div className="bg-red-500 p-4 text-center h-16"></div>
      </Col>
    ]
  }
};
