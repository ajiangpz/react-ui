import { Button } from "@tendaui/components";
import { IconSetting, IconDownload } from "@tendaui/icons";
import { exportCustomTheme } from "../../common/Themes";
import "./Dock.scss";

interface DockProps {
  onTriggerVisible: () => void;
  onRefreshContent: () => void;
  drawerVisible: boolean;
  showSetting?: boolean;
  device?: string;
  /**
   * 下载成功后的回调函数（可选）
   * 可以用于显示通知或其他自定义行为
   */
  onDownloadSuccess?: () => void;
}

/**
 * Dock 组件 - 主题生成器的底部操作栏
 *
 * 功能：
 * - 主题定制：打开/关闭主题定制抽屉
 * - 主题下载：当抽屉打开时显示下载按钮，可下载当前主题 CSS 文件
 */
export default function Dock({ onTriggerVisible, drawerVisible, device = "web", onDownloadSuccess }: DockProps) {
  const handleClickCustomize = () => {
    if (!drawerVisible) {
      onTriggerVisible();
    }
  };

  /**
   * 处理主题下载
   * 导出当前自定义主题为 CSS 文件
   */
  const handleDownload = () => {
    try {
      exportCustomTheme(device);
      // 如果提供了回调函数，则调用它（可以用于显示通知等）
      onDownloadSuccess?.();
    } catch (error) {
      console.error("主题下载失败:", error);
      // 可以在这里添加错误提示
    }
  };

  return (
    <div className="theme-generator-dock">
      <div className="theme-generator-dock__operation">
        <div className="generator-btn">
          <Button variant="outline" shape="square" size="large" onClick={handleClickCustomize} icon={<IconSetting />}>
            {!drawerVisible && "主题定制"}
          </Button>
        </div>
        {drawerVisible && (
          <div className="export-btn" style={{ width: "48px", margin: "0 4px" }}>
            <Button variant="outline" shape="square" size="large" onClick={handleDownload} icon={<IconDownload />} />
          </div>
        )}
      </div>
    </div>
  );
}
