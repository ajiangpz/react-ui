import React, { useState } from "react";
import { Tabs, TabPanel } from "../index";

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

export default RemovableExample;