import { Meta, StoryObj } from "@storybook/react-vite";
import { Layout } from "./index";

import "../../components/styles/components/layout/doc.scss";
const { Header, Content, Footer, Aside } = Layout;
import React from "react";
const meta: Meta<typeof Layout> = {
  component: Layout,
  title: "Components/Layout",
  tags: ["autodocs"]
};

export default meta;

export const Default: StoryObj<typeof Layout> = {
  render: () => (
    <Layout>
      <Aside>Aside</Aside>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Copyright </Footer>
      </Layout>
      {/* <Aside>Aside</Aside> */}
    </Layout>
  )
};
