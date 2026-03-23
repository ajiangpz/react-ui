import React from "react";
import { Layout } from "../index";

const { Header, Content, Footer } = Layout;

// 定义演示用的样式
const demoStyles = {
  header: {
    background: "var(--td-brand-color-9)",
    color: "var(--td-text-color-anti)",
    fontSize: "14px",
    lineHeight: "64px",
    textAlign: "center" as const
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

const CustomHeightLayout = () => (
  <Layout>
    <Header height="80px" style={demoStyles.header}>
      Header (80px)
    </Header>
    <Content style={demoStyles.content}>Content</Content>
    <Footer height="60px" style={demoStyles.footer}>
      Footer (60px)
    </Footer>
  </Layout>
);

export default CustomHeightLayout;
