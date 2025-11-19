import React from "react";
import ColorPanel from "../ColorPanel/ColorPanel";
import "./PanelDrawer.css";

interface PanelDrawerProps {
  drawerVisible: boolean;
  refresh: boolean;
  device?: string;
}

export default function PanelDrawer({ drawerVisible, refresh, device = "web" }: PanelDrawerProps) {
  if (!drawerVisible) return null;

  return (
    <div className="panel-drawer">
      <div className="panel-drawer__content">
        <ColorPanel isRefresh={refresh} device={device} />
      </div>
    </div>
  );
}

