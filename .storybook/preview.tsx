import type { Preview } from "@storybook/react-vite";
import React, { useEffect } from "react";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Theme for the app",
    defaultValue: "default",
    toolbar: {
      icon: "circlehollow",
      items: ["default", "blue", "green"],
      showName: true
    }
  },
  mode: {
    name: "Mode",
    description: "Mode for the app",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
      showName: true
    }
  }
};

const ThemeDecorator = (Story: any, context: any) => {
  const { theme } = context.globals;
  const { mode } = context.globals;

  // 设置 <body> 的 class
  useEffect(() => {
    document.body.classList.remove("theme-blue", "theme-green", "theme-orange");
    document.body.classList.add("theme-" + theme);
    document.body.classList.remove("light", "dark");
    document.body.classList.add(mode);
  }, [theme, mode]);

  return <Story />;
};

const preview: Preview = {
  decorators: [ThemeDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      toc: true, // 显示目录
      source: {
        language: "tsx",
        type: "auto"
      }
    },
    options: {
      storySort: {
        order: ["文档", ["组件库介绍", "快速开始", "设计规范", "贡献指南"], "组件", "Components"]
      }
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: { width: "375px", height: "667px" },
          type: "mobile"
        },
        tablet: {
          name: "Tablet",
          styles: { width: "768px", height: "1024px" },
          type: "tablet"
        },
        desktop: {
          name: "Desktop",
          styles: { width: "1440px", height: "900px" },
          type: "desktop"
        }
      }
    }
  }
};

export default preview;
