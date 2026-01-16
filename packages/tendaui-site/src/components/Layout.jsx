import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout as TLayout, Button } from "@tendaui/components";
import { IconSun, IconMoon } from "@tendaui/icons";
import siteConfig from "../../site.config.mjs";
import "./Layout.scss";

export default function Layout({ children }) {
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

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <TLayout>
      <TLayout.Aside width="240px" className="tdesign-site-aside">
        <div className="tdesign-site-header">
          <div className="tdesign-site-brand">
            <h1 className="tdesign-site-brand-title">TendaUI</h1>
          </div>
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
        </div>
        <nav className="tdesign-site-nav">
          {siteConfig.docs.map((group) => (
            <div key={group.title} className="tdesign-site-nav-group">
              <h3 className="tdesign-site-nav-group-title">{group.title}</h3>
              <ul className="tdesign-site-nav-list">
                {group.children?.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`tdesign-site-nav-item ${location.pathname === item.path ? "active" : ""}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </TLayout.Aside>
      <TLayout.Content className="tdesign-site-main">{children}</TLayout.Content>
    </TLayout>
  );
}
