import React, { useState } from "react";
import { Tabs, TabPanel } from "../index";

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

export default DisabledExample;