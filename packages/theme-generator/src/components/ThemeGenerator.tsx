import React, { useState, useEffect } from "react";
import Dock from "./Dock/Dock";
import PanelDrawer from "./PanelDrawer/PanelDrawer";
import { applyThemeFromLocal, generateNewTheme, getOptionFromLocal, DEFAULT_THEME } from "../common/Themes";
import "./ThemeGenerator.css";

interface ThemeGeneratorProps {
  device?: string;
  showSetting?: boolean;
}

export default function ThemeGenerator({ device = "web", showSetting = false }: ThemeGeneratorProps) {
  const [visible, setVisible] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const localTheme = getOptionFromLocal("color") ?? DEFAULT_THEME.value;
    generateNewTheme(localTheme, undefined, device);
    applyThemeFromLocal(device);
  }, [device]);

  const handleTriggerVisible = () => {
    setVisible(true);
  };

  const handleDrawerVisible = (v: boolean) => {
    setVisible(v);
  };

  const handleRefreshContent = () => {
    setRefresh(!refresh);
  };

  const handleChangeTheme = (newTheme: typeof theme) => {
    setTheme(newTheme);
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
      <PanelDrawer drawerVisible={visible} refresh={refresh} device={device} />
    </div>
  );
}

