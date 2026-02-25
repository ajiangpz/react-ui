import { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabPanel } from "./index";
import React, { useState } from "react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "选项卡组件用于内容分类后的展示切换，支持卡片风格、可添加删除等功能。"
      }
    }
  },
  argTypes: {
    value: {
      control: "text",
      description: "激活的选项卡值"
    },
    defaultValue: {
      control: "text",
      description: "激活的选项卡值，非受控属性"
    },
    disabled: {
      control: "boolean",
      description: "是否禁用选项卡"
    },
    addable: {
      control: "boolean",
      description: "选项卡是否可增加"
    },
    dragSort: {
      control: "boolean",
      description: "是否开启拖拽调整顺序"
    },
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "选项卡位置"
    },
    scrollPosition: {
      control: "select",
      options: ["auto", "start", "center", "end"],
      description: "选中滑块滚动最终停留的位置"
    },
    size: {
      control: "select",
      options: ["medium", "large"],
      description: "组件尺寸"
    },
    theme: {
      control: "select",
      options: ["normal", "card"],
      description: "选项卡风格"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Tabs>;

/** 基础用法 */
export const Default: Story = {
  name: "基础用法",
  render: () => {
    const DefaultExample = () => {
      const [activeTab, setActiveTab] = useState("tab1");

      return (
        <Tabs value={activeTab} onChange={(val) => setActiveTab(val as string)}>
          <TabPanel label="选项卡一" value="tab1">
            <div style={{ padding: "16px" }}>选项卡一的内容</div>
          </TabPanel>
          <TabPanel label="选项卡二" value="tab2">
            <div style={{ padding: "16px" }}>选项卡二的内容</div>
          </TabPanel>
          <TabPanel label="选项卡三" value="tab3">
            <div style={{ padding: "16px" }}>选项卡三的内容</div>
          </TabPanel>
        </Tabs>
      );
    };
    return <DefaultExample />;
  }
};

/** 卡片风格 */
export const CardTheme: Story = {
  name: "卡片风格",
  render: () => {
    const CardExample = () => {
      const [activeTab, setActiveTab] = useState("tab1");

      return (
        <Tabs value={activeTab} onChange={(val) => setActiveTab(val as string)} theme="card">
          <TabPanel label="选项卡一" value="tab1">
            <div style={{ padding: "16px" }}>卡片风格 - 选项卡一的内容</div>
          </TabPanel>
          <TabPanel label="选项卡二" value="tab2">
            <div style={{ padding: "16px" }}>卡片风格 - 选项卡二的内容</div>
          </TabPanel>
          <TabPanel label="选项卡三" value="tab3">
            <div style={{ padding: "16px" }}>卡片风格 - 选项卡三的内容</div>
          </TabPanel>
        </Tabs>
      );
    };
    return <CardExample />;
  }
};

/** 不同位置 */
export const Placement: Story = {
  name: "不同位置",
  render: () => {
    const PlacementExample = () => {
      const [placement, setPlacement] = useState<"top" | "bottom" | "left" | "right">("top");
      const [activeTab, setActiveTab] = useState("tab1");

      return (
        <div>
          <div style={{ marginBottom: "16px" }}>
            <span style={{ marginRight: "8px" }}>选项卡位置：</span>
            <select value={placement} onChange={(e) => setPlacement(e.target.value as any)}>
              <option value="top">顶部</option>
              <option value="bottom">底部</option>
              <option value="left">左侧</option>
              <option value="right">右侧</option>
            </select>
          </div>
          <div style={{ height: "200px", border: "1px solid #eee" }}>
            <Tabs value={activeTab} onChange={(val) => setActiveTab(val as string)} placement={placement}>
              <TabPanel label="选项卡一" value="tab1">
                <div style={{ padding: "16px" }}>选项卡一的内容</div>
              </TabPanel>
              <TabPanel label="选项卡二" value="tab2">
                <div style={{ padding: "16px" }}>选项卡二的内容</div>
              </TabPanel>
              <TabPanel label="选项卡三" value="tab3">
                <div style={{ padding: "16px" }}>选项卡三的内容</div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      );
    };
    return <PlacementExample />;
  }
};

/** 可删除选项卡 */
export const Removable: Story = {
  name: "可删除选项卡",
  render: () => {
    const RemovableExample = () => {
      const [activeTab, setActiveTab] = useState("tab1");
      const [tabs, setTabs] = useState([
        { label: "选项卡一", value: "tab1" },
        { label: "选项卡二", value: "tab2" },
        { label: "选项卡三", value: "tab3" }
      ]);

      const handleRemove = (options: { value: string | number; index: number }) => {
        const newTabs = tabs.filter((tab) => tab.value !== options.value);
        setTabs(newTabs);
        if (activeTab === options.value && newTabs.length > 0) {
          setActiveTab(newTabs[0].value);
        }
      };

      return (
        <Tabs value={activeTab} onChange={(val) => setActiveTab(val as string)} onRemove={handleRemove}>
          {tabs.map((tab) => (
            <TabPanel key={tab.value} label={tab.label} value={tab.value} removable>
              <div style={{ padding: "16px" }}>{tab.label} 的内容</div>
            </TabPanel>
          ))}
        </Tabs>
      );
    };
    return <RemovableExample />;
  }
};

/** 可添加选项卡 */
export const Addable: Story = {
  name: "可添加选项卡",
  render: () => {
    const AddableExample = () => {
      const [activeTab, setActiveTab] = useState("tab1");
      const [tabs, setTabs] = useState([
        { label: "选项卡一", value: "tab1" },
        { label: "选项卡二", value: "tab2" }
      ]);
      const [tabCount, setTabCount] = useState(2);

      const handleAdd = () => {
        const newTabValue = `tab${tabCount + 1}`;
        const newTab = { label: `选项卡${tabCount + 1}`, value: newTabValue };
        setTabs([...tabs, newTab]);
        setTabCount(tabCount + 1);
        setActiveTab(newTabValue);
      };

      const handleRemove = (options: { value: string | number; index: number }) => {
        const newTabs = tabs.filter((tab) => tab.value !== options.value);
        setTabs(newTabs);
        if (activeTab === options.value && newTabs.length > 0) {
          setActiveTab(newTabs[0].value);
        }
      };

      return (
        <Tabs
          value={activeTab}
          onChange={(val) => setActiveTab(val as string)}
          addable
          onAdd={handleAdd}
          onRemove={handleRemove}
        >
          {tabs.map((tab) => (
            <TabPanel key={tab.value} label={tab.label} value={tab.value} removable>
              <div style={{ padding: "16px" }}>{tab.label} 的内容</div>
            </TabPanel>
          ))}
        </Tabs>
      );
    };
    return <AddableExample />;
  }
};

/** 禁用状态 */
export const Disabled: Story = {
  name: "禁用状态",
  render: () => {
    const DisabledExample = () => {
      const [activeTab, setActiveTab] = useState("tab1");

      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div>
            <div style={{ marginBottom: "8px", color: "#666" }}>部分禁用</div>
            <Tabs value={activeTab} onChange={(val) => setActiveTab(val as string)}>
              <TabPanel label="选项卡一" value="tab1">
                <div style={{ padding: "16px" }}>选项卡一的内容</div>
              </TabPanel>
              <TabPanel label="选项卡二（禁用）" value="tab2" disabled>
                <div style={{ padding: "16px" }}>选项卡二的内容</div>
              </TabPanel>
              <TabPanel label="选项卡三" value="tab3">
                <div style={{ padding: "16px" }}>选项卡三的内容</div>
              </TabPanel>
            </Tabs>
          </div>
          <div>
            <div style={{ marginBottom: "8px", color: "#666" }}>全部禁用</div>
            <Tabs value="tab1" disabled>
              <TabPanel label="选项卡一" value="tab1">
                <div style={{ padding: "16px" }}>选项卡一的内容</div>
              </TabPanel>
              <TabPanel label="选项卡二" value="tab2">
                <div style={{ padding: "16px" }}>选项卡二的内容</div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      );
    };
    return <DisabledExample />;
  }
};

/** 不同尺寸 */
export const Sizes: Story = {
  name: "不同尺寸",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>中尺寸（默认）</div>
        <Tabs defaultValue="tab1" size="medium">
          <TabPanel label="选项卡一" value="tab1">
            <div style={{ padding: "16px" }}>中尺寸内容</div>
          </TabPanel>
          <TabPanel label="选项卡二" value="tab2">
            <div style={{ padding: "16px" }}>中尺寸内容</div>
          </TabPanel>
        </Tabs>
      </div>
      <div>
        <div style={{ marginBottom: "8px", color: "#666" }}>大尺寸</div>
        <Tabs defaultValue="tab1" size="large">
          <TabPanel label="选项卡一" value="tab1">
            <div style={{ padding: "16px" }}>大尺寸内容</div>
          </TabPanel>
          <TabPanel label="选项卡二" value="tab2">
            <div style={{ padding: "16px" }}>大尺寸内容</div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
};

/** 带操作区域 */
export const WithAction: Story = {
  name: "带操作区域",
  render: () => {
    const WithActionExample = () => {
      const [activeTab, setActiveTab] = useState("tab1");

      return (
        <Tabs
          value={activeTab}
          onChange={(val) => setActiveTab(val as string)}
          action={
            <button style={{ marginRight: "8px", cursor: "pointer" }}>操作按钮</button>
          }
        >
          <TabPanel label="选项卡一" value="tab1">
            <div style={{ padding: "16px" }}>选项卡一的内容</div>
          </TabPanel>
          <TabPanel label="选项卡二" value="tab2">
            <div style={{ padding: "16px" }}>选项卡二的内容</div>
          </TabPanel>
          <TabPanel label="选项卡三" value="tab3">
            <div style={{ padding: "16px" }}>选项卡三的内容</div>
          </TabPanel>
        </Tabs>
      );
    };
    return <WithActionExample />;
  }
};

/** 懒加载 */
export const Lazy: Story = {
  name: "懒加载",
  render: () => {
    const LazyExample = () => {
      const [activeTab, setActiveTab] = useState("tab1");

      return (
        <div>
          <div style={{ marginBottom: "8px", color: "#666" }}>
            懒加载模式下，只有在选项卡被激活时才会渲染内容
          </div>
          <Tabs value={activeTab} onChange={(val) => setActiveTab(val as string)}>
            <TabPanel label="选项卡一" value="tab1" lazy>
              <div style={{ padding: "16px" }}>选项卡一的内容（懒加载）</div>
            </TabPanel>
            <TabPanel label="选项卡二" value="tab2" lazy>
              <div style={{ padding: "16px" }}>选项卡二的内容（懒加载）</div>
            </TabPanel>
            <TabPanel label="选项卡三" value="tab3" lazy>
              <div style={{ padding: "16px" }}>选项卡三的内容（懒加载）</div>
            </TabPanel>
          </Tabs>
        </div>
      );
    };
    return <LazyExample />;
  }
};

/** 所有属性汇总 */
export const AllVariants: Story = {
  name: "所有属性汇总",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>默认风格</h4>
        <Tabs defaultValue="tab1">
          <TabPanel label="选项卡一" value="tab1">
            <div style={{ padding: "16px" }}>内容一</div>
          </TabPanel>
          <TabPanel label="选项卡二" value="tab2">
            <div style={{ padding: "16px" }}>内容二</div>
          </TabPanel>
        </Tabs>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>卡片风格</h4>
        <Tabs defaultValue="tab1" theme="card">
          <TabPanel label="选项卡一" value="tab1">
            <div style={{ padding: "16px" }}>内容一</div>
          </TabPanel>
          <TabPanel label="选项卡二" value="tab2">
            <div style={{ padding: "16px" }}>内容二</div>
          </TabPanel>
        </Tabs>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", color: "#666" }}>禁用状态</h4>
        <Tabs defaultValue="tab1">
          <TabPanel label="正常" value="tab1">
            <div style={{ padding: "16px" }}>内容一</div>
          </TabPanel>
          <TabPanel label="禁用" value="tab2" disabled>
            <div style={{ padding: "16px" }}>内容二</div>
          </TabPanel>
        </Tabs>
      </div>

      <div style={{ height: "150px", border: "1px solid #eee" }}>
        <h4 style={{ marginBottom: "12px", color: "#666", padding: "8px" }}>左侧位置</h4>
        <Tabs defaultValue="tab1" placement="left">
          <TabPanel label="选项一" value="tab1">
            <div style={{ padding: "16px" }}>内容一</div>
          </TabPanel>
          <TabPanel label="选项二" value="tab2">
            <div style={{ padding: "16px" }}>内容二</div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
};
