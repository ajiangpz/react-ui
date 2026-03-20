import React, { useState } from "react";
import { Tabs, TabPanel } from "../index";

const LazyExample = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      <div style={{ marginBottom: "8px", color: "#666" }}>懒加载模式下，只有在选项卡被激活时才会渲染内容</div>
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

export default LazyExample;