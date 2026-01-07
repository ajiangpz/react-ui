// import { useState, useEffect } from "react";
// import { exportCustomTheme, clearLocalTheme, generateNewTheme, DEFAULT_THEME } from "../../common/Themes";
import { Button } from "@tendaui/components";
import { IconSetting } from "@tendaui/icons";
import "./Dock.css";

interface DockProps {
  onTriggerVisible: () => void;
  onRefreshContent: () => void;
  drawerVisible: boolean;
  showSetting?: boolean;
  device?: string;
}

export default function Dock({ onTriggerVisible, drawerVisible }: DockProps) {
  // const [isCustomizeDrawerVisible, setIsCustomizeDrawerVisible] = useState(false);

  // useEffect(() => {
  //   if (!drawerVisible) {
  //     setIsCustomizeDrawerVisible(false);
  //   }
  // }, [drawerVisible]);

  const handleClickCustomize = () => {
    if (!drawerVisible) onTriggerVisible();
    // setIsCustomizeDrawerVisible(true);
  };

  // const handleDownload = () => {
  //   exportCustomTheme(device);
  // };

  // const handleRecover = () => {
  //   generateNewTheme(DEFAULT_THEME.value, undefined, device);
  //   clearLocalTheme();
  //   onRefreshContent();
  // };

  return (
    <div className="theme-generator-dock">
      <Button variant="outline" shape="round" onClick={handleClickCustomize} icon={<IconSetting></IconSetting>}>
        主题定制
      </Button>
    </div>
  );
}
