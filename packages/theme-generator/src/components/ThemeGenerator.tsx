import { useState, useEffect } from "react";
import Dock from "./Dock/Dock";
import { Drawer } from "@tendaui/components";
import { applyThemeFromLocal, generateNewTheme, getOptionFromLocal, DEFAULT_THEME } from "../common/Themes";
import "./ThemeGenerator.css";
import SwitchTabs from "../common/switch-tabs";
import ColorPanel from "./ColorPanel/ColorPanel";
import RadiusPanel from "./radius-panel";
import FontPanel from "./font-panel";
import ShadowPanel from "./shadow-panel";
interface ThemeGeneratorProps {
  device?: string;
  showSetting?: boolean;
}

const activeTabMap: Record<string, number> = {
  color: 0,
  font: 1,
  radius: 2,
  shadow: 3,
  size: 4
};

export default function ThemeGenerator({ device = "web", showSetting = false }: ThemeGeneratorProps) {
  const [activeTabIdx, setActiveTabIdx] = useState<number>(activeTabMap.color);
  const [visible, setVisible] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const localTheme = getOptionFromLocal("color") ?? DEFAULT_THEME.value;
    generateNewTheme(localTheme, undefined, device);
    applyThemeFromLocal(device);
  }, [device]);

  const handleTriggerVisible = () => {
    setVisible(true);
  };

  const handleRefreshContent = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="theme-generator">
      <Dock
        onTriggerVisible={handleTriggerVisible}
        onRefreshContent={handleRefreshContent}
        drawerVisible={visible}
        showSetting={showSetting}
        device={device}
      />
      <Drawer
        size="348px"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        onConfirm={() => setVisible(false)}
        footer={false}
        closeOnOverlayClick={true}
      >
        <div style={{ display: "flex", paddingTop: "8px" }}>
          <SwitchTabs activeTabIdx={activeTabIdx} onChangeActiveTab={setActiveTabIdx}></SwitchTabs>
          {activeTabIdx === activeTabMap.radius ? (
            <RadiusPanel isRefresh={refresh} top={8} />
          ) : activeTabIdx === activeTabMap.font ? (
            <FontPanel isRefresh={refresh} top={8} device={device} />
          ) : activeTabIdx === activeTabMap.shadow ? (
            <ShadowPanel top={8} />
          ) : (
            <ColorPanel isRefresh={refresh} device={device} />
          )}
        </div>
      </Drawer>
    </div>
  );
}
