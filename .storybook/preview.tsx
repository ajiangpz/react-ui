import type { Preview } from "@storybook/react-vite";
import { useEffect } from "react";
import "../src/styles/globals.css";
import "../src/styles/rillple.css";
import "../src/styles/themes.css";
import React from "react";
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Theme for the app",
    defaultValue: "blue",
    toolbar: {
      icon: "circlehollow",
      items: ["blue", "green", "orange"],
      showName: true,
    },
  },
};

const ThemeDecorator = (Story: any, context: any) => {
  const { theme } = context.globals;

  // 设置 <body> 的 class
  useEffect(() => {
    document.body.classList.remove("theme-blue", "theme-green", "theme-orange");
    document.body.classList.add("theme-" + theme);
  }, [theme]);

  return <Story />;
};

const preview: Preview = {
  decorators: [ThemeDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
