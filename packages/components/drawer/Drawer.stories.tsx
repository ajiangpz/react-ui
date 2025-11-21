import { Meta, StoryObj } from "@storybook/react-vite";
import Drawer from "./index";
import React, { useState } from "react";
import { Button } from "../button";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"]
};

export default meta;
const Scroll = () => {
  return <div style={{ width: "800px", height: "800px" }}></div>;
};

const Header = () => {
  return <h3 style={{ color: "orange" }}> 这是标题</h3>;
};
const BaseDrawer = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible((prev) => !prev)}>Open Drawer</Button>
      <Drawer
        visible={visible}
        onClose={() => setVisible(false)}
        header={Header()}
        showOverlay={true}
        size="small"
        sizeDraggable={{ min: 200, max: 800 }}
        placement="bottom"
      >
        <div>
          <p>Drawer Content</p>
        </div>
      </Drawer>
      <Scroll></Scroll>
    </div>
  );
};

export const Default: StoryObj<typeof Drawer> = {
  args: {},
  render: () => <BaseDrawer></BaseDrawer>
};
