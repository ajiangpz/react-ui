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

const SideNavigationLayout = () => (
  <Layout>
    <Aside style={demoStyles.aside}>Aside</Aside>
    <Layout>
      <Content style={demoStyles.content}>Content</Content>
      <Footer style={demoStyles.footer}>Copyright @ 2019-2024 All Rights Reserved</Footer>
    </Layout>
  </Layout>
);

export default SideNavigationLayout;
