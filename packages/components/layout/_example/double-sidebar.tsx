import React from "react";
import { Layout } from "../index";

const { Header, Content, Footer, Aside } = Layout;

// 定义演示用的样式
const demoStyles = {
  header: {
    background: "var(--td-brand-color-9)",
    color: "var(--td-text-color-anti)",
    fontSize: "14px",
    lineHeight: "64px",
    textAlign: "center" as const
  },
  aside: {
    background: "var(--td-brand-color-8)",
    color: "var(--td-text-color-anti)",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    background: "var(--td-brand-color-5)",
    color: "var(--td-text-color-anti)",
    fontSize: "14px",
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  footer: {
    background: "var(--td-brand-color-9)",
    color: "var(--td-text-color-anti)",
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
