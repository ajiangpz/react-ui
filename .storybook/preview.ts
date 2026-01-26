import React from "react";
import type { Preview } from "@storybook/react-vite";
import { ConfigProvider } from "../packages/components/config-provider";
import type { GlobalConfigProvider } from "../packages/components/config-provider/type";
import zhCN from "../packages/components/global-config/locale/zh_CN";
import enUS from "../packages/components/global-config/locale/en_US";
import "../packages/components/style/index"; // 引入组件库的样式
import "./style.css";

const locales: Record<string, GlobalConfigProvider> = {
  zh_CN: zhCN as unknown as GlobalConfigProvider,
  en_US: enUS as unknown as GlobalConfigProvider
};

const preview: Preview = {
  globalTypes: {
    locale: {
      name: "Locale",
      description: "UI locale",
      defaultValue: "zh_CN",
      toolbar: {
        icon: "globe",
        items: [
          { value: "zh_CN", title: "中文" },
          { value: "en_US", title: "English" }
        ],
        showName: true
      }
    }
  },
  decorators: [
    (Story, context) => {
      const locale = locales[context.globals.locale as keyof typeof locales] ?? zhCN;
      return React.createElement(ConfigProvider, {
        globalConfig: locale,
        children: React.createElement(Story)
      });
    }
  ],
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
