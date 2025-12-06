import { useState, useEffect } from "react";
import Dock from "./Dock/Dock";
import ColorPanel from "./ColorPanel/ColorPanel";
import { Drawer } from "@tendaui/components";
import { applyThemeFromLocal, generateNewTheme, getOptionFromLocal, DEFAULT_THEME } from "../common/Themes";
import "./ThemeGenerator.css";

interface ThemeGeneratorProps {
  device?: string;
  showSetting?: boolean;
}

export default function ThemeGenerator({ device = "web", showSetting = false }: ThemeGeneratorProps) {
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
        size="311px"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        onConfirm={() => setVisible(false)}
      >
        <ColorPanel isRefresh={refresh} device={device} />
      </Drawer>
    </div>
  );
}
