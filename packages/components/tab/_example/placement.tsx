import React, { useState } from "react";
import { Tabs, TabPanel } from "../index";

const PlacementExample = () => {
  const [placement, setPlacement] = useState<"top" | "bottom" | "left" | "right">('top');
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

export default PlacementExample;