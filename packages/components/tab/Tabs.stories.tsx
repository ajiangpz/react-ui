import { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabPanel } from "./index";
import React from "react";
const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const Base = () => {
  const [activeTab, setActiveTab] = React.useState("tab1");

  const handleTabChange = (value: string | number) => {
    setActiveTab(value as string);
  };

  return (
    <Tabs value={activeTab} onChange={handleTabChange}>
      <TabPanel label="Tab 1" value="tab1" removable>
        1
      </TabPanel>
      <TabPanel label="Tab 2" value="tab2" disabled>
        2
      </TabPanel>
      <TabPanel label="Tab 3" value="tab3">
        3
      </TabPanel>
    </Tabs>
  );
};

export const Default: Story = {
  render: () => <Base />,
  args: {
    value: "tab1"
  }
};
