import React, { useMemo, useState, useLayoutEffect } from "react";
import classNames from "classnames";
import ColorSvg from "./ColorSvg";
import FontSvg from "./FontSvg";
import RadiusSvg from "./RadiusSvg";
import BoxshadowSvg from "./BoxshadowSvg";
import SizeSvg from "./SizeSvg";
import { getOptionFromLocal, DEFAULT_THEME } from "../themes";
import "./SwitchTabs.scss";

interface TabItem {
  title: string;
  image: React.ComponentType<{ color?: string }>;
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

// 获取当前品牌色的辅助函数
const getBrandColor = () => {
  // 优先从 CSS 变量获取
  const cssColor = window.getComputedStyle(document.documentElement).getPropertyValue("--td-brand-color").trim();

  if (cssColor) {
    return cssColor;
  }

  // 从 localStorage 获取
  const localColor = getOptionFromLocal("color");
  if (localColor) {
    return localColor;
  }

  // 使用默认值
  return DEFAULT_THEME.value;
};

export default function SwitchTabs({ activeTabIdx, device, onChangeActiveTab }: SwitchTabsProps) {
  const lang = useMemo(() => getLang(), []);
  const [brandColor, setBrandColor] = useState<string>(() => getBrandColor());

  // 监听主题变化
  useLayoutEffect(() => {
    const observer = new MutationObserver(() => {
      setBrandColor(getBrandColor());
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["style", "theme-color", "theme-mode"]
    });

    return () => observer.disconnect();
  }, []);

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
                <ImageComponent color={brandColor} />
              </div>
              <p>{tab.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
