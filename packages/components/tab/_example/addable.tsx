import React, { useState } from "react";
import { Tabs, TabPanel } from "../index";

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

export default AddableExample;