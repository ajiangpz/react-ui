import React, { useState, useEffect } from "react";
import { exportCustomTheme, clearLocalTheme, generateNewTheme, DEFAULT_THEME } from "../../common/Themes";
import "./Dock.css";

interface DockProps {
  onTriggerVisible: () => void;
  onRefreshContent: () => void;
  drawerVisible: boolean;
  showSetting?: boolean;
  device?: string;
}

export default function Dock({
  onTriggerVisible,
  onRefreshContent,
  drawerVisible,
  showSetting = false,
  device = "web"
}: DockProps) {
  const [isCustomizeDrawerVisible, setIsCustomizeDrawerVisible] = useState(false);

  useEffect(() => {
    if (!drawerVisible) {
      setIsCustomizeDrawerVisible(false);
    }
  }, [drawerVisible]);

  const handleClickCustomize = () => {
    onTriggerVisible();
    setIsCustomizeDrawerVisible(true);
  };

  const handleDownload = () => {
    exportCustomTheme(device);
  };

  const handleRecover = () => {
    generateNewTheme(DEFAULT_THEME.value, undefined, device);
    clearLocalTheme();
    onRefreshContent();
  };

  return (
    <div className="theme-generator-dock">
      <div className="theme-generator-dock__operation">
        <div
          className="generator-btn"
          onClick={handleClickCustomize}
          style={{
            width: !isCustomizeDrawerVisible ? "48px" : "216px",
            margin: "0 4px",
            transition: "width 0.3s"
          }}
        >
          <button className="dock-button">
            <span className="dock-icon">🎨</span>
            {isCustomizeDrawerVisible && <span style={{ marginLeft: "8px" }}>主题定制</span>}
          </button>
        </div>

        {(isCustomizeDrawerVisible || drawerVisible) && (
          <>
            <div className="export-btn" onClick={handleDownload} style={{ width: "48px", margin: "0 4px" }}>
              <button className="dock-button">
                <span className="dock-icon">⬇️</span>
              </button>
            </div>
            <div className="recover-btn" style={{ width: "48px", marginLeft: "4px" }}>
              <button className="dock-button" onClick={handleRecover}>
                <span className="dock-icon">↩️</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

