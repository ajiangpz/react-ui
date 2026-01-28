import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout as TLayout, Button, ConfigProvider, Select } from "../../../components";
import { IconSun, IconMoon } from "../../../tendaui-icons/src/index";
import zhCN from "../../../components/global-config/locale/zh_CN";
import enUS from "../../../components/global-config/locale/en_US";
import zhTW from "../../../components/global-config/locale/zh_TW";
import jaJP from "../../../components/global-config/locale/ja_JP";
import koKR from "../../../components/global-config/locale/ko_KR";
import ruRU from "../../../components/global-config/locale/ru_RU";
import itIT from "../../../components/global-config/locale/it_IT";
import arKW from "../../../components/global-config/locale/ar_KW";
import siteConfig from "../../site.config.mjs";
import { toggleThemeWithTransition } from "../utils/viewTransition";
import "./Layout.scss";

export default function Layout({ children, lang = "zh", onLangChange }) {
  const location = useLocation();
  const [isDark, setIsDark] = useState(() => {
    // 从 localStorage 读取保存的主题偏好
    const savedTheme = localStorage.getItem("theme-mode");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // 检查系统偏好
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [direction, setDirection] = useState(() => {
    const savedDirection = localStorage.getItem("dir");
    if (savedDirection === "rtl" || savedDirection === "ltr") {
      return savedDirection;
    }
    return document.documentElement.getAttribute("dir") || "ltr";
  });
  const localeConfig = useMemo(() => {
    const map = {
      zh_CN: zhCN,
      zh_TW: zhTW,
      en_US: enUS,
      ja_JP: jaJP,
      ko_KR: koKR,
      ru_RU: ruRU,
      it_IT: itIT,
      ar_KW: arKW
    };
    return map[lang] || zhCN;
  }, [lang]);

  useEffect(() => {
    // 更新 document 的 theme-mode 属性
    if (isDark) {
      document.documentElement.setAttribute("theme-mode", "dark");
      localStorage.setItem("theme-mode", "dark");
    } else {
      document.documentElement.setAttribute("theme-mode", "light");
      localStorage.setItem("theme-mode", "light");
    }
  }, [isDark]);

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
    document.body.setAttribute("dir", direction);
    localStorage.setItem("dir", direction);
  }, [direction]);

  const toggleTheme = (event) => {
    const newIsDark = !isDark;
    toggleThemeWithTransition(
      event,
      () => {
        // 在 ViewTransition 的回调中同步更新 DOM 和状态
        // 这样 ViewTransition 可以正确捕获 DOM 变化
        if (newIsDark) {
          document.documentElement.setAttribute("theme-mode", "dark");
          localStorage.setItem("theme-mode", "dark");
        } else {
          document.documentElement.setAttribute("theme-mode", "light");
          localStorage.setItem("theme-mode", "light");
        }
        setIsDark(newIsDark);
      },
      newIsDark
    ); // 传入新的主题状态，用于确定动画方向
  };

  const toggleDirection = () => {
    setDirection((prev) => (prev === "rtl" ? "ltr" : "rtl"));
  };

  const localeOptions = useMemo(
    () => [
      { value: "zh_CN", label: "简体中文" },
      { value: "zh_TW", label: "繁體中文" },
      { value: "en_US", label: "English" },
      { value: "ja_JP", label: "日本語" },
      { value: "ko_KR", label: "한국어" },
      { value: "ru_RU", label: "Русский" },
      { value: "it_IT", label: "Italiano" },
      { value: "ar_KW", label: "العربية" }
    ],
    []
  );

  return (
    <ConfigProvider globalConfig={{ ...localeConfig, direction }}>
      <TLayout className="tdesign-site-layout">
        <TLayout.Aside width="240px" className="tdesign-site-aside">
          <div className="tdesign-site-aside-header">
            <h1 className="tdesign-site-brand-title">TendaUI</h1>
          </div>
          <nav className="tdesign-site-nav">
            {siteConfig.docs.map((group) => (
              <div key={group.title} className="tdesign-site-nav-group">
                <h3 className="tdesign-site-nav-group-title">
                  {lang === "en_US" && group.titleEn ? group.titleEn : group.title}
                </h3>
                <ul className="tdesign-site-nav-list">
                  {group.children?.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className={`tdesign-site-nav-item ${location.pathname === item.path ? "active" : ""}`}
                      >
                        {lang === "en_US" && item.titleEn ? item.titleEn : item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </TLayout.Aside>
        <TLayout className="tdesign-site-content">
          <TLayout.Header className="tdesign-site-header">
            <div className="tdesign-site-tools">
              <Button
                variant="text"
                theme="default"
                onClick={toggleTheme}
                className="tdesign-site-theme-toggle"
                title={isDark ? "切换到浅色模式" : "切换到暗色模式"}
                aria-label={isDark ? "切换到浅色模式" : "切换到暗色模式"}
              >
                {isDark ? <IconSun size="large" /> : <IconMoon size="large" />}
              </Button>
              <Button
                variant="text"
                theme="default"
                onClick={toggleDirection}
                className="tdesign-site-theme-toggle"
                title={direction === "rtl" ? "切换到 LTR" : "切换到 RTL"}
                aria-label={direction === "rtl" ? "切换到 LTR" : "切换到 RTL"}
              >
                {direction.toUpperCase()}
              </Button>
              <Select
                value={lang}
                onChange={(value) => onLangChange?.(value)}
                className="tdesign-site-theme-toggle"
                options={localeOptions}
                style={{ width: "120px" }}
              />
            </div>
          </TLayout.Header>
          <TLayout.Content className="tdesign-site-main">{children}</TLayout.Content>
        </TLayout>
      </TLayout>
    </ConfigProvider>
  );
}
