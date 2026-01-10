import ColorPanel from "../ColorPanel/ColorPanel";
import { Drawer } from "@tendaui/components";
import "./PanelDrawer.scss";

interface PanelDrawerProps {
  drawerVisible: boolean;
  refresh: boolean;
  device?: string;
}

export default function PanelDrawer({ drawerVisible, refresh, device = "web" }: PanelDrawerProps) {
  if (!drawerVisible) return null;

  return (
    <Drawer size="30%">
      <ColorPanel isRefresh={refresh} device={device} />
    </Drawer>
  );
}
