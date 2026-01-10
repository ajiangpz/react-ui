import { Button, DialogPlugin } from "@tendaui/components";
import { IconSetting, IconDownload, IconRefresh } from "@tendaui/icons";
import { useRef } from "react";
import { clearLocalTheme, DEFAULT_THEME, exportCustomTheme, generateNewTheme } from "../../common/Themes";
import { handleAttach } from "../../common/utils";
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
 * - 主题还原：当抽屉打开时显示还原按钮，可还原为默认主题并清除所有自定义配置
 */
export default function Dock({
  onTriggerVisible,
  onRefreshContent,
  drawerVisible,
  device = "web",
  onDownloadSuccess
}: DockProps) {
  const generatorBtnRef = useRef<HTMLDivElement>(null);

  /**
   * 计算生成器按钮的宽度
   * 当抽屉打开时显示图标，宽度为 48px
   * 当抽屉关闭时显示文字，宽度为 216px
   */
  const getGeneratorBtnWidth = () => {
    return drawerVisible ? "252px" : "140px";
  };

  /**
   * 处理鼠标离开事件
   * 添加动画类以实现平滑的渐变色背景动画
   */
  const handleMouseLeave = () => {
    if (generatorBtnRef.current) {
      generatorBtnRef.current.classList.add("is-mouseleave");
      setTimeout(() => {
        generatorBtnRef.current?.classList.remove("is-mouseleave");
      }, 500);
    }
  };

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

  /**
   * 处理主题还原
   * 还原为默认主题并清除本地自定义配置
   */
  const handleRecover = () => {
    const dialogInstance = DialogPlugin.confirm({
      header: "确认还原",
      body: "确定要还原为默认主题吗？此操作将清除所有自定义配置。",
      confirmBtn: "确定",
      cancelBtn: "取消",
      onConfirm: ({ e: _e }) => {
        // 先清除所有自定义配置（包括 localStorage 和 DOM 样式表）
        // 并重置为默认值（字体、圆角等）
        clearLocalTheme(true);
        // 然后重新生成默认主题
        generateNewTheme(DEFAULT_THEME.value, false, device);
        // 触发内容刷新事件
        onRefreshContent();
        // 关闭对话框
        dialogInstance.hide();
      },
      onClose: ({ trigger: _trigger }) => {
        // 统一处理所有关闭情况（取消、关闭按钮、遮罩层、ESC键）
        dialogInstance.hide();
      },
      attach: handleAttach
    });
  };

  return (
    <div className="theme-generator-dock">
      <div
        className="theme-generator-dock__operation"
        style={{
          width: getGeneratorBtnWidth(),
          marginRight: "4px",
          transition: "width 0.3s"
        }}
      >
        <div ref={generatorBtnRef} className="generator-btn" onMouseLeave={handleMouseLeave}>
          <Button variant="outline" size="large" onClick={handleClickCustomize} icon={<IconSetting />}>
            主题定制
          </Button>
        </div>
        {drawerVisible && (
          <>
            <div
              className="export-btn"
              style={{
                width: "48px",
                margin: "0 4px",
                transition: "opacity 0.3s, width 0.3s"
              }}
            >
              <Button variant="outline" shape="square" size="large" onClick={handleDownload} icon={<IconDownload />} />
            </div>
            <div
              className="recover-btn"
              style={{
                width: "48px",
                marginLeft: "4px",
                transition: "opacity 0.3s, width 0.3s"
              }}
            >
              <Button variant="outline" shape="square" size="large" onClick={handleRecover} icon={<IconRefresh />} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
