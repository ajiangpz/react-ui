import React from "react";
import { Layout } from "../index";

const { Header, Content, Footer, Aside } = Layout;

// 定义演示用的样式
const demoStyles = {
  header: {
    background: "#001f5c",
    color: "#fff",
    fontSize: "14px",
    lineHeight: "64px",
    textAlign: "center" as const
  },
  aside: {
    background: "#003cab",
    color: "#fff",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    background: "#699ef5",
    color: "#fff",
    fontSize: "14px",
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    background: "#001f5c",
    color: "#fff",
    fontSize: "12px",
    textAlign: "center" as const,
    lineHeight: "48px"
  }
};

const DoubleSidebarLayout = () => (
  <Layout>
    <Aside width="100px" style={demoStyles.aside}>
      Left Aside
    </Aside>
    <Layout>
      <Header style={demoStyles.header}>Header</Header>
      <Content style={demoStyles.content}>Content</Content>
      <Footer style={demoStyles.footer}>Copyright @ 2019-2024 All Rights Reserved</Footer>
    </Layout>
    <Aside width="200px" style={demoStyles.aside}>
      Right Aside
    </Aside>
  </Layout>
);

export default DoubleSidebarLayout;
