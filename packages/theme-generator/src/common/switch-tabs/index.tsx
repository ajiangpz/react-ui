import React, { useMemo } from "react";
import classNames from "classnames";
import ColorSvg from "./ColorSvg";
import FontSvg from "./FontSvg";
import RadiusSvg from "./RadiusSvg";
import BoxshadowSvg from "./BoxshadowSvg";
import SizeSvg from "./SizeSvg";
import "./SwitchTabs.css";

interface TabItem {
  title: string;
  image: React.ComponentType;
}

interface SwitchTabsProps {
  activeTabIdx: number;
  device?: string;
  onChangeActiveTab?: (idx: number) => void;
}

// 简单的 i18n 处理
const getLang = () => {
  const isEn = window.location.pathname.endsWith("en");
  return isEn
    ? {
        color: { title: "Color" },
        font: { title: "Font" },
        borerRadius: { title: "Border Radius" },
        shadow: { title: "Shadow" },
        size: { title: "Size" }
      }
    : {
        color: { title: "色彩" },
        font: { title: "字体" },
        borerRadius: { title: "圆角" },
        shadow: { title: "阴影" },
        size: { title: "尺寸" }
      };
};

// 判断是否为移动端
const isMobile = (device?: string) => {
  return device === "mobile" || device === "pad";
};

export default function SwitchTabs({ activeTabIdx, device, onChangeActiveTab }: SwitchTabsProps) {
  const lang = useMemo(() => getLang(), []);

  const tabs: TabItem[] = useMemo(() => {
    const text = lang;
    return [
      {
        title: text.color.title,
        image: ColorSvg
      },
      {
        title: text.font.title,
        image: FontSvg
      },
      {
        title: text.borerRadius.title,
        image: RadiusSvg
      },
      {
        title: text.shadow.title,
        image: BoxshadowSvg
      },
      {
        title: text.size.title,
        image: SizeSvg
      }
    ];
  }, [lang]);

  const filteredTabs = useMemo(() => {
    // 移动端不显示尺寸配置
    return isMobile(device) ? tabs.filter((tab) => tab.title !== lang.size.title) : tabs;
  }, [tabs, device, lang.size.title]);

  const handleClickPanel = (idx: number) => {
    onChangeActiveTab?.(idx);
  };

  return (
    <div className="switch-tabs">
      <div className="switch-tabs__panel">
        <div className="border" style={{ top: `${activeTabIdx * 88}px` }}></div>
        {filteredTabs.map((tab, index) => {
          const ImageComponent = tab.image;
          return (
            <div
              key={index}
              className={classNames("switch-tabs__panel-content", {
                "switch-tabs__panel-content--active": index === activeTabIdx
              })}
              onClick={() => handleClickPanel(index)}
            >
              <div>
                <ImageComponent />
              </div>
              <p>{tab.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
