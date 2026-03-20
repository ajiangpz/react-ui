import React, { useState } from "react";
import { Tabs, TabPanel } from "../index";

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

export default DefaultExample;