import type { Preview } from "@storybook/react-vite";
import { useEffect } from "react";
import './style.css';
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
    }
  }
};

export default preview;
