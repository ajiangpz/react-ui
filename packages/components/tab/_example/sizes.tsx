import React from "react";
import { Tabs, TabPanel } from "../index";

const SizesExample = () => (
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
);

export default SizesExample;