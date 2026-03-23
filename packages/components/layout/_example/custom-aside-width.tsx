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

const CustomAsideWidthLayout = () => (
  <Layout>
    <Header style={demoStyles.header}>Header</Header>
    <Layout>
      <Aside width="80px" style={demoStyles.aside}>
        Aside (80px)
      </Aside>
      <Layout>
        <Content style={demoStyles.content}>Content</Content>
        <Footer style={demoStyles.footer}>Copyright @ 2019-2024 All Rights Reserved</Footer>
      </Layout>
    </Layout>
  </Layout>
);

export default CustomAsideWidthLayout;
