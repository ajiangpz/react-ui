import { Meta, StoryObj } from "@storybook/react-vite";
import { Layout } from "./index";
import "../../components/styles/components/layout/doc.scss";
import React from "react";

const { Header, Content, Footer, Aside } = Layout;

const meta: Meta<typeof Layout> = {
  component: Layout,
  title: "Components/Layout",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "用于页面布局的基础组件，包含 Header、Content、Footer、Aside 子组件。"
      }
    }
  },
  argTypes: {
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "布局方向"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Layout>;

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

/** 顶部导航布局 */
export const TopNavigation: Story = {
  name: "顶部导航布局",
  render: () => (
    <Layout>
      <Header style={demoStyles.header}>Header</Header>
      <Content style={demoStyles.content}>Content</Content>
      <Footer style={demoStyles.footer}>Copyright @ 2019-2024 All Rights Reserved</Footer>
    </Layout>
  )
};

/** 侧边导航布局 */
export const SideNavigation: Story = {
  name: "侧边导航布局",
  render: () => (
    <Layout>
      <Aside style={demoStyles.aside}>Aside</Aside>
      <Layout>
        <Content style={demoStyles.content}>Content</Content>
        <Footer style={demoStyles.footer}>Copyright @ 2019-2024 All Rights Reserved</Footer>
      </Layout>
    </Layout>
  )
};

/** 侧边导航在右侧 */
export const SideNavigationRight: Story = {
  name: "侧边导航布局（右侧）",
  render: () => (
    <Layout>
      <Layout>
        <Content style={demoStyles.content}>Content</Content>
        <Footer style={demoStyles.footer}>Copyright @ 2019-2024 All Rights Reserved</Footer>
      </Layout>
      <Aside style={demoStyles.aside}>Aside</Aside>
    </Layout>
  )
};

/** 顶部 + 侧边组合导航布局（侧边在左） */
export const CombineLeft: Story = {
  name: "组合导航布局（侧边在左）",
  render: () => (
    <Layout>
      <Header style={demoStyles.header}>Header</Header>
      <Layout>
        <Aside style={demoStyles.aside}>Aside</Aside>
        <Layout>
          <Content style={demoStyles.content}>Content</Content>
          <Footer style={demoStyles.footer}>Copyright @ 2019-2024 All Rights Reserved</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
};

/** 顶部 + 侧边组合导航布局（侧边在右） */
export const CombineRight: Story = {
  name: "组合导航布局（侧边在右）",
  render: () => (
    <Layout>
      <Header style={demoStyles.header}>Header</Header>
      <Layout>
        <Layout>
          <Content style={demoStyles.content}>Content</Content>
          <Footer style={demoStyles.footer}>Copyright @ 2019-2024 All Rights Reserved</Footer>
        </Layout>
        <Aside style={demoStyles.aside}>Aside</Aside>
      </Layout>
    </Layout>
  )
};

/** 自定义侧边栏宽度 */
export const CustomAsideWidth: Story = {
  name: "自定义侧边栏宽度",
  render: () => (
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
  )
};

/** 自定义头部和底部高度 */
export const CustomHeight: Story = {
  name: "自定义头部/底部高度",
  render: () => (
    <Layout>
      <Header height="80px" style={demoStyles.header}>
        Header (80px)
      </Header>
      <Content style={demoStyles.content}>Content</Content>
      <Footer height="60px" style={demoStyles.footer}>
        Footer (60px)
      </Footer>
    </Layout>
  )
};

/** 双侧边栏布局 */
export const DoubleSidebar: Story = {
  name: "双侧边栏布局",
  render: () => (
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
  )
};

/** 基础布局示例汇总 */
export const AllLayouts: Story = {
  name: "所有布局模式",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4 style={{ marginBottom: "12px" }}>顶部导航布局</h4>
        <Layout>
          <Header style={demoStyles.header}>Header</Header>
          <Content style={demoStyles.content}>Content</Content>
          <Footer style={demoStyles.footer}>Copyright @ 2019-2024 All Rights Reserved</Footer>
        </Layout>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px" }}>侧边导航布局</h4>
        <Layout>
          <Aside style={demoStyles.aside}>Aside</Aside>
          <Layout>
            <Content style={demoStyles.content}>Content</Content>
            <Footer style={demoStyles.footer}>Copyright @ 2019-2024 All Rights Reserved</Footer>
          </Layout>
        </Layout>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px" }}>组合导航布局（侧边在左）</h4>
        <Layout>
          <Header style={demoStyles.header}>Header</Header>
          <Layout>
            <Aside style={demoStyles.aside}>Aside</Aside>
            <Layout>
              <Content style={demoStyles.content}>Content</Content>
              <Footer style={demoStyles.footer}>Copyright @ 2019-2024 All Rights Reserved</Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px" }}>组合导航布局（侧边在右）</h4>
        <Layout>
          <Header style={demoStyles.header}>Header</Header>
          <Layout>
            <Layout>
              <Content style={demoStyles.content}>Content</Content>
              <Footer style={demoStyles.footer}>Copyright @ 2019-2024 All Rights Reserved</Footer>
            </Layout>
            <Aside style={demoStyles.aside}>Aside</Aside>
          </Layout>
        </Layout>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px" }}>自定义侧边栏宽度 (80px)</h4>
        <Layout>
          <Header style={demoStyles.header}>Header</Header>
          <Layout>
            <Aside width="80px" style={demoStyles.aside}>
              Aside
            </Aside>
            <Layout>
              <Content style={demoStyles.content}>Content</Content>
              <Footer style={demoStyles.footer}>Copyright @ 2019-2024 All Rights Reserved</Footer>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </div>
  )
};
